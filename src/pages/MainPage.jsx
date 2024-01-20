import axios from 'axios';
import React, { useState } from 'react';
import Result from '../components/result';
import Search from '../components/Search';
import Details from '../components/details';
import './main.css';
import { useEffect } from 'react';

const MainPage = () => {
  const [state, setState] = useState({
    search: 'love',
    result: [],
    selected: {},
    validSearch: true,
  });

  const handleInput = (e) => {
    setState((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const searchResult = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(`https://www.omdbapi.com/?i=tt3896198&apikey=6c783206&s=${state.search}`)
        .then((res) => {
          setState((prev) => ({
            ...prev,
            result: res.data.Search,
            validSearch: !!res.data.Search,
          }));
        })
        .catch((err) => console.log(err));
    }
  };

  const handleCardClick = (id) => {
    axios(`https://www.omdbapi.com/?i=${id}&apikey=6c783206`)
      .then(({ data }) => {
        setState((prev) => ({
          ...prev,
          selected: data,
        }));
      })
      .catch((err) => console.log(err));
  };
  const handleCloseDetails = () => {
    setState((prev) => ({
      ...prev,
      selected: {},
    }));
  };
  useEffect(() => {
      axios
        .get(`https://www.omdbapi.com/?i=tt3896198&apikey=6c783206&s=love`)
        .then((res) => {
          setState((prev) => ({
            ...prev,
            result: res.data.Search,
            validSearch: !!res.data.Search,
          }));
        })
        .catch((err) => console.log(err));
    
  },[])

  return (
    <div className='main-container'>
    <Search handleInput={handleInput} searchResult={searchResult} />
    {typeof state.selected.Title !== 'undefined' ? (
      <div style={{border:'none'}}>
        <Details data={state.selected} onClose={handleCloseDetails} />
      </div>
    ) : state.validSearch ? (
      <div className="container">
        <div className={`box`}>
          {state.result.map((el, i) => (
            <div key={i} className='card'>
              <Result result={el} onCardClick={handleCardClick} />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p style={{textAlign:'center',color:'gray',fontSize:'1.5rem'}}>Movie not found</p>
    )}
  </div>

  );
};

export default MainPage;