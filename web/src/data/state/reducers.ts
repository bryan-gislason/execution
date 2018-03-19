import { Reducer } from 'redux';

const defaultState = {
  header: "world!"
};

export const someAppState: Reducer<any> = (state: any = defaultState) => {
  return state;
};
