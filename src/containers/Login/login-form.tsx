import React, {useRef, useState} from 'react'
import Router from 'next/router'
import ValidationLogin from './validation'
import Alert from '../../components/alerts'
import fetch from 'isomorphic-unfetch';

const LoginForm = ({message = null}) => {
  const [data] = useState(null)
  let items = [
    {
      label: 'Email de acesso',
      error: {required: 'Por favor digite um email válido'},
      name: 'email',
      type: 'email',
      placeholder: 'Email de acesso'
    },
    {
      label: 'Senha de acesso',
      error: {
        required: 'Por favor digite sua senha de acesso',
        minLength: {
          value: 4,
          message: 'Sua senha deve ter pelo menos 4 caracteres'
        },
        maxLength: {
          value: 8,
          message: 'Sua senha deve ter no máximo 8 caracteres'
        }
      },
      name: 'password',
      type: 'password',
      placeholder: 'Senha de acesso'
    },
  ]
  const alerts = false;

  async function handleLogin(data) {
    const resp = await fetch('http://localhost:3000/api/login/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          email: data.email,
          password: data.password
        }
      )
    });
    const json = await resp.json();
    if(resp.status==200){
      Router.push('/');
    }
    else{
      message = json.Message;
    }
  }

  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )}
        <ValidationLogin items={items} onSubmit={handleLogin} alerts={alerts}/>
      </div>
    </>
  )
}

export default LoginForm
