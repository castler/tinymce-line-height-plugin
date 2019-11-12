!(function() {
  'use strict';

  /* eslint-disable no-undef */
  const global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  global.add('lineheight', function(editor) {
    editor.on('init', function() {
      editor.formatter.register({
        lineheight: {
          selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table',
          styles: { 'line-height': '%value' }
        }
      });
    });

    editor.ui.registry.addIcon(
      'line-height',
      `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Icons/20px//editor/line-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M17,16 L17,17 L6,17 L6,16 L17,16 Z M2.999,6 L2,6 L3.5,4 L5,6 L3.999,6 L4,15 L5,15 L3.5,17 L2,15 L3,15 L2.999,6 Z M17,14 L17,15 L6,15 L6,14 L17,14 Z M17,12 L17,13 L6,13 L6,12 L17,12 Z M17,10 L17,11 L6,11 L6,10 L17,10 Z M17,8 L17,9 L6,9 L6,8 L17,8 Z M17,6 L17,7 L6,7 L6,6 L17,6 Z M17,4 L17,5 L6,5 L6,4 L17,4 Z" fill="#575E62"></path>
          </g>
      </svg>`
    );

    editor.ui.registry.addMenuButton('lineheightselect', {
      tooltip: 'Line height',
      icon: 'line-height',
      fetch: function(callback) {
        const defaultLineHeightFormats = '1 1.5 1.75 2 3 4 5';
        const userSettings = editor.settings.lineheight_formats;
        const lineheightFormats = typeof userSettings === 'string' ? userSettings : defaultLineHeightFormats;

        const items = lineheightFormats.split(' ').map(item => {
          let text = item,
            value = item;
          const values = item.split('=');
          if (values.length > 1) {
            [text, value] = values;
          }

          return {
            type: 'menuitem',
            text: text,
            onAction: function() {
              editor.formatter.apply('lineheight', { value: value });
              editor.fire('change', {});
            }
          };
        });

        callback(items);
      }
    });
  });
})();
