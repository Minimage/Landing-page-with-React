import React from "react";

const Jumbotron = () => {
	return (
		<div className="mt-4 jumb">
			<div className="row">
				<div className="w-100 mx-auto ">
					<div className="jumbotron">
						<h1 className="display-4">Save the Polar Bears</h1>
						<p className="lead">
							By making this commitment to save the polar bears,
							you are also contributing to saving the planet by
							signle handedly obliterating Globle warming which
							plays a hudge role in destroying their homes
						</p>
						<hr className="my-4" />
						<p>
							Click below to learn how you can help make a change
							today to become the hero of tomorrow
						</p>
						<p className="lead">
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Learn more
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Jumbotron;
