import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux';

class BookList extends Component{
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
				 key={book.title}
				 onClick={() => this.props.selectBook(book)}
				 className="list-group-item">
				 {book.title}
				 </li>
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

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result should be passed
	//to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

//We don't want to export the plain component
//We want to export the "container"

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
