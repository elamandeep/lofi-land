import React, { useEffect } from "react";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  const { client, account } = useAppContext();

  // useEffect(()=>{
  //     account.createOAuth2Session("google")

  // },[])

  const handleLogin = () => {
    account.createOAuth2Session("google");
  };

  return (
    <div>
    {/* leave this part of code */}
      <button onClick={handleLogin}>Log in with Google</button>

    {/* do spotify integration here  */}
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7giORdOdmBhaz7NFEJ5BNx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

    </div>
  );
}

export default App;
