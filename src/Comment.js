import React, { Component } from 'react';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <div className="comment">{this.props.commentText}</div>;
	}
}
export default Comment;
