import type React from "react"
// import { Outlet } from "react-router";
// import Header from "../pages/Header";
// import Footer from "../pages/Footer";
import { useEffect } from "react";


const Layout: React.FC = () => {


    const spotify = {

        client_id: "bb8d6ef33bf34acb89de729548c86f2b",
        REDIRECT_URI: "https://spotifyuri.netlify.app/",
        AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
        RESPONSE_TYPE: "token",
        token: "",

    }

    async function fetchUserData(token: string) {

        try {

            const res = await fetch("https://api.spotify.com/v1/me/", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            })

            if (!res.ok) throw new Error(res.statusText)

            const data = await res.json()

            console.log(data);


        } catch (e) {

            console.log(e);


        }

    }

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash
                ?.substring(1)
                ?.split("&")
                ?.find((elem) => elem.startsWith("access_token"))
                ?.split("=")[1] ?? null;

            window.location.href = "";
            window.localStorage.setItem("token", token || "");
        }

        if (token) {

            fetchUserData(token)

        }

    }, []);

    return (



        <div className="my-0 mx-auto relative">

            {/* <Header />

            <main>

                <Outlet />

            </main>

            <Footer /> */}

            <a href={`${spotify.AUTH_ENDPOINT}?client_id=${spotify.client_id}&redirect_uri=${spotify.REDIRECT_URI}&response_type=${spotify.RESPONSE_TYPE}&scope=playlist-modify-public`}>
                <button className='log-in-btn'>Log in</button>
            </a>

        </div>


    )

}

export default Layout