import React, {useReducer} from "react";

import Cat from "../Cat/Cat";

const CatForm = () => {

    function reducer(state, action) {
        switch (action.type) {
            case 'catName':
                console.log([...state, {id: new Date().getTime(), name: action.payload}])
                return [...state, {id: new Date().getTime(), name: action.payload}]
            default:
                throw new Error('Error')
        }
    }

    const [state, dispatch] = useReducer(reducer, [{id: '', name: ''}])

    const reducerInputChange = (e) => {
        e.preventDefault()
        dispatch({
            type: 'catName',
            payload: e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label> Add cat: <input type="text" name={'name'} value={state.name}/></label>
                <button onClick={reducerInputChange}>SAVE</button>
            </form>
            {!!state && state.map(cat => <Cat key={cat.id}
                                            id={cat.id}
                                            cat={cat}/>)}
        </div>
    )
}

export default CatForm;