
// 1. Declaración de un componente funcional llamado Layout que toma un objeto children como prop.
const Layout = ({ children }) => {
   
    // 2. Retorna un JSX que representa la estructura del componente.
    return (
       
        // 3. Contenedor principal con clases de estilo de Tailwind CSS.
        <div className="flex flex-col items-center bg-slate-200">
            {children}
        </div>
    )
}

// 5. Exporta el componente para que pueda ser utilizado en otros archivos.
export default Layout