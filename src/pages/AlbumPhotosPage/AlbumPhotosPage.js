import React, {useEffect, useState} from "react";

import {useParams} from "react-router";
import {photosService} from "../../services/services";
import Photo from "../../components/Photo/Photo";

const AlbumPhotosPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        photosService.getById(albumId).then(value => setPhotos([...value]))
    }, [albumId]);

    console.log(photos);

    return (
        <div>
            <h3>Photos</h3>
            <div>{photos && photos.map(item => <Photo key={item.id}
                                                      photo={item}/>)}
            </div>

        </div>
    );
};

export default AlbumPhotosPage;