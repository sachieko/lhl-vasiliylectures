import React, { useState } from 'react';
import './comment.css'

function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;
	console.log(props);
	// $('#buttonCLick').on('click', (evt) => {/..})
	const onLikeClick = (evt) => {
		console.log(evt)
		props.handleClick(id, 'likes');
	}

	const onDislikeClick = () => {
		props.handleClick(id, 'dislikes');
	}

	// $('#button').on('click', (function))
	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={(evt) => onLikeClick(evt)}>Like {likes}</button>
				<button onClick={onDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;