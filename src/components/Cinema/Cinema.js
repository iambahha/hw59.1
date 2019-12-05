import React, {Fragment} from 'react';
import './Cinema.css';
import ChangeCinema from "../Cinema/ChangeCinema/ChangeCinema";

const Cinema = props => {
	return (
		<Fragment>
			<h1>The cinemas to watch later:</h1>
			<ul className="cinema-list" >
				{props.list.map(movie=>(
					<ChangeCinema
						key={movie.id}
						id={movie.id}
						title={movie.title}
						changeTitle={event => props.changeTitle(event, movie.id)}
						removeMovie={() => props.removeMovie(movie.id)}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default Cinema;