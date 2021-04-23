initial = {
  name: '',
  last_name: '',
  email: '',
  avatar:  ''
};

const auth = (state = initial, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return { name: '', avatar: '' }
    case 'EDITPROFILE':
      return action.user
    default:
      return state
  }
}

export default auth
