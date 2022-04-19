import React from "react";

const NavBar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-secondary">
			<div className="container-fluid">
				<div className="row w-100">
					<div className="w-100">
						<div className="d-flex justify-content-around top">
							<p className="logo">#PolorBear</p>
							<ul className="d-flex">
								<li className="page">Home</li>
								<li>About</li>
								<li>Services</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
