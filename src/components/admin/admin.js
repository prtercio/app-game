import { useParams } from "react-router";

function Admin (){
    const { id } = useParams();
    
    return (
        <h4>Admin {id}</h4>
    )
}
export default Admin;