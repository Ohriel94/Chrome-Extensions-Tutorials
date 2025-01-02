# Chrome-Extensions-Tutorials

Get started as a chrome developer
[Chrome for developers - Get Started](https://developer.chrome.com/docs/extensions/get-started?hl=fr)

## Basic Structure of a Chrome Extension

A Chrome extension consists of several files and directories:

```
+-- 1-HelloWorld/
|   +-- manifest.json
|   +-- background.js
|   +-- scripts/
    |   +-- react.production.min.js
    |   +-- content.js
    +-- popup/
    |   +-- popup.js
    |   +-- popup.css
    |   +-- popup.html
    +-- images/
    |   +-- icon16.png
    |   +-- icon32.png
    |   +-- icon48.png
    |   +-- icon128.png

```

## Extension Terminology

-  **Manifest**: Defines the basic information about the extension such as its name, version, description, and permissions. (_Has to be named **manifest.json**_)
-  **Service Workers**: Runs in the background and handles browser events such as removing a bookmark, or closing a tab. (_Can't directly access the DOM_)
-  **Content Scripts**: Run JavaScript in the context of a web page.
-  **Toolbar Action**: Execute code when the user clicks on the extension toolbar icon or show a popup using the Action API.
-  **Side Panel**: Display custom UI on the browser side panel.
-  **DeclarativeNetRequest**: Intercep, block, or modify network requests
