
module.exports = function (Model, options, cb) {
  new Model(options).save(cb)
}