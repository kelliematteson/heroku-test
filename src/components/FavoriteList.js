import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function FavoriteList(props){


    return(
        <>
            <ListGroup className="favorites">
                <h2>My Favorites List</h2>
            {props.favorites.map(item => {
                return <ListGroup.Item action variant="success" key={item.title}>{item.title}{item.year}</ListGroup.Item>
            })}
        </ListGroup>
        </>
    )

}