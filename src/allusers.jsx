import { Link } from 'react-router-dom'

function AllUsers({allUsers}) {

    return (
        <div>
            <h2>All Users</h2>
            {
            allUsers.map((user) => {
                return(
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <li>{user.username}</li>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default AllUsers