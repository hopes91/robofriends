import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className='ma2 pa3 tc bg-light-blue dib br3 grow bw2 shadow-5'>
			<img alt={name} src={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
