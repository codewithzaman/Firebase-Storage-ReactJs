import React,{useState,useEffect} from 'react';
import { storage } from './firebaseConfig';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
const Storage = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage,'images/')
    const uploadImage = ()=>{
        if (imageUpload==null) return;
        const imageRef = ref(storage,`images/${imageUpload.name+v4()}`);
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert('Image Uploaded')
        })
    }
    useEffect(() => {
    listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
        })
    })
    }, [])
    
  return (
    <div>
      <h1>Firebase Storage Tutorial</h1> <br/>
      <input 
      type="file"
      onChange={(event)=>{setImageUpload(event.target.files[0])}}
      />
      <button onClick={uploadImage}>Upload</button>
      {imageList.map((url)=>{
        return <img src={url}/>
      })}
    </div>
  )
}

export default Storage
