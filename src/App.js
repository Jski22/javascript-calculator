import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0"
    };
  this.handleClick = this.handleClick.bind(this); 
  this.reset = this.reset.bind(this);
  };

  handleClick(event) {
    let num = event.target.value;

    if (this.state.display === "0") {
      this.setState({
        display: num
      });
    } else {
      this.setState(state => ({
        display: state.display + num
      }));
    }
  } 

  reset() {
    this.setState({
      display: "0"
    });
  }

  render() {
    return (
      <div className="App">
        <Card style={{ width: 'calc(22rem + 1vmin)', height: '24rem'}}>
          <Row>
            <Col xs={12}>
              <Container id="display">{this.state.display}</Container>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Button size="lg" variant="danger"  onClick={this.reset}>AC</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="dark">/</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="dark" value="*" onClick={this.handleClick}>x</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Button size="lg" variant="light">7</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light" value="8" onClick={this.handleClick}>8</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light" value="9" onClick={this.handleClick}>9</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="dark">-</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Button size="lg" variant="light">4</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light">5</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light">6</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="dark">+</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Button size="lg" variant="light">1</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light">2</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light">3</Button>
            </Col>
            <Col xs={3}>
              <Button id="equals" size="lg">=</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Button size="lg" variant="light">0</Button>
            </Col>
            <Col xs={3}>
              <Button size="lg" variant="light">.</Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
