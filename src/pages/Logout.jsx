import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../hooks/useAppStore";

export default function Logout() {
  const { isLogin, setIsLogin } = useAppStore((state) => ({
    isLogin: state.isLogin,
    setIsLogin: state.setIsLogin,
  }));
  
  const navigation = useNavigate();
  useEffect(() => {
    setIsLogin(false);
    navigation("/");
  }, [isLogin]);
  return <div>Logout</div>;
}
