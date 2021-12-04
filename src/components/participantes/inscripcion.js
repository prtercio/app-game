
import { Fragment, useState } from "react";
//import { helpHttp } from "../../helpHttp/helpHttp";
import Loader from "../utils/Loader";
import Message from "../utils/Message";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const initialDorm = {
    name: "",
    senha: ""  
}


function Inscripcion(){  
    const [form, setForm] = useState(initialDorm);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [idGame, setIdGame] = useState(0);
    const [idParticipante, setIdParticipante] = useState(0);



    //let api = helpHttp();
    let url = "http://127.0.0.1:8000/api/v1/gameParticipantes/";
    
     const handlerSubmit = (e) => {
        e.preventDefault();
          
        if(!form.name || !form.senha){
            alert("Hay campos vacios!")
            return;
        }
        createData(form);
    }

    const createData = (data) => {
        setLoading(true);
        fetch(url, {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json"
            }
        })        
        .then(res => res.json()).then(res => {
            if(res){
                setLoading(false);
                setIdGame(res.idGame);
                setIdParticipante(res.idParticipante);  
            }
                  
        })
        .catch(err => {
            console.log('Error', err)
            setLoading(false);
            setError(err);
        });

    }

/*
    const createData = (data) => {
        setLoading(true);
        console.log(data);
        // (...) los tres puntos trae todo lo que ya está en la DB, y los combina con "data"
        //setDb([...db, data]);
        let options = {
            body: data,
            headers: { "Content-type": "application/json"}
          };
      
      
          let url = "http://127.0.0.1:8000/api/v1/gameParticipantes/";

          api.post(url, options).then((res) => {
            console.log(res);
            if (!res) {
                console.log(res);

               setLoading(false);
            } else {
                console.log(res);
              setError(res);
            }
          });
    } */

    const resetHandler = (e) => {
        setLoading(false);
        setError(null);
        setIdGame(0);
        setIdParticipante(0);
        setForm(initialDorm);  
    }

    const handlerChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    return(
        <Fragment>
            <Helmet><title>Entrar</title></Helmet> 
            <main>
                <h2>Entrar</h2>
                {idGame === 0 &&
                <section className="inscripcion">                                       
                    <form onSubmit={handlerSubmit}>
                        <div className="groupInput">
                            <input type="text" name="name" placeholder="Nombre" onChange={handlerChange} value={form.name}/>                   
                        </div>
                        <div className="groupInput">
                            <input type="text" name="senha" placeholder="Clave" onChange={handlerChange} value={form.senha}/>
                        </div>
                        <div className="contBoton">
                            <input className="boton"  type="submit" value="Enviar"/>
                        </div>                    
                    </form>                
                </section>
                }
                <div className="centroLoader">
                    {loading && <Loader />}
                    {error && <Message error={error}/>}
                </div>
                <div>
                    {idGame > 0 &&
                        <div className="centroEntrar">
                            <p>IdGame: {idGame} idParticipante: {idParticipante}</p>
                            <p className="vermelho">Espere que el líder esté listo para conmenzar.</p>
                            <div className="contBoton">
                                <Link disabled={true} to={`/play/inicioPreguntas/${idGame}`} className="boton" >Iniciar</Link>
                                <p><button  onClick={resetHandler}>Volver a entrar</button></p>
                            </div>
                        </div>                        
                    }
                    {idGame < 0 &&
                        <div className="centroEntrar">
                            <p className="vermelho">La clave está equivocada.</p>
                            <p><button  onClick={resetHandler}>Volver a entrar</button></p>
                        </div>
                        
                    }
                </div>                
            </main>        
        </Fragment>        
    )
}

export default Inscripcion;