const initialstate = 0;

const changeNumber = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT" : return state + 100;
        case "DECREMENT" : return state - 1;
        default: return state;
    }
}

export default changeNumber;