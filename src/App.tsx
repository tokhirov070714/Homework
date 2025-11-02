import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState<string | null>(null);

  const spotifyConfig = {
    clientId: "bb8d6ef33bf34acb89de729548c86f2b",
    redirectUri: "https://spotifyuri.netlify.app/", // Make sure this EXACTLY matches Spotify dashboard
    authEndpoint: "https://accounts.spotify.com/authorize",
    responseType: "token", // Keep as token for implicit flow
    scopes: ["playlist-modify-public"].join("%20"),
  };

  async function fetchUserData(token: string) {
    try {
      const res = await fetch("https://api.spotify.com/v1/me/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      console.log("User data:", data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    console.log("Current URL:", window.location.href);
    console.log("Hash:", window.location.hash);
  }, []);

  useEffect(() => {
    // Check for token in URL hash (returning from Spotify auth)
    const hash = window.location.hash;
    if (hash) {
      const token = hash
        .substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        ?.split("=")[1];

      if (token) {
        window.localStorage.setItem("spotify_token", token);
        setToken(token);
        // Clean up URL - remove hash
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }

    // Check for existing token in localStorage
    const storedToken = window.localStorage.getItem("spotify_token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserData(storedToken);
    }
  }, []);

  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${spotifyConfig.clientId}&redirect_uri=${encodeURIComponent(spotifyConfig.redirectUri)}&response_type=token&scope=playlist-modify-public`;

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("spotify_token");
  };

  return (
    <div>
      {!token ? (
        <a href={loginUrl}>
          <button className='log-in-btn'>Login to Spotify</button>
        </a>
      ) : (
        <div>
          <p>Successfully logged in!</p>
          <button onClick={logout}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default App;