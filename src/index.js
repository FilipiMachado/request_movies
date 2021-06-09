import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Mensagem Inicial!!",
      counter: 0,
      oldCounter: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter) {
      this.setState({
        oldCounter: prevState.counter
      })
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <input onChange={(event) => {
          this.setState({
            message: event.target.value
          });
        }} />

        <h1>{this.state.message}</h1>

        <h1>{this.state.counter}</h1>

        <h1>Valor Antigo: {this.state.oldCounter}</h1>

        <h1>ISSO NÃO MUDA!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);