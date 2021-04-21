const { createMuiTheme } = require('@material-ui/core/styles')
const Font = require('@leo1994/style/web/ForBusiness/font.json')
const { color } = require('@leo1994/style/web/ForBusiness/color')

const body1 = Font.font.style.body1;
module.exports.ForBusiness = createMuiTheme({
  typography: {
    body1
  },
  palette: {
    primary: {
      main: color.brand.main.value,
    },
    error: {
      main: color.error.main.value
    },
    warning: {
      main: color.warning.main.value
    },
    success: {
      main: color.success.main.value
    }
  }
})
