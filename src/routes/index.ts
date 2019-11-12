import { Router } from 'express'
import multer from '../libs/multer'
import { createPhoto, getPhotos, getPhotoById, deletePhoto, updatePhoto } from '../controllers/photo.controller'
const router = Router()

router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos);

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router