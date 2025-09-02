import React, { useState } from 'react'
import Input from "../../components/inputs/input";
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate }  from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


const navigate = useNavigate();

const handleLogin = async (e) => {}

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs Otext-slate-700 mt-[5px] mb-6">
        Please enter your details to log in
        </p>
        <form onSubmit={handleLogin}>
        <Input
        value={email}
        onChange={({ target }) =>setEmail(target.value)}
        label="Email Address"
        placeholder="john@example.com"
        type="text"
        />

        <Input
        value={password}
        onChange={({ target }) =>setPassword(target.value)}
        label="password"
        placeholder="password"
        type="password"
        />
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
