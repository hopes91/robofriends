import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid #66c6ff', height: '800px', marginTop: '10px', paddingTop: '10px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;