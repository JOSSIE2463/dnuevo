
// Importa NavLink de react-router-dom y la imagen del logo.
import { NavLink } from "react-router-dom";
import logo from "../../fotos/logo.png";

// Define el componente funcional Navbar.
const Navbar = () => {
   
  // Define una clase de estilo para los enlaces activos.
  
  const activeStyle = 'underline underline-offset-4'
 
 
  // Retorna un JSX que representa la estructura del componente.
  return (
    
    <nav className="flex justify-between  px-5 w-full py-2 bg-blue-700">
  <ul className="flex gap-40 items-center">
    <li>
      <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
       <button class="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
  home
</button>

      </NavLink>
    </li>
    <li>
      <NavLink to='/Player' className={({ isActive }) => isActive ? activeStyle : undefined}>
            <button class="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
  Players
</button>
      </NavLink>
    </li>
    <li>
      <NavLink to='/Team' className={({ isActive }) => isActive ? activeStyle : undefined}>
                  <button class="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
  Team
</button>
        
        
      </NavLink>
    </li>
    <li>
      <NavLink to='/Biography' className={({ isActive }) => isActive ? activeStyle : undefined}>
                <button class="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
  Biography
</button>
      </NavLink>
    </li>
  </ul>
  <div className="text-justify">
    <img src="https://millonarios.com.co/wp-content/uploads/2022/05/cropped-unnamed-1.png" alt="nn" className="w-64 h-16" />
  </div>
</nav>
 )
}
 
// Exporta el componente para que pueda ser utilizado en otros archivos.
 export default Navbar