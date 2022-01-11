import {useEffect, useState} from "react";
import "./Users.css";
import User_component from "./User_component";

const Users = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users =>
                    setUsersList(users));
        },
        []);
    return (
        <div>
            {usersList.map(value => <User_component
                key={value.id}
                id = {value.id}
                name = {value.name}
                username = {value.username}
                phone = {value.phone}
                city = {value.address.city}
                street = {value.address.street}
                suite = {value.address.suite}
                zipcode = {value.address.zipcode}
                lat = {value.address.geo.lat}
                lng = {value.address.geo.lng}
                website = {value.website}
                companyName = {value.company.name}
                catchPhrase = {value.company.catchPhrase}
                bs = {value.company.bs}/>)};
        </div>
    )
}

export default Users