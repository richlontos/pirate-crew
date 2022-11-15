import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import styles from './Buttons.module.css';
import './Body.css';


function PirateForm({ pirate, method, url }) {
    const [name, setName] = useState(pirate.name);
    const [imageUrl, setImageUrl] = useState(pirate.imageUrl);
    const [treasureChests, setTreasureChests] = useState(pirate.treasureChests);
    const [catchPhrase, setCatchPhrase] = useState(pirate.catchPhrase);
    const [crewPosition, setCrewPosition] = useState(pirate.crewPosition);
    const [pegLeg, setPegLeg] = useState(pirate.pegLeg);
    const [eyePatch, setEyePatch] = useState(pirate.eyePatch);
    const [hookHand, setHookHand] = useState(pirate.hookHand);

    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

        axios[method](url, {
            name,
            imageUrl,
            treasureChests,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(() => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    }

    return (
        <div>
            <form className="form-body" onSubmit={handleSubmit}>
                {errors.map((err, index) => (
                    <p key={index} style={{ color: 'red' }}>{err}</p>
                ))}
                <div>
                    <label>Pirate Name: </label>
                    <input
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}    
                    />
                </div>
                <div>
                    <label>Image URL: </label>
                    <input
                        name="imageUrl"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}    
                    />
                </div>
                <div>
                    <label># of Treasure Chests: </label>
                    <input
                        type="number"
                        name="treasureChests"
                        value={treasureChests}
                        onChange={e => setTreasureChests(e.target.value)}
                    />
                </div>
                <div>
                    <label>Pirate Catch Phrase: </label>
                    <input
                        name="catchPhrase"
                        value={catchPhrase}
                        onChange={e => setCatchPhrase(e.target.value)}    
                    />
                </div>
                <div>
                    <label>Crew Position: </label>
                    <select
                        name="crewPosition"
                        value={crewPosition}
                        onChange={e => setCrewPosition(e.target.value)}    
                    >
                        <option value="">Please select a crew position</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <label>Peg Leg</label>
                    <input
                        type="checkbox"
                        checked={pegLeg}
                        onChange={e => setPegLeg(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Eye Patch</label>
                    <input
                        type="checkbox"
                        checked={eyePatch}
                        onChange={e => setEyePatch(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Hook Hand</label>
                    <input
                        type="checkbox"
                        checked={hookHand}
                        onChange={e => setHookHand(e.target.checked)}
                    />
                </div>
                <div>
                    <button type="button" className={styles.btn} onClick={() => navigate("/")}>Cancel</button>{' | '}
                    <button className={styles.btn}>Add Pirate</button>
                </div>
            </form>
        </div>
    );
}

export default PirateForm;