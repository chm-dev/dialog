This fork adds one additional dialog type called 'confirm' for win32.
It shows buttons with "Yes" and "No".

```javascript
const dialog = require("dialog");

// example, without setting title
dialog.show("confirm", "Is the sun shining?", function(exitCode) {
  switch (exitCode) {
    case 6:
      console.log("Shame. I am sure it will be sunny tommorow!");
      break;
    case 5:
      console.log("Lovely! I hope you enjoy your day!");
      break;
    default:
      console.error("Unknown response for confirm type.");
  }
});
```

# Dialog

Simple wrapper around zenity, osascript and vbscript that lets you
show native alert dialogs on Linux, OSX and Windows, respectively.

## Example

```js
var dialog = require("dialog");

dialog.info("Hello there");
```

## Usage

To show an error dialog:

```js
dialog.err(msg, title, callback);
```

To show a generic info dialog:

```js
dialog.info(msg, title, callback);

// example, setting title
dialog.info("Ground control to major Tom.", "My app", function(exitCode) {
  if (exitCode == 0) console.log("User clicked OK");
});
```

To show a warning dialog:

```js
dialog.warn(msg, title, callback);

// example, without setting title
dialog.warn("This computer will autoterminate itself in 5 seconds.", function(
  exitCode
) {
  if (exitCode == 1) console.log("User closed window");
});
```

`exitCode` indicates whether the user clicked the default (OK) button (value `0`), or if they closed the window or clicked the "No/Cancel" button (value `1`).

Both `title` and `callback` are optional. Default title shown is "Important".

## Credits

Written by Tomás Pollak, except for the MsgBox script which was written by
[StackOverflow user boflynn](http://stackoverflow.com/a/774197).

## Copyright

(c) 2012 Fork Ltd. MIT license.
