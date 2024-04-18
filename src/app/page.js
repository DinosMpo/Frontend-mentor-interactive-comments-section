"use client"

import { useState, useEffect } from 'react'
import AddComment from "./comps/AddComment/AddComment";
import CommentsContainer from "./comps/CommentsContainer/CommentsContainer";
import data from '../../public/data.json';

export default function Home() {
  useEffect(() => {
    let value;

    if (localStorage.getItem('frontend-mentor-comments') === null) {
      localStorage.setItem('frontend-mentor-comments', JSON.stringify(data));
      setDataLoaded(true);
    } else {
      setMyData(JSON.parse(localStorage.getItem('frontend-mentor-comments') || ""));
      setDataLoaded(true);
    }
  }, []);

  const [myData, setMyData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const user = myData.currentUser;

  console.log(myData);

  return (
    <main className='screen-container'>
      {
        dataLoaded ?

          <div className="main-container">
            <CommentsContainer comments={myData.comments} currentUser={user} setMyData={setMyData} myData={myData} />

            <AddComment user={user} />

            {/* <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div> */}
          </div>
          :
          <div>loading</div>
      }
    </main>
  );
}