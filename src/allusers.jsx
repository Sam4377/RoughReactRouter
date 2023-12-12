import { Link } from 'react-router-dom';

function AllUsers({ allUsers }) {
  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllUsers;
