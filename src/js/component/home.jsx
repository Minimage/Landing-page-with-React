//This will allow me to start npm in VS code
//npm run start doesnt seem to work
//npm start -- --port 8000
import React from "react";
import image1 from "../../img/img1.jpg";
import image2 from "../../img/img2.2.jpg";
import image3 from "../../img/img3.2.jpg";
import image4 from "../../img/img4.1.jpg";

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
				<div className="card-item d-flex justify-content-center">
					<Card
						image={image1}
						tittle={"Waving Bear"}
						text={""}
						BtnText={"Go Somewhere"}></Card>
					<Card
						image={image2}
						tittle={"Cuddle Bear"}
						text={""}
						BtnText={"Go Somewhere"}></Card>
					<Card
						image={image3}
						tittle={"Cute Bear"}
						text={""}
						BtnText={"Go Somewhere"}></Card>
					<Card
						image={image4}
						tittle={"Lonely Bear"}
						text={""}
						BtnText={"Go Somewhere"}></Card>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
