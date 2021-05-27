import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'

const ContainerTipoFlor = styled(Container)`
    background-color: rgba(255, 255, 255, 0.8);
    width: 90%;
`

const RowTipoFlor = styled(Row)`
    padding: 10px;
`

const ColTipoFlor = styled(Col)`
    border: groove;
    background: white;
`

const ListarTipoFlores = () => {

    const listaTipoFLor = useSelector((state) => state.tipoFlor)

    console.log(listaTipoFLor.tipoFlor);

    return (
            <ContainerTipoFlor>
                <RowTipoFlor>
                    {
                        listaTipoFLor.tipoFlor.map(flor => (
                            <ColTipoFlor xs = {4} key={flor.id}>
                                <p>{flor.nombre}</p>
                                <Image src={flor.url} alt={flor.nombre} style={{width: '100%'}} />
                                <p>{flor.descripcion}</p>
                            </ColTipoFlor>
                        ))
                    }
                </RowTipoFlor>
            </ContainerTipoFlor>
    )
}

export default ListarTipoFlores
