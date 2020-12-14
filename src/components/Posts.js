import React,{useEffect, useState} from 'react'
import InstagramEmbed from 'react-instagram-embed'
import db from '../Firebase'
import Post from './Post'
import './Posts.css'
import { useStateValue } from './StateProvider'



const Posts = () => {
    const [{user},dispatch] = useStateValue()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
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
                        <Post id={id} user={user} 
                        username={post.username} userImg={post.userimg} caption={post.caption} imageUrl={post.imageUrl} email={post.useremail} />
                    ))
                }
            </div>
            <div className="post__right">
            <InstagramEmbed
                url='https://www.instagram.com/p/CGR1f5qFSon/'
                maxWidth={370}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
            </div>
        </div>
    )
}

export default Posts
