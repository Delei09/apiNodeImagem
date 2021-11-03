const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()
const porta = 3004

module.exports = {app , porta , bodyParser}