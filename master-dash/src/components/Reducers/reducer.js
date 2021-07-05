const initialState = {
    title: 'Home',
    btitle: 'Home',
}

const reducer = (state = initialState, action) => {
    if (action.type === 'TITLE') {
        return {
            ...state,
            title: action.title,
            btitle: action.btitle
        }
    }
    console.log("ACTION:",action)
    return state;
}

export default reducer;