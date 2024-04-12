"use client"

import Image from 'next/image'
import './AddReply.css'
import { useState, useEffect } from 'react'
import data from '../../../../public/data.json';

export default function AddReply({ comment, currentUser, setMyData, myData, setShowAddReply, showAddReply }) {
  useEffect(() => {
    const textArea = document.getElementById('add-reply-input');
    textArea.value = '@' + comment.user.username + ', ';
  }, []);

  const [valueReply, setValueReply] = useState('');

  const storeValueReply = (e) => {
    setValueReply(e.target.value);
  }

  const createReply = () => {
    let newData = [...myData] ;
    console.log(newData);
    let newReply = newData.comments.find(element => element.id === comment.id).replies;
    console.log(newReply);

    newReply.push(
      {
        "id": newReply.length,
        "content": valueReply,
        "createdAt": Date(),
        "score": 0,
        "replyingTo": comment.user,
        "user": {
          "image": {
            "png": "./images/avatars/image-" + currentUser + ".png",
            "webp": "./images/avatars/image-" + currentUser + ".webp"
          },
          "username": currentUser
        }
      }
    );

    // console.log(newReply);


    newData.comments.map((c) => {
      if(c.id === comment.id) {
        c.replies = newReply;
      }
    });

    setMyData(newData);

    setShowAddReply((showAddReply) => !showAddReply);
  }

  return (
    <div className='add-reply-container'>
      <Image className='current-user-image' src={'/' + currentUser.image.png} width={40} height={40} alt="user image" />
      <textarea id='add-reply-input' placeholder='Add a comment...' type='text' onChange={(e) => storeValueReply(e)} />
      <div className='send-reply' onClick={() => {
        createReply();
      }} >REPLY</div>
    </div>
  )
}
