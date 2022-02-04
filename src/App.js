import {Form} from "./components";
import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {CommentsPage, PostsPage, UsersPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'form'} element={<Form/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
