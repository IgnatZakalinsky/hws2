export const initState = {
    themeId: 1,
}

interface ThemeAction {
    type: 'SET_THEME_ID',
    id: number
  }

export const themeReducer = (state = initState, action: ThemeAction): typeof initState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeAction => ({ type: 'SET_THEME_ID', id }) // fix any
