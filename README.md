**Atlas** provides the the following forms of support for Halo Script interations in Halos 1 through 3:
- Autocomplete features using intellisense
- Full function descriptions, return types, and parameters for halo script functions. 
- Value type listings through intellisense. Type # for a list of value types (e.g. a list of teams)
- A theme specifically designed for the language
- Syntax highlighting

Future support for other halo titles is planned as official mod tools are released for those games.

**======Guide=======**

**Enabling the theme**

The theme can be enabled through the toolbar as below by selecting File>Preferences>Color Theme, and then selecting "Atlas". Alternatively you can bring up the theme select menu using Ctrl+K followed by Ctrl+T

**Using intellisense with Atlas**

Ctrl+Spacebar is the default shortcut to use intellisense. Once enabled by default you will be able to see a list autocomplete options each time you begin typing. Press Ctrl+Spacebar again to turn this function off.

You can use your arrow keys to navigate the autocomplete options, if not already showing, you can press Ctrl+Spacebar again to see details of the function. Below is a breakdown of the details section. Fromt the command palette you can search for the Insert Snippet command (note that the cog beside the command will let you assign a shortcut to this, which I recommend).

![intellisense guide](https://user-images.githubusercontent.com/80323148/139600531-a1ffd041-1a76-4869-835f-515a06ed436a.png)

**Inserting snippets with the command palette**

Any autocomplete function can also be input via snippets using the command palette. By default the command palette can be accessed by the shortcut Ctrl+Shift+P or through the menu by selecting View> Command Palette. The Insert Snippet command is an alternative way or inserting functions and quick templates, and allows your to also search descriptions to find options.

![image](https://user-images.githubusercontent.com/80323148/139602116-91bf4cb6-02cc-47cc-b2f3-54d332bc0315.png)

Also provided along with functions are value type lists and some templates. Value type lists always begin with #

![image](https://user-images.githubusercontent.com/80323148/139602166-72c50624-9d9f-44d0-b127-5f4ef60dc4c6.png)

The following templates are available, these can either be selected through snippets or using intellisense:

startup - creates an empty startup script
dormant - creates an empty dormant script
continuous - creates an empty continuous script
static - creates an empty static script
static-w/parameter - creates an empty static script with a single parameter
command_script - creates an empty command_script
stub - creates an empty stub script
stub-w/parameter - creates an empty stub script with a single parameter

global - creates a template for inserting a global variable

loop - generates a template for loop


**Syntax highlighting** 

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
- Any item using the foreground colour is assumed to be a global variable, tag, or a reference to an entity defined in a scenario tag (e.g. an object name or ai objective). 

There is small level of error checking in use by the highlighter, for example the "+" in (1 + 4) would not be highlighted, as this is an incorrect placement for a function.

The image below is an example made using the packaged theme.

![image](https://user-images.githubusercontent.com/80323148/139127460-063c393b-d2c3-4f75-be5c-f2717913b8bc.png)

### 1.0.0

Initial release

#Known issues

- Script name highlighting will be incorrectly applied where the name is expected two parameters after the function name, and the first parameter is attained using an expression group.
