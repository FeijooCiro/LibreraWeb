import { Router } from "express" 

import controller from "../controllers/libro.controller"

const router = Router()

router.route('/')
    .get(controller.getLibros)
    .post(controller.createLibro)

router.route('/:id')
    .get(controller.getLibro)
    .delete(controller.deleteLibro)
    .put(controller.updateLibro)

export default router 