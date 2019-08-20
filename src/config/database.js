module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'goBarberApp',
  operatorAliases: false,
  define: {
    timestamps: true,
    undercored: true,
    underscoredAll: true
  },
}