import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const SingleUser = (props) => {
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    const singleUser = props.allUsers.find((post) => {
        return id === post.id
    })
    // console.log(singlePost)
    // console.log(props.allPosts)

    const handleDelete = async () => {
        const response = await axios.delete(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`)
        console.log(response)
        //since our data has changed, state needs to change
        /**
         * update state
         */

        navigate('/users')


    }

    if(!singlePost){
        return null
    }


    return(
        <div className="red">
            <h1>Single Post</h1>
            <h2>
                {singleUser.title}
            </h2>
            <p>{singleUser.body}</p>
            <hr/>

            <button onClick={() => {handleDelete()}}>Delete</button>
            

        </div>
    )
}

export default SingleUser