import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header className="header">
      <h1>Movies App</h1>
      <h3>The Best Movie is : {props.bmovie}</h3>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className={props.cls}>
      <small>{props.text}</small>
    </footer>
  )
}


function Movie(props) {
  return (
    <li>
      <h4>Name: {props.movie.name}</h4>
      <h4>Des: {props.movie.des}</h4>
    </li>
  )
}


function MovieList(props) {
  return (
    <main className="main">
      <h1>Movie List</h1>
      <h3>Number of Movies {props.movieList.length}</h3>
      <ul>
        {props.movieList.map(movie => <Movie movie={movie} />)}
      </ul>
    </main>
  )
}


class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      des: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.title}
          <input type="text" onChange={this.handleChange}></input>
        </label>

        <input type="submit" value="new" />
      </form>
    )
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onMovieCreate(this.state);
  }
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      Movies: [
        {
          key: 1,
          name: "Matrix",
          des: "save the other world"
        },
        {
          key: 2,
          name: "Revenge",
          description: "get all my family"
        },
        {
          key: 3,
          name: "Don't breath",
          description: "a heror movie"
        },
      ],

      bmovie: "Matrix",
      counter: 0
    };
    this.handleCreateMovie = this.handleCreateMovie.bind(this);
  }


  handleCreateMovie(movie) {
    let allMovies = this.state.movies;
    allMovies.push({ id: 4, name: movie.name, des: movie.des });
    this.setState({ movies: allMovies });
  }

  render() {
    return (
      <div className="App">

        <Header bmovie={this.state.bmovie} />
        <MovieList movieList={this.state.Movies} />
        <h1>new movie? </h1>
        <MovieForm title="Enter Name:" onMovieCreate={(movie) => this.handleCreateMovie(movie)} />
        <Footer cls="footer" text="@copyright Hamza Rashed" />
      </div>
    );
  }
}

export default App;
