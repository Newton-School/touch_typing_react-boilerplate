

import React from 'react';
import "../styles/result.css"
const Results = (               ) => {
    

    return (
        <div>
            <h2>Results</h2>
            <div className='details'>
            <span>Elapsed Time: {seconds} seconds</span>
            <span>Accuracy: {accuracy}%</span>
            </div>
        </div>
    );
};

export default Results;
