TinyMCE - Plugin - line-height Formatter
==========================

A very basic, based on the font-size implementation in TinyMCE, plugin to format a element with a given line-height.

## Requirements ##

This was written for TinyMCE version 4.1.5 (2014-09-09)

https://github.com/tinymce/tinymce/

## Setup ##

Copy the plugin into your TinyMCE plugin folder.

Your TinyMCE init() method should contain the following value:

```javascript
tinymce.init({
    ...
    plugins: 'lineheight',
    toolbar: 'lineheightselect' 
    ...
});
```

Also you could configure the different heights like that:

```javascript
tinymce.init({
    ...
    lineheight_formats: "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 36pt",
    ...
});
```