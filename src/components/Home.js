import React, { useState } from 'react';
import useInput from './hooks/useInput';
import Button from 'react-bootstrap/Button';

export default function Home(props) {
    

    const [kellieList, updateKellieList] = useState([]);

    const { 
            value: kellieNewCard,
            bind: bindKellieNewCard,
            reset: resetKellieNewCard 
        } = useInput('');
    const addKellie = event => {
        event.preventDefault();
        updateKellieList([...kellieList, kellieNewCard]);
        resetKellieNewCard();
    }
  
  

    return (
        <div>
            <h2>Kellie List</h2>
            <ul id='kellie-list'>
                {
                    kellieList.map((card, index) => {
                        return (
                            <li key={`${index}`}>{card}
                            <Button type="button" onClick={(evt) => {
                                const deletedItem = kellieList.splice(index, 1);
                                const newArr = kellieList.filter(item => item !== deletedItem);
                                updateKellieList(newArr);
                            }}>
                                Remove
                            </Button>
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={addKellie}>
                <label>
                    Add to Kellie List
                    <input type="text" {...bindKellieNewCard} />
                </label>
                <button>Add to Kellie List</button>
            </form>
        </div>
    )
}