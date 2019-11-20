import { Router, Request, Response, NextFunction } from 'express'

export default function hasAccess(accessLevel: string) {
    return function (req: Request, res: Response, next: NextFunction) {
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