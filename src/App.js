import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";

function App() {
    const [trigger, setTrigger] = useState(null);
    const [updatedCar, setUpdatedCar] = useState({});

    return (
        <div>
            <Form update={setTrigger} updatedCar={updatedCar}/>
            <Cars trigger={trigger} update={setTrigger} setUpdatedCar={setUpdatedCar}/>
        </div>
    );
}

export default App;
