import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title} </li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group" col-sm-4> 
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	//Take app state, and whatever object is returned is this component's props
	return {
		books: state.books // This is the connection between redux and react we needed
	};
}

//We don't want to export the plain component
//We want to export the "container"
export default connect(mapStateToProps)(BookList);