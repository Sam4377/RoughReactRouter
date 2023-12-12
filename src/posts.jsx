

function AllPosts({ allPosts }) {
    return(
        <div>
        <h1>All Posts</h1>
        {
            allPosts.map((post) =>{
                return(
                    <li key={post.id}>ID:{post.id} {post.body}</li>
                )
            })
        }
        </div>
    )
}
export default AllPosts