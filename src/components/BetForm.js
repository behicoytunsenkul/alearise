
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BetForm = ({ onBet }) => {
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [prediction, setPrediction] = useState(true);
  const [date, setDate] = useState('');

  const handleBet = () => {
    if (amount && date) {
      onBet({ amount, selectedCrypto, prediction, date });
      alert('Bahis yapıldı!');
    } else {
      alert('Lütfen miktar ve tarih girin.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form>
            <h2>Bahis Yap</h2>
            <Form.Group controlId="formAmount">
              <Form.Label>Miktar</Form.Label>
              <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formCrypto">
              <Form.Label>Kripto Para</Form.Label>
              <Form.Control as="select" value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                {/* Diğer kripto paraları buraya ekleyebilirsiniz */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrediction">
              <Form.Label>Tahmin</Form.Label>
              <Form.Control as="select" value={prediction} onChange={(e) => setPrediction(e.target.value === 'true')}>
                <option value={true}>Yükseliş</option>
                <option value={false}>Düşüş</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Tarih</Form.Label>
              <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleBet}>Bahis Yap</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BetForm;
