//storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/js/ShippingCalculator.js'),
      './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/html/ShippingCalculator.html')
      
    }
  }
})
