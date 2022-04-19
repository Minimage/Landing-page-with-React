import React from "react";
import img1 from "../../img/waving-polarbear.jpeg/";

const Card = () => {
	return (
		<div className="p-2 mt-3">
			<img className="card-img-top" src={img1} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
