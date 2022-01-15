import {useState} from "react";

import Users from './components/Users/Users'
import Details from "./components/Details";
import Posts from "./components/Posts/Posts";
import './App.css'

function App() {
    const [userId, setUserId] = useState(null);
    const [isPostsVisible, setIsPostsVisible] = useState()

  return (
    <div>
        <div className={'main_info'}>
            <Users getUserId={setUserId}/>
            {userId && (<Details userId={userId} showPosts={setIsPostsVisible}/>)}
        </div>
        {isPostsVisible && <Posts userId={userId} />}
    </div>
  );
}

export default App;
