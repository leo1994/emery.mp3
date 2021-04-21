


const { ThemeProvider, ServerStyleSheets } = require('@material-ui/core/styles')
const material = require('@material-ui/core')
const { ForBusiness } = require('./Theme')

module.exports = { ...material, ThemeProvider, ServerStyleSheets, ForBusiness }
