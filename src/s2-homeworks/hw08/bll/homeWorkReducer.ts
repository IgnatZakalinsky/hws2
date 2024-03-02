import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    let newState = [...state]
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                newState.sort((a,b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                newState.sort((a,b) => a.name > b.name ? -1 : 1)
            }

            return newState // need to fix
        }
        case 'check': {
            newState = state.filter(a=> a.age > action.payload)
            return newState // need to fix
        }
        default:
            return state
    }
}
