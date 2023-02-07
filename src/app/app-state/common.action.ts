
import { createAction, props } from '@ngrx/store';
import { List } from './entity';

export const GET_List = '[List] Get List';
export const GET_List_SUCCESS = '[List] Get List Success';
export const GET_List_FAILURE = '[List] Get List Failure';


export const getList = createAction(
  GET_List
);

export const getListSuccess = createAction(
  GET_List_SUCCESS,
  props<any>()
);

export const getListFailure = createAction(
  GET_List_FAILURE,
  props<{any}>()
);
