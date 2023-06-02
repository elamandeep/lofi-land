import { useContext, createContext, useEffect } from "react";
import { Account, Client } from "appwrite";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const client = new Client();
  const account = new Account(client);
  useEffect(() => {
    client
      .setEndpoint(import.meta.env.VITE_PROJECT_URL)
      .setProject(import.meta.env.VITE_PROJECT_ID);

  }, []);

  return (
    <AppContext.Provider value={{ client, account }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
