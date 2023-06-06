import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from './supabase.js';
import Footer from './footer.js';


function UserProfile() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', userId)
                    .single();
                if (error) throw error;
                setUserData(data);
            } catch (error) {
                console.error('Błąd podczas pobierania danych użytkownika:', error.message);
            }
        };

        fetchUser();
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="content">
                <h1>Profile</h1>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                {/* Wyświetl pozostałe informacje o użytkowniku */}

            </div>
            <Footer />
        </div>
    );
}

export default UserProfile;
