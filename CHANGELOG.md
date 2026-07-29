# Change Log

## [2.4.2]

- added H2AMPEK detection, Halo 4 language selection, and stock `compile-scripts` support
- disabled compile controls for Editing Kits without a standalone stock compiler
- removed custom Tool command overrides
- recognized Tool failures that return exit code 0 with `failed to load` output

## [2.4.1]

- automatically selects the HaloScript language from the containing Editing Kit
- fixed the compile status tooltip and command path defaulting to Halo 1 before kit detection
- added `atlas.compiler.autoDetectScriptLanguage` for users who prefer manual language selection

## [2.4.0]

- added trusted-workspace scenario script compilation from the editor title and status bar
- added Steam Editing Kit auto-detection and per-game manual paths
- added safe Halo 2 and Halo 4 Tool command adapters
- added data-to-tags scenario discovery, ambiguity prompts, concurrency protection, and compiler output

## [1.0.1]

- added indent formatting
- added further description to the readme
- fixed quotes not automatically closing

## [1.0.0]

- Initial release
