import React, {useState} from "react";

import "./Form.css"

const Form = ({usersList}) => {
    
    const [form, setForm] = useState({name:'', username: '', email: ''});
    
    const formHandler = (e) => {
      const data = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...data});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        usersList(form);
    }

    return (
        <div>
            <form>
                <label>NAME: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>USERNAME: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>EMAIL: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>Filter</button>
            </form>
            
        </div>
    );
};

export default Form;