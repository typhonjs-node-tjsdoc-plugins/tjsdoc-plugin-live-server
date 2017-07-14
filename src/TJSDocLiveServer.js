import path       from 'path';
import LiveServer from 'typhonjs-live-server';

/**
 * Provides a TJSDoc plugin to launch `live-server` during the `onComplete` plugin callback serving the directory
 * specified in the target project TJSDocConfig `destination` option.
 */
export default class TJSDocLiveServer
{
   /**
    * Starts `live-server` assigning any plugin options to the live server config and the target project TJSDocConfig
    * `destination` as the root path to serve. By default the default browser is opened.
    *
    * @param {PluginEvent} ev - The plugin event.
    */
   static onRuntimeCompleteAsync(ev)
   {
      if (!LiveServer.isRunning)
      {
         const options =
         {
            ignore: 'css, image, script',
            root: path.resolve(ev.data.mainConfig.destination)
         };

         LiveServer.start(options);
      }
   }

   /**
    * Adds `typhonjs-live-server` event bindings to start / shutdown `live-server`.
    *
    * @param {PluginEvent} ev - The plugin event.
    */
   static async onPluginLoad(ev)
   {
      const hasPlugin = ev.eventbus.triggerSync('plugins:has:plugin', 'typhonjs-live-server');

      if (!hasPlugin)
      {
         await ev.eventbus.triggerAsync('plugins:add:async',
          { name: 'typhonjs-live-server', instance: LiveServer, options: ev.pluginOptions });
      }
   }

   /**
    * Handle any housekeeping when TJSDoc shuts down.
    */
   static onRuntimeShutdownAsync()
   {
      LiveServer.shutdown();
   }
}
