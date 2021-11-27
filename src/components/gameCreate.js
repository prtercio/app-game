import { useState} from "react";
import FormCreate from "./formCreate";

function GameCreate (){
    const [db, setDb] = useState(null);
    const createData = (data) => {
        // (...) los tres puntos trae todo lo que ya está en la DB, y los combina con "data"
        //setDb([...db, data]);
        console.log(data)
    }
    return(
        <>
            <h4>Criando</h4>
            <FormCreate createData={createData} />
        </>
    )
}

export default GameCreate;