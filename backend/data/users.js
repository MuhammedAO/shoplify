import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('test123', 10),
    isAdmin: true
  },
  {
    name: 'User one',
    email: 'userone@example.com',
    password: bcrypt.hashSync('test123', 10),
  },
  {
    name: 'User two',
    email: 'usertwo@example.com',
    password: bcrypt.hashSync('test123', 10), 
  },
]

export default users