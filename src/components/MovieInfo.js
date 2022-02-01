import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import FavoriteList from '../components/FavoriteList';

const MovieInfo = (props) =>{
   let movieLibrary = props.movie.Search;
   const [favorites, setFavorites ] = useState([
       {title: 'Reality Bites'},
       {title: 'Encanto'},
       {title: 'Sleepless in Seattle'}
   ]);

const handleButtonClick = (event) => {
    const newItem = {
        title: event.target.value,
    };

    const newItems =  [...favorites, newItem ];
    setFavorites(newItems);
};
 
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
        <div className="favorite__list">
        { Object.keys(favorites).length ? 
            <FavoriteList favorites={favorites}/>
        : ''
        }
        </div>
    </>
    )
}

export default MovieInfo;