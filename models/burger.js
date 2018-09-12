const orm = require("../config/orm.js");

const burger = {
  all: cb => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },

  create: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },

  update: (objColVal, condition, cb) => {
    orm.updateOne("burgers", objColVal, condition, res => {
      cb(res);
    });
  },

  delete: (condition, cb) => {
      orm.deleteOne("burgers", condition, res => {
          cb(res);
      });
  }
};

module.exports = burger;