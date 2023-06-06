import "./Bflag.scss";
import React, { useState, useEffect } from 'react';
import supabase from "./supabase.js";
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function RightSidebar() {

    const { user, signOutUser, toggleProfileVisibility } = React.useContext(UserContext);

    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetchFriends();
    }, []);

    const fetchFriends = async () => {
        try {
            const { data, error } = await supabase.from('users').select('avatar, username, id').order('username');
            if (error) throw error;
            setFriends(data);
            console.log(data)
        } catch (error) {
            console.log('Błąd podczas pobierania danych o znajomych:', error.message);
        }
    };

    return (
        <div className="sidebar-right">
            <UserContext.Provider value={{ user, signOutUser, toggleProfileVisibility }}>
                {friends.map((friend) => (
                    <div className="friendlist" key={friend.id}>
                        <Link to={`/profile/${friend.id}`}>
                            <div className="friend-user">
                                <img src={friend.avatar} alt="Avatar" className="friendavatar" />
                                <p>{friend.username}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </UserContext.Provider>
        </div>
    );


}

export default RightSidebar;
