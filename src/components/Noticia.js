import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {

    //extraer los datos
    const {title , source , description, url , urlToImage}= noticia;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img 
                        src={ (urlToImage!==null)? urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsyP_nTkQN-lY7ZL6FisXW5OCmAcVFjpaY4g&usqp=CAU'}
                        alt={title}
                    />
                    <span className="card-title">{ source.name }</span>
                </div>
                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
