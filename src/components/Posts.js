import React,{useEffect, useState} from 'react'
import InstagramEmbed from 'react-instagram-embed'
import db from '../Firebase'
import Post from './Post'
import './Posts.css'



const Posts = (currentUser) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('post').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id: doc.id,
                post:doc.data()
            })))      
        })
    
    }, [])

    return (
        <div className="posts">
            <div className="posts__left">
                {
                    posts.map(({ id, post })=>(
                        <Post postId={id} user={currentUser} 
                        username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                    ))
                }
            </div>
            <div className="post__right">
                <InstagramEmbed
                url="https://www.instagram.com/tv/CDGMMo8lO7D/?utm_source=ig_web_copy_link"
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
/>
            </div>
        </div>
    )
}

export default Posts
