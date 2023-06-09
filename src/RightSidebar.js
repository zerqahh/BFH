import React, { useState, useEffect } from 'react';
import supabase from "./supabase.js";
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

function RightSidebar() {
    const friends = useStoreState((state) => state.friends.friends);
    const setFriends = useStoreActions((actions) => actions.friends.setFriends);
    const setProfileVisibilityFalse = useStoreActions(actions => actions.profile.setProfileVisibilityFalse);

    const myProfileOff = () => {
        setProfileVisibilityFalse();
    };
    useEffect(() => {
        fetchFriends();
    }, [setFriends]);

    const fetchFriends = async () => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('avatar, username, id')
                .order('username');
            if (error) throw error;
            // Sprawdzenie danych znajomych
            setFriends(data);
        } catch (error) {
            console.log('Błąd podczas pobierania danych o znajomych:', error.message);
        }
    };
    return (
        <div className="sidebar-right">
            {friends.map((friend) => (
                <div className="friendlist" key={friend.id}>
                    <Link to={`/friends/${friend.id}`} key={friend.id} className="friendlist" onClick={myProfileOff}>
                        <div className="friend-user">
                            <img src={friend.avatar} alt="Avatar" className="friendavatar" />
                            <p>{friend.username}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RightSidebar;
