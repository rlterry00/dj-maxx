module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Grayscale","short_name":"Landing","start_url":"/gatsby-starter-grayscale/","background_color":"#663399","theme_color":"#663399","display":"standalone","icon":"src/assets/images/djmaxxlogo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"47587ffd6fbe0a45207387c7373b2033"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
