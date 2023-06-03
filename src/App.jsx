import React, { useEffect } from "react";
import { useAppContext } from "./hooks/useAppContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Routes, Route  } from "react-router-dom";


function App() {
  const { client, account } = useAppContext();
  const [isLogin, setIsLogin] = React.useState(false);

  // useEffect(()=>{
  //     account.createOAuth2Session("google")

  // },[])

  // const handleLogin = () => {
  //   account.createOAuth2Session(
  //     "google",
  //     window.location.href,
  //     window.location.href
  //   );
  //   setIsLogin(true);
  // };
  // const promise = account.get();
  //       promise
  //       .then((res) => {
  //           console.log(res);
  //       })
  //       .catch((err) => {
  //           console.log(err)
  //       })

  return (
    <div>
      {/* leave this part of code */}
      {/* <button onClick={handleLogin}>Log in with Google</button> */}

      {/* do spotify integration here  */}
      {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7giORdOdmBhaz7NFEJ5BNx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
