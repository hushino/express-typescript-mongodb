import { Request, Response } from 'express'
import Photo from '../models/Photo'
import User from '../models/User'
import fs from 'fs-extra'
import path from 'path'
import sharp from 'sharp'
import async from 'async'

export async function getHome(req: Request, res: Response) {
    res.render('index', { title: 'Express' })
}

export async function logout(req: Request, res: Response) {
    req.session.destroy((e) => {
        //console.log('error borrando cokie ' + e)
    })
    res.render('index', { title: 'Express' })
}

export async function login(req: Request, res: Response) {
    let { email, password } = req.body
    let checkifuserexist = await User.findOne({ password: new RegExp('^' + password + '$', "i"), email: new RegExp('^' + email + '$', "i") })
    if (checkifuserexist) {
        console.log("usuario existe")
        if (!req.session?.role) {
            req.session.role = { role: checkifuserexist.role }
        }
        console.log(req.session)
        res.render('index', { title: "registro correcto", registerexito: 'Se registro correctamente, ya puede iniciar sesion' })

    } else {
        console.log("usuario no existe")
        res.render('index', { title: "registro correcto", registerexito: 'Se registro correctamente, ya puede iniciar sesion' })

    }
}

export async function register(req: Request, res: Response) {
    let { email, password, role } = req.body
    let newUser = {
        email: email,
        password: password,
        role: role
    }
    const emailcheck2 = await User.findOne({ email: new RegExp('^' + email + '$', "i") })
    if (emailcheck2) {
        res.render('index', { title: "el usuario ya existe", registererror: 'Un usuario con el mismo email ya existe' })
    } else {
        const register = new User(newUser)
        await register.save()
        res.render('index', { title: "registro correcto", registerexito: 'Se registro correctamente, ya puede iniciar sesion' })
    }
}

export async function getPhotoById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const photo = await Photo.findById(id)
    return res.json(photo)
}

export async function getPhotos(req: Request, res: Response) {
    //const photos = async () => await Photo.find()
    //const photos = await Photo.find()
    const d: async.Dictionary<unknown>[] = []
    async.parallel({
        task1: async function (callback) {
            //console.log('Task One')
            const photos = await Photo.find()
           // console.log(photos)
            return res.json(photos)
            //callback(null, photos)
        }
    }, async function (err, results) {
       // console.log(results);
        //d.push(results)
        //return res.json(results)
        //return res.json(results)
        //results now equals to: { task1: 1, task2: 2 }
    });
  //  return res.json(d)
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path + ".png"
    }
    const photo = new Photo(newPhoto)
    await photo.save()
    await sharp(req.file.path)
        .jpeg({ quality: 50 })
        .toFile(
            path.resolve('./uploads/' + req.file.filename + ".png")
        )
    fs.unlinkSync(req.file.path)
    return res.json({
        message: 'Photo successfully saved',
        photo
    })
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const photo = await Photo.findByIdAndRemove(id)
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo Deleted',
        photo
    })
}
export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { title, description } = req.body
    const updatePhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true })
    return res.json({
        message: 'Successfully Updated',
        updatePhoto
    })
}
export function helloworld(req: Request, res: Response): Response {
    return res.send('asdsada')
}