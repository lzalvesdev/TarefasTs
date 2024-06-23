import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {

  return (
    <>
      <UsuarioLogadoProvider>
        <Routes />
      </UsuarioLogadoProvider>
    </>
  )
};