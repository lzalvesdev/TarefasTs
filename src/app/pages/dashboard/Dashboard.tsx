import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioLogadoContext } from "../../shared/contexts"

export const Dashboard = () => {

  const { nomeDoUsuario } = useContext(UsuarioLogadoContext)

  return (
    <>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>
      <Link to='/entrar'>Fazer Login</Link>
    </>
  )
}