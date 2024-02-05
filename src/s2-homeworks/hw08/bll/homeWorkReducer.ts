import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {

  const copyState = [...state]

  switch (action.type) {
    case 'sort': {
      if (action.payload === 'up') {
        copyState.sort((a, b) => a.name < b.name ? -1 : 1)
      }
      if (action.payload === 'down') {
        copyState.sort((a, b) => a.name < b.name ? 1 : -1)
      }
      return copyState
    }
    case 'check': {
      return copyState.filter(u => u.age >= action.payload)
    }
    default:
      return state
  }
}
