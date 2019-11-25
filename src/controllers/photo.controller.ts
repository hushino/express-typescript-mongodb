import { Request, Response } from 'express'
import Camion from '../models/Camion'
import User from '../models/User'
import fs from 'fs-extra'
import path from 'path'
import sharp from 'sharp'
import nodemailer from 'nodemailer'
import twilio from 'twilio'

export async function getHome(req: Request, res: Response) {
    res.render('index', { title: 'Express' })
}
export async function contribuyente(req: Request, res: Response, next: any) {
    let perPage: number = 4;
    let page: any = req.params.page || 1;
    let cuit = req.session.cuit
    // console.log('CUIT '+cuit)
    try {
        const camion = await Camion.find({ cuit: cuit })
            .sort({ createdAt: -1 })
            .skip(perPage * page - perPage)
            .limit(perPage)
            .lean()
            .exec(function (err: any, camion) {
                Camion.estimatedDocumentCount().exec(function (err: any, count: any) {
                    if (err) return next(err);
                    res.render("contribuyente", {
                        serie: camion,
                        current: page,
                        pages: Math.ceil(count / perPage)
                    });
                });
            });
        console.log(camion)
    } catch (err) {
        next(err);
    }
    //res.render('contribuyente', { title: 'Express' })
}
export async function inspector(req: Request, res: Response) {
    res.render('inspector', { title: 'Express' })
}
export async function admin(req: Request, res: Response) {
    res.render('administrador', { title: 'Express' })
}

export async function logout(req: Request, res: Response) {
    req.session.destroy((e) => {
        //console.log('error borrando cokie ' + e)
        res.render('index', { title: 'Express' })
    })
    res.render('index', { title: 'Express' })
}

export async function login(req: Request, res: Response) {
    let { email, password } = req.body
    let checkifuserexist = await User.findOne({ email: email, password: password })
    //console.log(checkifuserexist+ ' checkifuserexist')
    if (checkifuserexist) {
        let { role, cuit } = checkifuserexist
        //console.log(req.session)
        req.session.role = role
        //console.log('cuit2 ' + cuit+ ' extra '+ checkifuserexist)
        req.session.cuit = cuit
        // console.log(req.session.role + ' role ' + role)
        if (role === 'contribuyente') {
            res.redirect(role + '/1')
        }
        res.redirect(role)
        //res.render('index', { /* isAuthenticated: true, */title: "login correcto" })
    } else {
        req.session.role = ''
        res.render('login', { title: "registro noc registro", registerexito: 'Se registro correctamente, ya puede iniciar sesion' })
    }
}

export async function registerGet(req: Request, res: Response) {
    res.render('register', { title: "registro correcto", registerexito: 'Se registro correctamente, ya puede iniciar sesion' })
}
export async function register(req: Request, res: Response) {
    let { email, password, cuit, numerodecelular } = req.body
    console.log(req.files['dni'][0].path)
    console.log(req.files['dni'][1].path)
    let newUser = {
        email: email,
        password: password,
        cuit: cuit,
        numerodecelular: numerodecelular,
        fotodnidelante: req.files['dni'][0].path + ".png",
        fotodniatras: req.files['dni'][1].path + ".png",
        role: 'contribuyente'
    }

    await sharp(req.files['dni'][0].path)
        .jpeg({ quality: 50 })
        .toFile(
            path.resolve('./uploads/' + req.files['dni'][0].filename + ".png")
        )
    fs.unlinkSync(req.files['dni'][0].path)

    
    await sharp(req.files['dni'][1].path)
        .jpeg({ quality: 50 })
        .toFile(
            path.resolve('./uploads/' + req.files['dni'][1].filename + ".png")
        )
    fs.unlinkSync(req.files['dni'][1].path)
    
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
    const photo = await Camion.findById(id)
    return res.json(photo)
}

export async function cambiarestadocamion(req: Request, res: Response) {
    const { cambiarestadocamion2, cambiarestadocamion } = req.body
    console.log('CONTROLCAMIONSENDDATAYOTRASCOSASREQBODYcambiarestadocamion ' + cambiarestadocamion)
    const camionactual = await Camion.findById(cambiarestadocamion2)
    // console.log(camionactual)
    camionactual.estadocamion = cambiarestadocamion
    await Camion.findByIdAndUpdate(cambiarestadocamion2, camionactual)
    return res.render('contribuyente')
}

export async function postinspector(req: Request, res: Response) {
    const { patente, cuit, foto, email } = req.body
    //console.log(req.body)
    let camion = {
        patente: patente,
        cuit: cuit,
        image: req.file.path + ".png",
        estadocamion: 'En espera'
    }
    const cami = new Camion(camion)
    await cami.save()
    await sharp(req.file.path)
        .jpeg({ quality: 50 })
        .toFile(
            path.resolve('./uploads/' + req.file.filename + ".png")
        )
    fs.unlinkSync(req.file.path)
    const accountSid = 'AC6c3e72cc3c7ae41ea64dc1f6f9bb5fd6'; // Your Account SID from www.twilio.com/console
    const authToken = '207c0701b0ec5593ed5bcee23d43de7a';   // Your Auth Token from www.twilio.com/console

    const client = twilio(accountSid, authToken);

    client.messages.create({
        body: 'Hello from Node',
        to: '+543718577823',  // Text this number
        from: '+12016547913' // From a valid Twilio number
    }).then((message: any) => console.log(message.sid))

    /*  if (email != null) {
         //send email
     }
     let testAccount = await nodemailer.createTestAccount();
 
     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
         host: "smtp.ethereal.email",
         port: 587,
         secure: false, // true for 465, false for other ports
         auth: {
             user: testAccount.user, // generated ethereal user
             pass: testAccount.pass // generated ethereal password
         }
     });
 
     // send mail with defined transport object
     let info = await transporter.sendMail({
         from: '"Fred Foo 👻" <foo@example.com>', // sender address
         to: "bar@example.com, baz@example.com", // list of receivers
         subject: "Hello ✔", // Subject line
         text: "Hello world?", // plain text body
         html: "<b>Hello world?</b>" // html body
     });
 
     console.log("Message sent: %s", info.messageId);
     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
 
     // Preview only available when sending through an Ethereal account
     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); */
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    /* 
    return res.json({
        message: 'Camion successfully saved',
        cami
    }) */
    return res.render('inspector')
}

/* export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find().lean(true)
    return res.send(photos)
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
} */