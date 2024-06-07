import { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEntrar = () => {

  }

  return (
    <>
      <form action="">
        <label htmlFor="">
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
        </label>

        <label htmlFor="">
          <span>Senha</span>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </label>

        <button onClick={handleEntrar} type="button">Enviar</button>
      </form>
    </>
  )

}