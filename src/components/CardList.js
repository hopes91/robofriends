import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  let allTheCards = robots.map((robot, ind) => {
    return <Card
            key={robots[ind].id} 
            id={robots[ind].id} 
            name={robots[ind].name} 
            email={robots[ind].email} 
          />
  });

  return (
    <div className='h-100'>
      {allTheCards}
    </div>
  );
}

export default CardList;
