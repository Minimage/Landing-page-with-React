import React from "react";

//importing other componets

import Card from "./Card";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<Jumbotron></Jumbotron>
			<Card></Card>
			<Footer></Footer>
		</div>
	);
};

export default Home;
