import React from 'react';
import './details.css';
import closeIcon from '../icon/close (1).png'
const Details = ({ data, onClose }) => {
  return (
    
      <div className='details-container'>
        <button onClick={onClose} className='close'><img src={closeIcon} alt="" className='close-btn'/></button>
        <img src={data.Poster} className='main-img' alt='' />
        <h1>{data.Title}</h1>
        <p>{data.Released}</p>
        <p>imdb : {data.imdbRating}</p>
        
      </div>

  );
};

export default Details;