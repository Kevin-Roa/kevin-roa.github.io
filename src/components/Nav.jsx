import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	HouseFill,
	PersonFill,
	ArchiveFill,
	FileEarmarkTextFill,
	EnvelopeFill
} from 'react-bootstrap-icons';

const Nav = () => {
	const options = [
		{ label: 'Home', icon: HouseFill, link: '/' },
		{ label: 'About', icon: PersonFill, link: '/about' },
		{ label: 'Projects', icon: ArchiveFill, link: '/projects' },
		{ label: 'Resume', icon: FileEarmarkTextFill, link: '/resume' },
		{ label: 'Contact', icon: EnvelopeFill, link: '/contact' }
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
					<Link
						className={`nav-item w-full h-12 pl-5 mx-3 rounded-r-full my-1 uppercase text-center text-bw flex 						items-center font-medium 
							${isSelected(i)} ${isHovering()}`}
						onClick={() => setSelected(i)}
						to={option.link}
						key={i}
					>
						<div className={`nav-icon w-5 mr-4 ${isHovering()}`}>
							<option.icon size={20} />
						</div>
						<p className={`${hovering ? 'ml-0' : 'ml-5'}`}>{option.label}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Nav;
