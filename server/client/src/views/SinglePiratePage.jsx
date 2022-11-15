import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import '../components/Body.css';
import StatusButton from '../components/StatusButton';
import DeleteButton from '../components/DeleteButton';

function SinglePiratePage({ id }) {
    const [currentPirate, setCurrentPirate] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(response => setCurrentPirate(response.data))
            .catch(() => setHasError(true));
    }, []);

    if(hasError) return 'Something went wrong!';

    if(currentPirate === null) return 'Loading...';

    return (
        <div className="main-container">
            <header className="main-header">
                <h1>{currentPirate.name}</h1>
                <button className="header-btn"><Link to="/pirates" style={{ textDecoration: "none" }}>Crew Board</Link></button>
            </header>
            <div className="single-body">
                <div className="single-left">
                    <img className="single-image" src={currentPirate.imageUrl} alt={currentPirate.name}/>
                    <p>"{currentPirate.catchPhrase}"</p>
                </div>
                <div className="about">
                    <h2>About</h2>
                    <p>Position: {currentPirate.crewPosition}</p>
                    <p>Treasure Chests: {currentPirate.treasureChests}</p>
                    <p>Peg Leg: {currentPirate.pegLeg ? "Yes" : "No"} | Set to <StatusButton status={currentPirate.pegLeg} property="pegLeg" pirateId={currentPirate._id} currentPirate={currentPirate} setCurrentPirate={setCurrentPirate}/></p>
                    <p>Eye Patch: {currentPirate.eyePatch ? "Yes" : "No"} | Set to <StatusButton status={currentPirate.eyePatch} property="eyePatch" pirateId={currentPirate._id} currentPirate={currentPirate} setCurrentPirate={setCurrentPirate}/></p>
                    <p>Hook Hand: {currentPirate.hookHand ? "Yes" : "No"} | Set to <StatusButton status={currentPirate.hookHand} property="hookHand" pirateId={currentPirate._id} currentPirate={currentPirate} setCurrentPirate={setCurrentPirate}/></p>
                </div>
            </div>
        </div>
    );
}

export default SinglePiratePage;