import React from "react";
import { Route, Routes } from "react-router";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Layout from "./components/layouts/Layout";
import Login from "./components/pages/Login";
import AuthSuccess from "./components/custom/Authsuccsess";
import AlbumPage from "./components/pages/AlbumPage";

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/album/:albumId" element={<AlbumPage />} />
				</Route>

				<Route path="/auth/success" element={<AuthSuccess />} />


				<Route
					path="/error"
					element={<div>Authentication failed</div>}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
