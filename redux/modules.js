export default function(state={ username: 'carlos'}, action){
  switch(action.type){
    case 'setUsername':
      return {
        ...state,
        username: action.payload.username
      }
    case 'show':
      return {
        ...state,
        show: true
      }

    case 'dismiss':
      return {
        ...state,
        show: false
      }
  }
  return state;
}

export function setUser(username){
  return {
    type: 'setUsername',
    payload: {
      username,
    }
  }
}

export function showMsg(doShow){
  console.log('show',doShow)
  return {
    type: doShow? 'show': 'dismiss'
  }
}