import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import AddList from '../AddList/AddList';
import './Main.css';

const Main = () => {
    const [developers, setDevelopers] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('./developers.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])

    const handleAddToList = developer => {
        if (list.indexOf(developer) === -1) {
            const newList = [...list, developer];
            setList(newList);
        }
        else {
            alert('Sorry, This is already added.')
        }
    }

    return (
        <div className="main-container">
            <div className="developers">
                {
                    developers.map(developer => <Developer
                        key={developer._id}
                        developer={developer}
                        handleAddToList={handleAddToList}
                    >
                    </Developer>)
                }
            </div>
            <div >
                <AddList list={list}></AddList>
            </div>
        </div>
    );
};

export default Main;