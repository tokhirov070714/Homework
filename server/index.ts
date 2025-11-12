import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import querystring from "querystring";

const app = express();
app.use(
	cors({
		origin: "*",
	})
);
app.use(bodyParser.json());

const client_id = "bb8d6ef33bf34acb89de729548c86f2b";
const redirect_uri = "http://127.0.0.1:3000/callback";
const client_secret = "066e002b015a41718dff53cdd5b8973a"; // NEVER EXPOSE THIS!!!
const stateKey = "some-state-of-my-choice";

// пример API как в Next.js
app.get("/login", (req, res) => {
	const scope = "playlist-modify-public user-library-read";

	res.redirect(
		"https://accounts.spotify.com/authorize?" +
		querystring.stringify({
			response_type: "code",
			client_id: client_id,
			scope: scope,
			redirect_uri: redirect_uri,
			state: stateKey,
		})
	);
});

app.get("/callback", function (req, res) {
	const code = req.query.code || null;

	res.clearCookie(stateKey);

	(async () => {
		try {
			const bodyData = new URLSearchParams({
				code: code as string,
				redirect_uri,
				grant_type: "authorization_code",
			});

			const authHeader = Buffer.from(
				client_id + ":" + client_secret
			).toString("base64");

			const response = await fetch(
				"https://accounts.spotify.com/api/token",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						Authorization: "Basic " + authHeader,
					},
					body: bodyData,
				}
			);

			if (!response.ok) {
				return res.redirect(
					"http://localhost:5173/error?" +
					querystring.stringify({
						error: "invalid_token",
					})
				);
			}

			const data = await response.json();
			const access_token = data.access_token;
			const refresh_token = data.refresh_token;

			// Редирект на фронт с токенами в URL
			res.redirect(
				"http://localhost:5173/auth/success?" +
				querystring.stringify({
					access_token: access_token,
					refresh_token: refresh_token,
				})
			);
		} catch (error) {
			console.error("Token exchange failed:", error);
			res.redirect(
				"http://localhost:5173/error?" +
				querystring.stringify({
					error: "token_request_failed",
				})
			);
		}
	})();
});

// запуск API на отдельном порту
app.listen(3000, () => console.log("API running at http://localhost:3000"));
