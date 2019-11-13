import { Router } from 'express'
import multer from '../libs/multer'
import { login, register, getHome, createPhoto, getPhotos, getPhotoById, deletePhoto, updatePhoto } from '../controllers/photo.controller'
const router = Router()

router.route('/').get(getHome)

router.route('/register').post(register).post(login)
router.route('/login').post(login)


router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router