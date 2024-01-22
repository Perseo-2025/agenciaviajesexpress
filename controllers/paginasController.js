import { Viaje } from '../model/Viajes.js';
import { Testimonial } from "../model/testimoniales.js"; 


const paginaInicio = async (req, res) => { 

    // Consultando los viajes y testimoniales

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({limit: 3}) );
    promiseDB.push( Testimonial.findAll({limit: 3}) );

    try{
        const resultado = await Promise.all( promiseDB );

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    }catch(e){
        console.log(e);
    }
   
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => { 
    // Consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => { 

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
    }catch(error){
        console.log(error);
    }
    
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try{
        const resultado = await Viaje.findOne({ where : { slug}});

        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    }catch ( error ){
        console.log(error);
    }
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}