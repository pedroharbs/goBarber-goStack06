// Usado para criptografar senhas
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING, // Avatares não serão armazenados como imagem no DB
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING, // Adicionar criptografia
    provider: DataTypes.BOOLEAN // Agendador de serviços ou servidor

  }, {
    // Hooks disparam ANTES e DEPOIS de alterções no banco
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  return User
}
