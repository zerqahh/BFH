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

    supabase.auth.onAuthStateChange(async (event) => {
        if (event === "SIGNED_IN") {
            navigate("/bf3");
        }
    });

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
