import type React from "react"
import { Outlet } from "react-router";
import Header from "../pages/Header";
import Footer from "../pages/Footer";


const Layout: React.FC = () => {

    return (



        <div className="my-0 mx-auto relative">

            <Header />

            <main>

                <Outlet />

            </main>

            <Footer />

        </div>


    )

}

export default Layout