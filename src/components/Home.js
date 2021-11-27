import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function Home(){
    return(
        <Fragment>
            <Helmet><title>Quiz Home</title></Helmet>
            <div id="home">        
                <section>
                    <div style={{ textAlign: 'center'}}>
                        <span className="mdi mdi-cube-outline mdi-58px cube"></span>
                    </div> 
                    <h1>Quiz App</h1>  
                    
                    <div className="play-button-container">
                        <ul>
                            <li><Link className="play-button" to="/play/create">Crear Quiz</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container" >
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="sing-button">Sing up</Link>
                    </div>
                </section> 
             </div>
        </Fragment>
    )
}

export default Home;