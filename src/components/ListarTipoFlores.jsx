import React from 'react'
import { useSelector } from 'react-redux'


const ListarTipoFlores = () => {

    const listaTipoFLor = useSelector((state) => state.tipoFlor)

    console.log(listaTipoFLor);

    return (
        <div>
            hola
        </div>
    )
}

export default ListarTipoFlores
