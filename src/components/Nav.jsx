import React, { useState } from 'react';
import {
	HouseFill,
	PersonFill,
	ArchiveFill,
	FileEarmarkTextFill,
	EnvelopeFill
} from 'react-bootstrap-icons';

const Nav = () => {
	const options = [
		{ label: 'Home', icon: HouseFill },
		{ label: 'About', icon: PersonFill },
		{ label: 'Projects', icon: ArchiveFill },
		{ label: 'Resume', icon: FileEarmarkTextFill },
		{ label: 'Contact', icon: EnvelopeFill }
	];
	const [selected, setSelected] = useState(0);
	const isSelected = (i) => (selected === i ? 'selected' : '');

	const [hovering, setHovering] = useState(false);
	const isHovering = () => (hovering ? 'hovering' : '');

	return (
		<div className="absolute left-0 z-10">
			<div
				className={`nav flex flex-col items-center justify-between py-4 pr-4 glass rounded-r-3xl overflow-hidden 
					${hovering ? 'w-full' : 'w-16'}`}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				{options.map((option, i) => (
					<button
						className={`nav-item w-full h-12 pl-5 mx-3 rounded-r-full my-1 uppercase text-center bw-text flex 						items-center font-medium 
							${isSelected(i)} ${isHovering()}`}
						onClick={() => setSelected(i)}
						key={i}
					>
						<div className={`nav-icon w-5 mr-4 ${isHovering()}`}>
							<option.icon size={20} />
						</div>
						<p className={`${hovering ? 'ml-0' : 'ml-5'}`}>{option.label}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default Nav;
