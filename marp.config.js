const {Marp} = require('@marp-team/marp-core');

module.exports = {
  engine: (opts) => new Marp(opts)
};
