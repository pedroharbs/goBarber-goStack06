module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // OBJETOS DE INFORMAÇÕES PARA VIEWS
    res.locals.user = req.session.user
    return next()
  }

  return res.redirect('/')

}
