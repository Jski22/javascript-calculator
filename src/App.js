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
  this.equals = this.equals.bind(this);
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

  equals() {
    let result = Function("return " + this.state.display)();

    this.setState({
      display: result
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
              <Button id="clear" size="lg" variant="danger"  onClick={this.reset}>AC</Button>
            </Col>
            <Col xs={3}>
              <Button id="divide" size="lg" variant="dark" value="/" onClick={this.handleClick}>/</Button>
            </Col>
            <Col xs={3}>
              <Button id="multiply" size="lg" variant="dark" value="*" onClick={this.handleClick}>x</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Button id="seven" size="lg" variant="light" value="7" onClick={this.handleClick}>7</Button>
            </Col>
            <Col xs={3}>
              <Button id="eight" size="lg" variant="light" value="8" onClick={this.handleClick}>8</Button>
            </Col>
            <Col xs={3}>
              <Button id="nine" size="lg" variant="light" value="9" onClick={this.handleClick}>9</Button>
            </Col>
            <Col xs={3}>
              <Button id="subtract" size="lg" variant="dark" value="-" onClick={this.handleClick}>-</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Button id="four" size="lg" variant="light" value="4" onClick={this.handleClick}>4</Button>
            </Col>
            <Col xs={3}>
              <Button id="five" size="lg" variant="light" value="5" onClick={this.handleClick}>5</Button>
            </Col>
            <Col xs={3}>
              <Button id="six" size="lg" variant="light" value="6" onClick={this.handleClick}>6</Button>
            </Col>
            <Col xs={3}>
              <Button id="add" size="lg" variant="dark" value="+" onClick={this.handleClick}>+</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Button id="one" size="lg" variant="light" value="1" onClick={this.handleClick}>1</Button>
            </Col>
            <Col xs={3}>
              <Button id="two" size="lg" variant="light" value="2" onClick={this.handleClick}>2</Button>
            </Col>
            <Col xs={3}>
              <Button id="three" size="lg" variant="light" value="3" onClick={this.handleClick}>3</Button>
            </Col>
            <Col xs={3}>
              <Button id="equals" size="lg" onClick={this.equals}>=</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Button id="zero" size="lg" variant="light" value="0" onClick={this.handleClick}>0</Button>
            </Col>
            <Col xs={3}>
              <Button id="decimal" size="lg" variant="light" value="." onClick={this.handleClick}>.</Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
