import React from 'react';
import './Form.css';

const Form = props => {
	return (
		<form className="cinema-form" onSubmit={event => props.formSubmit(event)}>
			<label className="title">Add movie:</label>
			<input type="text" name="title" id="title" placeholder="ADD FAVORITE FILM" />
			<button type="submit" className="btn">Add</button>
		</form>
	);
};

export default Form;