import React from 'react'
import './Post.css'
const Post = ({id,user,username,caption,imageUrl}) => {
    return (
        <div className='post'>
            <div className="post__header">
            <img src="" alt= "UserImage"/>
            <h3>{username}</h3>
            </div>
            <img className="post__image"src={imageUrl} alt="postImage"/>
            <h4 className='post__test'>{caption}</h4>
            <form className="post__comment box">
                <input className="post__input" placeholder="Add comment.." type="text"/>
                <button type='submit' className="post__button">Post</button>
            </form>
        </div>
    )
}

export default Post
