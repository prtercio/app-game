import { useState } from "react";

const initialDorm = {
    name: "",
    senha: "",
    contacto_id: 16,
    game_tipo_id: 1

}
function FormCreate({createData}){
    const [form, setForm] = useState(initialDorm);

    const handlerChange = (e) => {
        
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        form.senha = cadenaAleatoria();
        if(!form.name || !form.senha){
            alert("Hay campos vacios!")
            return;
        }
        createData(form);
       
        handlerReset();
    }
    const handlerReset = (e) => {
        setForm(initialDorm);
    }

    const cadenaAleatoria = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    return(
        <>
            
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handlerChange} value={form.name}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handlerReset}/>
            </form>
  
        </>
    )
}
export default FormCreate;