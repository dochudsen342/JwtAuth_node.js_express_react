import React, { useState } from 'react'
import { UserServise } from '../service/user-service'


const LoginForm = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isRegistrate,setIsRegistrate] = useState(false)

  return (
    <div>
        <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={() => UserServise.registrate(email,password)} style={{cursor:'pointer'}}>Регистрация</button>
    </div>
  )
}

export default LoginForm
