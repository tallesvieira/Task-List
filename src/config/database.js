import connectionServer from "../../connection";

module.exports = {
  dialect: connectionServer.DIALECT,
  host: connectionServer.HOST,
  username: connectionServer.USERNAME,
  password: connectionServer.PASSWORD,
  database: connectionServer.DATABASE,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
