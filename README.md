# Chrome-Extensions-Tutorials

Get started as a chrome developer
[Chrome for developers - Get Started](https://developer.chrome.com/docs/extensions/get-started?hl=fr)

## 1 - First extension (_1-HelloWorld_)

### Basic Structure of a Chrome Extension

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

### Extension Terminology

-  **Manifest**: Defines the basic information about the extension such as its name, version, description, and permissions. (_Has to be named **manifest.json**_)
-  **Service Workers**: Runs in the background and handles browser events such as removing a bookmark, or closing a tab. (_Can't directly access the DOM_)
-  **Content Scripts**: Run JavaScript in the context of a web page.
-  **Toolbar Action**: Execute code when the user clicks on the extension toolbar icon or show a popup using the Action API.
-  **Side Panel**: Display custom UI on the browser side panel.
-  **DeclarativeNetRequest**: Intercep, block, or modify network requests

To charge an unpacked extension :

-  Open Chrome's Extensions page (`chrome://extensions/`).
-  Enable "Developer mode" in the top right corner.
-  Click on : `Load unpacked`

### Reload an extension

After editing a file, you need to reload the extension by clicking on the **Refresh** icon in the **Extensions page**.

#### When to reload an extension

| Component                  |   Reload required   |
| :------------------------- | :-----------------: |
| Manifest                   |         Yes         |
| Service worker             |         Yes         |
| Content scripts            | Yes (_+ host page_) |
| Popup                      |         Yes         |
| Option page                |         Yes         |
| Other extension HTML pages |         Yes         |

### Console logs and errors

You can debug the code by using the **Errors** button in the **Extensions page**, or by using `console.log()`.
Log messages are located in the browser console:

1. Open popup
2. Right click on popup
3. Select **Inspect**
4. In [DevTools](https://developer.chrome.com/docs/devtools), navigate to the **Console** panel.

## 2 - Execute scripts on every page (_2-ReadingTime_)

### Icons

If you want distribute an extension on the Chrome Web Store, you'll have to add icons. You can add the images in a dedicated folder and then declare them in the manifest :

```json
{
  ...
  "icons": {
    "16": "images/icon16.png",
    "32": "images/icon32.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png",
    }
}
```

#### When will these icons displayed

| Size    | Use                                                  |
| :------ | :--------------------------------------------------- |
| 16x16   | Favicon on extension's pages and context menu.       |
| 32x32   | Windows computers often require this size            |
| 48x48   | Displays on the **Extensions Page**                  |
| 128x128 | Displays on installation and in the Chrome Web Store |
