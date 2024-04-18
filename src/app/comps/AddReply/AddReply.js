"use client"

import Image from 'next/image'
import './AddReply.css'
import { useState, useEffect } from 'react'
import setLocalStorage from '@/app/lib/localStorage'

export default function AddReply({ comment, currentUser, setMyData, myData, setShowAddReply, showAddReply }) {
  useEffect(() => {
    const textArea = document.getElementById('add-reply-input');
    textArea.value = '@' + comment.user.username + ', ';
  }, []);

  const [valueReply, setValueReply] = useState('');

  const storeValueReply = (e) => {
    let value = e.target.value;
    setValueReply(value.substr(comment.user.username.length + 3));
  }

  const createReply = () => {
    let newData = { ...myData };
    let newReply = newData.comments.find(element => element.id === comment.id).replies;
    let currentDate = new Date();
    console.log("currentDate:");
    console.log(currentDate);
    let reply = {
      "id": newReply.length,
      "content": valueReply,
      "createdAt": currentDate,
      "score": 0,
      "replyingTo": comment.user.username,
      "user": {
        "username": currentUser.username,
        "image": {
          "png": "./images/avatars/image-" + currentUser.username + ".png",
          "webp": "./images/avatars/image-" + currentUser.username + ".webp"
        },
      }
    };

    // console.log(reply);

    newReply.push(reply);

    setMyData(newData);
    setShowAddReply((showAddReply) => !showAddReply);
    setLocalStorage(JSON.stringify(newData));
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
