import Users from "./components/Users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import "./App.css";

function App () {

    return (
        <div>
            <div className = {'content'}>
                <Users/>
                <Posts/>
            </div>
            <div>
                <Comments/>
            </div>
        </div>
    )
}

export default App;
