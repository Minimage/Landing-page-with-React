import React from "react";

const Card = (props) => {
	return (
		<div className="p-2 mt-3 carder">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.tittle}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.BtnText}
				</a>
			</div>
		</div>
	);
};

export default Card;
