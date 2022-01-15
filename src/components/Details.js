import React, {useEffect, useState} from "react";

import {userService} from "../services/users.service";
import './Details.css'

const Details = ({userId, showPosts}) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        userService.getById(userId)
            .then(user => setUserInfo(user))
    }, [userId]);

    return (
        <div className={'details'}>
            <div>{userInfo.id}
                <h5>{userInfo.name}</h5>
                <h6>{userInfo.username}</h6>
                Email -- {userInfo.email}
                <div> Address -- {userInfo.address?.city}
                    {userInfo.address?.street}
                    {userInfo.address?.suite}
                    {userInfo.address?.zipcode}
                    <div>
                        Geo -- {userInfo.address?.geo.lat}
                        {userInfo.address?.geo.lng}
                    </div>
                </div>
                <div>
                    Company -- {userInfo.company?.name}
                    {userInfo.company?.catchPhrase}
                    {userInfo.company?.bs}
                </div>
                Phone -- {userInfo.phone}
                <div>Website -- {userInfo.website}</div>
            </div>
            <button className={'button_details'} onClick={() => showPosts(true)}>Get posts</button>
        </div>
    );
};

export default Details;