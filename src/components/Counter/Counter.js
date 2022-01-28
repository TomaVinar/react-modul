import React, {useReducer} from "react";

import css from "./Counter.module.css"

const Counter = () => {

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {...state, counter1: state.counter1 + 1}
            case  'decrement':
                return {...state, counter1: state.counter1 - 1}
            case 'reset':
                return {...state, counter1: action.payload}
            case 'increment2':
                return {...state, counter2: state.counter2 + 1,}
            case 'decrement2':
                return {...state, counter2: state.counter2 - 1}
            case 'reset2':
                return {...state, counter2: action.payload}
            case 'increment3':
                return {...state, counter3: state.counter3 + 1}
            case 'decrement3':
                return {...state, counter3: state.counter3 - 1}
            case 'reset3':
                return {...state, counter3: action.payload}
            default:
                throw new Error('Error message')
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0})

    return (
        <div className={css.wrap}>

            <div className={css.block_wrap}>
                {state.counter1}
                <div className={css.button_wrap}>
                    <button onClick={() => {
                        dispatch({type: 'increment'})
                    }}>Inc
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'decrement'})
                    }}>Dec
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'reset', payload: 0})
                    }}>Reset
                    </button>
                </div>
            </div>

            <div className={css.block_wrap}>
                {state.counter2}
                <div className={css.button_wrap}>
                    <button onClick={() => {
                        dispatch({type: 'increment2'})
                    }}>Inc
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'decrement2'})
                    }}>Dec
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'reset2', payload: 0})
                    }}>Reset
                    </button>
                </div>
            </div>

            <div className={css.block_wrap}>
                {state.counter3}
                <div className={css.button_wrap}>
                    <button onClick={() => {
                        dispatch({type: 'increment3'})
                    }}>Inc
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'decrement3'})
                    }}>Dec
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'reset3', payload: 0})
                    }}>Reset
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Counter;