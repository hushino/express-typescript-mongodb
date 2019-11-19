import { Router, Request, Response,NextFunction } from 'express'
import multer from '../libs/multer'
import { logout, inspector,contribuyente,admin,login,registerGet, register, getHome, createPhoto, getPhotos, getPhotoById, deletePhoto, updatePhoto } from '../controllers/photo.controller'
import hasAccess from '../auth/hasAccess'

const router = Router()

router.route('/').get( /* hasAccess('administrador'), */ getHome)
router.route('/register').get(registerGet).post(register)
router.route('/login').get(login).post(login)
router.route('/logout').post(logout)

router.route('/contribuyente').get(contribuyente)
router.route('/inspector').get(inspector)
router.route('/administrador').get(admin)


router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router