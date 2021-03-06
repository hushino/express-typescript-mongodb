import { Router, Request, Response, NextFunction } from 'express'
import multer from '../libs/multer'
import multer2 from '../libs/multer2'
import { editarfromadmin,logout, borrarcuenta,/* cambiarestadodecuenta, */administradorActualizar, cambiarestadocamion, postinspector, inspector, contribuyente, admin, login, registerGet, register, getHome, getPhotoById } from '../controllers/photo.controller'
import hasAccess from '../auth/hasAccess'

const router = Router()

router.route('/').get(getHome)
router.route('/register').get(registerGet).post(multer.fields([{ name: 'dni', maxCount: 1 }, { name: 'dni1', maxCount: 1 }]), register)
router.route('/login').get(login).post(login)
router.route('/logout').get(logout)

router.route('/contribuyente/:page').get(/* hasAccess('contribuyente'), */ contribuyente)
router.route('/inspector').get(/* hasAccess('inspector'), */ inspector).post(/* hasAccess('inspector'), */ multer.single('image'), postinspector)
router.route('/administrador/:page*?').get(/* hasAccess('administrador'),  */admin).post(/* hasAccess('administrador'),  cambiarestadodecuenta*/)
//router.route('/admincambiarstadodecuenta').post(/* hasAccess('administrador'),  */cambiarestadodecuenta)
router.route('/cambiarestadocamion').post(/* hasAccess('contribuyente'), */cambiarestadocamion)
router.route('/administradorActualizar').post(/* hasAccess('contribuyente'), */administradorActualizar)
router.route('/borrarcuenta').post(/* hasAccess('contribuyente'), */borrarcuenta)


router.route('/editarfromadmin/:id*?').get(editarfromadmin)

/* router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)
 */
export default router