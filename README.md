# h3script README

Provides syntax highlighting support for Halo 3 Scripting.

#features

H3Script provides syntax highlighting for the following types:

- Commments
- Numbers
- Strings
- Operators
- Booleans
- Class (i.e. Script / Global types)
- Script type (i.e. startup, static...)
- Enumerated values, such as 'heroic' which represents a number
- Value types (i.e. void, real, ai...)
- Engine globals, which are global variables that can be used without the user needing to declare them (i.e. game_speed, ai_current_actor)
- HaloScript functions (i.e. ai_place, object_create...)
- Script names, the extension will apply highlighting to words which refer to a user defined script name.
- Any item using the foreground colour is assumed to be a global variable or a reference to an object defined in a scenario tag. 

The image below is an example made using Atlas, a theme designed for H3Script with an aim to mimic the style Bungie used when developing Halo 3.

![image](https://user-images.githubusercontent.com/80323148/138606292-b5709879-f77b-44f2-9d16-f6292f47806e.png)


### 1.0.0

Initial release
