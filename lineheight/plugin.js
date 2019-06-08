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

      editor.ui.registry.addIcon(
        'line-height',
        `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path>
          </svg>
        `
      );
    });

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
