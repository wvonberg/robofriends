import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
    <input
      className = 'pa3 br3 ba b--black  bg-lightest-green'
      type='search'
      placeholder='Search Robots'
      onChange={searchChange}
    />
    </div>
  );
}
export default Searchbox;
