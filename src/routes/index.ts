import { Router, Request, Response } from 'express'
import multer from '../libs/multer'
import { logout, login, register, getHome, createPhoto, getPhotos, getPhotoById, deletePhoto, updatePhoto } from '../controllers/photo.controller'
const router = Router()

function hasAccess(accessLevel: string) {
    return function (req: Request, res: Response, next: any) {
        console.log(req.session.role)
        if (req.session.role && accessLevel.search(req.session.role)  ) {
            return next()
        }
        return res.json({
            success: false,
            error: 'Unauthorized'
        })
    }
}

router.route('/').get(hasAccess('administrador'), getHome)
router.route('/register').post(register).post(login)
router.route('/login').post(login)
router.route('/logout').post(logout)


router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router