
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header.js";
import Bflag from "./Bflag.js";
import Footer from "./footer.js";
import Loader from './Loader';
import supabase from "./supabase.js";






function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [showGoHome, setShowGoHome] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // value.data.user
                if (value.data?.user) {

                    setUser(value.data.user)
                    setShowGoHome(false);
                } else {
                    setShowGoHome(true);
                }

            });

            setTimeout(() => {
                setIsLoaded(true); // Ustawienie stanu isLoaded na true po opóźnieniu
            }, 300);
        }
        getUserData();

    }, []);

    if (!isLoaded) {
        return <Loader />;
    }

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (

        <div className="Success">
            {Object.keys(user).length !== 0 ? (
                <>
                    <Header user={user} onLogout={signOutUser} />
                    <Bflag user={user} />
                    <Footer />
                </>
            ) : showGoHome ? (
                <>
                    <h1>U are not logged in</h1>
                    <button onClick={() => { navigate("/") }}>Go home!</button>
                </>
            ) : null}

        </div>
    );
}

export default Success