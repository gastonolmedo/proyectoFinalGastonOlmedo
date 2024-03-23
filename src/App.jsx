import './App.css'
import './estilos/NavBar.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
// import ItemCount from './componentes/ItemCount/ItemCount'
//import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    
      <div>
        <NavBar></NavBar>
        <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
        <ItemCount stock={10} initial ={1} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}></ItemCount>
        <ItemDetailContainer></ItemDetailContainer> 
        {/* <BrowserRouter>        
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            {/* <Route path='/category/:categoryId' element={<ItemListContainer />}/> */}
            {/* <Route path='/item/:Id' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/> */}
          {/* </Routes> */}
          {/* <ItemListContainer greeting={'Bienvenidos'} />
          <ItemCount stock={10} initial ={1} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
          <ItemDetailContainer></ItemDetailContainer> */}
      {/* </BrowserRouter> */} 

    </div>
    
    
  )
}

export default App
