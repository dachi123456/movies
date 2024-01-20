import React from 'react';
import './result.css'
const Result = ({ result, onCardClick }) => {
    
  return (
    <div className='result-container'>
      <div className='result' onClick={() => onCardClick(result.imdbID)}>
        <img src={result.Poster} alt='' />
        <h2>{result.Title}</h2>
      </div>
    </div>
  );
};

export default Result;