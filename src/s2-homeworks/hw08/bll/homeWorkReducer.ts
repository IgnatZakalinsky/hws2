import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

    export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
        switch (action.type) {
          case 'sort': {
            const sortedState = [...state];
            sortedState.sort((a, b) => {
              if (action.payload === 'up') {
                return a.name.localeCompare(b.name) || a.age - b.age;
              } else if (action.payload === 'down') {
                return b.name.localeCompare(a.name) || b.age - a.age;
              } else {
                return 0;
              }
            });
            return sortedState;
          }
          case 'check': {
            const filteredState = state.filter((user) => {
              return user.age >= action.payload;
            });
            return filteredState;
          }
          default:
            return state;
        }
      }
