import React from 'react';
import './AddList.css';

const AddList = (props) => {
    const { list } = props;

    let total = 0;
    for (const developer of list) {
        total = total + developer.salary;

    }
    return (
        <div className="add-to-list selected-name">
            <h3>Developer Selected List:</h3>
            <h4>Developer Selected: {props.list.length}</h4>
            <ul>
                {
                    list.map(developer => <li>{developer.name}</li>)
                }
            </ul>
            <h4>Total Cost: ${total.toFixed(2)}</h4>
            <button className="btn-confirm">Confirm</button>
            <button className="btn-cancel">Cancel</button>
        </div>
    );
};

export default AddList;