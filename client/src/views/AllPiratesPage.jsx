import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import '../components/Body.css';

import DeleteButton from '../components/DeleteButton';

function AllPiratesPage() {
    const [pirates, setPirates] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(response => setPirates(response.data))
            .catch(() => setHasError(true));
    }, []);

    if(hasError) return 'Something went wrong!';

    if(pirates === null) return 'Loading...';

    return (
        <div className="main-container">
            <header className="main-header">
                <h1>Pirate Crew</h1>
                <button className="header-btn"><Link to="/pirates/new" style={{ textDecoration: "none" }}>Add Pirate</Link></button>
            </header>
            <div className="main-body">
                {pirates.map(pirate => (
                <div className="pirate-container">
                    <img src={pirate.imageUrl} alt={pirate.name} className="pirate-image"/>
                    <div className="pirate-container-right">
                        <h2>{pirate.name}</h2>
                        <button className="btn"><Link to={"/pirates/"+pirate._id} style={{ textDecoration: "none" }}>View Pirate</Link></button>{' | '}
                        <DeleteButton pirate={pirate} setPirates={setPirates} />
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default AllPiratesPage;