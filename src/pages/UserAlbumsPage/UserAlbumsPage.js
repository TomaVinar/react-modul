import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services/services";
import {Outlet, useParams} from "react-router";
import Album from "../../components/Album/Album";
import css from "./UserAlbumsPage.css"

const UserAlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        albumsService.getById(id).then(albums => setAlbums([...albums]))
    }, [id])

    return (
        <div>
            <h3>Albums</h3>
            {albums && albums.map(album => <Album key={album.id}
                                                  id={album?.id}
                                                  userId={album?.userId}
                                                  title={album?.title}/>)}
            <div className={css.outlet}><Outlet/></div>
        </div>
    );
};

export default UserAlbumsPage;