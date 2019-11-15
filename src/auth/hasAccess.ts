import { Router, Request, Response,NextFunction } from 'express'

export default function hasAccess(accessLevel: string) {
    return function (req: Request, res: Response, next: NextFunction) {
        //console.log(req.session.role)
        // change search for haslocale and compare 1 to true
        if (req.session.role && accessLevel.search(req.session.role)  ) {
            return next()
        }
        return res.json({
            success: false,
            error: 'Unauthorized'
        })
    }
}