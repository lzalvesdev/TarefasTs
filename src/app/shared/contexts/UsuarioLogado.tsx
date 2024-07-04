import { createContext, useCallback, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string,
  logout: () => void;
}

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
  const [nome, setNome] = useState('')

  const handleLogout = useCallback(() => {
    console.log('logout')
  }, [])

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout}}>
      {children}
    </UsuarioLogadoContext.Provider>

  )
}