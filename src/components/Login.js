
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'pass') {
      onLogin();
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Kullanıcı Girişi</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin}>Giriş Yap</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
