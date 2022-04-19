import React from "react";

const Jumbotron = () => {
	return (
		<div>
			<div className="row">
				<div className="w-100 mx-auto ">
					<div className="jumbotron">
						<h1 className="display-4">Save the Polar Bears</h1>
						<p className="lead">
							This is a simple hero unit, a simple jumbotron-style
							component for calling extra attention to featured
							content or information.
						</p>
						<hr className="my-4" />
						<p>
							It uses utility classNamees for typography and
							spacing to space content out within the larger
							container.
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
