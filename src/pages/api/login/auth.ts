import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const resp = await fetch('http://192.168.15.22:5000/api/Login/LoginAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            UsuarioAcesso: req.body.email,
            SenhaAcesso: req.body.password
          }
        )
      });
      const jwt = await resp.json();
      if (resp.status==200) {
        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/'
        }));
        res.json(jwt);
    }
    else{
      res.status(401).json(jwt);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}