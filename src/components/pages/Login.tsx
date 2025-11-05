import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Login: React.FC = () => {
	const handleLogin = async () => {
		window.location.href = "http://localhost:3000/login";
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
			<Card className="w-full max-w-md bg-[#1c1c1c] border-none shadow-lg p-6">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center text-white">
						Login to Spotify
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col items-center justify-center gap-6">
					<Button
						onClick={handleLogin}
						className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold text-lg py-6 rounded-full transition-all"
					>
						Continue with Spotify
					</Button>
					<p className="text-sm text-gray-400 text-center">
						By continuing, you agree to Spotify’s Terms of Service
						and Privacy Policy.
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default Login;
