import React from 'react';

const MainCard = (props) => {
	return (
		<div
			className={`rounded-3xl p-8 glass filter drop-shadow-lg ${props.className}`}
			style={props.style}
		>
			{props.children}
		</div>
	);
};

export default MainCard;
