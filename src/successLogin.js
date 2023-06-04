
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header.js";
import Bflag from "./Bflag.js";
import Footer from "./footer.js";
import Loader from './Loader';
import supabase from "./supabase.js";






function Success() {
    // Inicjalizacja stanów używanych w komponencie
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [showGoHome, setShowGoHome] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);



    //Przelaczanie profilu uzytkownika
    const toggleProfileVisibility = () => {
        setIsProfileVisible(prevState => !prevState);
    };


    // Pobranie danych użytkownika z supabase.auth.getUser()
    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    setUser(value.data.user)
                    setShowGoHome(false);

                } else {
                    setShowGoHome(true);
                }

            });

            setTimeout(() => {
                setIsLoaded(true); // Ustawienie stanu isLoaded na true po opóźnieniu
            }, 330);
        }
        getUserData();

    }, []);

    // Jeżeli dane użytkownika są ładowane, wyświetl komponent Loader
    if (!isLoaded) {
        return <Loader />;
    }

    // Funkcja wylogowania użytkownika
    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    // Renderowanie komponentu Success
    return (

        <div className="Success">
            {Object.keys(user).length !== 0 ? (
                <>
                    <Header user={user} onLogout={signOutUser} toggleProfileVisibility={toggleProfileVisibility} />
                    <Bflag user={user} isProfileVisible={isProfileVisible} toggleProfileVisibility={toggleProfileVisibility} />
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