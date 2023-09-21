export class HSValueType {
	constructor(
		public name: string,
		public games: string[],
		public desc: string
	) {}
}

export var hsValueTypes = new Array<HSValueType>();

var newValueType = new HSValueType(
	'void',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Null value. A function that returns this returns nothing',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'boolean',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Either True or False',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'real',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Floating point value',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'short',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Integer value in the range -32,768 to 32,767',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'long',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Integer value in the range -2,147,483,648 to 2,147,483,647',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'string',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'String of characters in double quotes (optionally single quotes if using H4)',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'string_id',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'Reference to a tag string field',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Reference to one of: an ai actor, a squad_group, an encounter, a squad, an ai_starting_location (in the form squad/starting_location or squad.starting_location if H4)',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'object',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Object',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'unit',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Unit',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'vehicle',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Vehicle',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'weapon',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Weapon',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'device',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Device',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'scenery',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Scenery',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'effect_scenery',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Runtime Effect Scenery',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'object_list',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'List of objects',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'object_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Object name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'unit_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Unit name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'vehicle_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Vehicle name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'weapon_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Weapon name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'device_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Device name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'scenery_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Scenery name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'sound',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Sound tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'effect',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Effect tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'damage',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Damage tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'looping_sound',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Looping sound tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'animation_graph',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Animation Graph tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'damage_effect',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Damage effect tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'object_definition',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Tag path to any object tag. Captures all objects in the scenario that have this tag path',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'script',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Name of a compiled script',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'unit_seat_mapping',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'Matches seats of a vehicle. Can be a substring that matches multiple seats',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'trigger_volume',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Trigger Volume name defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cutscene_flag',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Cutscene Flag defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cutscene_camera_point',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Cutscene Camera Point definined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cutscene_title',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Cutscene Title definined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cutscene_recording',
	['H1'],
	'Cutscene recording defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'device_group',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Device Group defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'point_reference',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'Point Reference in the scenario. Accessed in the form point_set/point_reference (or point_set.point_reference if H4)',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'point_set_reference',
	['H4'],
	'Point Set Reference in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai_command_list',
	['H1'],
	'AI Command List from the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai_command_script',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'A compiled AI command script',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai_behavior',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'Game engine AI Behaviour',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai_orders',
	['H2'],
	'AI Order defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai_line',
	['H3', 'H0', 'HR', 'H4'],
	'AI line from the scenarios mission dialogue tag',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'starting_profile',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Starting Profile defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'conversation',
	['H1', 'H2'],
	'AI Conversation defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'navpoint',
	['H1', 'H2'],
	'Navpoint defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'team',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Team for setting ai allegiance',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'mp_team',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Multiplayer Team',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'skull',
	['HR', 'H4'],
	'The name of a skull',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'primary_skull',
	['H0'],
	'The name of a Primary Skull',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'secondary_skull',
	['H0'],
	'The name of a Secondary Skull',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'sound_event',
	['H4'],
	'WWise sound event',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'hud_message',
	['H1', 'H2'],
	'Hud Message defined in the scenario',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'player',
	['HR', 'H4'],
	'Reference to a player',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'actor_variant',
	['H1'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'structure_bsp',
	['H2'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'zone_set',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'designer_zone',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'style',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'AI Style',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'folder',
	['H3', 'H0', 'HR', 'H4'],
	'Scenario Folder',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'bitmap',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'shader',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'render_model',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'structure_definition',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'lightmap_definition',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cinematic_definition',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cinematic_scene_definition',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cinematic_scene_data_definition',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cinematic_transition_definition',
	['HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'bink_definition',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cui_screen_definition',
	['HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'any_tag',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'any_tag_not_resolving',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'game_difficulty',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'An Enum representing a game difficulty',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'controller',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'button_preset',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'joystick_preset',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'player_color',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'player_model_choice',
	['HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'player_character_type',
	['H3', 'H0'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'voice_output_setting',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'voice_mask',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'subtitle_setting',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'ai_default_state',
	['H1'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'hud_corner',
	['H1', 'H2'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'actor_type',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'model_state',
	['H2', 'H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'network_event',
	['H2'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'event',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'character_physics',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'firing_point_evaluator',
	['HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'damage_region',
	['HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'currency_type',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'delivery_method',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'wave_difficulty',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'firefight_goal',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'firefight_wave_type',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'font',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'text_justification',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'text_alignment',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'text_drop_shadow_type',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'havok_group',
	['H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'effect_scenery_name',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'cinematic_lightprobe',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'animation_budget_reference',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'looping_sound_budget_reference',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'sound_budget_reference',
	['H3', 'H0', 'HR', 'H4'],
	'',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'function_name',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Name of a function',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'function',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'Name of a function',
);
hsValueTypes.push(newValueType);

var newValueType = new HSValueType(
	'passthrough',
	['H1', 'H2', 'H3', 'H0', 'HR', 'H4'],
	'A function that returns this will instead return the last value it evaluated',
);
hsValueTypes.push(newValueType);
