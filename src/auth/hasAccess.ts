import { Router, Request, Response,NextFunction } from 'express'

export default function hasAccess(accessLevel: string) {
    return function (req: Request, res: Response, next: NextFunction) {
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