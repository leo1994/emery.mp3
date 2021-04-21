const StyleDictionaryPackage = require('style-dictionary');

/**
 * 
 * @param {String} brand Nome do produto 
 * @param {String} platform Plataforma do produto
 * @returns {Object}
 */
function getStyleDictionaryConfig(brand, platform) {
  return {
    "source": [
      "properties/globals/**/*.json",
      `properties/brands/${brand}/**/*.json`,
      `properties/platforms/${platform}/*.json`
    ],
    "platforms": {
      "web": {
        "transformGroup": "web",
        "transforms": ["attribute/cti", "name/ti/constant", "color/hex"],
        "buildPath": `build/web/${brand}/`,
        "files": [{
          "destination": "color.js",
          "format": "javascript/es6",
          "filter": {
            "attributes": {
              "category": "color"
            }
          }
        }, {
          "destination": "font.json",
          "format": "json/nested",
          "filter": {
            "attributes": {
              "category": "font"
            }
          }
        }]
      },
      "flutter": {
        "transformGroup": "flutter",
        "buildPath": `build/flutter/${brand}/`,
        "files": [{
          "destination": "style.dart",
          "format": "flutter/class.dart"
        }]
      }
    }
  };
}

console.log('================================');
console.log('\tBuild started...');
console.log('================================');

['Institucional', 'ForBusiness', 'ForPeople'].map((brand) => {
  ['web'].map((platform) => {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  })
})

console.log('\n==============================================');
console.log('\nBuild completed!');