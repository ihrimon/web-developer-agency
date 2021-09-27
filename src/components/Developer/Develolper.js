import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons'

const Developer = (props) => {
    const { img, name, profession, skill, experience, salary, mail } = props.developer;
    const listIcon = <FontAwesomeIcon icon={faListUl} />

    return (
        <div className="developer">
            <div>
                <img src={img} />
            </div>
            <div className="developer-data">
                <h3>Name: {name}</h3>
                <p>Profession: {profession}</p>
                <p>Skill: {skill}</p>
                <p>Experience: {experience}</p>
                <p>Salary: ${salary}</p>
                <p>E-mail: {mail}</p>
            </div>
            <div>
                <button onClick={() => props.handleAddToList(props.developer)} className='btn-add-list'>{listIcon} Add to List</button>
            </div>
        </div>
    );
};

export default Developer;