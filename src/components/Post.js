import React, { useState } from 'react'
import './Post.css'
import {storage} from '../Firebase'
import db from '../Firebase'
import { useStateValue } from './StateProvider'
const Post = ({id,username,userImg,caption,imageUrl,email}) => {
    const [text, setText] = useState('')
    const [{user}, dispatch] = useStateValue()
    let postedby="Guest"
    try{
        postedby = user.email
    }catch{
        postedby=postedby
    }

    const HandlePost=(e)=>{
        e.preventDefault()
        setText('')
    }
    const handleDelete = (e) =>{
        e.preventDefault()
        db.collection('posts').doc(id).delete().then(()=>{
            
        }).catch(error =>{
            console.error("There was an error : ",error);
        })

        storage.refFromURL(imageUrl).delete().then(()=>{
            console.log("ZALRE RERERERERER")
        }).catch(error =>{
            console.error("There was an error : ",error)
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
                    {postedby == email ? <button onClick={handleDelete} >Delete</button> :
                    ""}
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
