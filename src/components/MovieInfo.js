import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieInfo = (props) =>{
   let movieLibrary = props.movie.Search;
   const [favorites, setFavorites ] = useState([
      { title: 'Reality Bites' },
      { title: 'Little Women' },
      { title: 'Breaking Away' }
       
   ]);

const handleButtonClick = (event) => {
    const newItem = {
        title: event.target.value
    };

    const newItems =  [...favorites, newItem ];
    setFavorites(newItems);
};
    console.log(favorites);
    return(
        <>
            <div className="movie__library">
            {movieLibrary.map(item => {
                return <Card className="movie__card" key={item.imdbID} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.Poster} />
                                <Card.Body>
                                    <Card.Title>{item.Title}</Card.Title>
                                    <Card.Text>
                                    Year: {item.Year} <br />
                                    Type: {item.Type}
                                    </Card.Text>
                                    <Button variant="secondary" value={item.Title} onClick={handleButtonClick}>Add to Watch List</Button>
                                </Card.Body>
                        </Card>;
            
        })}
        </div>
    </>
    )
}

export default MovieInfo;