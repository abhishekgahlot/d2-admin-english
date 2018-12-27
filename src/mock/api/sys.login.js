const userDB = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'admin' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'editor' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'user1' }
]

export default [
  {
    path: '/api/login',
    method: 'post',
    handle ({ body }) {
      const user = userDB.find(e => e.username === body.username && e.password === body.password)
      if (user) {
        return {
          code: 0,
          msg: 'Login Successful.',
          data: {
            ...user,
            token: '8dfhassad0asdjwoeiruty'
          }
        }
      } else {
        return {
          code: 401,
          msg: 'The username and password is incorrect.',
          data: {}
        }
      }
    }
  }
]
