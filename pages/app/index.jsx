
// Importa los módulos necesarios de la librería react-router-dom
import { useRoutes, BrowserRouter } from 'react-router-dom'

// Importa los componentes necesarios para la aplicación
import Home from '../Home'
import Player from '../Player'
import Team from '../Team'
import Biography from '../Biography'
import './App.css'
import Navbar from '../../components/Navbar'

// Define el componente funcional AppRoutes que configura las rutas de la aplicación
const AppRoutes = () => { 

     // Utiliza el hook useRoutes para configurar las rutas y asigna el resultado a la variable 'routes'
    
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/Player', element: <Player /> },
        { path: '/Team', element: <Team /> },
        { path: '/Biography', element: <Biography />}
        
    ])
    
    // Retorna el resultado de las rutas configuradas
    return routes
}


// Define el componente funcional App
const App = () => { 
     // Retorna la estructura principal de la aplicación
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRoutes />
            
        </BrowserRouter >

)


}

// Exporta el componente App como el componente principal de este archivo
export default App  
