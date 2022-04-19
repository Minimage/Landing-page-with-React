import React from "react";

const NavBar = () => {
	return (
		<footer className="navbar-default navbar-fixed-bottom">
			<div className="container-fluid">
				<div className="row">
					<div className="w-100">
						<div className="d-flex justify-content-around w-75 top">
							<p className="logo">#PolorBear</p>
							<ul className="d-flex">
								<li className="page">Icon1</li>
								<li>Icon2</li>
								<li>Icon3</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default NavBar;
