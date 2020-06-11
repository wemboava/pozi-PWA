import React, { useState, useCallback } from 'react';

import Link from 'next/link';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Footer } from './styles';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = useCallback(event => {
    setUser({
      ...user,
      [event.target.name]: [event.target.value]
    })
  }, [])

  return (
    <Container>
      <div onClick={() => router('/')} className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
      <Content>
        <h2>Faça seu login</h2>
        <form>
          <Input
            name="email"
            value={user.email}
            handleChange={handleChange}
            placeholder="Email"
          />
          <Input
            name="password"
            value={user.password}
            handleChange={handleChange}
            placeholder="Senha"
          />

          <Button onClick={() => {}}>Entrar</Button>
        </form>

        <Footer>
          <span>Ainda não tem conta?</span>
          <Link href="/register">
            <a>Cadastre-se!</a>
          </Link>
        </Footer>
      </Content>
    </Container>
  );
}

export default Login;