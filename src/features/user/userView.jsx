import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './user-slice'

export const UserView = () => {
  const usersRetrieved = useSelector((state) => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {usersRetrieved.loading && <div>Loading...</div>}
      {!usersRetrieved.loading && usersRetrieved.error ? <div>Error: {usersRetrieved.error}</div> : null}
      {console.log(usersRetrieved.users)}
      {!usersRetrieved.loading && usersRetrieved.users.length ? (
        <ul>
          {
            usersRetrieved.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      ) : null}
    </div>
  )
}
