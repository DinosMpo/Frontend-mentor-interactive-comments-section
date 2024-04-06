import AddComment from "./comps/AddComment/AddComment";
import CommentsContainer from "./comps/CommentsContainer/CommentsContainer";
import data from '../../public/data.json';

export default function Home() {
  const user = data.currentUser;

  return (
    <main className='screen-container'>
      <div className="main-container">
        <CommentsContainer comments={data.comments} currentUser={user}/>

        <AddComment user={user}/>

        {/* <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div> */}
      </div>
    </main>
  );
}