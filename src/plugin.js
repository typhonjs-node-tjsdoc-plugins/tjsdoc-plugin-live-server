import liveServer from 'live-server';
import path       from 'path';

let started = false;

/**
 * Starts `live-server` assigning any plugin options to the live server config and the target project TJSDocConfig
 * `destination` as the root path to serve. By default the default browser is opened.
 *
 * @param {PluginEvent} ev - The plugin event.
 */
export function onComplete(ev)
{
   if (!started)
   {
      const params =
      {
         port: 8080,                   // Set the server port. Defaults to 8080.
         open: true,                   // When false, it won't load your browser by default.
         ignore: 'css, image, script', // comma-separated string for paths to ignore
         wait: 0,                      // Waits for all changes, before reloading. Defaults to 0 sec.
         logLevel: 2                   // 0 = errors only, 1 = some, 2 = lots
      };

      // Set root directory last so that it always points to `config.destination`.
      const finalParams = Object.assign(params, ev.pluginOptions, { root: path.resolve(ev.data.config.destination) });

      liveServer.start(finalParams);

      started = true;
   }
}

/**
 * Handle any housekeeping when TJSDoc shuts down.
 */
export function onShutdown()
{
   if (started) { liveServer.shutdown(); }
}
