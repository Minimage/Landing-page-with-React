import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(true);

	return (
		<nav>
			{toggleMenu && (
				<ul className="list">
					<li className="items">Home</li>
					<li className="items">Services</li>
					<li className="items">Contact</li>
				</ul>
			)}

			<button onClick={() => {}} className="btn">
				BTN
			</button>
		</nav>
	);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};
}
