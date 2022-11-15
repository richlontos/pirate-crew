import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

import styles from './Buttons.module.css';

function StatusButton({ status, property, pirateId, currentPirate, setCurrentPirate }) {
    function handleClick() {
        let newStatus = !status;
        if (property === "pegLeg") {
            axios.put("http://localhost:8000/api/pirates/" + pirateId, {
                pegLeg: newStatus
            })
                .then(() => {
                    let newCurrentPirate = currentPirate;
                    newCurrentPirate.pegLeg = newStatus;
                    setCurrentPirate(newCurrentPirate);
                    navigate('/pirates/' + pirateId)
                })
                .catch(console.log)
        }
        else if (property === "eyePatch") {
            axios.put("http://localhost:8000/api/pirates/" + pirateId, {
                eyePatch: newStatus
            })
                .then(() => {
                    let newCurrentPirate = currentPirate;
                    newCurrentPirate.eyePatch = newStatus;
                    setCurrentPirate(newCurrentPirate);
                    navigate('/pirates/' + pirateId)
                })
                .catch(console.log)
        }
        else if (property === "hookHand") {
            axios.put("http://localhost:8000/api/pirates/" + pirateId, {
                hookHand: newStatus
            })
                .then(() => {
                    let newCurrentPirate = currentPirate;
                    newCurrentPirate.hookHand = newStatus;
                    setCurrentPirate(newCurrentPirate);
                    navigate('/pirates/' + pirateId)
                })
                .catch(console.log)
        }
    }

    return !status ? (<button className={styles.yesbtn} onClick={handleClick}>Yes</button>) : (<button className={styles.nobtn} onClick={handleClick}>No</button>)
}

export default StatusButton;