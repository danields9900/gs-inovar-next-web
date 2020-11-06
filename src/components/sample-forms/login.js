import React, {useState} from 'react'
import Validation from '../forms/validation'
import Alert from '../alerts'

const Login = ({message = null}) => {
  const [data, onSubmit] = useState(null)
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
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default Login
