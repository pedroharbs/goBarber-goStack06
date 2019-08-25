module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }
  return res.redirect('/app/dashboard')
}
/* Se existir um usuário logado ele será redirecionado
para o dashboard, mas, caso não exista, ele pode prosseguir pra
signin e signup */
