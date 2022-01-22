import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router";
import {Link} from "react-router-dom";

import {userService} from "../../services/axios.service";
import "./UserDetailsPage.css"

const UserDetailsPage = () => {
    const {id} = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const {state} = useLocation();
    console.log(state);

    useEffect(() => {
        if (state) {
            setUserDetails(state);
            return
        }
        userService.getById(id).then(value => setUserDetails({...value}))
    }, [id, state])

    return (
        <div>
            {userDetails && (
                <div className={'user'}>
                    <div>Id: {userDetails.id}</div>
                    <h2>Name: {userDetails.name}</h2>
                    <div>Username: {userDetails.username}</div>
                    <div>Email: {userDetails.email}</div>
                    <div>Address: {userDetails.address?.city}
                        {userDetails.address?.suite}
                        {userDetails.address?.street}
                        {userDetails.address?.zipcode}
                        {userDetails.address?.geo.lat}
                        {userDetails.address?.geo.lng}
                    </div>
                    <div>Company: {userDetails.company?.name}
                        {userDetails.company?.catchPhrase}
                        {userDetails.company?.bs}
                    </div>
                    <div>Phone: {userDetails.phone}</div>
                    <div>Website: {userDetails.website}</div>
                    <Link to={'posts'} state={state}><button className={'posts_btn'}>Get users posts</button></Link>
                </div>
            )}
            <div className={'outlet'}><Outlet/></div>
        </div>
    );
};

export default UserDetailsPage;