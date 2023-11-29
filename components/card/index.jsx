const Card = (data) => {
  
  // 1. Renderiza un contenedor div con clases de estilo de Tailwind CSS
  return (
    <div className="pt-0 shadow-md m-5   bg-gradient-to-b from-white via-sky-300 to-blue-900 cursor-poiter w-72 h-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
    <figure className="relative h-2/3">
      <img
        className="w-full h-full object-contain rounded-t-lg mt-5"
        src={data.data.photo}
        alt={data.data.name}
      />
    </figure>
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-white mb-2">{data.data.name}</h2>
      <div className="flex justify-between mb-2">
        <p className="text-sm font-light text-white">{data.data.place_of_birth}</p>
        <p className="text-sm font-light text-white">{   data.data.birthdate}</p>
      </div>
      <p className="text-lg font-medium text-white mb-2"> Altura:{data.data.height  }</p>
     
      </div>
    </div>
  );
};

// 8. Exporta el componente para que pueda ser utilizado en otros archivos
export default Card;