
import { Testimonial } from "../model/Testimoniales.js"; 

const guardarTestimonial = async (req, res) => {


    // Validar...
    const { nombre, email, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if(email.trim() === ''){
        errores.push({mensaje: 'El email esta vacio'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }
    
    if(errores.length > 0){

        // Consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        });
    }else{
        // Almacenarlo en la base de datos

        try{
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            
            res.redirect('/testimoniales');
        }catch (error){
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}