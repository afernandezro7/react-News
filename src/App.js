import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir state de categoría y pais que va a recibir los datos del formulario
  const [categoria, setCategoria] = useState('');
  const [pais, setPais] = useState('')

  //Definir state de noticias
  const [noticias, setNoticias] = useState([])

  //Consultar api cuando el state de pais y categorias cambian
  useEffect(() => {
    
    if(categoria===''|| pais ==='') return;

    const consultarAPI = async()=>{

      const apikey = '6b0210adc67f4755afb9e3e358541478'  
      const url = `https://newsapi.org/v2/top-headlines?category=${encodeURI(categoria)}&country=${encodeURI(pais)}&apiKey=${ encodeURI(apikey) }`;
      const respuesta = await fetch(url);
      const {articles} = await respuesta.json(respuesta);

      
      setNoticias(articles)

    
    }

    consultarAPI()



  }, [categoria , pais])






  return (
    <>
      <Header
        title='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
          setPais={setPais}
        />
        
        <ListadoNoticias

          noticias={noticias}
        />
      </div>
      
    </>
  );
}

export default App;
