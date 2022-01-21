import React from "react";
import {Routes, Route} from "react-router-dom"

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserPage from "./pages/UserPage/UserPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import UserAlbumsPage from "./pages/UserAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "./pages/AlbumPhotosPage/AlbumPhotosPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<AlbumPhotosPage/>}/>
                        </Route>
                        <Route path={':id'} element={<UserPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;