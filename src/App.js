import React, {Component} from 'react';
import './App.css'
import Form from "./components/Form/Form";
import Cinema from "./components/Cinema/Cinema";

class App extends Component {
  state = {
    movies: []
  };

  static moviesList = 'MoviesList ';

  constructor(props) {
    super(props);
    this.storage = this.takeFromStorage();
  };

  componentDidMount() {
    this.setState({movies: this.storage});
  };

  componentDidUpdate() {
    this.updateStorage();
  };

  addToMovieList = event => {

    event.preventDefault();
    const userInput = document.getElementById('title').value;
    if (userInput) {
      const movies = [...this.state.movies];
      const ID = this.getID();
      movies.push({title: userInput, id: ID});
      this.setState({movies});
    }
  };

  changeMovieTitle = (event, id) => {
    const movies = [...this.state.movies];
    const targetIndex = movies.findIndex(movie => movie.id === id);
    const targetMovie = {...movies[targetIndex]};
    targetMovie.title = event.target.value;
    movies[targetIndex] = targetMovie;
    this.setState({movies});
  };

  removeMovie = id => {
    const movies = [...this.state.movies];
    const targetIndex = movies.findIndex(movie => movie.id === id);
    movies.splice(targetIndex, 1);
    this.setState({movies});
  };

  getID = () => (Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 101));

  takeFromStorage = () => {
    if (localStorage.getItem(App.moviesList) === null) {
      localStorage.setItem(App.moviesList, '[]');
      return [];
    } else {
      const data = localStorage.getItem(App.moviesList);
      return JSON.parse(data);
    }
  };

  updateStorage = () => {
    let movies = this.state.movies;
    localStorage.setItem(App.moviesList, JSON.stringify(movies));
  };

  render() {
    return (
      <div className="Container">
        <Form formSubmit={event => this.addToMovieList(event)}/>
        <Cinema
          list={this.state.movies}
          changeTitle={this.changeMovieTitle}
          removeMovie={this.removeMovie}
        />
      </div>
    );
  }

}

export default App;