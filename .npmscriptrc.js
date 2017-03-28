var fs =    require('fs');

/**
 * You can provide comments in `.npmscriptrc.js`
 */
var config =
{
   "build":
   {
      "babel": { "source": "src", "destination": "dist" }
   },

   "publish":
   {
      "prepublish": { "scripts": ["npm run eslint", "npm run build"] }
   }
};

module.exports = config;
