import express from 'express';

import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

// req - lo que enviamos : res - lo que express nos responde
/* Metodos Get */
router.get('/inicio', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimoniales', paginaTestimoniales);

router.get('/viajes/:slug', paginaDetalleViaje);

/* Metodo POST para el formulario */
router.post('/testimoniales', guardarTestimonial);

export default router; 