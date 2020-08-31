import * as Types from '../types.js'

export const initialState = {
  term: 'London',
  table: [],
  weather: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE_WEATHER: {
      return {
        ...state,
        error: null,
        weather: action.payload,
      }
    }
    case Types.CHANGE_TERM: {
      return {
        ...state,
        term: action.payload,
      }
    }
    case Types.ADD_TO_TABLE: {
      return {
        ...state,
        table: [...state.table, ...action.payload],
      }
    }
    case Types.CHANGE_TABLE: {
      return {
        ...state,
        table: action.payload,
      }
    }
    case Types.CHANGE_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case Types.REMOVE_TABLE_ITEM: {
      let i = action.payload
      return {
        ...state,
        table: [...state.table.slice(0, i), ...state.table.slice(i + 1)],
      }
    }

    default:
      return state
  }
}
