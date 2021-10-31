Atlas provides the the following forms of support for Halo Script interations in Halos 1 through 3:
- Autocomplete features using intellisense
- Full function descriptions, return types, and parameters for halo script functions. 
- Value type listings through intellisense. Type # for a list of value types (e.g. a list of teams)
- A theme specifically designed for the language
- Syntax highlighting

Future support for other halo titles is planned as official mod tools are released for those games.

**======Guide=======**

**Enabling the theme**

The theme can be enabled through the toolbar as below, and then selecting "Atlas". Alternatively you can bring up the theme select menu using Ctrl+K followed by Ctrl+T

![image](https://user-images.githubusercontent.com/80323148/139600755-b96bc830-83ce-46a5-b046-3de39619ce54.png)


**Using intellisense with Atlas**

Ctrl+Spacebar is the default shortcut to use intellisense. Once enabled by default you will be able to see a list autocomplete options each time you begin typing. Press Ctrl+Spacebar again to turn this function off.

You can use your arrow keys to navigate the autocomplete options, if not already showing, you can press Ctrl+Spacebar again to see details of the function. Below is a breakdown of the details section.

![intellisense guide](https://user-images.githubusercontent.com/80323148/139600531-a1ffd041-1a76-4869-835f-515a06ed436a.png)

**Inserting snippets with the command palette**


Syntax highlighting is provided for the following types:

- Comments
- Numbers
- Strings
- Operators
- Booleans
- Class (i.e. Script / Global types)
- Script type (e.g. startup, static...)
- Enumerated values, such as 'heroic' which represents a number
- Value types (e.g. void, real, ai...)
- Engine globals, which are global variables that can be used without the user needing to declare them (e.g. game_speed, ai_current_actor)
- HaloScript functions (e.g. ai_place, object_create...)
- Script names, the extension will apply highlighting to words which refer to a user defined script name.
- Any item using the foreground colour is assumed to be a global variable or a reference to an entity defined in a scenario tag (e.g. an object name or ai objective). 

The image below is an example made using the packaged theme.

![image](https://user-images.githubusercontent.com/80323148/139127460-063c393b-d2c3-4f75-be5c-f2717913b8bc.png)

### 1.0.0

Initial release

#Known issues

- Script name highlighting will be incorrectly applied where the name is expected two parameters after the function name, and the first parameter is attained using an expression group.
