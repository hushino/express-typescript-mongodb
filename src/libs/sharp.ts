import sharp from 'sharp'

const sharpe = (file: any) => sharp('input.jpg')
    .rotate()
    .resize(200)
    .toBuffer()
    .then(data => {
        console.log('sharp correcto ' + data)
    }).catch(err => {
        console.log('error en sharp ' + err)
    })

export default sharpe