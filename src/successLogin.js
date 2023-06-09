import { useStore } from 'easy-peasy';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header.js";
import Bflag from "./Bflag.js";
import Footer from "./footer.js";
import Loader from './Loader';
import supabase from "./supabase.js";
import FormPopup from './FormPopup.js';

function Success() {
    const navigate = useNavigate();
    const store = useStore();
    const user = store.getState().user.user;
    const setUser = store.getActions().user.setUser;
    const [showGoHome, setShowGoHome] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);// Dodaj nowy stan


    useEffect(() => {
        setUser(user);
        localStorage.setItem('nickname', user.nickname);
        localStorage.setItem('avatar', user.avatar);
    }, [setUser, user]);

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
                setIsLoaded(true);
            }, 350);
        }
        getUserData()
        nameChecker();;
    }, []);

    if (!isLoaded) {
        return <Loader />;
    }


    ///////// FORMULARZ DODAWANIA USERNAME ORAZ AVATAR
    async function handleFormSubmit(username, avatar) {
        const { data: { session } } = await supabase.auth.getSession();

        if (session && session.user) {
            const userUid = session.user.id;
            const { data, error } = await supabase
                .from('users')
                .update({ username, avatar })
                .match({ discord_user_id: userUid });

            if (error) {

                return null;
            }


            setIsFormSubmitted(true);
        }
    }

    async function nameChecker() {
        const { data, error } = await supabase.from('users').select('username, discord_user_id, avatar');

        if (error !== null) {
            console.log('Błąd pobierania danych:', error);
            return;
        }
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
            const userUid = session.user.id;
            const userData = data.find(item => item.discord_user_id === userUid);

            if (userData && userData.username === null) {
                setIsFormSubmitted(false);
            } else if (userData && userData.username !== null) {
                setIsFormSubmitted(true);
            }

            if (userData) {
                store.getActions().user.setUser({
                    nickname: userData.username,
                    avatar: userData.avatar,
                });
            }
        }
    }

    return (
        <div className="Success">
            {Object.keys(user).length !== 0 ? (
                <>
                    {!isFormSubmitted && (
                        <FormPopup onSave={handleFormSubmit} />
                    )}
                    <Header />
                    <Bflag />
                    <Footer />
                </>
            ) : showGoHome ? (
                <>
                    <h1>You are not logged in</h1>
                    <button onClick={() => { navigate("/") }}>Go home!</button>
                </>
            ) : null}
        </div>
    );
}

export default Success;