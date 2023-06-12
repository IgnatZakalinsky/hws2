import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state.sort((a,b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                state.sort((a,b) => a.name < b.name ? 1 : -1)
            }

            return state // need to fix
        }
        case 'check': {
            const rest = state.filter(a=> a.age > action.payload)
            return rest // need to fix
        }
        default:
            return state
    }
}
