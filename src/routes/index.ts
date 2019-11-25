import { Router, Request, Response, NextFunction } from 'express'
import multer from '../libs/multer'
import { logout,cambiarestadocamion, postinspector, inspector, contribuyente, admin, login, registerGet, register, getHome, getPhotoById } from '../controllers/photo.controller'
import hasAccess from '../auth/hasAccess'

const router = Router()

router.route('/').get(getHome)
router.route('/register').get(registerGet).post(register)
router.route('/login').get(login).post(login)
router.route('/logout').get(logout)

router.route('/contribuyente/:page').get(/* hasAccess('contribuyente'), */ contribuyente)
router.route('/inspector').get(/* hasAccess('inspector'), */ inspector).post(/* hasAccess('inspector'), */ multer.single('image'), postinspector)
router.route('/administrador').get(hasAccess('administrador'), admin)

router.route('/cambiarestadocamion').post(cambiarestadocamion)

/* router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)
 */
export default router