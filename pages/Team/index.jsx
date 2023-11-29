// Define el componente funcional Team
function Team() { 
    // Retorna la estructura del componente usando JSX
  return (
       // Contenedor principal con altura completa, centrado y justificado
      <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        
        {/* Imagen de fondo */}
        
        <img
          className="w-full h-full object-cover"
          src="https://www.infobae.com/new-resizer/jg8BK3szR_uldKwDdYGymZALOSA=/992x441/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2JMDZAI2LZFMTPQ6XUPJAPWHAM.jpeg"
          alt="Imagen de fondo"
        />
        {/* Contenedor absoluto para superponer texto sobre la imagen */}
        
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
        
          {/* Contenedor con fondo oscuro semi-transparente y relleno */}
          
          <div className="bg-black bg-opacity-70 p-8 rounded-md">
           
            {/* Título principal */}

            <h1 className="text-4xl font-extrabold mb-4">Azul y Blanco Millonarios Fútbol Club</h1>
          
            {/* Información sobre el equipo */}

            <p className="mb-4">Apodo(s): Millos, Los embajadores, El Ballet Azul, Los azules, Los albiazules, El Famoso Millos</p>
            
            {/* Información general sobre el equipo */}

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Información General</h2>
              <p>Nombre: Azul y Blanco Millonarios Fútbol Club S. A.</p>
              <p>Fecha de Fundación: 18 de junio de 1946 (77 años)</p>
              
            </div>

            {/* Equipo Directivo */}
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Equipo Directivo</h2>
              <p>Presidente: Enrique Camacho</p>
              <p>Pdte. de honor: Alfonso Senior Quevedo</p>
              <p>Dir. deportivo: GAMERO</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Exporta el componente Team como el componente principal de este archivo
export default Team;