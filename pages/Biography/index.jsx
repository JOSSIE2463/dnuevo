
// Importa el componente Layout desde la ruta proporcionada

import Layout from "../../components/layout"

// Define el componente funcional Biography

function Biography() { 
 

  // Retorna la estructura del componente usando JSX

    return (
      <>
       
        {/* Contenido del componente */}

            <div className=" pt-24 pl-10 p-5">
                    <img className="block mx-auto w-60 rounded-non   " src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/384470705_826796472261710_8166311287428553810_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn-az-zZRkzoBq_1d_lzy1osr8k0dfQaiiyvyTR19BqDgunv_FqlDxbgKH5ovr7eh3KE8rSMDRm7zfkbtVMJGy&_nc_ohc=Tgxv3t0VtHsAX97uXn9&_nc_oc=AQkt3psX1AQOFc-pr2cnJqfqhqufNZkm351ciakJt5_cLIUO707D5tKOLefsCLxflps&_nc_zt=23&_nc_ht=scontent.fbog14-1.fna&oh=00_AfD_udJsUjmPFC0rLTGxju9eKR1J7H32lHr0ztigBqpFDg&oe=655B6A55" alt="" />
                    <h1 className="pt-4 pb-4 text-center text-4xl font-serif font-bold text-gray-800">Jossie Fernando Aranda Pechene </h1>
            <div className="w-full bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 h-0.5 mb-4"></div>
            <div className="   flex flex-row bg- pt-10 bg-blue-100 p-5 gap-5 rounded">
                <p className="md:w-1/2 pt-4 text-lg text-gray-800 leading-relaxed italic font-semibold">His name is Jossie Fernando Aranda Pechene. He lives in the municipality of Piendamó with his parents and grandparents. They live on a farm, surrounded by a lot of nature and beautiful landscapes. He is twenty-three years old and dreams of becoming a systems engineer and teacher. He also did his military service at the base located in Tolemaida (Ibagué). He got to know many places and many people and made friends.

He worked in the city of Cali (Valle del Cauca). At the moment he is studying for a degree in software development and lives in the Bello Horizonte neighborhood. Thank you...    </p>
                
                <img className="w-5/12 rounded" src="https://cdn0.ecologiaverde.com/es/posts/7/9/2/ventajas_de_vivir_en_el_campo_297_600.jpg" alt="" />
          
          
          
          
            </div>
          
          {/* Información de contacto */}
          
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 uppercase">Contacto:</h2>
          <div className="flex justify-center space-x-4">
            
            <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <img src="https://w7.pngwing.com/pngs/247/102/png-transparent-circle-facebook-fb-round-icon-social-media-social-network-popular-services-brands-vol-icon.png" alt="Facebook" className="w-8 h-8" />
            </a>
            
            <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <img src="https://static.vecteezy.com/system/resources/previews/016/716/469/non_2x/instagram-icon-free-png.png" alt="Instagram" className="w-8 h-8" />
            </a>
            
            <a href="https://t.me/tuusuario" target="_blank" rel="noopener noreferrer">
              <img src="https://static.vecteezy.com/system/resources/previews/016/716/480/non_2x/whatsapp-icon-free-png.png" alt="whassapt" className="w-8 h-8" />
            </a>
            
            <a href="mailto:tuemail@gmail.com">
              <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" alt="Gmail" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/watch?v=0wek2Awry5E">
              <img src="https://static.vecteezy.com/system/resources/previews/017/396/822/non_2x/youtube-icon-social-media-apps-free-png.png" alt="Gmail" className="w-8 h-8" />
            </a>
          </div>
        </div>
            
        </div>
</>

)


}
// Exporta el componente Biography como el componente principal de este archivo
export default Biography