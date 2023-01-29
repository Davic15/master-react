export const GameReducer = (state = [], action) => {
    switch (action.type) {
        case 'create':
            return[...state, action.payload];

        case 'delete':
            return state.filter(game => game.id !== action.payload)
        
        case 'update':
            let index = state.findIndex(game => game.id === action.payload.id)
            state[index] = action.payload;
            return [...state];

        default:
            return state;
    }
}