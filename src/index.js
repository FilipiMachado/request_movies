import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Mensagem Inicial!!"
    }
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

        <h1>ISSO NÃO MUDA!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);