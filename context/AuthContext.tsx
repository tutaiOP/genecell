// contexts/AuthContext.tsx
import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  isAuth: false,
  setIsAuth: (value: boolean) => {},
});

import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
