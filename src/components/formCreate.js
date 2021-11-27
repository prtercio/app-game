import { useState, useEffect } from "react";

const initialDorm = {
    name:"",
    estado:"",
    id:null
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
        if(!form.name || !form.estado){
            alert("Hay campos vacios!")
            return;
        }
        createData(form);
       
        handlerReset();
    }
    const handlerReset = (e) => {
        setForm(initialDorm);
    }
    return(
        <>
            <div>
            <form onSubmit={handlerSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handlerChange} value={form.name}/>
                <input type="text" name="estado" placeholder="Estado" onChange={handlerChange} value={form.estado}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handlerReset}/>
            </form>
            </div>
        </>
    )
}
export default FormCreate;