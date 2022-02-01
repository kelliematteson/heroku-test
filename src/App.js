
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Layout from './layouts/Layout';
import MovieInfo from './components/MovieInfo';



function App(props) {
  const [query, updateQuery ] = useState({
    baseURL: 'http://www.omdbapi.com?',
    apiKey: 'apikey=' + process.env.API_KEY,
    option: '&s=',
    title: '',
    optionYear: '&y=',
    year: '',
    searchURL: ''
  });

  const [movie, updateMovie] = useState({});
  useEffect(() => {
    query.searchURL.length > 0 &&
    (async () => {
      try {
        const response = await fetch(query.searchURL);
        const data = await response.json();
        await updateMovie(data);
      } catch (e) {
        console.error(e);
      } finally {
        updateQuery({
          baseURL: 'http://www.omdbapi.com?',
          apiKey: 'apikey=' + '8d432cb5',
          option: '&s=',
          title: '',
          optionYear: '&y=',
          year: '',
          searchURL: ''
        });
      }
    })();
  }, [query]);
 console.log(movie);
  const handleChange = event => {
    updateQuery({ ...query, ...{ [event.target.id]: event.target.value} });
  }
  const handleChangeYear = event => {
    updateQuery({ ...query, ...{ [event.target.id]: event.target.value} });
  }
  const handleSubmit = event => {
    event.preventDefault();
    updateQuery({
        ...query,
        searchURL: query.baseURL + query.apiKey + query.option + query.title + query.optionYear + query.year
    }, );
  };
  
  return (
    <div className="App">  
              <Layout>
                  <div>
                  <h1>Find that Movie</h1>
                  </div>
          
                <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="title" className="title"><h3>Title</h3></label>
                    <input 
                      id="title"
                      type="text"
                      value={query.title}
                      onChange={handleChange}
                    />
                    <label htmlFor="year" className="year"><h3>Year</h3></label>
                    <input 
                      id="year"
                      type="text"
                      value={query.year}
                      onChange={handleChangeYear}
                    />
                  <Button variant="primary" size="lg" type="submit" value="Find Movie Info">Find that Movie</Button>
                  </form>
                  </div>
                  <div className="main__container">
            {
              Object.keys(movie).length ? 
                <MovieInfo movie={movie} />
            : ''
            }
            </div>
            </Layout>
    </div>
    
  );
}

export default App;
