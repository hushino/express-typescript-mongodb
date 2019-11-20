import { Router, Request, Response, NextFunction } from 'express'

export default function hasAccess(accessLevel: string) {
    return function (req: Request, res: Response, next: NextFunction) {
        console.log(req.session.role+ ' sdas '+accessLevel)
        // change search for haslocale and compare 1 to true
        if ( req.session.role &&  req.session.role === accessLevel) {
            console.log('entro al middleware')
            return next()
        }
        return res.json({
            success: false,
            error: 'Unauthorized'
        })
    }
}