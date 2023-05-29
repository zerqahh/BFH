import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header.js";
import Bflag from "./Bflag.js";
import Footer from "./footer.js";



const supabase = createClient(
    "https://hunvqnqhkoajdylgpfkk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnZxbnFoa29hamR5bGdwZmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzODc1NDEsImV4cCI6MjAwMDk2MzU0MX0.pyQ-VEUf11opspeujXdjnL_i5p6kVpYyn-rpLWjAggA"


);



function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // value.data.user
                if (value.data?.user) {
                    // console.log(value.data.user)
                    setUser(value.data.user)
                }

            })
        }
        getUserData();

    }, []);

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (

        <div className="Success">
            {Object.keys(user).length !== 0 ?
                <>

                    <Header user={user} onLogout={signOutUser} />
                    <Bflag />
                    <Footer />

                </>

                :
                <>
                    <h1>U are not logged in</h1>
                    <button onClick={() => { navigate("/") }}>Go home!</button>
                </>
            }

        </div>
    );
}

export default Success