import { useState } from "react";
import FormCreate from "./formCreate";
import {helpHttp} from "../helpHttp/helpHttp";
import Loader from "./utils/Loader";
import Message from "./utils/Message";
import { Link } from "react-router-dom";

function GameCreate (){
    const [db, setDb] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    //const { id } = useParams();
    const [id, setId] = useState({});
    

    let api = helpHttp();
    let url = "http://127.0.0.1:8000/api/v1/gameCreate/";
   

    const createData = (data) => {
        setLoading(true);
        // (...) los tres puntos trae todo lo que ya está en la DB, y los combina con "data"
        //setDb([...db, data]);
        let options = {
            body: data,
            headers: { "Content-type": "application/json"},
          };
      
          api.post(url, options).then((res) => {
            //console.log(res);
            if (!res.err) {
                console.log(res);
               setDb([db, res]);
               setId(res.senha);
               console.log(id)
               setLoading(false);
            } else {
              setError(res);
              console.log("erro ", res);
            }
          });
    }

    const volverCrear = () =>{
        setLoading(false);
        setDb({})
    }

    return(
        <>
            <div className="inicio">
                <div className="card">
                    {db.length === undefined && 
                        <div>
                            <h4>Crear Sesión</h4>
                            <FormCreate createData={createData}/>                            
                        </div>
                    }
                    {loading && <Loader />}
                    {error && <Message error={error} />}
                    {db.length > 0 && 
                        <div>            
                            <div>
                                      
                                <h3>Game: {db.map(data=> data.name)}</h3>
                                <h3>Clave: {db.map(data=> data.senha)}</h3>
                                <h5>Link para participantes:</h5>
                                <p>http://localhost:3000/participante/{db.map(data=> data.senha)}</p>
                            </div>
                            <div> 
                                <button onClick={volverCrear}>Volver a crear</button>
                               <li><Link to={`/play/inicioPreguntas/${id}`} className="play-button" >Iniciar Preguntas</Link></li>
                            </div>     
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default GameCreate;