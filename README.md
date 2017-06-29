# tjsdoc-plugin-live-server
Provides a plugin that starts [live-server](https://www.npmjs.com/package/live-server) providing refresh of the output doc target during TJSDoc execution. This plugin may be used separately or be depended on by any of the `watcher` plugins. For instance [tjsdoc-plugin-watcher-doc-regenerate](https://github.com/typhonjs-node-tjsdoc-plugins/tjsdoc-plugin-watcher-doc-regenerate) will automatically add `tjsdoc-plugin-live-server` when it is passed an option `"live-server": true`. This will open a browser w/ `index.html` of the generated docs and as ongoing documentation regeneration occurs the browser will refresh new content. 

For essential information pertaining to TJSDoc please refer to [tjsdoc](https://github.com/typhonjs-node-tjsdoc/tjsdoc).
