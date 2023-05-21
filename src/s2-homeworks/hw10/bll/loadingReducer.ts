type loadingState = {
    isLoading: boolean;
} 

const initState: loadingState = {
    isLoading: false,
}


export type ActionType = LoadingActionType
export const loadingReducer = (state = initState, action: ActionType): loadingState => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
