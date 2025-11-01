import { useEffect } from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router";
import About from "./components/pages/Footer";
import Layout from "./components/layouts/Layout";
import Main from "./components/pages/Main";

function App() {

  // const spotify = {

  //   client_id: "bb8d6ef33bf34acb89de729548c86f2b",
  //   REDIRECT_URI: "http://127.0.0.1:5173/callback",
  //   AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
  //   RESPONSE_TYPE: "token",
  //   token: ""

  // }

  return (

    <>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Main />} />

          <Route path="/about" element={<About />} />

        </Route>

      </Routes>

    </>

  )

}

export default App;