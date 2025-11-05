// import { fetchData } from "@/lib/api";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const Layout: React.FC = () => {
	// const [user, setUser] = useState<any>(null);

	useEffect(() => {
		localStorage.getItem("token");
	}, [])

	return (
		<div className="my-0 mx-auto relative">

			<Header />

			<Outlet />

			<Footer />
		</div>
	);
};

export default Layout;
