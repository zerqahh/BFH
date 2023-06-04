import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared';
import "./loginPage.scss";

const supabase = createClient(
    "https://hunvqnqhkoajdylgpfkk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnZxbnFoa29hamR5bGdwZmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzODc1NDEsImV4cCI6MjAwMDk2MzU0MX0.pyQ-VEUf11opspeujXdjnL_i5p6kVpYyn-rpLWjAggA"
);

function LoginPage() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(true);
    const [recordCreated, setRecordCreated] = useState(false);

    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
            const discordUserId = session.user.id;
            const username = session.user.user_metadata.full_name;
            const avatar = session.user.user_metadata.avatar_url;

            const userExists = await checkUserExists(discordUserId);

            if (!userExists && !recordCreated) { // Sprawdzenie, czy rekord nie został już utworzony
                await createUserRecord(discordUserId, username, avatar);
                setRecordCreated(true); // Ustawienie flagi na true po utworzeniu rekordu
            }

            navigate("/bf3");
        }
    });

    async function checkUserExists(discordUserId) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('discord_user_id', discordUserId);

        if (error) {
            console.error('Wystąpił błąd podczas sprawdzania użytkownika:', error);
            return false;
        }

        return data.length > 0;
    }


    async function createUserRecord(discordUserId, username, avatar) {
        const { data, error } = await supabase
            .from('users')
            .insert([{ discord_user_id: discordUserId, username, avatar }]);

        if (error) {
            console.error('Wystąpił błąd podczas tworzenia rekordu użytkownika:', error);
            return null;
        }

        return data[0];
    }

    async function handleLogin() {
        // Obsługa logiki logowania
    }

    return (
        <div className="login-background">
            <div className="loginPage">
                {showForm && (
                    <Auth
                        supabaseClient={supabase}
                        appearance={{
                            theme: ThemeSupa,
                            primaryColor: '#ff0000',
                            backgroundColor: 'red',
                        }}
                        theme="dark"
                        providers={["discord"]}
                        handleLogin={handleLogin}
                    />
                )}
            </div>
        </div>
    );
}

export default LoginPage;
