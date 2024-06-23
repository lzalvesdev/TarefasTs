import { useState } from "react"
import { ButtonLogin } from "./components/ButtonLogin"
import { InputLogin } from "./components/InputLogin"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEntrar = () => {
    console.log(email, password);
  }

  return (
    <>
      <form action="">

        <InputLogin
          label="Email"
          value={email}
          type="email"
          onChange={newValue => setEmail(newValue)}
        />
        <InputLogin
          label="Senha"
          value={password}
          type="password"
          onChange={newValue => setPassword(newValue)}
        />

        {/* <button onClick={handleEntrar} type="button">Enviar</button> */}

        <ButtonLogin type="button" onClick={handleEntrar} >
          Entrar
        </ButtonLogin>
        <ButtonLogin type="button" >
          Cadastrar
        </ButtonLogin>
      </form>
    </>
  )

}