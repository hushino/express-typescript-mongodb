import { Router, Request, Response, NextFunction } from 'express'
import multer from '../libs/multer'
import { logout, postinspector, inspector, contribuyente, admin, login, registerGet, register, getHome, getPhotoById } from '../controllers/photo.controller'
import hasAccess from '../auth/hasAccess'

const router = Router()

router.route('/').get( /* hasAccess('administrador'), */ getHome)
router.route('/register').get(registerGet).post(register)
router.route('/login').get(login).post(login)
router.route('/logout').get(logout)

router.route('/contribuyente').get(contribuyente)
router.route('/inspector').get(inspector).post(multer.single('image'), postinspector)
router.route('/administrador').get(admin)


/* router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)
 */
export default router