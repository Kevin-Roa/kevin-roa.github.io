import React from 'react';
import ReactParticles from 'react-tsparticles';

const Particles = () => {
	const options = {
		fpsLimit: 60,
		particles: {
			color: {
				value: '#ffffff'
			},
			links: {
				color: '#ffffff',
				distance: 150,
				enable: true,
				opacity: 0.2,
				width: 1
			},
			move: {
				direction: 'none',
				enable: true,
				outMode: 'out',
				random: false,
				speed: 0.8,
				straight: false
			},
			number: {
				density: {
					enable: true,
					value_area: 800
				},
				value: 60
			},
			opacity: {
				value: 0.3
			},
			shape: {
				type: 'circle'
			},
			size: {
				random: true,
				value: 3
			}
		},
		detectRetina: true
	};

	return (
		<ReactParticles
			className="absolute top-0 left-0 w-full h-full"
			id="tsparticles"
			options={options}
		/>
	);
};

export default Particles;
