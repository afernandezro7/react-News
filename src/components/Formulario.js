import React from 'react'
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types'

const Formulario = ({setCategoria,setPais}) => {

    //Crear Opciones para la categorias de noticia
    const opcionesNews = [
        {name:'Negocios',value:'business'},
        {name:'Entretenimiento',value:'entertainment'},
        {name:'General',value:'general'},
        {name:'Salud',value:'health'},
        {name:'Ciencia',value:'science'},
        {name:'Deportes',value:'sports'},
        {name:'Tecnología',value:'technology'}       
    ]

    const opcionesPais = [
        {name:'EEUU',value:'us'},
        {name:'Argentina',value:'ar'},
        {name:'Colombia',value:'co'},
        {name:'Cuba',value:'cu'},
        {name:'Rusia',value:'ru'},
        {name:'Irlanda',value:'ie'},
        {name:'Japón',value:'jp'}       
    ]



    // utilizar custom Hook
    const [categoría, SelectNoticias] = useSelect('general', opcionesNews)
    const [pais, SelectPais] = useSelect('us', opcionesPais)



    // Manejar el submit del form
    const handleSubmit = e =>{
        e.preventDefault();
        
        // Enviar datos al componente principal
        setCategoria(categoría)       
        setPais(pais)
        
    }

    return (
        <div 
            className={`${styles.buscador} row`}     
        >
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit = { handleSubmit }
                >
                
                    <h2 
                        className={ styles.heading }
                    >
                        Encuentra Noticias por Categoría
                    </h2>

                    <SelectNoticias />
                    <SelectPais/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`} 
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired,
    setPais: PropTypes.func.isRequired
}

export default Formulario
