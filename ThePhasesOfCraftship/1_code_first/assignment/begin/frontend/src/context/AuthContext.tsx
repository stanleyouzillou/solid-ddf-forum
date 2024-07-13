// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  user: any;
  setUser: (user: any) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
