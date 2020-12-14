import React, { useState } from 'react'
import './Post.css'
import {storage} from '../Firebase'
import db from '../Firebase'
const Post = ({id,user,username,userImg,caption,imageUrl}) => {
    const [text, setText] = useState('')
    const HandlePost=(e)=>{
        e.preventDefault()
        setText('')
    }
    const handleDelete = (e) =>{
        e.preventDefault()
        db.collection('posts').doc(id).remove().then(()=>{
            console.log('DONNE KHATam');
        }).catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='post'>
            <div className="post__header">
                <div className="post__headerInfo">
                <img className='post__avatar' src={userImg} alt= "UserImage"/>
                <h3>{username}</h3>
                </div>
                <div className="post__headeroptions">
                    <button onClick={handleDelete} >Delete</button>
                </div>
            </div>
            <img className="post__image"src={imageUrl} alt="postImage"/>
            <h4 className='post__caption'>{caption}</h4>
            <form className="post__commentbox">
                <input className="post__input" placeholder="Add comment.." type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button type='submit' className="post__button" onClick={HandlePost}>Post</button>
            </form> 
        </div>
    )
}

export default Post
