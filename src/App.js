import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card bg={'warning'} style={{ width: 'calc(22rem + 1vmin)', height: '24rem'}}>
        <Row>
          <Col sm={12}>Display Text</Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Button>AC</Button>
          </Col>
          <Col sm={3}>
            <Button>/</Button>
          </Col>
          <Col sm={3}>
            <Button>X</Button>
          </Col>
        </Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </Card>
    </div>
  );
}

export default App;
