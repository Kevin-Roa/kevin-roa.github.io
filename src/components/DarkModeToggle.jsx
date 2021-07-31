import React from 'react';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeToggle = (props) => {
	const [theme, setTheme] = useDarkMode();

	return (
		<div className={props.className}>
			<button
				className="flex relative rounded-full border-2 border-white"
				onClick={() => setTheme(theme)}
			>
				<div className="flex p-2 text-white">
					<SunFill className="mr-2" size="20" />
					<MoonFill className="ml-2" size="20" />
				</div>
				<div
					className={`w-9 h-9 rounded-full bg-white absolute transition duration-300 transform ${
						theme === 'dark' ? 'translate-x-0' : 'translate-x-full'
					}`}
				></div>
			</button>
		</div>
	);
};

export default DarkModeToggle;
