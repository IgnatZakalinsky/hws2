const initState = {
    isLoading: false,
}

export const loadingReducer = (state:StoreType = initState, action: LoadingActionType): StoreType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING' : {
            const newState = {...state}
            if (newState.isLoading) {
                newState.isLoading = false
            } else {
                newState.isLoading = true
            }
            return newState
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
export type StoreType = {
    isLoading:boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
