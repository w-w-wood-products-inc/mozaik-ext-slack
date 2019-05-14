'use strict'
const os = require('os')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const promisify = require('util.promisify')
const fetch = require('node-fetch')

/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
  // mozaik.loadApiConfig(config)

  const apiCalls = {
    download: ({ url }) => {},
  }

  return apiCalls
}

module.exports = client
