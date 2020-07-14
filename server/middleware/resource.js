module.exports = options => {

  const jwt = require('jsonwebtoken')
  const AdminUser = require("../models/AdminUser")
  const assert = require("http-assert")

  return async(req,res,next)=>{
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}