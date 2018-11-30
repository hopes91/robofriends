import React from 'react';

const Scroll = ({ children }) => {
	return (
		<div className='w-100 h-75 pa2 overflow-y-scroll absolute bottom-0 left-0'>
			{children}
		</div>
	);
}

export default Scroll;
