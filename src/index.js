import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios"
import { Button, Input, Card } from "antd"

import "antd/dist/antd.css"

const { Meta } = Card

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }

  componentDidUpdate(prevProps, prevState) { }

  componentDidMount() { }

  async getFilms(filmName) {
    const { data } = await Axios.get("http://omdbapi.com/?apiKey=58d5a1f9&t=" + filmName);

    console.log(data)

    this.setState({
      films: [
        ...this.state.films,
        data
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>FILM LIST:</h1>
        <Input style={{ width: 200 }} id="film-input" />

        <Button type="primary" onClick={() => {
          const filmName = document.getElementById('film-input').value;

          this.getFilms(filmName);
        }}>Add Film</Button>

        {this.state.films.map(film => (
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img src={film.Poster} />}
          >
            <Meta title={film.Title} description={film.Actors} />
          </Card>
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);