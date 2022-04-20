//This will allow me to start npm in VS code
//npm run start doesnt seem to work
//npm start -- --port 8000
import React from "react";
import propTypes from "prop-types";
import logo from "../../img/img1.jpg";

import Card from "./Card";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="">
			<NavBar></NavBar>
			<div className="MyContent mx-auto">
				<Jumbotron></Jumbotron>
				<div className="d-flex justify-content-center">
					<Card image={rigoImage}></Card>
					<Card image={logo}></Card>
					<Card image={logo}></Card>
					<Card image={logo}></Card>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
