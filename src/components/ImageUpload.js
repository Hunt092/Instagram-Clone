import React, {useState, useEffect} from 'react'
import './ImageUpload.css'
import Button from '@material-ui/core/Button'
import {storage} from '../Firebase'
import db from'../Firebase'
import firebase from'firebase'
import { useStateValue } from './StateProvider'



const ImageUpload = () => {
    const [{user, toUpload},dispatch] = useStateValue();
    const [caption ,setCaption] = useState('')
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [active , setActive] = useState(false);


    const handleChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
        else{
            setImage(null)
        }
    }

    console.log(user);

    const handleUpload = () => {
        setActive(true)
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                //progress function...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (err) => {
                //error functon
                console.log(err)
                alert(err.message)
            },
            () => {
                //complete function ...


                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    //post image inside the db
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: user.displayName,
                        userimg : user.photoURL,
                    })
                    setProgress(0)
                    setCaption('')
                    setImage(null)
                    dispatch({
                        type: "UPLOAD_CHECK",
                        state: false
                    })
                })
            }
        )
    }
    useEffect(() => {
      
    }, [image])

    return (
        <div className="imageupload">
            {active && <progress className="imageupload__progress" value={progress} max='100'/>}

            <input className='imageupload__caption' type='textarea' value={caption} onChange={(e) => setCaption(e.target.value)} maxLength={250} placeholder="Enter a caption"/>

            <input className='imageupload__file' type="file" onChange={handleChange} required/>
            {image ? <Button onClick={handleUpload}>Upload</Button> : " "
}
        </div>
    )
}

export default ImageUpload
