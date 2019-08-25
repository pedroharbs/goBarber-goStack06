const path = require('path')

class FileController {
  show(req, res) {
    // Buscar nome do arquivo via URL e retornar na pasta uploads
    const {
      file
    } = req.params

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file

    )

    return res.sendFile(filePath)
  }
}

module.exports = new FileController()
