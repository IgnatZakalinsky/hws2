const initState = {
    themeId: 1,
}
type InitStateType = {
    themeId:number
}
type ActionType = SetIdType

type SetIdType = {
    type:'SET_THEME_ID'
    id:number
}
export const themeReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): SetIdType => ({ type: 'SET_THEME_ID', id }) // fix any
