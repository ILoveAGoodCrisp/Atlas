# h3script README

Provides syntax highlighting support for Halo 3 Scripting.

H3Script provides syntax highlighting for the following types:

- Commments
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

The image below is an example made using Atlas, a theme designed for H3Script with an aim to mimic the style Bungie used when developing Halo 3.

![image](https://user-images.githubusercontent.com/80323148/138737044-eba831d5-7c78-4e82-8e1e-ac934b1ff8d5.png)

### 1.0.0

Initial release

#Known issues

- Script name highlighting will be incorrectly applied where the name is expected two parameters after the function name, and the first parameter is attained using an expression group.
