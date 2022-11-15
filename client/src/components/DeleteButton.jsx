import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

import styles from './Buttons.module.css';

function DeleteButton({ pirate, setPirates }) {
    function handleDelete() {
        axios.delete('http://localhost:8000/api/pirates/' + pirate._id)
            .then(() => {
                setPirates(pirates => pirates.filter(single => single._id !== pirate._id));
                navigate('/')
            })
            .catch(console.log);
    }

    return (
        <button className={styles.btn} onClick={handleDelete}>Walk the Plank</button>
    )
}

export default DeleteButton;