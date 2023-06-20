

export type initStateType = {
    themeId: '1' | '2' | '3';
  }
  
  export const initState: initStateType = {
    themeId: '1',
  };
  
  interface ThemeAction {
    type: 'SET_THEME_ID';
    id: '1' | '2' | '3';
  }
  
  export const themeReducer = (
    state = initState,
    action: ThemeAction
  ): initStateType => {
    switch (action.type) {
      case 'SET_THEME_ID':
        return { ...state, themeId: action.id };
      default:
        return state;
    }
  };
  
  export const changeThemeId = (id: '1' | '2' | '3'): ThemeAction => ({
    type: 'SET_THEME_ID',
    id,
  });