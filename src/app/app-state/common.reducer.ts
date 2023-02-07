import { Action, createReducer, on } from '@ngrx/store';
import { List } from './entity';
import * as appActions from './common.action';
import * as storage from './state/storage'

export interface State {
  list?: List[];
  currentList?: List;
  deleteListId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  list: storage.getItem('list'),
  currentList: {},
  deleteListId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const appReducer = createReducer(
  initialState,

  // getList
  on(appActions.getList, (state) => ({...state, isLoading: true})),
  on(appActions.getListSuccess, (state, result) => {
    console.log('resultresult, result')
    return {list: result, isLoading: false, isLoadingSuccess: true}
  })
);

export function reducer(state: State | undefined, action: Action): any {
  console.log('reducer action', action)
  return appReducer(state, action);
}

export const getList = (state: State) => {
  console.log('getList state', state)
  return {
    list: state.list,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};