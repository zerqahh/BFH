import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import supabase from './supabase';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import "./App.scss";
import "./FriendProfile.scss";
import "./Bflag.scss"
import Header from './Header';
import Footer from './footer';
import "./MyProfileWindow.scss"
import MyProfileWindow from './MyProfileWindow';


function FriendProfile() {
    const { friendId } = useParams();
    const friends = useStoreState((state) => state.friends.friends);
    const friend = friends.find((friend) => friend.id.toString() === friendId);
    const setFriends = useStoreActions((actions) => actions.friends.setFriends);
    const isProfileVisible = useStoreState((state) => state.profile.isProfileVisible);

    const fetchFriends = async () => {
        try {
            // Pobranie danych znajomych
            const { data, error } = await supabase.from('users').select('avatar, username, id').order('username');
            if (error) throw error;
            setFriends(data);
        } catch (error) {
            console.log('Błąd podczas pobierania danych o znajomych:', error.message);
        }
    };

    useEffect(() => {
        // Sprawdzenie, czy dane znajomych zostały pobrane
        if (friends.length === 0) {
            // Dane znajomych nie zostały jeszcze pobrane, wykonaj odpowiednie działania, np. pobierz dane
            fetchFriends();
        }
    }, [friends.length, fetchFriends]);
    if (!friend) {
        return <p>Loading...</p>;
    }

    return (

        <>
            <Header />
            <section className="main-container">
                <div className="main-content">
                    <LeftSidebar />

                    {isProfileVisible ? (
                        <MyProfileWindow />
                    ) : (
                        <div className='profile-container scale-up-ver-top   '>
                            <div className='profile-avatar-and-description'>
                                <div className='profile-avatar-container'>
                                    <div className='profile-avatar'> <img src={friend.avatar} alt="Friend Avatar" /></div>
                                </div>
                                <div className="profile-description-container">
                                    <div className='profile-description-content'>
                                        <div className='profile-membership'>
                                            <h6>MEMBER OF</h6>
                                            <div className='profile-group'>
                                                <div className='profile-group-logo'></div>
                                                <h5>2023 5v5 mix by zerq </h5>
                                            </div>

                                            <div className='profile-group'>
                                                <div className='profile-group-logo'></div>
                                                <h5>Mischief Managed</h5>
                                            </div>
                                            <div className='profile-group'>
                                                <div className='profile-group-logo'></div>
                                                <h5>Blitz</h5>
                                            </div>
                                        </div>
                                        <div className='profile-skillcheck'>
                                            <h6>SKILLCHECK</h6>
                                            <div className='profile-skillcheck-container'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="profile-data-container">

                                <div className='profile-data-content'>
                                    <div className='profile-nickname'>
                                        <><h1>{friend.username}</h1></>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )}

                    <RightSidebar />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default FriendProfile;
