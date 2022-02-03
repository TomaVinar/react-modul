import {useReducer} from "react";

import {Cats, Dogs, FormCat} from "./components";
import FormDog from "./components/Form/FormDog";
import css from "./App.module.css"

function App() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Add_cat':
                return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
            case 'Add_dog':
                return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
            case 'Delete_cat':
                return {...state, cats: [...state.cats.filter(cat => cat.id !== action.payload.id)]}
            case 'Delete_dog':
                return {...state, dogs: [...state.dogs.filter(dog => dog.id !== action.payload.id)]}
            default:
                return {state}
        }
    }

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div className={css.main_block}>
            <div className={css.cat_form}>
                <FormCat dispatch={dispatch}/>
                <Cats cats={cats} dispatch={dispatch}/>
            </div>
            <div className={css.dog_form}>
                <FormDog dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
