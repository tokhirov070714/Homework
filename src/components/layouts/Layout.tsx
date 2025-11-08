// import { fetchData } from "@/lib/api";
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Aside from "../custom/Aside";


export const TrackCTX = createContext({
	trackId: "",
	setTrackId: (id: string) => { }
});

const Layout: React.FC = () => {

	const [trackId, setTrackId] = useState("");

	useEffect(() => {
		localStorage.getItem("token");
	}, [])

	return (

		<TrackCTX.Provider value={{ trackId, setTrackId }}>

			<div className="my-0 mx-auto relative">

				<Header />

				<div className="flex">

					<Aside />

					<Outlet />

				</div>

				<div className="fixed w-full bottom-0 left-0 right-0 bg-black">

					{

						trackId ? <iframe
							className="w-full h-20"
							src={`https://open.spotify.com/embed/track/${trackId}`}
							allow="autoplay; clipboard-write; encrypted-media; fullscreen;"
							loading="lazy"
						></iframe> : <div className="w-full h-20 flex items-center justify-center">

							<p className="text-2xl text-bold">Please select a song from the albums to enable a web player</p>

						</div>

					}

				</div>

				<Footer />

			</div>

		</TrackCTX.Provider>

	);
};

export default Layout;
