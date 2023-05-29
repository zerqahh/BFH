import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react"
import {
    // Import predefined theme
    ThemeSupa,
} from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom";



const supabase = createClient(
    "https://hunvqnqhkoajdylgpfkk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnZxbnFoa29hamR5bGdwZmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzODc1NDEsImV4cCI6MjAwMDk2MzU0MX0.pyQ-VEUf11opspeujXdjnL_i5p6kVpYyn-rpLWjAggA"


);



function LoginPage() {

    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {

        if (event == "SIGNED_IN") {

            navigate("/success");

        }

    });

    return (

        <div className="LoginPage">
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                providers={["discord"]}
            />
        </div>
    )
}

export default LoginPage;