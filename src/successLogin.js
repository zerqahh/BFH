

import { useStore } from 'easy-peasy';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header.js";
import Bflag from "./Bflag.js";
import Footer from "./footer.js";
import Loader from './Loader';
import supabase from "./supabase.js";




function Success() {
    const navigate = useNavigate();
    const store = useStore();
    const user = store.getState().user.user;
    const setUser = store.getActions().user.setUser;
    const [showGoHome, setShowGoHome] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    // Zaktualizuj dane użytkownika w magazynie EasyPeasy i localStorage (avatar i nickname osoby zalogowanej)
    useEffect(() => {
        setUser(user);
        localStorage.setItem('nickname', user.nickname);
        localStorage.setItem('avatar', user.avatar);
    }, [setUser, user]);

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
            }, 350);
        }
        getUserData();

    }, []);

    // Jeżeli dane użytkownika są ładowane, wyświetl komponent Loader
    if (!isLoaded) {
        return <Loader />;
    }



    // Renderowanie komponentu Success
    return (

        <div className="Success">
            {Object.keys(user).length !== 0 ? (
                <>
                    <Header />
                    <Bflag />
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