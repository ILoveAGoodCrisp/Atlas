export class HSFunction {
	constructor(
		public name: string,
		public args: string[],
		public r_type: string,
		public games: string[],
		public desc: string
	) {}
}

export var hsFunctions = new Array<HSFunction>();

var newFunc = new HSFunction(
	"begin",
	['expression(s)'],
	"passthrough",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns the last expression in a sequence after evaluating the sequence in order",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"begin_random",
	['expression(s)'],
	"passthrough",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Evaluates the sequence of expressions in random order and returns the last value evaluated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"if",
	['boolean', 'then', 'else?'],
	"passthrough",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns one of two values based on the value of a condition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cond",
	['(boolean', 'result)', 'Optionally repeat this pattern'],
	"passthrough",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns the value associated with the first true condition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set",
	['variable_name', 'expression'],
	"passthrough",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the value of a global variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"and",
	['boolean(s)'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if all specified expressions are true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"or",
	['boolean(s)'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if any specified expressions are true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"+",
	['number(s)'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns the sum of all specified expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"-",
	['number-1', 'number-2'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns the difference of two expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"*",
	['number(s)'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns the product of all specified expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"/",
	['number-1', 'number-2'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns the quotient of two expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"min",
	['number(s)'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the minimum of all specified expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"max",
	['number(s)'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the maximum of all specified expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"=",
	['expression-1', 'expression-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if two expressions are equal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"!=",
	['expression-1', 'expression-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if two expressions are not equal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	">",
	['number-1', 'number-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if the first number is larger than the second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"<",
	['number-1', 'number-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if the first number is smaller than the second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	">=",
	['number-1', 'number-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if the first number is larger than or equal to the second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"<=",
	['number-1', 'number-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns true if the first number is smaller than or equal to the second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep",
	['short', 'script?'],
	"void",
	['H1', 'H2', 'HR', 'H4'],
	"Pauses execution of this script (or, optionally, another script) for the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_forever",
	['script?'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Pauses execution of this script (or, optionally, another script) forever",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_until",
	['boolean', 'short?', 'long?'],
	"void",
	['H1', 'H2'],
	"Pauses execution of this script until the specified condition is true, checking once per second unless a different number of ticks is specified. If the final optional argument is given, this function will stop sleeping regardless of condition after <long> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"wake",
	['script', 'name'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Wakes a sleeping script in the next update",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"inspect",
	['expression'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prints the value of an expression to the screen for debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit",
	['object'],
	"unit",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Converts an object to a unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_debug_communication_suppress",
	['string(s)'],
	"void",
	['H1'],
	"Suppresses (or stops suppressing) a set of ai communication types",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_debug_communication_ignore",
	['string(s)'],
	"void",
	['H1'],
	"Ignores (or stops ignoring) a set of ai communication types when printing out communications",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_debug_communication_focus",
	['string(s)'],
	"void",
	['H1'],
	"Focuses (or stops focusing) a set of unit vocalization types",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"not",
	['boolean'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the opposite of the expression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pin",
	['real-1', 'real-2', 'real-3'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the first value pinned between the second two",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_script_thread",
	['string', 'boolean'],
	"void",
	['H1', 'H3', 'HO'],
	"Verbose threads spew to log about script and function calls",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting",
	['boolean'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Turn on/off hs script debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breakpoint",
	['string'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"If breakpoints are enabled, pause execution when this statement is hit (displaying the given message)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_active_scripts",
	[],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Terminates all currently running threads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_executing_running_thread",
	[],
	"long",
	['H1', 'H3', 'HO', 'HR'],
	"Retrieves the current executing thread index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_thread",
	['long'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Kill the specified thread",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_started",
	['string'],
	"boolean",
	['H1', 'H3', 'HO'],
	"Returns true if the continuous, dormant or startup script was started",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_finished",
	['string'],
	"boolean",
	['H1', 'H3', 'HO'],
	"Returns true if the continuous, dormant or startup script was finished",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"abs_integer",
	['long'],
	"long",
	['H1'],
	"Return the absolute (non-negative) value of an integer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"abs_real",
	['real'],
	"real",
	['H1'],
	"Return the absolute (non-negative) value of a real",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitwise_and",
	['long-1', 'long-2'],
	"long",
	['H1'],
	"<lhs> and <rhs>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitwise_or",
	['long-1', 'long-2'],
	"long",
	['H1'],
	"<lhs> or <rhs>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitwise_xor",
	['long-1', 'long-2'],
	"long",
	['H1'],
	"<lhs> xor <rhs>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitwise_left_shift",
	['long', 'short'],
	"long",
	['H1'],
	"<value> lhs <bit_count>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitwise_right_shift",
	['long', 'short'],
	"long",
	['H1'],
	"<value> rhs <bit_count>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bit_test",
	['long', 'short'],
	"long",
	['H1'],
	"<flags> <bit_index>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bit_toggle",
	['long', 'short', 'boolean'],
	"long",
	['H1'],
	"<flags> <bit_index> <on_or_off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitwise_flags_toggle",
	['long-1', 'long-2', 'boolean'],
	"long",
	['H1'],
	"<value> <flags> <on_or_off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prints a string to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_if",
	['boolean', 'string'],
	"void",
	['H1', 'HR'],
	"Prints a string to the console if the condition is true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"log_print",
	['string'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Prints a string to the hs log file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"local_players",
	[],
	"object_list",
	['H1', 'HR', 'H4'],
	"Returns a list of the living player units on the local machine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players",
	[],
	"object_list",
	['H1', 'H2'],
	"Returns a list of the players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_on_multiplayer_team",
	['short'],
	"object_list",
	['H1'],
	"Returns a list of the living player units on the mp team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_not_inside",
	['trigger_volume', 'cutscene_flag'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Moves all players outside a specified trigger volume to a specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_object",
	['trigger_volume', 'object'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the specified object is within the specified volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_objects",
	['trigger_volume', 'object_list'],
	"boolean",
	['H1'],
	"Returns true if any of the specified objects are within the specified volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_objects_all",
	['trigger_volume', 'object_list'],
	"boolean",
	['H1'],
	"Returns true if any of the specified objects are within the specified volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_teleport",
	['object', 'cutscene_flag'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Moves the specified object to the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_facing",
	['object', 'cutscene_flag'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns the specified object in the direction of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield",
	['object', 'real'],
	"void",
	['H1', 'H2', 'HR', 'H4'],
	"Sets the shield vitality of the specified object (between 0 and 1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_permutation",
	['object', 'string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the desired region (use  for all regions) to the permutation with the given name, e.g. (object_set_permutation flood right arm ~damaged)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create",
	['object_name'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Creates an object from the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy",
	['object'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Destroys an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_anew",
	['object_name'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Creates an object, destroying it first if it already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_containing",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO'],
	"Creates all objects from the scenario whose names contain the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_anew_containing",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO'],
	"Creates anew all objects from the scenario whose names contain the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_containing",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO'],
	"Destroys all objects from the scenario whose names contain the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_all",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Destroys all non player objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_delete_by_definition",
	['object_definition'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Deletes all objects of type <definition>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_get",
	['object_list', 'short'],
	"object",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns an item in an object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_count",
	['object_list'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of objects in a list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_count_not_dead",
	['object_list'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of objects in a list that aren't dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new",
	['effect', 'cutscene_flag'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts the specified effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_object_marker",
	['effect', 'object', 'string'],
	"void",
	['H1'],
	"Starts the specified effect on the specified object at the specified marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_new",
	['damage', 'cutscene_flag'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Causes the specified damage at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object",
	['damage', 'object'],
	"void",
	['H1', 'H2'],
	"Causes the specified damage at the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_can_see_object",
	['object_list', 'object', 'real'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any of the specified units are looking within the specified number of degrees of the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_can_see_flag",
	['object_list', 'cutscene_flag', 'real'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any of the specified units are looking within the specified number of degrees of the flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_object",
	['object_list', 'object'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns minimum distance from any of the specified objects to the specified destination object. (returns -1 if there are no objects to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_flag",
	['object_list', 'cutscene_flag'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns minimum distance from any of the specified objects to the specified flag. (returns -1 if there are no objects, or no flag, to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_position",
	['object_list', 'real-1', 'real-2', 'real-3'],
	"real",
	['H1', 'H2', 'H4'],
	"Returns minimum distance from any of the specified objects to the specified position. (returns -1 if there are no objects to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_gain",
	['string', 'real'],
	"void",
	['H1'],
	"Absolutely do not use this",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_get_gain",
	['string'],
	"real",
	['H1'],
	"Absolutely do not use this either",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_recompile",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Recompiles scripts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_doc",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Saves a file called hs_doc.txt with parameters for all script commands",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"help",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prints a description of the named function",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_range",
	['short-1', 'short-2'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns a random value in the range [lower bound, upper bound)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"real_random_range",
	['real-1', 'real-2'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Returns a random value in the range [lower bound, upper bound)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_constants_reset",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Resets all physics constants to earthly values",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_set_gravity",
	['real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Set global gravity acceleration relative to halo standard gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_get_gravity",
	[],
	"real",
	['H1'],
	"Get the current global gravity acceleration relative to halo standard gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"numeric_countdown_timer_set",
	['long', 'boolean'],
	"void",
	['H1'],
	"<milliseconds>, <auto_start>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"numeric_countdown_timer_get",
	['short'],
	"short",
	['H1'],
	"<digit_index>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breakable_surfaces_enable",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables breakability of all breakable surfaces on level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_play",
	['unit', 'cutscene_recording'],
	"boolean",
	['H1', 'H2', 'HR', 'H4'],
	"Make the specified unit run the specified cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_play_and_delete",
	['unit', 'cutscene_recording'],
	"boolean",
	['H1', 'H2', 'HR', 'H4'],
	"Make the specified unit run the specified cutscene recording, deletes the unit when the animation finishes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_play_and_hover",
	['vehicle', 'cutscene_recording'],
	"boolean",
	['H1', 'H2', 'HR', 'H4'],
	"Make the specified vehicle run the specified cutscene recording, hovers the vehicle when the animation finishes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_kill",
	['unit'],
	"void",
	['H1', 'H2', 'HR', 'H4'],
	"Kill the specified unit's cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_time",
	['unit'],
	"short",
	['H1', 'H2', 'HR'],
	"Return the time remaining in the specified unit's cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_ranged_attack_inhibited",
	['object', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"False prevents object from using ranged attack",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_melee_attack_inhibited",
	['object', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"False prevents object from using melee attack",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_dump_memory",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Debugs object memory usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_collideable",
	['object', 'boolean'],
	"void",
	['H1'],
	"False prevents any object from colliding with the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_scale",
	['object', 'real', 'short'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the scale for a given object and interpolates over the given number of frames to achieve that scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_attach",
	['object-1', 'string-1', 'object-2', 'string-2'],
	"void",
	['H1'],
	"Attaches the second object to the first; both strings can be empty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_detach",
	['object-1', 'object-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Detaches from the given parent object the given child object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"garbage_collect_now",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Causes all garbage objects except those visible to a player to be collected immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cannot_take_damage",
	['object_list'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prevents an object from taking damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_can_take_damage",
	['object_list'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Allows an object to take damage again",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_beautify",
	['object', 'boolean'],
	"void",
	['H1'],
	"Makes an object pretty for the remainder of the levels' cutscenes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict",
	['object_list'],
	"void",
	['H1'],
	"Loads textures necessary to draw a objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_predict",
	['object_definition'],
	"void",
	['H1', 'H2', 'HR', 'H4'],
	"Loads textures necessary to draw an object that's about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_pvs_activate",
	['object'],
	"void",
	['H1'],
	"Just another (old) name for object_pvs_set_object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_pvs_set_object",
	['object'],
	"void",
	['H1'],
	"Sets the specified object as the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_pvs_set_camera",
	['cutscene_camera_point'],
	"void",
	['H1'],
	"Sets the specified cutscene camera point as the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_pvs_clear",
	[],
	"void",
	['H1'],
	"Removes the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_lights",
	['boolean'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables/disables dynamic lights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_get_animation_time",
	['scenery'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of ticks remaining in a custom animation (or zero, if the animation is over)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start",
	['scenery', 'animation_graph', 'string'],
	"void",
	['H1'],
	"Starts a custom animation playing on a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_at_frame",
	['scenery', 'animation_graph', 'string', 'short'],
	"void",
	['H1'],
	"Starts a custom animation playing on a piece of scenery at a specific frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_can_blink",
	['unit', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Allows a unit to blink or not (units never blink when they are dead)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_open",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Opens the hatches on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_close",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Closes the hatches on a given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_kill",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Kills a given unit, no saving throw",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_kill_silent",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Kills a given unit silently (doesn't make them play their normal death animation or sound)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_custom_animation_time",
	['unit'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of ticks remaining in a unit's custom animation (or zero, if the animation is over)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_stop_custom_animation",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops the custom animation running on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_custom_animation_at_frame",
	['unit', 'animation_graph', 'string', 'boolean', 'short'],
	"boolean",
	['H1'],
	"Starts a custom animation playing on a unit at a specific frame index(interpolates into animation if next to last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation",
	['unit', 'animation_graph', 'string', 'boolean'],
	"boolean",
	['H1'],
	"Starts a custom animation playing on a unit (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_list",
	['object_list', 'animation_graph', 'string', 'boolean'],
	"boolean",
	['H1'],
	"Starts a custom animation playing on a unit list (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_playing_custom_animation",
	['unit'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the given unit is still playing a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_aim_without_turning",
	['unit', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Allows a unit to aim in place without turning",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion",
	['unit', 'short'],
	"void",
	['H1', 'H2'],
	"Sets a unit's facial expression (-1 is none, other values depend on unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_enterable_by_player",
	['unit', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Can be used to prevent the player from entering a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle",
	['unit', 'vehicle', 'string'],
	"void",
	['H1'],
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_list",
	['vehicle', 'string', 'object_list'],
	"boolean",
	['H1'],
	"Tests whether the named seat has an object in the object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat",
	['vehicle', 'string', 'unit'],
	"boolean",
	['H1'],
	"Tests whether the named seat has a specified unit in it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion_animation",
	['unit', 'string'],
	"void",
	['H1'],
	"Sets the emotion animation to be used for the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_exit_vehicle",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes a unit exit its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_maximum_vitality",
	['unit', 'real-1', 'real-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a unit's maximum body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"units_set_maximum_vitality",
	['object_list', 'real-1', 'real-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a group of units' maximum body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_current_vitality",
	['unit', 'real-1', 'real-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a unit's current body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"units_set_current_vitality",
	['object_list', 'real-1', 'real-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a group of units' current body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_load_magic",
	['unit', 'string', 'object_list'],
	"short",
	['H1'],
	"Makes a list of units (named or by encounter) magically get into a vehicle, in the substring-specified seats (e.g. cd-passenger... empty string matches all seats)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_unload",
	['unit', 'string'],
	"short",
	['H1'],
	"Makes units get out of a vehicle from the substring-specified seats (e.g. cd-passenger... empty string matches all seats)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"magic_seat_name",
	['string'],
	"void",
	['H1'],
	"All units controlled by the player will assume the given seat name (valid values are 'asleep', 'alert', 'stand', 'crouch' and 'flee')",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_seat",
	['unit', 'string'],
	"void",
	['H1'],
	"This unit will assume the named seat",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"magic_melee_attack",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Causes player's unit to start a melee attack",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_riders",
	['unit'],
	"object_list",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns a list of all riders in a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_driver",
	['unit'],
	"unit",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the driver of a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_gunner",
	['unit'],
	"unit",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the gunner of a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_health",
	['unit'],
	"real",
	['H1'],
	"Returns the health [0,1] of the unit, returns -1 if the unit does not exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_shield",
	['unit'],
	"real",
	['H1'],
	"Returns the shield [0,1] of the unit, returns -1 if the unit does not exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_total_grenade_count",
	['unit'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the total number of grenades for the given unit, 0 if it does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_weapon",
	['unit', 'object_definition'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the <unit> has <object> as a weapon, false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_weapon_readied",
	['unit', 'object_definition'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the <unit> has <object> as the primary weapon, false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_doesnt_drop_items",
	['object_list'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prevents any of the given units from dropping weapons or grenades when they die",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_impervious",
	['object_list', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prevents any of the given units from being knocked around or playing ping animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_suspended",
	['unit', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops gravity from working on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_solo_player_integrated_night_vision_is_active",
	[],
	"boolean",
	['H1'],
	"Returns whether the night-vision mode could be activated via the flashlight button",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"units_set_desired_flashlight_state",
	['object_list', 'boolean'],
	"void",
	['H1'],
	"Sets the units' desired flashlight state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_desired_flashlight_state",
	['unit', 'boolean'],
	"void",
	['H1'],
	"Sets the unit's desired flashlight state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_current_flashlight_state",
	['unit'],
	"boolean",
	['H1'],
	"Gets the unit's current flashlight state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_never_appears_locked",
	['device', 'boolean'],
	"void",
	['H1'],
	"Changes a machine's never_appears_locked flag, but only if paul is a blam!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_get_power",
	['device'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Gets the current power of a named device",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_power",
	['device', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Immediately sets the power of a named device to the given value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position",
	['device', 'real'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the desired position of the given device (used for devices without explicit device groups)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_get_position",
	['device'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Gets the current position of the given device (used for devices without explicit device groups)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position_immediate",
	['device', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Instantaneously changes the position of the given device (used for devices without explicit device groups",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_get",
	['device_group'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the desired value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_set",
	['device_group', 'real'],
	"boolean",
	['H1'],
	"Changes the desired value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_set_immediate",
	['device_group', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Instantaneously changes the value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_one_sided_set",
	['device', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"True makes the given device one-sided (only able to be opened from one direction), false makes it two-sided",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_operates_automatically_set",
	['device', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"True makes the given device open automatically when any biped is nearby, false makes it not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_change_only_once_more_set",
	['device_group', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"True allows a device to change states only once",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breakable_surfaces_reset",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Restores all breakable surfaces",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_all_powerups",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO'],
	"Drops all powerups near player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_all_weapons",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Drops all weapons near player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_give_some_gun",
	[],
	"void",
	['H1'],
	"Drops shotgun",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_all_chars",
	[],
	"void",
	['H1'],
	"Drops all vehicles on player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_spawn_warthog",
	[],
	"void",
	['H1'],
	"Drops a warthog near player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_all_vehicles",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Drops all vehicles on player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_teleport_to_camera",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Teleports player to camera location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage",
	[],
	"void",
	['H1'],
	"Gives the player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage_local_player",
	['short'],
	"void",
	['H1'],
	"Gives the player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheats_load",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Reloads the cheats.txt file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_free",
	['ai'],
	"void",
	['H1'],
	"Removes a group of actors from their encounter and sets them free",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_free_units",
	['object_list'],
	"void",
	['H1'],
	"Removes a set of units from their encounter (if any) and sets them free",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_attach",
	['unit', 'ai'],
	"void",
	['H1', 'H2'],
	"Attaches the specified unit to the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_attach_free",
	['unit', 'actor_variant'],
	"void",
	['H1'],
	"Attaches a unit to a newly created free actor of the specified type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_detach",
	['unit'],
	"void",
	['H1', 'H2'],
	"Detaches the specified unit from all ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place",
	['ai'],
	"void",
	['H1'],
	"Places the specified encounter on the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kill",
	['ai'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Instantly kills the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kill_silent",
	['ai'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Instantly and silently (no animation or sound played) kills the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase",
	['ai'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Erases the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase_all",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Erases all ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_select",
	['ai'],
	"void",
	['H1'],
	"Selects the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_spawn_actor",
	['ai'],
	"void",
	['H1'],
	"Spawns a single actor in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_respawn",
	['ai', 'boolean'],
	"void",
	['H1'],
	"Enables or disables respawning in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_deaf",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables hearing for actors in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_blind",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables sight for actors in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see_encounter",
	['ai-1', 'ai-2'],
	"void",
	['H1'],
	"Makes one encounter magically aware of another",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see_players",
	['ai'],
	"void",
	['H1'],
	"Makes an encounter magically aware of nearby players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see_unit",
	['ai', 'unit'],
	"void",
	['H1'],
	"Makes an encounter magically aware of the specified unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_timer_start",
	['ai'],
	"void",
	['H1'],
	"Makes a squad's delay timer start counting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_timer_expire",
	['ai'],
	"void",
	['H1'],
	"Makes a squad's delay timer expire and releases them to enter combat",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_attack",
	['ai'],
	"void",
	['H1'],
	"Makes the specified platoon(s) go into the attacking state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_defend",
	['ai'],
	"void",
	['H1'],
	"Makes the specified platoon(s) go into the defending state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_retreat",
	['ai'],
	"void",
	['H1'],
	"Makes all squads in the specified platoon(s) maneuver to their designated maneuver squads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_maneuver",
	['ai'],
	"void",
	['H1'],
	"Makes all squads in the specified platoon(s) maneuver to their designated maneuver squads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_maneuver_enable",
	['ai', 'boolean'],
	"void",
	['H1'],
	"Enables or disables the maneuver/retreat rule for an encounter or platoon. the rule will still trigger, but none of the actors will be given the order to change squads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate",
	['ai-1', 'ai-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes all or part of an encounter move to another encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate_and_speak",
	['ai-1', 'ai-2', 'string'],
	"void",
	['H1'],
	"Makes all or part of an encounter move to another encounter, and say their 'advance' or 'retreat' speech lines",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate_by_unit",
	['object_list', 'ai'],
	"void",
	['H1'],
	"Makes a named vehicle or group of units move to another encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance",
	['team-1', 'team-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Creates an allegiance between two teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance_remove",
	['team-1', 'team-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Destroys an allegiance between two teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_living_count",
	['ai'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Return the number of living actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_living_fraction",
	['ai'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Return the fraction [0-1] of living actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_strength",
	['ai'],
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Return the current strength (average body vitality from 0-1) of the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_swarm_count",
	['ai'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Return the number of swarm actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_nonswarm_count",
	['ai'],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Return the number of non-swarm actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_actors",
	['ai'],
	"object_list",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Converts an ai reference to an object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_go_to_vehicle",
	['ai', 'unit', 'string'],
	"void",
	['H1'],
	"Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_go_to_vehicle_override",
	['ai', 'unit', 'string'],
	"void",
	['H1'],
	"Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... nb: any actors who are already going to vehicles will stop and go to this one instead!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_going_to_vehicle",
	['unit'],
	"short",
	['H1'],
	"Return the number of actors that are still trying to get into the specified vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_exit_vehicle",
	['ai'],
	"void",
	['H1'],
	"Tells a group of actors to get out of any vehicles that they are in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_braindead",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes a group of actors braindead, or restores them to life (in their initial state)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_braindead_by_unit",
	['object_list', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes a list of objects braindead, or restores them to life. if you pass in a vehicle index, it makes all actors in that vehicle braindead (including any built-in guns)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_disregard",
	['object_list', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"If true, forces all actors to completely disregard the specified units, otherwise lets them acknowledge the units again",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_prefer_target",
	['object_list', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"If true, *all* enemies will prefer to attack the specified units. if false, removes the preference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_starting_location",
	['ai'],
	"void",
	['H1'],
	"Teleports a group of actors to the starting locations of their current squad(s)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_starting_location_if_unsupported",
	['ai'],
	"void",
	['H1'],
	"Teleports a group of actors to the starting locations of their current squad(s), only if they are not supported by solid ground (i.e. if they are falling after switching bsps)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_renew",
	['ai'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Refreshes the health and grenade count of a group of actors, so they are as good as new",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_try_to_fight_nothing",
	['ai'],
	"void",
	['H1'],
	"Removes the preferential target setting from a group of actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_try_to_fight",
	['ai-1', 'ai-2'],
	"void",
	['H1'],
	"Causes a group of actors to preferentially target another group of actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_try_to_fight_player",
	['ai'],
	"void",
	['H1'],
	"Causes a group of actors to preferentially target the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_command_list",
	['ai', 'ai_command_list'],
	"void",
	['H1'],
	"Tells a group of actors to begin executing the specified command list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_command_list_by_unit",
	['unit', 'ai_command_list'],
	"void",
	['H1'],
	"Tells a named unit to begin executing the specified command list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_command_list_advance",
	['ai'],
	"void",
	['H1'],
	"Tells a group of actors that are running a command list that they may advance further along the list (if they are waiting for a stimulus)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_command_list_advance_by_unit",
	['unit'],
	"void",
	['H1'],
	"Just like ai_command_list_advance but operates upon a unit instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_command_list_status",
	['object_list'],
	"short",
	['H1'],
	"Gets the status of a number of units running command lists: 0 = none, 1 = finished command list, 2 = waiting for stimulus, 3 = running command list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_is_attacking",
	['ai'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns whether a platoon is in the attacking mode (or if an encounter is specified, returns whether any platoon in that encounter is attacking)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_active",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Forces an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_active_by_unit",
	['unit', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Forces a named actor that is not in an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_return_state",
	['ai', 'ai_default_state'],
	"void",
	['H1'],
	"Sets the state that a group of actors will return to when they have nothing to do",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_current_state",
	['ai', 'ai_default_state'],
	"void",
	['H1'],
	"Sets the current state of a group of actors. warning: may have unpredictable results on actors that are in combat",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_playfight",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets an encounter to be playfighting or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_status",
	['ai'],
	"short",
	['H1'],
	"Returns the most severe combat status of a group of actors (0=inactive, 1=noncombat, 2=guarding, 3=search/suspicious, 4=definite enemy(heard or magic awareness), 5=visible enemy, 6=engaging in combat",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_reconnect",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Reconnects all ai information to the current structure bsp (use this after you create encounters or command lists in sapien, or place new firing points or command list points)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_encounter",
	['unit', 'ai'],
	"void",
	['H1'],
	"Sets a vehicle to 'belong' to a particular encounter/squad. any actors who get into the vehicle will be placed in this squad. nb: vehicles potentially drivable by multiple teams need their own encounter!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enterable_distance",
	['unit', 'real'],
	"void",
	['H1'],
	"Sets a vehicle as being impulsively enterable for actors within a certain distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enterable_team",
	['unit', 'team'],
	"void",
	['H1'],
	"Sets a vehicle as being impulsively enterable for actors on a certain team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enterable_actor_type",
	['unit', 'actor_type'],
	"void",
	['H1'],
	"Sets a vehicle as being impulsively enterable for actors of a certain type (grunt, elite, marine etc)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enterable_actors",
	['unit', 'ai'],
	"void",
	['H1'],
	"Sets a vehicle as being impulsively enterable for a certain encounter/squad of actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enterable_disable",
	['unit'],
	"void",
	['H1'],
	"Disables actors from impulsively getting into a vehicle (this is the default state for newly placed vehicles)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_look_at_object",
	['unit', 'object'],
	"void",
	['H1'],
	"Tells an actor to look at an object until further notice",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_stop_looking",
	['unit'],
	"void",
	['H1'],
	"Tells an actor to stop looking at whatever it's looking at",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_automatic_migration_target",
	['ai', 'boolean'],
	"void",
	['H1'],
	"Enables or disables a squad as being an automatic migration target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_follow_target_disable",
	['ai'],
	"void",
	['H1'],
	"Turns off following for an encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_follow_target_players",
	['ai'],
	"void",
	['H1'],
	"Sets the follow target for an encounter to be the closest player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_follow_target_unit",
	['ai', 'unit'],
	"void",
	['H1'],
	"Sets the follow target for an encounter to be a specific unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_follow_target_ai",
	['ai-1', 'ai-2'],
	"void",
	['H1'],
	"Sets the follow target for an encounter to be a group of ai (encounter, squad or platoon)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_follow_distance",
	['ai', 'real'],
	"void",
	['H1'],
	"Sets the distance threshold which will cause squads to migrate when following someone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_conversation",
	['conversation'],
	"boolean",
	['H1'],
	"Tries to add an entry to the list of conversations waiting to play. returns false if the required units could not be found to play the conversation, or if the player is too far away and the 'delay' flag is not set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_conversation_stop",
	['conversation'],
	"void",
	['H1'],
	"Stops a conversation from playing or trying to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_conversation_advance",
	['conversation'],
	"void",
	['H1'],
	"Tells a conversation that it may advance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_conversation_line",
	['conversation'],
	"short",
	['H1'],
	"Returns which line the conversation is currently playing, or 999 if the conversation is not currently playing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_conversation_status",
	['conversation'],
	"short",
	['H1'],
	"Returns the status of a conversation (0=none, 1=trying to begin, 2=waiting for guys to get in position, 3=playing, 4=waiting to advance, 5=could not begin, 6=finished successfully, 7=aborted midway",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_link_activation",
	['ai-1', 'ai-2'],
	"void",
	['H1'],
	"Links the first encounter so that it will be made active whenever it detects that the second encounter is active",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_berserk",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Forces a group of actors to start or stop berserking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_team",
	['ai', 'team'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes an encounter change to a new team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allow_charge",
	['ai', 'boolean'],
	"void",
	['H1'],
	"Either enables or disables charging behavior for a group of actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allow_dormant",
	['ai', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Either enables or disables automatic dormancy for a group of actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance_broken",
	['team-1', 'team-2'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns whether two teams have an allegiance that is currently broken by traitorous behavior",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_control",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Toggles script control of the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set",
	['cutscene_camera_point', 'short'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Moves the camera to the specified camera point over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_relative",
	['cutscene_camera_point', 'short', 'object'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Moves the camera to the specified camera point over the specified number of ticks (position is relative to the specified object)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation",
	['animation_graph', 'string'],
	"void",
	['H1'],
	"Begins a prerecorded camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_first_person",
	['unit'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes the scripted camera follow a unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_dead",
	['unit'],
	"void",
	['H1'],
	"Makes the scripted camera zoom out around a unit as if it were dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_time",
	[],
	"short",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of ticks remaining in the current camera interpolation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load",
	[],
	"void",
	['H1', 'HR', 'H4'],
	"Loads the saved camera position and facing from camera_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save",
	[],
	"void",
	['H1', 'HR', 'H4'],
	"Saves the camera position and facing to camera_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save_name",
	['string'],
	"void",
	['H1', 'HR', 'H4'],
	"Saves the camera position and facing to <name>_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_name",
	['string'],
	"void",
	['H1', 'HR', 'H4'],
	"Loads the camera position and facing from <name>_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save_simple_name",
	['string'],
	"void",
	['H1', 'HR', 'H4'],
	"Saves the camera position and facing to camera_<name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_simple_name",
	['string'],
	"void",
	['H1', 'HR', 'H4'],
	"Loads the camera position and facing from camera_<name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_text",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Loads the camera position and facing from a passed in string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_speed",
	['real'],
	"void",
	['H1'],
	"Changes the game speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_time",
	[],
	"long",
	['H1'],
	"Gets ticks elapsed since the start of the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_time_authoritative",
	[],
	"long",
	['H1'],
	"Gets ticks elapsed since the start of the game (relative to the sim authority)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_variant",
	['string'],
	"void",
	['H1'],
	"Set the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty_get",
	[],
	"game_difficulty",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the current difficulty setting, but lies to you and will never return easy, instead returning normal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty_get_real",
	[],
	"game_difficulty",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the actual current difficulty setting without lying",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts the map from the beginning",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_name",
	['string'],
	"void",
	['H1'],
	"Changes the name of the solo player map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"multiplayer_map_name",
	['string'],
	"void",
	['H1'],
	"Changes the name of the multiplayer map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty_set",
	['game_difficulty'],
	"void",
	['H1'],
	"Changes the difficulty setting for the next map to be loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"crash",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Crashes (for debugging)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_bsp",
	['short'],
	"void",
	['H1', 'H2'],
	"Takes off your condom and changes to a different structure bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"structure_bsp_index",
	[],
	"short",
	['H1', 'H2'],
	"Returns the current structure bsp index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"version",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prints the build version",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"playback",
	[],
	"void",
	['H1'],
	"Starts game in film playback mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"quit",
	[],
	"void",
	['H1'],
	"Quits the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_cubemap",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Takes a cubemap screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_cache_flush",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"I'm a rebel!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_cache_dump_to_file",
	[],
	"void",
	['H1'],
	"Dump dat stuff!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_pvs",
	['boolean'],
	"void",
	['H1'],
	"Displays the current pvs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"radiosity_start",
	[],
	"void",
	['H1'],
	"Starts radiosity computation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"radiosity_save",
	[],
	"void",
	['H1'],
	"Saves radiosity solution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"radiosity_debug_point",
	[],
	"void",
	['H1'],
	"Tests sun occlusion at a point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai",
	['boolean'],
	"void",
	['H1'],
	"Turns all ai on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_triggers",
	['boolean'],
	"void",
	['H1'],
	"Turns impromptu dialogue on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_grenades",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns grenade inventory on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_in",
	['real-1', 'real-2', 'real-3', 'short'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Does a screen fade in from a particular color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_out",
	['real-1', 'real-2', 'real-3', 'short'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Does a screen fade out to a particular color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_start",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Initializes game to start a cinematic (interruptive) cutscene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_stop",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Initializes the game to end a cinematic (interruptive) cutscene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_abort",
	[],
	"void",
	['H1'],
	"Aborts a cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_show_letterbox",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets or removes the letterbox bars",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_title",
	['cutscene_title'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_title_delayed",
	['cutscene_title', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Activates the chapter title, delayed by <real> seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_suppress_bsp_object_creation",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Suppresses or enables the automatic creation of objects during cutscenes due to a bsp switch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_won",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Causes the player to successfully finish the current level and move to the next",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_lost",
	[],
	"void",
	['H1'],
	"Causes the player to revert to their previous saved game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_safe_to_save",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns false if it would be a bad idea to save the player's game right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_all_quiet",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns false if there are bad guys around, projectiles in the air, etc",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_safe_to_speak",
	[],
	"boolean",
	['H1'],
	"Returns false if it would be a bad idea to save the player's game right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_is_cooperative",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the game is cooperative",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Checks to see if it is safe to save game, then saves (gives up after 8 seconds)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_cancel",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Cancels any pending game_save, timeout or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_no_timeout",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Checks to see if it is safe to save game, then saves (this version never gives up)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_totally_unsafe",
	[],
	"void",
	['H1'],
	"Disregards player's current situation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_saving",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Checks to see if the game is trying to save the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_revert",
	[],
	"void",
	['H1'],
	"Reverts to last saved game, if any (for testing, the first bastard that does this to me gets it in the head)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_reverted",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'H4'],
	"Don't use this for anything, you black-hearted bastards",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Saves debug game state to core\\core.bin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save_name",
	['string'],
	"boolean",
	['H1'],
	"Saves debug game state to core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Loads debug game state from core\\core.bin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_at_startup",
	[],
	"void",
	['H1'],
	"Loads debug game state from core\\core.bin as soon as the map is initialized",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_name",
	['string'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Loads debug game state from core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_name_at_startup",
	['string'],
	"void",
	['H1'],
	"Loads debug game state from core\\<path> as soon as the map is initialized",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_skip_ticks",
	['short'],
	"void",
	['H1'],
	"Skips <short> amount of game ticks. only use in cutscenes!!!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_predict",
	['sound', 'boolean'],
	"void",
	['H1'],
	"Loads an impulse sound into the sound cache ready for playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start",
	['sound', 'object', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
	"Plays an impulse sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_time",
	['sound'],
	"long",
	['H1', 'H2', 'H3', 'HR', 'H4'],
	"Returns the time remaining for the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_stop",
	['sound'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_predict",
	['looping_sound'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Your mom",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start",
	['looping_sound', 'object', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Plays a looping sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_stop",
	['looping_sound'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops the specified looping sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_set_scale",
	['looping_sound', 'real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Changes the scale of the sound (which should affect the volume) within the range 0 to 1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_set_alternate",
	['looping_sound', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables the alternate loop/alternate end for a looping sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sounds_enable",
	['string', 'boolean'],
	"void",
	['H1'],
	"Enables or disabled all sound classes matching the substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_enable",
	['boolean'],
	"void",
	['H1'],
	"Enables or disables all sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_master_gain",
	['real'],
	"void",
	['H1'],
	"Set the game's master gain",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_get_master_gain",
	[],
	"real",
	['H1'],
	"Returns the game's master gain",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_music_gain",
	['real'],
	"void",
	['H1'],
	"Set the game's music gain",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_get_music_gain",
	[],
	"real",
	['H1'],
	"Returns the game's music gain",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_effects_gain",
	['real'],
	"void",
	['H1'],
	"Set the game's effects gain",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_get_effects_gain",
	[],
	"real",
	['H1'],
	"Returns the game's effects gain",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_set_gain",
	['string', 'real', 'short'],
	"void",
	['H1'],
	"Changes the gain on the specified sound class(es) to the specified game over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_hover",
	['vehicle', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops the vehicle from running real physics and runs fake hovering physics instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_unzoom_all",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Resets zoom levels on all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_enable_input",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Toggle player input. the player can still free-look, but nothing else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_camera_control",
	['boolean'],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables/disables camera control globally",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_reset",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Resets the player action test state so that all tests will return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_jump",
	[],
	"boolean",
	['H1', 'H2', 'H3'],
	"Returns true if any player has jumped since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_primary_trigger",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HR', 'H4'],
	"Returns true if any player has used primary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_grenade_trigger",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has used grenade trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_zoom",
	[],
	"boolean",
	['H1', 'H2', 'H3'],
	"Returns true if any player has hit the zoom button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_action",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has hit the action key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_accept",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has hit accept since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_back",
	[],
	"boolean",
	['H1'],
	"Returns true if any player has hit the back key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_up",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has looked up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_down",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has looked down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_left",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has looked left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_right",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has looked right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_all_directions",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_all_directions",
	[],
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_add_equipment",
	['unit', 'starting_profile', 'boolean'],
	"void",
	['H1'],
	"Adds/resets the player's health, shield, and inventory (weapons and grenades) to the named profile. resets if third parameter is true, adds if false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_hud",
	['boolean'],
	"boolean",
	['H1', 'H2'],
	"Shows or hides the hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_hud_help_text",
	['boolean'],
	"boolean",
	['H1', 'H2'],
	"Shows or hides the hud help text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"enable_hud_help_flash",
	['boolean'],
	"void",
	['H1'],
	"Starts/stops the help text flashing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_help_flash_restart",
	[],
	"void",
	['H1'],
	"Resets the timer for the help text flashing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"activate_nav_point_flag",
	['navpoint', 'unit', 'cutscene_flag', 'real'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to (local) player <unit> anchored to a flag with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"activate_nav_point_object",
	['navpoint', 'unit', 'object', 'real'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to (local) player <unit> anchored to an object with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"activate_team_nav_point_flag",
	['navpoint', 'team', 'cutscene_flag', 'real'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to a team anchored to a flag with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"activate_team_nav_point_object",
	['navpoint', 'team', 'object', 'real'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to a team anchored to an object with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_activate_team_nav_point_position",
	['navpoint', 'team', 'real-1', 'real-2', 'real-3', 'string', 'real-4'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to a team anchored to position xyz <real, real, real> named <_hs_type_string> and with a vertical offset <real>. if the player is not local to the machine or the improved navpoints setting is disabled, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_activate_team_nav_point_flag",
	['navpoint', 'team', 'cutscene_flag', 'real'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to a team anchored to a flag with a vertical offset <real>. if the player is not local to the machine or the improved navpoints setting is disabled, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_activate_team_nav_point_object",
	['navpoint', 'team', 'object', 'real'],
	"void",
	['H1', 'H2'],
	"Activates a nav point type <string> attached to a team anchored to an object with a vertical offset <real>. if the player is not local to the machine or the improved navpoints setting is disabled, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"deactivate_nav_point_flag",
	['unit', 'cutscene_flag'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a player <unit> anchored to a flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"deactivate_nav_point_object",
	['unit', 'object'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a player <unit> anchored to an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"deactivate_team_nav_point_flag",
	['team', 'cutscene_flag'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a team anchored to a flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"deactivate_team_nav_point_object",
	['team', 'object'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a team anchored to an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_deactivate_team_nav_point",
	['team', 'string'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a team of name <_hs_type_string>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_deactivate_team_nav_point_flag",
	['team', 'cutscene_flag'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a team anchored to a flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_deactivate_team_nav_point_object",
	['team', 'object'],
	"void",
	['H1', 'H2'],
	"Deactivates a nav point type attached to a team anchored to an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breadcrumbs_nav_points_active",
	[],
	"boolean",
	['H1'],
	"Returns true if breadcrumbs improved nav points are enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cls",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Clears console text from the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_overflow_suppression",
	['boolean'],
	"void",
	['H1', 'H2'],
	"Enables or disables the suppression of error spamming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_translation",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"<x> <y> <z>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rotation",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"<yaw> <pitch> <roll>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_vibrate",
	['real-1', 'real-2'],
	"void",
	['H1'],
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rumble",
	['real-1', 'real-2'],
	"void",
	['H1'],
	"Deprecated: use player_effect_set_max_vibrate, this is only to keep compatibility with custom edition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_start",
	['real-1', 'real-2'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"<max_intensity> <attack time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_stop",
	['real'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"<decay>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_health",
	['boolean'],
	"void",
	['H1'],
	"Hides/shows the health panel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_blink_health",
	['boolean'],
	"void",
	['H1'],
	"Starts/stops manual blinking of the health panel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_shield",
	['boolean'],
	"void",
	['H1'],
	"Hides/shows the shield panel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_blink_shield",
	['boolean'],
	"void",
	['H1'],
	"Starts/stops manual blinking of the shield panel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_motion_sensor",
	['boolean'],
	"void",
	['H1'],
	"Hides/shows the motion sensor panel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_blink_motion_sensor",
	['boolean'],
	"void",
	['H1'],
	"Starts/stops manual blinking of the motion sensor panel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_crosshair",
	['boolean'],
	"void",
	['H1'],
	"Hides/shows the weapon crosshair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_clear_messages",
	[],
	"void",
	['H1'],
	"Clears all non-state messages on the hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_help_text",
	['hud_message'],
	"void",
	['H1'],
	"Displays <message> as the help text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_objective_text",
	['hud_message'],
	"void",
	['H1'],
	"Sets <message> as the current objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_timer_time",
	['short-1', 'short-2'],
	"void",
	['H1'],
	"Sets the time for the timer to <short> minutes and <short> seconds, and starts and displays timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_timer_warning_time",
	['short-1', 'short-2'],
	"void",
	['H1'],
	"Sets the warning time for the timer to <short> minutes and <short> seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_timer_position",
	['short-1', 'short-2', 'hud_corner'],
	"void",
	['H1'],
	"Sets the timer upper left position to (x, y)=>(<short>, <short>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_hud_timer",
	['boolean'],
	"void",
	['H1'],
	"Displays the hud timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pause_hud_timer",
	['boolean'],
	"void",
	['H1'],
	"Pauses or unpauses the hud timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_get_timer_ticks",
	[],
	"short",
	['H1'],
	"Returns the ticks left on the hud timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"time_code_show",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Shows the time code timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"time_code_start",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts/stops the time code timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"time_code_reset",
	[],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Resets the time code timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_reload_effects",
	[],
	"void",
	['H1'],
	"Check for shader changes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_decals_flush",
	[],
	"void",
	['H1', 'H2'],
	"Flush all decals",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_fps_accumulate",
	[],
	"void",
	['H1'],
	"Average fps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_screen_effect_set_value",
	['short', 'real'],
	"void",
	['H1', 'H2'],
	"Sets a screen effect script value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_start",
	['boolean'],
	"void",
	['H1'],
	"Starts screen effect; pass true to clear",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_convolution",
	['short-1', 'short-2', 'real-1', 'real-2', 'real-3'],
	"void",
	['H1'],
	"Sets the convolution effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_filter",
	['real-1', 'real-2', 'real-3', 'real-4', 'boolean', 'real-5'],
	"void",
	['H1'],
	"Sets the filter effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_filter_desaturation_tint",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H1'],
	"Sets the desaturation filter tint color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_video",
	['short', 'real'],
	"void",
	['H1'],
	"Sets the video effect: <noise intensity[0,1]>, <overbright: 0=none, 1=2x, 2=4x>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_stop",
	[],
	"void",
	['H1', 'H2'],
	"Returns control of the screen effects to the rest of the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_look_invert_pitch",
	['boolean'],
	"void",
	['H1'],
	"Invert player0's look",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_look_pitch_is_inverted",
	[],
	"boolean",
	['H1'],
	"Returns true if player0's look pitch is inverted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_joystick_set_is_normal",
	[],
	"boolean",
	['H1'],
	"Returns true if player0 is using the normal joystick set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_widget_show_path",
	['boolean'],
	"void",
	['H1'],
	"Blah blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"display_scenario_help",
	['short'],
	"void",
	['H1'],
	"Display in-game help dialog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_enable_eax",
	['boolean'],
	"void",
	['H1'],
	"Enable or disable eax extensions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_eax_enabled",
	[],
	"boolean",
	['H1'],
	"Returns true if eax extensions are enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_env",
	['short'],
	"void",
	['H1'],
	"Change environment preset",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_enable_hardware",
	['boolean-1', 'boolean-2'],
	"void",
	['H1'],
	"Enable or disable hardware sound buffers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_supplementary_buffers",
	['short', 'boolean'],
	"void",
	['H1'],
	"Set the amount of supplementary buffers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_get_supplementary_buffers",
	[],
	"short",
	['H1'],
	"Get the amount of supplementary buffers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_rolloff",
	['real'],
	"void",
	['H1'],
	"Set the dsound rolloff value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_factor",
	['real'],
	"void",
	['H1'],
	"Set the dsound factor value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_yaw_rate",
	['short'],
	"real",
	['H1'],
	"Gets the yaw rate for the given player number",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_pitch_rate",
	['short'],
	"real",
	['H1'],
	"Gets the yaw rate for the given player number",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_yaw_rate",
	['short', 'real'],
	"void",
	['H1'],
	"Sets the yaw rate for the given player number",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_pitch_rate",
	['short', 'real'],
	"void",
	['H1'],
	"Sets the yaw rate for the given player number",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bind",
	['string-1', 'string-2', 'string-3'],
	"void",
	['H1'],
	"Binds an input device/button combination to a game control",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unbind",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Unbinds an input device/button combination",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_binds",
	[],
	"void",
	['H1'],
	"Prints a list of all input bindings",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profile_load",
	['string'],
	"void",
	['H1'],
	"Load any included builtin profiles and create profiles on disk",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"checkpoint_load",
	['string'],
	"void",
	['H1'],
	"Load a saved checkpoint",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"TestPrintBool",
	['string', 'boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Prints the specified boolean with the format '<string> = '<boolean>' to the shell",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"TestPrintReal",
	['string', 'real'],
	"void",
	['H1', 'H2', 'HR', 'H4'],
	"Prints the specified real with the format '<string> = '<real>' to the shell",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"structure_lens_flares_place",
	[],
	"void",
	['H1'],
	"Places lens flares in the structure bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_enabled",
	['boolean'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable all events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_disable_suppression",
	['boolean'],
	"void",
	['H1', 'H3', 'HO'],
	"Enable/disable event suppression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_display_category",
	['string'],
	"void",
	['H1'],
	"Sets the global event display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_log_category",
	['string'],
	"void",
	['H1'],
	"Sets the global evetn log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_remote_log_category",
	['string'],
	"void",
	['H1'],
	"Sets the global remote evetn log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_display_category",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_force_display_category",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the forced display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_log_category",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_remote_log_category",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the remote log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_debugger_break_category",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the debugger break level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_halt_category",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Sets the halt (assert/crash) level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_list_categories",
	['string'],
	"void",
	['H1', 'H3', 'HO'],
	"Lists all categories that exist under a particular category string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppress_console_display",
	['boolean'],
	"void",
	['H1', 'H3', 'HO'],
	"Disables console display for events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_play",
	['short', 'string'],
	"void",
	['H1'],
	"Plays a saved film for given controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_disable_version_checking",
	['boolean'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Disable saved film version checking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_toggle_debug_saving",
	['boolean'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Toggle saving of last film to the debug output directory automatically after each game level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_films_delete_on_level_load",
	['boolean'],
	"void",
	['H1', 'H3', 'HO'],
	"Toggle deletion last saved film after loading a new game level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_films_show_timestamp",
	['boolean'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Toggle showing timestamp for saved film playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_set_playback_game_speed",
	['real'],
	"void",
	['H1', 'H3', 'HO', 'HR'],
	"Set the saved film playback speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_film_tick",
	['long'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Seeks to a film tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_set_repro_mode",
	['boolean'],
	"void",
	['H1', 'H3', 'HO', 'HR', 'H4'],
	"Set the saved film into repro mode (splitscreen users are created based on the number of splitscreen players that recorded the film)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_logging",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable determinism logging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_set_trace_flags",
	['long'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Set which determinism debugging traces should be turned on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_game_state_checksum",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable determinism checkpoints",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_trace",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable determinism tracing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_set_consumer_sample_level",
	['string', 'long'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets sample level for a consumer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_log_file_comparision_on_oos",
	['boolean'],
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables/disables determinism log file comparision on oos",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_log_compare_log_files",
	['string-1', 'string-2'],
	"void",
	['H1'],
	"Compares determinism log files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_volume_enable",
	['trigger_volume'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables a kill volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_volume_disable",
	['trigger_volume'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Disables a kill volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_objects",
	['trigger_volume', 'object_list'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_objects_all",
	['trigger_volume', 'object_list'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_return_objects",
	['trigger_volume'],
	"object_list",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns list of objects in volume or (max 128)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_return_objects_by_type",
	['trigger_volume', 'long'],
	"object_list",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns list of objects in volume or (max 128)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_object_marker",
	['effect', 'object', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts the specified effect on the specified object at the specified marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_objects",
	['damage', 'object_list'],
	"void",
	['H2'],
	"Causes the specified damage at the specified object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_players",
	['damage'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Damages all players with the given damage effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_clone",
	['object_name'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Creates an object, potentially resulting in multiple objects if it already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_clone_containing",
	['string'],
	"void",
	['H2', 'H3', 'HO'],
	"Creates clones for all objects from the scenario whose names contain the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_type_mask",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Destroys all objects matching the type mask",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_hide",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Hides or shows the object passed in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shadowless",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set/reset shadow castingness of object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_function_set",
	['long', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a global object function (0-3) to value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_function_variable",
	['object', 'string_id', 'real-1', 'real-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets funciton variable for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_function_variable",
	['object', 'string_id'],
	"void",
	['H2', 'H3', 'HO'],
	"Clears one funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_all_function_variables",
	['object'],
	"void",
	['H2', 'H3', 'HO'],
	"Clears all funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_dynamic_simulation_disable",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Disabled dynamic simulation for this object (makes it fixed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_phantom_power",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets phantom power to be latched at 1.0f or 0.0f",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_wake_physics",
	['object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Wakes physics of an object.  for example it would make an usupported crate fall",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_health",
	['object'],
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the health [0,1] of the object, returns -1 if the object does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_shield",
	['object'],
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the shield [0,1] of the object, returns -1 if the object does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_effect",
	['object', 'real-1', 'real-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the shield response effect (not current shield amount) to a given value over the given number of seconds (cinematic use only, remember to call (object_set_shield_effect 0 0) after use!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_physics",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Prevents an object from running physics or colliding with any other objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_parent",
	['object'],
	"object",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the parent of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_attach",
	['object-1', 'string_id-1', 'object-2', 'string_id-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Attaches the second object to the first both strings can be empty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_at_marker",
	['object', 'string_id'],
	"object",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the object attached to the marker of the given parent object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_velocity",
	['object', 'real', '[real', 'real]'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the (object-relative) velocity of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_deleted_when_deactivated",
	['object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"When this object deactivates it will be deleted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_copy_player_appearance",
	['object', 'long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Copy appearance into object from player n (starts counting from 0)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_model_target_destroyed",
	['object', 'string_id'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the specified model target is destroyed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_model_targets_destroyed",
	['object', 'string_id'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the specified model target is destroyed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_damage_damage_section",
	['object', 'string_id', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Applies damage to a damage section, causing all manner of effects/constraint breakage to occur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cannot_die",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set whether the object can die from damage or not (as opposed to by scripting)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_vitality_pinned",
	['object'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the object's vitality is currently pinned at some minimum value because it cannot die",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"garbage_collect_unsafe",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Forces all garbage objects to be collected immediately, even those visible to a player (dangerous!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"garbage_collect_multiplayer",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Runs multiplayer garbage collection",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cinematic_lod",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes an object use the highest lod for the remainder of the levels' cutscenes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cinematic_collision",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes an object not collide with other cinematic collision objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cinematic_visibility",
	['object', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes an object bypass visibility and always render during cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_uses_cinematic_lighting",
	['object', 'boolean'],
	"void",
	['H2'],
	"Makes an object use the cinematic directional and ambient lights instead of sampling the lightmap",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_set_primary_light",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5'],
	"void",
	['H2'],
	"Sets the pitch, yaw, and color (red, green, blue) of the cinematic shadowing diffuse and specular directional light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_set_secondary_light",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5'],
	"void",
	['H2'],
	"Sets the pitch, yaw, and color (red, green, blue) of the cinematic non-shadowing diffuse directional light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_set_ambient_light",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2'],
	"Sets the color (red, green, blue) of the cinematic ambient light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict",
	['object_list'],
	"void",
	['H2', 'HR', 'H4'],
	"Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict_high",
	['object_list'],
	"void",
	['H2', 'HR', 'H4'],
	"Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict_low",
	['object_list'],
	"void",
	['H2', 'HR', 'H4'],
	"Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_predict_high",
	['object_definition'],
	"void",
	['H2', 'HR', 'H4'],
	"Loads textures necessary to draw an object that's about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_predict_low",
	['object_definition'],
	"void",
	['H2', 'HR', 'H4'],
	"Loads textures necessary to draw an object that's about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_stun",
	['object', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set how long the shield will be stunned for, 0 is unstunned",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_stun_infinite",
	['object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Make this objects shield be stunned permanently",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_permutation",
	['object', 'string_id-1', 'string_id-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the desired region (use  for all regions) to the permutation with the given name, e.g. (object_set_permutation flood right arm ~damaged)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_region_state",
	['object', 'string_id', 'model_state'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the desired region (use  for all regions) to the model state with the given name, e.g. (object_set_region_state marine head destroyed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_info",
	[],
	"void",
	['H2'],
	"Prints the current map and bsp name and index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"position_predict",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2', 'HR', 'H4'],
	"In: x, y, z position. loads textures/geometry/sounds necessary to present locations that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_predict",
	['shader'],
	"void",
	['H2', 'HR', 'H4'],
	"In: shader name. loads textures necessary for a shader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitmap_predict",
	['bitmap'],
	"void",
	['H2', 'HR', 'H4'],
	"In: bitmap name. loads all the bitmaps in that bitmap group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_objects",
	[],
	"object_list",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns a list of the special game engine objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_set_velocity_frame",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a local frame of motion for updating physics of things that wish to respect it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_disable_character_ground_adhesion_forces",
	['real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turn off ground adhesion forces so you can play tricks with gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_debug_start",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Start up the havok visual debugger",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_dump_world",
	['string', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Dump the state of the havok world, with our without a movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_dump_world_close_movie",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"End the capture of a havok dump movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_start",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Start profiling havok",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_end",
	[],
	"void",
	['H2'],
	"Start profiling havok",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_reset_allocated_state",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Strips down and builds back up all allocated havok memory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_object_marker",
	['object', 'string_id', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the render texture camera to a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_off",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns off the render texture camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_lights_enable_cinematic_shadow",
	['boolean', 'object', 'string_id', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable the specified unit to receive cinematic shadows where the shadow is focused about a radius around a marker name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_cluster_visibility",
	['long'],
	"void",
	['H2', 'H4'],
	"Enables cluster visibility debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_cluster_fog",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables cluster fog debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_plane",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables fog plane debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_plane_infinite_extent",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables fog plane debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_zone",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enabled fog zone debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_zone_floodfill",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables fog zone debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_all_fog_planes",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables fog plane debugging (all)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_all_cluster_errors",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables cluster error debugging (all)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_line_opacity",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the opacity (0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_text_opacity",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the opacity (0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_opacity",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the opacity (0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_non_occluded_fog_planes",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Controls non-occluded fog plane debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start",
	['scenery', 'animation_graph', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_loop",
	['scenery', 'animation_graph', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom looping animation playing on a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_relative",
	['scenery', 'animation_graph', 'string_id', 'object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a piece of scenery relative to a parent object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_relative_loop",
	['scenery', 'animation_graph', 'string_id', 'object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom looping animation playing on a piece of scenery relative to a parent object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_at_frame",
	['scenery', 'animation_graph', 'string_id', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a piece of scenery at a specific frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_idle",
	['scenery'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts the idle animation (if any) for a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_active_camo",
	['unit', 'boolean', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable or disable active camo for the given unit over the specified number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_emitting",
	['unit'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns whether or not the given unit is current emitting an ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a unit (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_loop",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a unit (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_relative",
	['unit', 'animation_graph', 'string_id', 'boolean', 'object'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation relative to some other object (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_relative_loop",
	['unit', 'animation_graph', 'string_id', 'boolean', 'object'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation relative to some other object (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_list",
	['object_list', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a unit list (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_custom_animation_at_frame",
	['unit', 'animation_graph', 'string_id', 'boolean', 'short'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a unit at a specific frame index(interpolates into animation if next to last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_custom_animations_hold_on_last_frame",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Changes the default behavior for custom animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_custom_animations_prevent_lipsync_head_movement",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"When true, prevents lipsync from bobbing the head during custom animations. default is true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_actively_controlled",
	['unit', 'boolean'],
	"void",
	['H2', 'H3', 'HO'],
	"Sets unit's actively controlled flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_team_index",
	['unit'],
	"short",
	['H2', 'H3', 'HO', 'HR'],
	"Returns the team index of the unit, returns -1 if the unit does not have a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_enterable_by_player",
	['unit'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if a player may enter the vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_only_takes_damage_from_players_team",
	['unit', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Used for the tartarus boss fight",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle",
	['unit', 'vehicle', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_board_vehicle",
	['unit', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Causes the given unit to attempt to board the named seat",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion_animation",
	['unit', 'string_id'],
	"void",
	['H2'],
	"Sets the emotion animation to be used for the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotional_state",
	['unit', 'string_id', 'real', 'short'],
	"void",
	['H2'],
	"Sets a unit's facial expression by name with weight and transition time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enable_eye_tracking",
	['unit', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable eye aiming on a unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_in_vehicle",
	['unit'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the given unit is seated on a parent unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_list",
	['vehicle', 'string_id', 'object_list'],
	"boolean",
	['H2', 'H3'],
	"Tests whether the named seat has an object in the object list (use  to test all seats for any unit in the list)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat",
	['vehicle', 'string_id', 'unit'],
	"boolean",
	['H2', 'H3'],
	"Tests whether the named seat has a specified unit in it (use  to test all seats for this unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_prefer_tight_camera_track",
	['unit', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the unit to prefer a tight camera track",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_exit_vehicle",
	['unit', 'short?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes a unit exit its vehicle (0 = normal exit to airborne, 1 = ejection, 2 = ejection + death, 3 = exit to ground)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_load_magic",
	['object', 'unit_seat_mapping', 'object_list'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes a list of units (named or by encounter) magically get into a vehicle, in the substring-specified seats (e.g. cd-passenger... empty string matches all seats)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_unload",
	['object', 'unit_seat_mapping'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes units get out of an object from the substring-specified seats (e.g. cd-passenger... empty string matches all seats)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_animation_mode",
	['unit', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"This unit will assume the named animation mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_health",
	['unit'],
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the health [0,1] of the unit, returns -1 if the unit does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_shield",
	['unit'],
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the shield [0,1] of the unit, returns -1 if the unit does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_lower_weapon",
	['unit', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Lower the units weapon over x ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_raise_weapon",
	['unit', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Raises the units weapon over x ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_animation_forced_seat",
	['string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"All units controlled by the player will assume the given seat name (valid values are 'asleep', 'alert', 'stand', 'crouch' and 'flee')",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_add_equipment",
	['unit', 'starting_profile', 'boolean-1', 'boolean-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Adds/resets the unit's health, shield, and inventory (weapons and grenades) to the named profile. resets if third parameter is true, adds if false. weapons will be marked as garbage if fourth parameter is true (for respawning equipment)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_hold_trigger",
	['weapon', 'long', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns the trigger for a weapon  on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_enable_warthog_chaingun_light",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns the trigger for a weapon  on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_never_appears_locked",
	['device', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'H4'],
	"Changes a machine's never_appears_locked flag, but only if paul is a bastard",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_set",
	['device', 'device_group', 'real'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Changes the desired value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_closes_automatically_set",
	['device', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"True makes the given device close automatically after it has opened, false makes it not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position_track",
	['device', 'string_id', 'real'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the desired position track animation to use (optional interpolation time onto track)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_overlay_track",
	['device', 'string_id'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the desired overlay animation to use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_animate_position",
	['device', 'real-1', 'real-2', 'real-3', 'real-4', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Animate the position over time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_animate_overlay",
	['device', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Animate the overlay over time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Gives the player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage_by_player",
	['short', 'boolean'],
	"void",
	['H2', 'H3', 'HO'],
	"Gives a specific player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enable",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns all ai on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enabled",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns whether ai is turned on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_enable",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turn combat dialogue on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_log_reset",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Reset the dialogue log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_log_dump",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Dump a file of the given name with csv statistics on vocalizations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_object",
	['ai'],
	"object",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the unit/object corresponding to the given actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_unit",
	['ai'],
	"unit",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the unit/object corresponding to the given actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_attach_units",
	['object_list', 'ai'],
	"void",
	['H2'],
	"Attaches the specified list of units to the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_detach_units",
	['object_list'],
	"void",
	['H2'],
	"Detaches the specified list of units from all ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place",
	['ai', 'short?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Places the given number of members of the specified squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_in_vehicle",
	['ai-1', 'ai-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Places the specified squad (1st arg) on the map in the vehicles belonging to the specified vehicle squad (2nd arg)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_cannot_die",
	['ai', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Ai cannot die from damage (as opposed to by scripting)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vitality_pinned",
	['ai'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the ai's units are all vitality pinned (see object_vitality_pinned)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_overcomes_oversteer",
	['ai', 'boolean'],
	"void",
	['H2'],
	"Don't use this for anything other than bug 3926.  ai magically cancels vehicle oversteer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_disposable",
	['ai', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables automatic garbage collection for actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_select",
	['ai'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Selects the specified squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_deselect",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Clears the selected encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see",
	['ai-1', 'ai-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Make one squad magically aware of another",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see_object",
	['ai', 'object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Make a squad magically aware of a particular object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_active_camo",
	['ai', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turn on active camoflage on actor/squad/squad-group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_suppress_combat",
	['ai', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turn on/off combat suppression on actor/squad/squad-group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_starting_location_if_outside_bsp",
	['ai'],
	"void",
	['H2', 'H3'],
	"Teleports a group of actors to the starting locations of their current squad(s) if they are currently outside the world",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fighting_count",
	['ai'],
	"short",
	['H2', 'H3', 'HO', 'HR'],
	"Return the number of actors that are fighting in a squad or squad_group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_orders",
	['ai', 'ai_orders'],
	"void",
	['H2'],
	"Takes the squad or squad group (arg1) and gives it the order (arg3) in zone (arg2). use the zone_name/order_name format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_spawn_count",
	['ai'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of actors spawned in the given squad or squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_ai",
	['object'],
	"ai",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the ai attached to this object, if any",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_trigger_test",
	['string', 'ai'],
	"boolean",
	['H2'],
	"Tests the named trigger on the named squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"generate_pathfinding",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
	"Generate pathfinding info for all structure bsps in the current scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_paths_all",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Turns on raw, smoothed, avoided paths and avoidance obstacles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get",
	['ai'],
	"vehicle",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the vehicle that the given actor is in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_starting_location",
	['ai'],
	"vehicle",
	['H2', 'H3'],
	"Returns the vehicle that was spawned at the given starting location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_reserve_seat",
	['vehicle', 'string_id', 'boolean'],
	"boolean",
	['H2'],
	"Reserves the given seat on the given vehicle (so that ai may not enter it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_reserve",
	['vehicle', 'boolean'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Reserves the given vehicle (so that ai may not enter it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter",
	['ai', 'unit', 'unit_seat_mapping'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter",
	['ai', 'unit'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Tells a group of actors to get into a vehicle... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter_immediate",
	['ai', 'unit', 'unit_seat_mapping'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"The given group of actors is snapped into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter_immediate",
	['ai', 'unit'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"The given group of actors is snapped into a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enter_squad_vehicles",
	['ai'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Instructs the ai in the given squad to get in all their vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_exit",
	['ai', 'unit_seat_mapping'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Tells a group of actors to get out of any vehicles that they are in (if their seat matches the substring)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_exit",
	['ai'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Tells a group of actors to get out of any vehicles that they are in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_overturned",
	['vehicle'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the vehicle is overturned",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_flip",
	['vehicle'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Flips an overturned vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_combat_status",
	['ai'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the highest integer combat status in the given squad-group/squad/actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_start",
	['string_id'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"The flock starts producing boids",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_stop",
	['string_id'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"The flock stops producing boids",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_create",
	['string_id'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Create the given flock",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_delete",
	['string_id'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Delete the given flock",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_verify_tags",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Verifies state of ai-related tags (e.g. orders, squads, zones, etc.)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_wall_lean",
	['ai'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Makes the actor lean against a wall right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line",
	['ai', 'string_id'],
	"real",
	['H2'],
	"Play the given mission dialogue line on the given ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_at_player",
	['ai', 'string_id'],
	"real",
	['H2'],
	"Play the given mission dialogue line on the given ai, directing the ai's gaze at the nearest visible player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object",
	['object', 'string_id'],
	"real",
	['H2'],
	"Play the given mission dialogue line on the given object (uses first available variant)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_run_command_script",
	['ai', 'ai_command_script'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Causes the specified actor(s) to start executing a command script immediately (discarding any other command scripts in the queue)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_queue_command_script",
	['ai', 'ai_command_script'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Add a command script onto the end of an actor's command script queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stack_command_script",
	['ai', 'ai_command_script'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Push a command script to the top of the actor's command script queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_run_joint_command_script",
	['ai_command_script', 'ai-1', 'ai-2', 'ai?'],
	"void",
	['H2'],
	"Causes the specified actor(s) to start executing a command script immediately (discarding any other command scripts in the queue)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_command_script_running",
	['ai', 'ai_command_script'],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if the ai is running the command script in question",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_command_script_queued",
	['ai', 'ai_command_script'],
	"boolean",
	['H2', 'H3', 'HO'],
	"Returns true if the command script is in the ai's cs queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_number_queued",
	['ai'],
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the number of queued command scripts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_switch",
	['string_id'],
	"void",
	['H2'],
	"Switch control of the joint command script to the given member",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_switch_index",
	['short'],
	"void",
	['H2'],
	"Switch control of the joint command script to the given member",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_transfer",
	['ai'],
	"void",
	['H2'],
	"Transfer control of the command script to the given actor (replacing what he has)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_transfer_stack",
	['ai'],
	"void",
	['H2'],
	"Transfer control of the command script to the given actor (stacking it)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_transfer_queue",
	['ai'],
	"void",
	['H2'],
	"Transfer control of the command script to the given actor (queueing it)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['point_reference', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Flies the actor to the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['point_reference-1', 'point_reference-2', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['point_reference', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Flies the actor through the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['point_reference', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['point_reference-1', 'point_reference-2', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_face",
	['point_reference-1', 'point_reference-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Moves the actor to a specified point and has him face the second point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_start_to",
	['point_reference'],
	"void",
	['H2'],
	"Moves the actor to a specified point. does not block script execution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_nearest",
	['point_reference'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Given a point set, ai goes toward the nearest point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_moving",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
	"Returns true if the actor is currently following a path",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look",
	['boolean', 'point_reference'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor looks at the point for the remainder of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_player",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor looks at nearest player for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_object",
	['boolean', 'object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor looks at the object for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim",
	['boolean', 'point_reference'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_player",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_object",
	['boolean', 'object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face",
	['boolean', 'point_reference'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_player",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_object",
	['boolean', 'object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_in_direction",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_pause",
	['real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"The actor does nothing for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['boolean', 'object?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor shoots at given target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_point",
	['boolean', 'point_reference'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor shoots at given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed",
	['real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_grenade",
	['point_reference', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump",
	['real-1', 'real-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor jumps in direction of angle at the given velocity (angle, velocity)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump_to_point",
	['real-1', 'real-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor jumps with given horizontal and vertical velocity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vocalize",
	['short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor emits vocalization of given type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['sound', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['sound', '[real', 'real]'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length, at the given volume (0..1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_sound",
	['sound'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['animation_graph', 'string_id', 'real', 'boolean'],
	"void",
	['H2'],
	"Starts a custom animation playing on the unit (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_custom_animation",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Stop running a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_line",
	['string_id'],
	"void",
	['H2'],
	"Play the named line in the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_die",
	['short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor dies in specified manner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_teleport",
	['point_reference-1', 'point_reference-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor teleports to point1 facing point2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_animate",
	['long', 'short'],
	"void",
	['H2'],
	"Actor performs animation with given modifier (anim-ref, modifier)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_movement_mode",
	['short'],
	"void",
	['H2', 'H3', 'HO'],
	"Actor switches to given animation mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['boolean', 'real?'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor crouches / uncrouches, transitioning over the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_pathfinding_radius",
	['real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['vehicle'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor gets in the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_behavior",
	['ai_behavior'],
	"void",
	['H2'],
	"Actor performs the indicated behavior",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_formation",
	['short', 'ai', 'point_reference-1', 'point_reference-2'],
	"void",
	['H2'],
	"Actor initiates a formation of the given type at the given point, facing (initially) at the given other point. formation types are (0) 1x column (1) 2x column ... (4) wall (5) wedge",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_deploy_turret",
	['point_reference'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Deploy a turret at the given script point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach",
	['object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H2'],
	"(approach <object> <distance> <max-distance> <follow-distance>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_start_approach",
	['object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H2'],
	"(approach <object> <distance> <max-distance> <follow-distance>) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_player",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2'],
	"(approach player <distance> <max-distance> <follow-distance>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_start_approach_player",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2'],
	"(approach <distance> <max-distance> <follow-distance>) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_stop",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor stops approaching",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_ignore_obstacles",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor does not avoid obstacles when true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_turn_sharpness",
	['boolean', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the sharpness of a vehicle turn (values 0 -> 1). only applicable to nondirectional flying vehicles (e.g. dropships)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed_instantaneous",
	['real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set the instantaneous speed of the vehicle we're driving",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_boost",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables boost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_alert",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Command script ends prematurely when actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_damage",
	['boolean'],
	"void",
	['H2', 'H3', 'H3', 'HO', 'HO', 'HR', 'HR', 'H4', 'H4'],
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_combat_status",
	['short'],
	"void",
	['H2', 'H3', 'H3', 'HO', 'HO', 'HR', 'HR', 'H4', 'H4'],
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_targeting",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor autonomous target selection enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_looking",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor autonomous looking enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_moving",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor autonomous moving enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_dialogue",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor combat dialogue enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_dialogue_global",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Combat dialogue is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_style",
	['style'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Override the actor's style",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_force_combat_status",
	['short'],
	"void",
	['H2'],
	"Force the actor's combat status (0= no override, 1= asleep, 2=idle, 3= alert, 4= active)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_pathfinding_failsafe",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Actor blocks until pathfinding calls succeed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation",
	['animation_graph', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Begins a prerecorded camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_predict_resources_at_frame",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Predict resources at a frame in camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_predict_resources_at_point",
	['cutscene_camera_point'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Predict resources given a camera point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_place_relative",
	['object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"All subsequent camera placement in sapien be marked as relative to this object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_place_worldspace",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"All subsequent camera placement in sapien will be marked as worldspace",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_field_of_view",
	['real', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the field of view",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_pan",
	['cutscene_camera_point', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Moves the camera to the specified camera point over the specified number of ticks with a constant speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_pan",
	['cutscene_camera_point-1', 'cutscene_camera_point-2', 'short-1', 'short-2', 'real-1', 'short-3', 'real-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Camera_pan <start point> <end point> <ticks> <ease-in ticks> <start velocity scale> <ease-out ticks> <end velocity scale>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Saves the camera position and facing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Loads the saved camera position and facing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save_name",
	['string'],
	"void",
	['H2', 'H3', 'HO'],
	"Saves the camera position and facing to filename",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_name",
	['string'],
	"void",
	['H2', 'H3', 'HO'],
	"Loads the camera position and facing from filename",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_debug_camera",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable camera debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_set_object",
	['object'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the specified object as the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_set_camera",
	['cutscene_camera_point'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the specified cutscene camera point as the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_clear",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Removes the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_disable_movement",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Toggle player input. the look stick works, but nothing else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_flashlight_on",
	[],
	"boolean",
	['H2', 'H3', 'HO'],
	"Returns true if any player has a flashlight on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_active_camouflage_on",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player is active camouflaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_vision_trigger",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has used vision trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_weapons",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has hit the rotate-weapon button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_grenades",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
	"Returns true if any player has hit the rotate-grenades button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_melee",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has hit the melee button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_cancel",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has hit cancel key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_start",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has pressed the start button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_back",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has pressed the back button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_looking_up",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"True if the first player is looking up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_looking_down",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"True if the first player is looking down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_up_begin",
	[],
	"void",
	['H2'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_down_begin",
	[],
	"void",
	['H2'],
	"Sets down player look down test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_pitch_end",
	[],
	"void",
	['H2', 'H3'],
	"Ends the look pitch testing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_lookstick_forward",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
	"True if the first player pushed forward on lookstick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_lookstick_backward",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
	"True if the first player pushed backward on lookstick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_teleport_player",
	['long-1', 'long-2'],
	"void",
	['H2', 'H3', 'HO'],
	"For testing: teleports one player to another's location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_bsp_by_name",
	['structure_bsp'],
	"void",
	['H2'],
	"Leaves your condom on and changes to a different structure bsp by name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_movie",
	['short-1', 'long', 'short-2'],
	"void",
	['H2'],
	"<frame rate> <seconds> <screen size>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_movie_distributed",
	['short-1', 'long-1', 'short-2', 'long-2', 'long-3'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<frame rate> <seconds> <screen size> <mod count> <mod index>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Takes a screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_big",
	['short', 'string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Takes an nxn multiple-page screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_big_jittered",
	['short', 'string'],
	"void",
	['H2'],
	"Takes an nxn subpixel sampled 640x480 screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_menu",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Goes back to the main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_halt",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Goes to a halted pregame state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_name",
	['string'],
	"void",
	['H2', 'HR', 'H4'],
	"The same as game_start: launches a game for debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_multiplayer",
	['string'],
	"void",
	['H2'],
	"Debug map launching: sets the multiplayer variant for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_splitscreen",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Debug map launching: sets the number of multiplayer splitscreen players for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty",
	['game_difficulty'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Debug map launching: sets the difficulty of the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_coop_players",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Debug map launching: sets the number of coop players for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_bsp",
	['long'],
	"void",
	['H2'],
	"Debug map launching: sets the initial bsp for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Debug map launching: sets the tick rate for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Debug map launching: starts a game on the specified map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_rate",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Changes game update rate (danger: only use if you know what you're doing!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_memory",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Dumps memory leaks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_memory_by_file",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Dumps memory leaks by source file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_memory_for_file",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Dumps memory leaks from the specified source file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_tags",
	[],
	"void",
	['H2', 'H3', 'HO', 'H4'],
	"Writes all memory being used by tag files into tag_dump.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tags_verify_all",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Verifies usage of infidel fields is correct",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"collision_log_enable",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables collision logging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_control_get",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Gets a damage control setting by string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_control_set",
	['string', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets a damage control setting by string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lines",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Cycles through ai line-spray modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_debug_sound_point_set",
	[],
	"void",
	['H2'],
	"Drops the ai debugging sound point at the camera location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_break_on_vocalization",
	['string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Break when the following vocalization is chosen for utterance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_show_letterbox_immediate",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets or removes the letterbox bars",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_subtitle",
	['string_id', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Displays the named subtitle for <real> seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"attract_mode_start",
	[],
	"void",
	['H2'],
	"Starts an attract mode movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"attract_mode_set_seconds",
	['long'],
	"void",
	['H2'],
	"Sets number of seconds of the attract mode countdown timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_lost",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Marks the game as lost or not lost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_revert",
	[],
	"void",
	['H2'],
	"Causes the player to revert to his previous saved game (for testing, the first bastard that does this to me gets it in the head)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_is_playtest",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the hs global boolean 'global_playtest_mode' which can be set in your init.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_can_use_flashlights",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Allows or disallows the user of player flashlights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_and_quit",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Save & quit to the main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_unsafe",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Saves right now, even if the game is in an immediate-loss state (never use this! ever!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning",
	['string', 'boolean'],
	"void",
	['H2'],
	"Debugs spawn points for the inputted player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"king_set_hill",
	['long'],
	"void",
	['H2'],
	"Sets which index the active hill should be",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save_name",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Saves debug game state to core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_game",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Loads level and game state from core\\core.bin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_game_name",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Loads level and game state from core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_regular_upload_to_debug_server",
	['boolean'],
	"void",
	['H2', 'HR', 'H4'],
	"Toggle periodic core uploading to debug server",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_set_upload_option",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets options for game state uploading (current options are 'default', 'repro', and 'stress'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_safe_to_speak",
	[],
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns false if it would be a bad idea to play mission dialog right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_immediate",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Disregards player's current situation and saves (be very careful!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_tag_parameter_unsafe",
	['string-1', 'string-2', 'long-1', 'long-2', 'long-3', 'real-1', 'real-2', 'real-3'],
	"void",
	['H2', 'H3', 'HO'],
	"This is the second sign of the coming of the antichrist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_predict",
	['sound'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Your mom part 2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_trigger",
	['sound', 'object', 'real', 'long'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Plays an impulse sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_cinematic",
	['sound', 'object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<sound> <object> <scale> <3d gain> <first person gain> plays an impulse sound from the specified source object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_effect",
	['sound', 'object', 'real', 'string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Plays an impulse sound from the specified source object (or none), with the specified scale and effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_time",
	['sound', 'long?'],
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<sound> <total playing time> returns the time remaining for the specified impulse sound based on <total playing time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_language_time",
	['sound'],
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns the time remaining for the specified impulse sound. do not call in cutscenes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_3d",
	['sound', 'real-1', 'real-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<sound> <azimuth> <scale> at the sound's minimum distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_stop_immediately",
	['looping_sound'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Stops the specified looping sound immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_loop_spam",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Start all loaded looping sounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_show_channel",
	['string', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Shows/hides sound classes w/ substring in debug_sound_channels view",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_debug_sound_start",
	['string', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Shows/hides when sounds of sound classes w/ substring start",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sounds_enable",
	['string', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables all sound classes matching the substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_set_gain",
	['string', 'real', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Changes the gain on the specified sound class(es) to the specified gain over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_set_gain_db",
	['string', 'real', 'short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Changes the gain on the specified sound class(es) to the specified gain(db) over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_enable_ducker",
	['string', 'boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enables or disables the ducker on all sound classes matching the substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_global_effect",
	['string_id', 'real'],
	"void",
	['H2', 'H3', 'HO'],
	"Bleh",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_global_effect_scale",
	['string_id', 'real'],
	"void",
	['H2', 'H3', 'HO'],
	"More bleh",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_trace_callback_level",
	['long'],
	"void",
	['H2'],
	"Set miles tracing callback depth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_dump_miles_debug",
	[],
	"void",
	['H2'],
	"Dump miles timing info and other goodies",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_count_bipeds_killed",
	['vehicle'],
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns how many people this vehicle has killed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_ragdoll",
	['unit'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Given a dead biped, turns on ragdoll",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_cinematic_fade",
	['real-1', 'real-2'],
	"void",
	['H2'],
	"Parameter 1 is how, parameter 2 is when",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_hud_messages",
	['boolean'],
	"boolean",
	['H2'],
	"Shows or hides the hud messages",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_training_text",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"True turns on scripted training text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_training_text",
	['string_id'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the string id fo the scripted training text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_enable_training",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"True turns training on, false turns it off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_flashlight",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_crouch",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_stealth",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_show",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Highlights all error geometry with a name that includes the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_hide",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Hides all error geometry with a name that includes the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_show_all",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Highlights all error geometry",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_hide_all",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Hides all error geometry",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_list",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Prints out a list of all error geometry types and counts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_vibration",
	['real-1', 'real-2'],
	"void",
	['H2'],
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_debug_display_bitmap",
	['string'],
	"void",
	['H2'],
	"Displays a bitmap",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_decal_depth_bias",
	['real'],
	"void",
	['H2'],
	"Sets the depth bias offset for decals",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_decal_depth_bias_slope_scale",
	['real'],
	"void",
	['H2'],
	"Sets the depth bias slope scale for decals",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_hud_ten_foot",
	['short'],
	"void",
	['H2'],
	"Sets the 10 foot hud experience implementation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_blur",
	['short'],
	"void",
	['H2'],
	"Sets the blur (0=disabled, 1=4x, 2=16x)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_start",
	['boolean'],
	"void",
	['H2'],
	"Starts screen effect pass true to clear",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_depth_of_field",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7'],
	"void",
	['H2'],
	"Sets dof: <seperation dist>, <near blur lower bound> <upper bound> <time> <far blur lower bound> <upper bound> <time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_crossfade",
	['real'],
	"void",
	['H2'],
	"Transition-time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_screen_effect_set_crossfade2",
	['real-1', 'real-2'],
	"void",
	['H2'],
	"Transition-time, exponent",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_environment_map_attenuation",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H2'],
	"Interpolates environment-map attenuation (on flagged shaders) from <low> to <high> over <time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_environment_map_bitmap",
	['bitmap'],
	"void",
	['H2'],
	"Sets environment-map bitmap (on flagged shaders) instantly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_reset_environment_map_bitmap",
	[],
	"void",
	['H2'],
	"Resets environment-map bitmap (on flagged shaders) to default instantly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_environment_map_tint",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7', 'real-8'],
	"void",
	['H2'],
	"Perpendicular color: (red green blue brightness), parallel color: (red green blue brightness)... sets environment-map tint (on flagged shaders) instantly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_reset_environment_map_tint",
	[],
	"void",
	['H2'],
	"Resets environment-map tint (on flagged shaders) to default instantly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_layer",
	['long', 'real-1', 'real-2'],
	"void",
	['H2'],
	"Interpolates the value of <cinematic layer x> from current position to <value> over <time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_dynamic_reflections",
	['boolean-1', 'boolean-2'],
	"void",
	['H2'],
	"Sets up dynamic reflections: <enabled: [true, false]> <filtering enabled: [true, false]>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_profile_create",
	['string', 'short-1', 'short-2', 'boolean-1', 'boolean-2', 'boolean-3'],
	"void",
	['H2'],
	"Create a player profile",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_profile_create_corrupt",
	['string'],
	"void",
	['H2'],
	"Create a corrupt player profile, for ui testing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_invert_look",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Invert look on all attached controllers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_look_speed",
	['short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Set look speed for all attached controllers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_look_invert",
	['boolean'],
	"void",
	['H2', 'H3', 'HO'],
	"Invert player0's look",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_get_look_invert",
	[],
	"boolean",
	['H2', 'H3', 'HO'],
	"Returns true if player0's look pitch is inverted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_solo_levels",
	['short'],
	"void",
	['H2'],
	"Unlocks all the solo player levels for <controller index>'s profile",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"user_interface_controller_get_last_level_played",
	['short'],
	"long",
	['H2', 'HR', 'H4'],
	"Returns index of last completed solo level for profile index passed in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_load_main_menu",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Loads the main menu screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_text_bounds",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Toggle rendering of ui text boundaries",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_show_title_safe_bounds",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Toggle display of title safe boundary",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_element_bounds",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Toggle rendering of widget tag block bounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_screen_tag",
	['string'],
	"void",
	['H2'],
	"Test a ui screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_transition_out_console_window",
	[],
	"void",
	['H2'],
	"Transition out any ui on the console window",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_show_screen_tag_path",
	['boolean'],
	"void",
	['H2'],
	"Display tag path of screens as they load",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_show_current_screen_tag",
	['string'],
	"void",
	['H2'],
	"Displays the current tag path on a specified channel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_beta",
	['boolean'],
	"void",
	['H2'],
	"Set ui beta testing on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_memory_dump",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Dump the ui memory tracked allocations to a specified file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_mode",
	['string'],
	"void",
	['H2'],
	"Set ui automation mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_variant_type_and_map",
	['short', 'long'],
	"void",
	['H2'],
	"Set ui / mp automation variant and mp map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_desired_local_user_count",
	['short'],
	"void",
	['H2'],
	"Set ui / mp automation desired local user count",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_desired_desired_network_game_player_count",
	['short'],
	"void",
	['H2'],
	"Set ui / mp automation desired network game player count",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_desired_network_game_length_seconds",
	['long'],
	"void",
	['H2'],
	"Set ui / mp automation desired game time length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_desired_network_session_name",
	['string'],
	"void",
	['H2'],
	"Set ui / mp automation desired session name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_desired_controller_team",
	['short-1', 'short-2'],
	"void",
	['H2'],
	"Set desired mp team for a controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_set_automation_desired_controller_player_profile",
	['short', 'string-1', 'string-2'],
	"void",
	['H2'],
	"Set desired player profile and gamertag for a controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_clear",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Clears the mission objectives",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show_up_to",
	['long'],
	"void",
	['H2'],
	"Show objectives 0..n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish_up_to",
	['long'],
	"void",
	['H2'],
	"Mark objectives 0..n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"input_suppress_vibration",
	['boolean'],
	"void",
	['H2'],
	"Disable the friggin' vibration",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"update_remote_camera",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Force synchronization of remote machine camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_status_filter",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Filters the set of network status to display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_sim_reset",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Network simulation: resets the simulation state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_sim_spike_now",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Network simulation: starts a latency spike immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_sim_dropspike_now",
	[],
	"void",
	['H2', 'H3', 'HO'],
	"Network simulation: starts a packet loss spike immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_ping",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: sends a ping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_channel_loopback",
	[],
	"void",
	['H2'],
	"Network test: creates loopback channels",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_channel_delete",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: deletes all channels",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_leave_squad",
	[],
	"void",
	['H2'],
	"Network test: leave current squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_delegate_host",
	['long'],
	"void",
	['H2'],
	"Network test: delegate hosting to the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_delegate_leader",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: delegate leadership to the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_map_name",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: sets the name of the scenario to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_campaign_difficulty",
	['short'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: sets the difficulty of the campaign game to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_player_color",
	['long'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: temporarily sets the color for all local players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_reset_objects",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Network test: resets all objects on the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_fatal_error",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Creates a fatal simulation error",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_machine_name",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'H4'],
	"Sets the nickname of your xbox",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_event_display_category",
	['string', 'network_event'],
	"void",
	['H2'],
	"Sets the display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_event_log_category",
	['string', 'network_event'],
	"void",
	['H2'],
	"Sets the log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_event_list_categories",
	['string'],
	"void",
	['H2'],
	"Lists all categories that exist under a particular category string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Um",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits",
	[],
	"void",
	['H2'],
	"Ur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_done",
	[],
	"boolean",
	['H2'],
	"Returns true if the movie is done playing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_global_doppler_factor",
	['real'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"New doppler factor: <real>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_global_mixbin_headroom",
	['long-1', 'long-2'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_environment_source_parameter",
	['long', 'real'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_mission_segment",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the mission segment for single player data mine events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_display_mission_segment",
	['boolean'],
	"void",
	['H2'],
	"Display the current mission segment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_insert",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Insert text and camera position in the data mine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_playback",
	['string'],
	"void",
	['H2'],
	"Loads and displays data mine data from a file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_enable",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable data mining",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_track_event",
	['string'],
	"void",
	['H2'],
	"Enable mining of an event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_display_event",
	['string'],
	"void",
	['H2'],
	"Enable displaying of an event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_display_disk_writes",
	['boolean'],
	"void",
	['H2'],
	"Enable/disable console message on disk writes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_debug_menu_setting",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Close debug menu and set user experience setting to string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_enable",
	['string', 'boolean'],
	"void",
	['H2'],
	"Enables/disables display for a class of errors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_layer_enable",
	['string', 'boolean'],
	"void",
	['H2'],
	"Enable/disables a render_layer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_layer_enable_all",
	['boolean'],
	"void",
	['H2'],
	"Enable/disables all render_layers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_overdraw_z",
	[],
	"void",
	['H2'],
	"Toggles overdraw with z compare on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_overdraw",
	[],
	"void",
	['H2'],
	"Toggles overdraw with z compare off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_layers_overdraw_z",
	[],
	"void",
	['H2'],
	"Toggles layer overdraw with z compare on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_layers_overdraw",
	[],
	"void",
	['H2'],
	"Toggles layer overdraw with z compare off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_memory_allocators",
	['long-1', 'short-1', 'short-2', 'short-3', 'long-2', 'string?'],
	"void",
	['H2', 'HR', 'H4'],
	"Performs tests on different memory allocators and saves the results",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_xcr_monkey_enable",
	['boolean'],
	"void",
	['H2', 'HR'],
	"Enable/disable controller monkeys for all in game players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_web_map_snapshot",
	['string'],
	"void",
	['H2'],
	"Takes two special screenshots and saves them, along with the camera information, as <name>.tif, <name>_secondary.tif and <name>_camera.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_telnet_status_enable",
	['boolean'],
	"void",
	['H2'],
	"Enable/disable status events being sent to the telnet console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_telnet_status_interval",
	['long'],
	"void",
	['H2'],
	"Sets the interval that status events are sent to the telnet console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"webstats_disable",
	['boolean'],
	"void",
	['H2'],
	"Disables webstats",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"webstats_test_submit",
	['string'],
	"void",
	['H2'],
	"Submits a string to webstats upload",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"netdebug_prefer_internet",
	['boolean'],
	"void",
	['H2'],
	"Hints to the netdebug code that that we're on the internet",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_temporary_disable_lightmap_shadows",
	['boolean'],
	"void",
	['H2'],
	"Disable lightmap shadows",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flag_new",
	['string-1', 'string-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<name> <description>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flag_new_at_look",
	['string-1', 'string-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<name> <description>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_clear",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Erases all comment flags when not in editor (sapien)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_save",
	[],
	"void",
	['H2'],
	"Dump comment flags to vrml file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_save_filtered",
	['string'],
	"void",
	['H2'],
	"<substring filter>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_save_named",
	['string'],
	"void",
	['H2'],
	"<file name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_save_named_filtered",
	['string-1', 'string-2'],
	"void",
	['H2'],
	"<filter string> <file name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_default_name",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<default comment flag name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_default_comment",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<default comment flag description>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_set_filter",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"<flag name filter>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_export",
	[],
	"void",
	['H2'],
	"Dump comment flags to a .txt file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_export_filtered",
	['string'],
	"void",
	['H2'],
	"<substring filter>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_export_named",
	['string'],
	"void",
	['H2'],
	"<file name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_export_named_filtered",
	['string-1', 'string-2'],
	"void",
	['H2'],
	"<filter string> <file name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Uploads files for bug <name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now_lite",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Uploads files (w/ no minidump) for bug <name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now_auto",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Uploads bug files, auto named <include_minidump>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_list_children",
	['object', 'object_definition'],
	"object_list",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns list of child objects by definition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_set_outgoing_channel_count",
	['long-1', 'long-2'],
	"void",
	['H2'],
	"Sets the outgoing channel count <in-game> <out-of-game>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_set_voice_repeater_peer_index",
	['long'],
	"void",
	['H2'],
	"Sets the repeater peer index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_loaded_tags",
	[],
	"void",
	['H2', 'H3', 'HO', 'H4'],
	"Dump a list of open tags to <map_name>_tags.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_start",
	['string_id', 'real-1', 'real-2'],
	"long",
	['H2', 'H3', 'HO'],
	"<name> <final value> <time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_start_smooth",
	['string_id', 'real-1', 'real-2'],
	"long",
	['H2', 'H3', 'HO'],
	"<name> <final value> <time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_stop",
	['string_id'],
	"long",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_restart",
	['string_id'],
	"long",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_is_active",
	['string_id'],
	"boolean",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_is_finished",
	['string_id'],
	"boolean",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_set_current_value",
	['string_id', 'real'],
	"long",
	['H2', 'H3', 'HO'],
	"<name> <current value>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_current_value",
	['string_id', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_start_value",
	['string_id', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_final_value",
	['string_id', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_current_phase",
	['string_id'],
	"real",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_current_time_fraction",
	['string_id'],
	"real",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_start_time",
	['string_id'],
	"real",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_get_final_time",
	['string_id'],
	"real",
	['H2', 'H3', 'HO'],
	"<name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_evaluate_at",
	['string_id', 'real', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <value in> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_evaluate_at_time_fraction",
	['string_id', 'real', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <time fraction in> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_evaluate_at_time",
	['string_id', 'real', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <time in> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_evaluate_at_time_delta",
	['string_id', 'real', 'boolean'],
	"real",
	['H2', 'H3', 'HO'],
	"<name> <time delta> <use function on/off>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_pc_runtime_language",
	['string'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Sets the pc language from a string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_start",
	['real'],
	"void",
	['H2'],
	"<time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_stop",
	['real'],
	"void",
	['H2'],
	"<time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_change_intensity",
	['real-1', 'real-2'],
	"void",
	['H2'],
	"<time> <intensity>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_clone_players_weapon",
	['object', 'string_id-1', 'string_id-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Clone the first player's most reasonable weapon and attach it to the specified object's marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_move_attached_objects",
	['object', 'string_id-1', 'string_id-2', 'string_id-3'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Move the object's children attached to the first marker to the second marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_global_sound_environment",
	['real-1', 'real-2', 'real-3', 'real-4', 'long', 'real-5'],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"This is your brain on drugs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_cinematic_skip",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Don't use this, except in one place",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_outro_start",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Flag this cutscene as an outro cutscene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_enable_ambience_details",
	['boolean'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Enable/disable ambience details in cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_rasterizer_gamma",
	['real'],
	"void",
	['H2'],
	"Power",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_model_section",
	['render', 'model', 'long'],
	"void",
	['H2'],
	"Predict a geometry block",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_structure_section",
	['structure_bsp', 'long', 'boolean'],
	"void",
	['H2'],
	"Predict a geometry block",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_lightmap_bucket",
	['structure_bsp', 'long'],
	"void",
	['H2'],
	"Predict a geometry block",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bitmap",
	['bitmap', 'long'],
	"void",
	['H2'],
	"Predict a bitmap",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override",
	['boolean'],
	"void",
	['H2'],
	"Enable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_reset",
	['boolean'],
	"void",
	['H2'],
	"Reset",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_blur_amount",
	['real'],
	"void",
	['H2'],
	"Blur mount",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_threshold",
	['real'],
	"void",
	['H2'],
	"Threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_brightness",
	['real'],
	"void",
	['H2'],
	"Brightness",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_box_factor",
	['real'],
	"void",
	['H2'],
	"Box factor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_max_factor",
	['real'],
	"void",
	['H2'],
	"Max factor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_silver_bullet",
	['boolean'],
	"void",
	['H2'],
	"Silver bullet",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_only",
	['boolean'],
	"void",
	['H2'],
	"Only",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_high_res",
	['boolean'],
	"void",
	['H2'],
	"High res",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_brightness_alpha",
	['real'],
	"void",
	['H2'],
	"Brightness alpha",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_bloom_override_max_factor_alpha",
	['real'],
	"void",
	['H2'],
	"Max factor alpha",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cache_block_for_one_frame",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR'],
	"Call this to force texture and geometry cache to block until satiated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_suppress_ambience_update_on_revert",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Call this when transitioning between two cinematics so ambience won't fade in between the skips",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_test_error_ok",
	['short'],
	"void",
	['H2'],
	"Test error code display w/ ok dialog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_test_error_ok_cancel",
	['short'],
	"void",
	['H2'],
	"Test error code display w/ ok-cancel dialog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_test_confirmation",
	['short'],
	"void",
	['H2'],
	"Test confirmation dialog display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lightmap_shadow_disable",
	[],
	"void",
	['H2', 'H3', 'HO', 'H4'],
	"Turn off lightmap shadow in cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lightmap_shadow_enable",
	[],
	"void",
	['H2', 'H3', 'HO', 'H4'],
	"Turn on lightmap shadow in cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"loading_screen_fade_to_white",
	[],
	"void",
	['H2'],
	"Sets the next loading screen to just fade to white",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_debug_frame_usage",
	['boolean'],
	"void",
	['H2'],
	"Spew texture usage data per frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rasterizer_debug_crap_pixel_shader",
	['boolean'],
	"void",
	['H2'],
	"Spew texture usage data per frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"enable_render_light_suppressor",
	[],
	"void",
	['H2'],
	"Enables the code that constrains the max # active lights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"disable_render_light_suppressor",
	[],
	"void",
	['H2'],
	"Disables the code that constrains the max # active lights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_start_movie",
	['string'],
	"void",
	['H2'],
	"Starts cinematic movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_variant",
	['string-1', 'string-2'],
	"void",
	['H2'],
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_log_compare_log_files",
	['string-1', 'string-2'],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Comares determinism log files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_by_substring",
	['string'],
	"void",
	['H2'],
	"Filter display sound channels by substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flush_ddm",
	[],
	"void",
	['H2'],
	"Flush ddm file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_get",
	[],
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Returns current game tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate",
	[],
	"long",
	['H2'],
	"Returns current game ticks per second rate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate_scalar",
	[],
	"long",
	['H2'],
	"Returns current game ticks per second rate relative to k_authored_tick_rate (30hz)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_length",
	[],
	"real",
	['H2'],
	"Returns how many seconds are in a current game tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_menu_rebuild",
	[],
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
	"Reparses the debug menu from the text file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep",
	['short', 'script?'],
	"void",
	['H3', 'HO'],
	"Pauses execution of this script (or, optionally, another script) for the specified number of ticks @ 30hz",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_for_ticks",
	['short', 'script?'],
	"void",
	['H3', 'HO'],
	"Pauses execution of this script (or, optionally, another script) for the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_until",
	['boolean', 'short?', 'long?'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Pauses execution of this script until the specified condition is true, checking once per second unless a different number of ticks is specified. If the final optional argument is given, this function will stop sleeping regardless of condition after <long> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"evaluate",
	['script'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Evaluate the given script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_show_thread",
	['string', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Shows or hides the display of any thread containing the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_globals",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turn on/off hs global debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_variable",
	['string', 'boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"Turn on/off debugging of a specific global variable; enclose the variable name with single quote characters ('my_variable')",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_variable_all",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turn on/off debugging of all global variables",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players",
	[],
	"object_list",
	['H3', 'HO'],
	"Returns a list of the players (do not use to count players in coop game, use game_coop_player_count)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get",
	['long'],
	"unit",
	['H3', 'HO'],
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players",
	['trigger_volume'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns true if any players are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players_all",
	['trigger_volume'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns true if all players are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"zone_set_trigger_volume_enable",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enables/disables the trigger volume(s) with the given name that cause zone set switches",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_random",
	['effect', 'point_reference'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts the specified effect at one of the points in the given a point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_at_ai_point",
	['effect', 'point_reference'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts the specified effect at the specified ai point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_ground",
	['effect', 'object'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts the specified effect on the ground underneath the object's root",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_effect",
	['damage', 'object'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Causes the specified damage at the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_objects_effect",
	['damage', 'object_list'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Causes the specified damage at the specified object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object",
	['object', 'string_id', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Causes the specified damage at the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_objects",
	['object_list', 'string_id', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Causes the specified damage at the specified object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"soft_ceiling_enable",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turn on or off a soft ceiling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_if_necessary",
	['object_name'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Creates an object if it doesn't already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_folder",
	['folder'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Creates all the objects in the given folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_folder_anew",
	['folder'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Creates all the objects in the given folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_folder",
	['folder'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Destroys all objects in the given folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_buckling_magnitude_get",
	['object'],
	"real",
	['H3', 'HO', 'HR'],
	"Returns the amoount [0-1] that a scarab is buckling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_inertia_tensor_scale",
	['object', 'real'],
	"void",
	['H3', 'HO'],
	"0==default of 1.0, otherwise it is scale on this objects inertia tensor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_collision_damage_armor_scale",
	['object', 'real'],
	"void",
	['H3', 'HO'],
	"0==default of 1.0, otherwise it is scale on how this objects takes collisoin damage, >1 == more protection, <1 == less",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_teleport_to_ai_point",
	['object', 'point_reference'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Moves the specified object to the specified ai point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield",
	['object', 'real'],
	"void",
	['H3', 'HO'],
	"Sets the shield vitality of the specified object (between 0 and 1).  this does the wrong thing.  don't use it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_normalized",
	['object', 'real'],
	"void",
	['H3', 'HO'],
	"Sets the shield vitality of the specified object (between 0 and 1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_variant",
	['object', 'string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the specified object to the specified model variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_position",
	['object_list', 'real-1', 'real-2', 'real-3'],
	"real",
	['H3', 'HO'],
	"Returns minimum distance from any of the specified objects to the specified positio. (returns -1 if there are no objects to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"position_return_nearby_objects_by_type",
	['real-1', 'real-2', 'real-3', 'real-4', 'long'],
	"object_list",
	['H3', 'HO'],
	"Returns list of objects inside radius of position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_info",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Prints the map, zone set, active bsps, and current bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_stop",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Stop profiling havok, and save the results",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_range",
	['long-1', 'long-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Captures timers and a movie of a specific tick range",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_light_state",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Outputs text light state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_position",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the render texture camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_target",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the render texture camera target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_attach_to_object",
	['object', 'string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Attaches the render texture camera to a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_target_object",
	['object', 'string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Targets the render texture camera to view a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_position_world_offset",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Adds a worldspace offset to the current texture camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_on",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on the render texture camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_bink",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on the render texture camera and renders a bink to it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_aspect_ratio",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the texture camera aspet ratio",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_resolution",
	['long-1', 'long-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the texture camera render resolution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_render_mode",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Switches the texture camera render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_fov",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the field of view on the texture camera, in degrees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_fov_frame_target",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Zooms the field of view to frame the target, with target zoom factor to zoom closer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_enable_dynamic_lights",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle rendering of dynamic lights in the texture camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_texture_camera",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles displaying the texture camera in the corner of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_structure_cluster",
	['long-1', 'long-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Specify a structure and cluster to debug",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_use_pervertex",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the lightmap preference to per-vertex, ignores per-pixel if available",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_use_reset",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Resets the lightmap preference setting and updates the internal lightmap bsp data if necessary",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_sample_enable",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enables visualization of match samples if available",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_sample_disable",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disables visualization of match samples",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_object_bitmaps",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Substring of object definition name to spew out it's debug usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_bsp_resources",
	['long', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Bsp index and whether to spit out all bitmaps used",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_all_object_resources",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Outputs text of texture and geometry memory usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_text_using_simple_font",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles use of the much faster simple_font system for debug text rendering",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_postprocess_color_tweaking_reset",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Resets hue saturation filters to default",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_relative_at_frame",
	['scenery', 'animation_graph', 'string_id', 'object', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a piece of scenery relative to a specific cutscene flag at a specific frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_custom_animation_relative_at_frame",
	['unit', 'animation_graph', 'string_id-1', 'string_id-2', 'boolean', 'short'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a unit relative to a specific cutscene flag at a specific frame index(interpolates into animation if next to last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"preferred_animation_list_add",
	['object', 'string_id'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Adds an animation into the 'preferred list' of animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"preferred_animation_list_clear",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Clears the 'preferred list' of animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_falling_damage_disable",
	['unit', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disables falling damage on unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_in_vehicle_type_mask",
	['unit', 'long'],
	"boolean",
	['H3', 'HO'],
	"Returns true if the unit is in a vehicle that matches the specified vehicle type mask",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_turret_count",
	['object'],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the number of turrets attached to the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_turret",
	['object', 'short'],
	"vehicle",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the nth turret attached to the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion",
	['unit', 'long', 'real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets a unit's facial expression (-1 is none, other values depend on unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion_by_name",
	['unit', 'string_id', 'real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets a unit's facial expression by name with weight and transition time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_integrated_flashlight",
	['unit', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets a unit's flashlight on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_voice",
	['unit', 'any', 'tag'],
	"void",
	['H3', 'HO'],
	"Set the dialogue for the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enable_vision_mode",
	['unit', 'boolean'],
	"void",
	['H3', 'HO'],
	"Enable/disable vision mode for a given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_any_equipment",
	['unit'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns true if the <unit> has any equipment, false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_equipment",
	['unit', 'object_definition'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns true if the <unit> has equipment <object> , false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_drop_support_weapon",
	['unit'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Forces the given unit to drop its support weapon, if it is holding one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_spew_action",
	['unit'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Runs the spew unit action on the specified unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_force_reload",
	['unit'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Force the give unit to reload his weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_ignore_player_set",
	['device', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"True makes the given device ignore the player (won't open for players), false makes it work for the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_safe",
	['any', 'tag'],
	"void",
	['H3', 'HO'],
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_variant",
	['string-1', 'string-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle using the specified variant name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_permutation",
	['string-1', 'string-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Drops the named tag e.g. objects\\characters\\brute\\brute.biped using the specified permutation. permutations are specified as a comma-delimited string of region=permutation pairs (e.g. region1=permutation1,region2=permutation2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_infection_suppress",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disable infection for this number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_squad",
	['ai'],
	"ai",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the squad of the given actor. invalid if the given ai is not an actor-type (i.e. is itself a squad or squad group or task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_turret_ai",
	['ai', 'short'],
	"ai",
	['H3', 'HO', 'HR', 'H4'],
	"Returns an the ai controlling the nth turret attached to the given ai (or its vehicle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_random_smart_point",
	['point_reference', 'real-1', 'real-2', 'real-3'],
	"point_reference",
	['H3', 'HO', 'HR', 'H4'],
	"Returns a point in the given point set that a player is probably going to be able to see. args are [point set], [min distance], [max distance], [angle-from-forward], all relative to the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_nearest_point",
	['object', 'point_reference'],
	"point_reference",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the nearest point in the given point set to the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_point_count",
	['point_reference'],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the number of points in the given point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_point_set_get_point",
	['point_reference', 'short'],
	"point_reference",
	['H3', 'HO', 'HR', 'H4'],
	"Returns nth point in the point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_resurrect",
	['object'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Resurrect the specified mission critical ai character",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_weapon_up",
	['ai', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Force actor to hold their weapon up, instead of lowering it when idle. this does not cause them to draw their weapon if stowed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_flood_disperse",
	['ai-1', 'ai-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disperese a flood encounter, stimulating the various forms to break down into infections and transition to the new objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate_persistent",
	['ai-1', 'ai-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Makes all or part of an encounter move to another encounter, and all script commands will function on the migrated squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance_break",
	['team-1', 'team-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fake a betrayal incident between two teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_prefer_target_team",
	['ai', 'team'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"The given ai will prefer the indicated team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_prefer_target_ai",
	['ai-1', 'ai-2', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"The given ai (actor, squad, task, etc.) will prefer the given other ai (actor, squad, task, etc.)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_targeting_group",
	['ai', 'short', 'boolean?'],
	"void",
	['H3', 'HO'],
	"Set the ai to only target other guys of targetin group x (true/false whether the player should also be targeted)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport",
	['ai', 'point_reference'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Teleports the given squad to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_bring_forward",
	['object', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Teleports the given mission critical ai character to the current encounter, if beyond the given range from a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_morph",
	['ai', 'short'],
	"boolean",
	['H3', 'HO'],
	"Cause an ai (or a group of ai) to morph to the given form",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_morph",
	['object'],
	"boolean",
	['H3', 'HO'],
	"Cause a biped to morph to its floodified form",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_in_vehicle_count",
	['ai'],
	"short",
	['H3', 'HO', 'HR'],
	"Return the number of living actors in the specified encounter and/or squad who are currently in a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_body_count",
	['ai'],
	"short",
	['H3', 'HO', 'HR'],
	"Return the number of actors who have died in the completiong of the given objective/task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_rotate_scenario",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"boolean",
	['H3'],
	"Rotates ai points and normals (e.g. firing points, starting locations) around the given axis (x,y,z) by the given rotation angle (degrees)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_translate_scenario",
	['real-1', 'real-2', 'real-3'],
	"boolean",
	['H3', 'HO'],
	"Translates ai points and objects by the given x y z",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_duplicate_bsp_objects",
	['string-1', 'string-2'],
	"void",
	['H3', 'HO'],
	"<input bsp> <output bsp>: duplicate all the objects in the first bsp into the second bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_duplicate_bsp_objects",
	['string-1', 'string-2'],
	"void",
	['H3', 'HO'],
	"<input bsp> <output bsp> <filter>: duplicate filtered objects in the first bsp into the second bsp; available filters: all, crates, scenery, bipeds, machines, terminals, controls, arg_devices",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_rotate",
	['real-1', 'real-2', 'real-3', 'real-4', '[string', 'string]'],
	"void",
	['H3', 'HO'],
	"Rotates scenario objects (specified by the filter) in the specified bsp around the given axis (x,y,z) by the given amount (degrees)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_reflect",
	['real-1', 'real-2', 'real-3', 'real-4', '[string', 'string]'],
	"void",
	['H3', 'HO'],
	"Reflects scenario objects (specified by the filter) in the specified bsp across the given plane (specified by normal x,y,z and offset k)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_translate",
	['real-1', 'real-2', 'real-3', '[string', 'string]'],
	"void",
	['H3', 'HO'],
	"Translates scenario objects (specified by the filter) in the specified bsp the given amount (x,y,z)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_task",
	['ai', 'string_id-1', 'string_id-2'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the current task of the current task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_objective",
	['ai', 'string_id'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the squad's current objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_task_status",
	['ai'],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the status of the given objective/task. see ai_task_status_<tab> for return codes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_task_condition",
	['ai', 'boolean'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Latches the task condition true or false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_leadership",
	['ai'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns whether a squad or task has a leader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_leadership_all",
	['ai'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns whether a task or any of its children has a leader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_task_count",
	['ai'],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the living count of the ai in the given task or any of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_activity_set",
	['ai', 'string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set the given activity running on the given ai(s)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_activity_abort",
	['ai'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Aborts the activities running on the given ai(s)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_squad_count",
	['ai'],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the number of vehicles in the given squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_squad",
	['ai', 'short'],
	"vehicle",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the nth vehicle from the given squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_reserve_seat",
	['vehicle', 'unit_seat_mapping', 'boolean'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Reserves the given seat on the given vehicle (so that ai may not enter it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_get_vehicle_squad",
	['unit'],
	"ai",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the squad (if any) of the vehicle the player is riding in (note, the argument is a unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_count",
	['ai'],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the number of vehicles being driven / ridden by the actors in the given squad/squad-group/task/etc",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_carrying_player",
	['ai'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns whether any of the given ai are in a vehicle with the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_in_vehicle",
	['vehicle'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns whether any players are in the given vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_needs_vehicle",
	['unit'],
	"boolean",
	['H3', 'HO'],
	"Returns if the given player needs a vehicle at the moment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_any_needs_vehicle",
	[],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns if any player needs a vehicle at the moment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_definition_set",
	['string_id', 'any', 'tag'],
	"boolean",
	['H3', 'HO'],
	"Set the definition of the given flock to the given tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_unperch",
	['string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Cause the given flock to unperch (if it is perched)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_ai",
	['string-1', 'string-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Drop an ai with the given weapon at the current camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line",
	['ai', 'ai_line'],
	"real",
	['H3', 'HO', 'HR'],
	"Play the given mission dialogue line on the given ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_at_player",
	['ai', 'ai_line'],
	"real",
	['H3', 'HO', 'HR'],
	"Play the given mission dialogue line on the given ai, directing the ai's gaze at the nearest visible player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object",
	['object', 'ai_line'],
	"real",
	['H3', 'HO', 'HR'],
	"Play the given mission dialogue line on the given object (uses first available variant)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object_for_team",
	['object', 'ai_line', 'mp_team'],
	"real",
	['H3', 'HO', 'HR'],
	"Play the given mission dialogue line on the given object (uses first available variant) if anyone on the local box is on the specified team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_point_set",
	['string_id', 'point_reference', 'short', 'string_id?'],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Play the given line (with the given 3-letter variant) on the n closest point to players in the given point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_time_pause",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Pause meta game time, while paused your completion multiplier stops going down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_points",
	['object', 'short'],
	"void",
	['H3', 'HO'],
	"Award bonus metagame points to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_primary_skull",
	['object', 'short'],
	"void",
	['H3'],
	"Award a primary skull to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_secondary_skull",
	['object', 'short'],
	"void",
	['H3'],
	"Award a secondary skull to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_enabled",
	[],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"True if the metagame is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_is_finished_easy",
	[],
	"boolean",
	['H3', 'HO'],
	"True if any of the players have finished the campaign on easy",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_is_finished_normal",
	[],
	"boolean",
	['H3', 'HO'],
	"True if any of the players have finished the campaign on normal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_is_finished_heroic",
	[],
	"boolean",
	['H3', 'HO'],
	"True if any of the players have finished the campaign on heroic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_is_finished_legendary",
	[],
	"boolean",
	['H3', 'HO'],
	"True if any of the players have finished the campaign on legendary",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_reserve",
	['ai', 'short'],
	"void",
	['H3', 'HO'],
	"Reserves the specified actor(s) for the use of the current script (discarding any other command scripts in the queue)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_reserve",
	['ai', 'boolean', 'short'],
	"void",
	['H3', 'HO'],
	"Reserves the specified actor(s) for the use of the current script (discarding any other command scripts in the queue)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_role",
	['short'],
	"ai",
	['H3', 'HO', 'HR'],
	"Returns the given member of the cast (as per more recent vs_cast call)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_alert",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_damage",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_combat_status",
	['short'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_vehicle_exit",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_vehicle_exit",
	['boolean'],
	"void",
	['H3', 'H3', 'HO', 'HO', 'HR', 'HR', 'H4', 'H4'],
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_alert",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_alert",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_damage",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_combat_status",
	['ai', 'short'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_abort_on_vehicle_exit",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_set_cleanup_script",
	['script'],
	"void",
	['H3', 'HO'],
	"Sets the script that is automatically called when the current thread ends",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_release",
	['ai'],
	"void",
	['H3', 'HO'],
	"Lets the given ai out of the current command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_release_all",
	[],
	"void",
	['H3', 'HO'],
	"Releases all the ai attached to the current thread",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_moving",
	['ai'],
	"boolean",
	['H3', 'HO', 'HR'],
	"Returns true if the actor is currently following a path",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_running_atom",
	['ai'],
	"boolean",
	['H3', 'HO'],
	"Returns true if the ai is running any atom",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_running_atom_movement",
	['ai'],
	"boolean",
	['H3', 'HO'],
	"Returns true if the ai is running an atom on the movement channel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_running_atom_action",
	['ai'],
	"boolean",
	['H3', 'HO'],
	"Returns true if the ai is running an atom on the action channel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_running_atom_dialogue",
	['ai'],
	"boolean",
	['H3', 'HO'],
	"Returns true if the ai is running an atom on the dialogue channel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_fly_to",
	['ai', 'boolean', 'point_reference', 'real?'],
	"void",
	['H3', 'HO'],
	"Flies the actor to the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_fly_to_and_face",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2', 'real?'],
	"void",
	['H3', 'HO'],
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_fly_by",
	['ai', 'boolean', 'point_reference', 'real?'],
	"void",
	['H3', 'HO'],
	"Flies the actor through the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_go_to",
	['ai', 'boolean', 'point_reference', 'real?'],
	"void",
	['H3', 'HO'],
	"Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_go_by",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2', 'real?'],
	"void",
	['H3', 'HO'],
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_go_to_and_face",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2'],
	"void",
	['H3', 'HO'],
	"Moves the actor to a specified point and has him face the second point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_posture",
	['point_reference', 'string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor moves to the point and performs a posture once there",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_go_to_and_posture",
	['ai', 'boolean', 'point_reference', 'string_id'],
	"void",
	['H3', 'HO'],
	"Actor moves to the point and performs a posture once there",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_go_to_nearest",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Given a point set, ai goes toward the nearest point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_move_in_direction",
	['ai', 'boolean', 'real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO'],
	"Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['object', 'boolean?'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Move in the direction of the given object (and melee the target or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_move_towards",
	['ai', 'boolean', 'object', 'boolean?'],
	"void",
	['H3', 'HO'],
	"Move in the direction of the given object (and melee the target or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_to",
	['point_reference', 'real'],
	"void",
	['H3', 'HO', 'HR'],
	"A swarm swarms towards the point (or point set) in question, the individual forms stopping when they get within the given radius",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_swarm_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['H3', 'HO'],
	"A swarm swarms towards the point (or point set) in question, the individual forms stopping when they get within the given radius",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_from",
	['point_reference', 'real'],
	"void",
	['H3', 'HO', 'HR'],
	"A swarm swarms away from the point in question, going at least the given distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_swarm_from",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['H3', 'HO'],
	"A swarm swarms away from the point in question, going at least the given distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_pause",
	['ai', 'boolean', 'real'],
	"void",
	['H3', 'HO'],
	"The actor does nothing for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_grenade",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	['H3', 'HO'],
	"Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_equipment",
	['point_reference'],
	"void",
	['H3', 'HO'],
	"Actor throws their equipment in the direction of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_equipment",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Actor throws their equipment in the direction of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_jump",
	['ai', 'boolean', 'real-1', 'real-2'],
	"void",
	['H3', 'HO'],
	"Actor jumps in direction of angle at the given velocity (angle, velocity)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_jump_to_point",
	['ai', 'boolean', 'real-1', 'real-2'],
	"void",
	['H3', 'HO'],
	"Actor jumps with given horizontal and vertical velocity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_vocalize",
	['ai', 'boolean', 'short'],
	"void",
	['H3', 'HO'],
	"Actor emits vocalization of given type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action",
	['point_reference', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor plays an ai action towards the given point. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_action",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	['H3', 'HO'],
	"Actor plays an ai action towards the given point. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_object",
	['object', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor plays an ai action towards the given object. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_action_at_object",
	['ai', 'boolean', 'object', 'short'],
	"void",
	['H3', 'HO'],
	"Actor plays an ai action towards the given object. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_player",
	['short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor plays an ai action towards the nearest_player. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_action_at_player",
	['ai', 'boolean', 'short'],
	"void",
	['H3', 'HO'],
	"Actor plays an ai action towards the nearest_player. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['animation_graph', 'string_id', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_custom_animation",
	['ai', 'boolean-1', 'animation_graph', 'string_id', 'boolean-2', 'point_reference?'],
	"void",
	['H3', 'HO'],
	"Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['animation_graph', 'string_id', 'boolean', 'point_reference?'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_custom_animation_death",
	['ai', 'boolean-1', 'animation_graph', 'string_id', 'boolean-2', 'point_reference?'],
	"void",
	['H3', 'HO'],
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['animation_graph', 'string_id', 'boolean', 'point_reference?'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_custom_animation_loop",
	['ai', 'animation_graph', 'string_id', 'boolean', 'point_reference?'],
	"void",
	['H3', 'HO'],
	"Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_line",
	['ai_line'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Play the named line in the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_play_line",
	['ai', 'boolean', 'ai_line'],
	"void",
	['H3', 'HO'],
	"Play the named line in the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_die",
	['ai', 'boolean', 'short'],
	"void",
	['H3', 'HO'],
	"Actor dies in specified manner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_deploy_turret",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Deploy a turret at the given script point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach",
	['object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"(approach <object> <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_approach",
	['ai', 'boolean', 'object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO'],
	"(approach <object> <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_player",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"(approach player <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_approach_player",
	['ai', 'boolean', 'real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO'],
	"(approach player <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['vehicle', 'unit_seat_mapping?'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor gets in the named seat of the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_go_to_vehicle",
	['ai', 'boolean', 'vehicle', 'unit_seat_mapping?'],
	"void",
	['H3', 'HO'],
	"Actor gets in the named seat of the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_set_style",
	['ai', 'style'],
	"void",
	['H3', 'HO'],
	"Override the actor's style",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_force_combat_status",
	['short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_force_combat_status",
	['ai', 'short'],
	"void",
	['H3', 'HO'],
	"Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_enable_targeting",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor autonomous target selection enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_enable_looking",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor autonomous looking enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_enable_moving",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor autonomous moving enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_enable_dialogue",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor combat dialogue enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_activity_termination",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Autonomous termination of activities is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_suppress_activity_termination",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Autonomous termination of activities is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_suppress_dialogue_global",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Combat dialogue is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_look",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Actor looks at the point for the remainder of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_look_player",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor looks at nearest player for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_look_object",
	['ai', 'boolean', 'object'],
	"void",
	['H3', 'HO'],
	"Actor looks at the object for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_aim",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_aim_player",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_aim_object",
	['ai', 'boolean', 'object'],
	"void",
	['H3', 'HO'],
	"Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_face",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_face_player",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_face_object",
	['ai', 'boolean', 'object'],
	"void",
	['H3', 'HO'],
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_shoot",
	['ai', 'boolean', 'object?'],
	"void",
	['H3', 'HO'],
	"Actor shoots at given target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_shoot_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H3', 'HO'],
	"Actor shoots at given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_secondary_trigger",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor uses secondary trigger whenever he shoots",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_shoot_secondary_trigger",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor uses secondary trigger whenever he shoots",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_lower_weapon",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor keeps weapon lowered",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_lower_weapon",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor keeps weapon lowered",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_vehicle_speed",
	['ai', 'real'],
	"void",
	['H3', 'HO'],
	"Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_vehicle_speed_instantaneous",
	['ai', 'real'],
	"void",
	['H3', 'HO'],
	"Set the instantaneous speed of the vehicle we're driving",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_vehicle_boost",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Enables or disables boost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_turn_sharpness",
	['ai', 'boolean', 'real'],
	"void",
	['H3', 'HO'],
	"Set the sharpness of a vehicle turn (values 0 -> 1). only applicable to nondirectional flying vehicles (e.g. dropships)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_enable_pathfinding_failsafe",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor blocks until pathfinding calls succeed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_set_pathfinding_radius",
	['ai', 'real'],
	"void",
	['H3', 'HO'],
	"Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_ignore_obstacles",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor does not avoid obstacles when true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_approach_stop",
	['ai'],
	"void",
	['H3', 'HO'],
	"Actor stops approaching",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_movement_mode",
	['ai', 'short'],
	"void",
	['H3', 'HO'],
	"Actor switches to given animation mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_crouch",
	['ai', 'boolean', 'real?'],
	"void",
	['H3', 'HO'],
	"Actor crouches / uncrouches, transitioning over the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_walk",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor walks for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_walk",
	['ai', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor walks for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_set",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor enters the given posture (enters immediately rather than plays the entry animation if argument is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_posture_set",
	['ai', 'string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Actor enters the given posture (enters immediately rather than plays the entry animation if argument is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_exit",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor exits the posture it's in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_posture_exit",
	['ai'],
	"void",
	['H3', 'HO'],
	"Actor exits the posture it's in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stow",
	[],
	"void",
	['H3', 'HO'],
	"Actor stows its current weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_stow",
	['ai'],
	"void",
	['H3', 'HO'],
	"Actor stows its current weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_draw",
	[],
	"void",
	['H3', 'HO'],
	"Actor draws its current weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_draw",
	['ai'],
	"void",
	['H3', 'HO'],
	"Actor draws its current weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_teleport",
	['ai', 'point_reference-1', 'point_reference-2'],
	"void",
	['H3', 'HO'],
	"Actor teleports to point1 facing point2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_stop_custom_animation",
	['ai'],
	"void",
	['H3', 'HO'],
	"Stop running a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_stop_sound",
	['ai', 'sound'],
	"void",
	['H3', 'HO'],
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_player_melee",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor performs player-specific melee",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_player_melee",
	['ai', 'boolean', 'long'],
	"void",
	['H3', 'HO'],
	"Actor performs player-specific melee",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_melee_direction",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_melee_direction",
	['ai', 'boolean', 'long'],
	"void",
	['H3', 'HO'],
	"Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_smash_direction",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Actor performs smash in provided direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_smash_direction",
	['ai', 'boolean', 'long'],
	"void",
	['H3', 'HO'],
	"Actor performs smash in provided direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_with_speed",
	['animation_graph', 'string_id', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Begins a prerecorded camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative_with_speed",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative_with_speed_loop",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'real', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative_with_speed_loop_offset",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'real-1', 'boolean', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_cinematic",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Makes the scripted camera follow the path of a cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_cinematic_scene",
	['cinematic', 'scene', 'definition', 'long', 'cutscene_flag'],
	"void",
	['H3', 'HO'],
	"Sets the scene, shot, and cutscene flag for the cinematic camera (note: camera must be in cinematic mode by calling camera_set_cinematic)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_camera_set_easing_in",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Controls the camera easing from player position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_camera_set_easing_out",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Controls the camera easing back to the player position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_print",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Print status lines for cinematic debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_get",
	[],
	"short",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the number of the insertion point the map was started at",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_set",
	['short'],
	"void",
	['H3', 'HO'],
	"Retroactively sets the insertion point that we started at",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_reset",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Forces pvs to empty then back to full",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_disable_weapon_pickup",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable all players' ability to pick up weapons",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_cinematic_skip",
	[],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns true if any player has pressed the cinematic skip button (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_set_pitch",
	['real', 'long'],
	"void",
	['H3', 'HO'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player1_set_pitch",
	['real', 'long'],
	"void",
	['H3', 'HO'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player2_set_pitch",
	['real', 'long'],
	"void",
	['H3', 'HO'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player3_set_pitch",
	['real', 'long'],
	"void",
	['H3', 'HO'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_up_begin",
	['real-1', 'real-2'],
	"void",
	['H3'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_down_begin",
	['real-1', 'real-2'],
	"void",
	['H3'],
	"Sets down player look down test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset_random",
	[],
	"void",
	['H3', 'HO', 'HR'],
	"Starts the map from the beginning with a new random seed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_zone_set",
	['zone_set'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Switches to a different zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"current_zone_set",
	[],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the current zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"current_zone_set_fully_active",
	[],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the current zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_map_and_zone_set",
	['string', 'long'],
	"void",
	['H3', 'HO'],
	"Switches to a different scenario and zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Prints the value of all global status variables",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_movie",
	['short-1', 'real', 'short-2', 'short-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<frame rate> <seconds> <width> <height>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_debug",
	[],
	"void",
	['H3', 'HO', 'H4'],
	"Takes a screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_big_raw",
	['short', 'string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Takes an nxn multiple-page screenshot and saves as an hdr <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_size",
	['short-1', 'short-2', 'string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Takes a <width> x <height> screenshot and saves as an hdr <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_simple",
	['string'],
	"void",
	['H3', 'HO', 'HR'],
	"Takes a simple screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_webmap",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Takes two special screenshots and saves them, along with the camera information, as <name>.tif, <name>_secondary.tif and <name>_camera.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cubemap_dynamic_generate",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Generates a dynamic cubemap and saves in the cubemaps directory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_multiplayer",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debug map launching: sets the multiplayer engine for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_campaign",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debug map launching: sets the next map to run in campaign mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_set_variant",
	['string'],
	"void",
	['H3', 'HO'],
	"Debug map launching: sets the multiplayer variant for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_active_primary_skulls",
	['long'],
	"void",
	['H3', 'HO'],
	"Debug map launching: sets the active primary skulls of the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_active_secondary_skulls",
	['long'],
	"void",
	['H3', 'HO'],
	"Debug map launching: sets the active primary skulls of the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_zone_set",
	['long'],
	"void",
	['H3', 'HO'],
	"Debug map launching: sets the initial bsp for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start_when_ready",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Nicely starts the current game once the pregame lobby is stable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start_when_joined",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Nicely starts a game when the specified number of users are in the lobby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"language_set",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Change the language for localization",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_enable",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Toggles the profile display on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_set_thread",
	['long'],
	"void",
	['H3', 'HO'],
	"Sets the thread index being profiled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_set_sort_method",
	['long'],
	"void",
	['H3', 'HO'],
	"Sets the sorting method used",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_set_range",
	['long'],
	"void",
	['H3', 'HO'],
	"Sets the collection range used",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_set_attribute",
	['string'],
	"void",
	['H3', 'HO'],
	"Sets an attribute to profile by name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_next_frame",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Creates a tracedump of the next frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_next_frame_to_file",
	['long', 'string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Creates a tracedump of the next frame in a specific file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_tick",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Creates a tracedump of a specific game tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set",
	['cinematic_definition'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the cinematic name for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_shot",
	['cinematic', 'scene', 'definition', 'long'],
	"void",
	['H3', 'HO'],
	"Sets the scene and shot for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_get_shot",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Print the stored scene and shot information to the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_early_exit",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Used to store the state of skippable cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_get_early_exit",
	[],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Used to retrieve the state of skippable cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_active_camera",
	['string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Used to change the rasterizer to display one of the texture cameras",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_create",
	['string'],
	"void",
	['H3', 'HO'],
	"Creates an object for use by cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_create_cinematic_anchor",
	['string', 'cutscene_flag'],
	"void",
	['H3', 'HO'],
	"Creates a cinematic anchor object for use by cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_destroy",
	['string'],
	"void",
	['H3', 'HO'],
	"Destroys an object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_destroy",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Releases everything created by the cinematics system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_clips_initialize_for_shot",
	['long'],
	"void",
	['H3', 'HO', 'HR'],
	"Intializes the cinematic clip planes for the given shot of the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_clips_destroy",
	[],
	"void",
	['H3', 'HO', 'HR'],
	"Destroys any existing cinematic clip planes for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lights_initialize_for_shot",
	['long'],
	"void",
	['H3', 'HO', 'HR'],
	"Intializes the cinematic lighting for the given shot of the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lights_destroy",
	[],
	"void",
	['H3', 'HO', 'HR'],
	"Destroys any existing cinematic lights for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_light_object",
	['object', 'string_id', 'cinematic_lightprobe', 'cutscene_camera_point'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Attaches cinematic lights to <object> at <marker> using scenario cinematic lighting palette entry <scenario-cinematic-lighting-name> from point of view of camera reference <camera>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_light_object_off",
	['object'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turn off cinematic lighting for the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_rebuild_all",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Rebuild all cinematic lighting (sh only)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_get",
	['string'],
	"object",
	['H3', 'HO'],
	"Returns an object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_get_unit",
	['string'],
	"unit",
	['H3'],
	"Returns a unit created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_get_scenery",
	['string'],
	"scenery",
	['H3'],
	"Returns a scenery object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_get_effect_scenery",
	['string'],
	"effect_scenery",
	['H3'],
	"Returns a scenery object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_reset",
	[],
	"void",
	['H3', 'HO', 'HR'],
	"Resets the cinematics internal state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_briefing",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Used for briefing cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_cinematic",
	['long'],
	"cinematic_definition",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve a cinematic tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene",
	['definition', 'cinematic_tag_reference_get_scene', 'long-1', 'long-2'],
	"cinematic",
	['H3', 'HO'],
	"Retrieve a cinematic tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_effect",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"effect",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve an effect tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_dialogue",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"sound",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve a sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_music",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"sound",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve a sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_music_looping",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"looping_sound",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve a looping sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_animation",
	['long-1', 'long-2', 'long-3'],
	"animation_graph",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve a looping sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_object_coop_flags_valid",
	['long-1', 'long-2', 'long-3'],
	"boolean",
	['H3', 'HO'],
	"Evaluate if a cinematic object should be displayed for the current coop flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_fade_out",
	['real-1', 'real-2', 'real-3', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fade out at the end of the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_object",
	['long-1', 'long-2', 'long-3', 'object_name'],
	"void",
	['H3'],
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_cinematic_object",
	['long-1', 'long-2', 'long-3'],
	"void",
	['H3', 'HO'],
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_animation",
	['long-1', 'long-2', 'long-3', 'object', 'string_id'],
	"void",
	['H3'],
	"Animate a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_object",
	['long-1', 'long-2', 'long-3', 'object'],
	"void",
	['H3'],
	"Destroy a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_effect",
	['long-1', 'long-2', 'long-3', 'long-4', 'object'],
	"void",
	['H3', 'HO'],
	"Play a cinematic effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_music",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['H3', 'HO'],
	"Play a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_dialogue",
	['long-1', 'long-2', 'long-3', 'long-4', 'object'],
	"void",
	['H3', 'HO'],
	"Play a cinematic dialogue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_music",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['H3', 'HO'],
	"Stops a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_object",
	['long-1', 'long-2', 'long-3', 'object_name', 'object', 'string_id', 'boolean'],
	"void",
	['H3'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_cinematic_object",
	['long-1', 'long-2', 'long-3', 'object', 'string_id', 'boolean'],
	"void",
	['H3'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_object_no_animation",
	['long-1', 'long-2', 'long-3', 'object_name', 'object', 'boolean'],
	"void",
	['H3'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_cinematic_object_no_animation",
	['long-1', 'long-2', 'long-3', 'object', 'boolean'],
	"void",
	['H3'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_play_cortana_effect",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['H3', 'HO'],
	"Play the associated cortana effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_revert",
	[],
	"void",
	['H3', 'HO'],
	"Causes the player to revert to their previous saved game (for testing and cinematic skipping only please!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_unlock",
	['short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Unlocks the given insertion point for the current map for all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_lock",
	['short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Unlocks the given insertion point for the current map for all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_games_delete_campaign_save",
	['controller'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Delete the campaign saved game file for a controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_games_autosave_free_up_space",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Tell the autosave queue to run its cleanup routine for each content type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_was_earned_by_player",
	['short', 'string_id'],
	"boolean",
	['H3'],
	"Check if player has been awarded named achievement",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_player",
	['short', 'string_id'],
	"void",
	['H3'],
	"Award named achievement to player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievements_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable or disable the awarding of achievements",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievements_skip_validation_checks",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle the disabling of validation checks on achievement awarding",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_influencers",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle debugging of any & all dynamic respawn influencers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_respawn_zones",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs respawn zone influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_proximity_forbid",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs enemy proximity forbid influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_moving_vehicle",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs moving vehicle danger influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_weapon_influences",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs enemy weapon danger influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_dangerous_projectiles",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs dangerous projectile influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_deployed_equipment",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs deployed equipment influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_proximity_enemy",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs enemy proximity bias influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_teammates",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Debugs teammate proximity bias influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_random_influence",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles display of random influence contribution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_nominal_weight",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles display of the nominal weight influence contribution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_natural_weight",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles display of the natural weight influence contribution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_target",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets target player for respawn influencer debugging display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_use_history",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the saved respawn state for respawn influencer debugging display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_initial_spawn_point_objects",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles debug cycling through multiplayer initial spawn points objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_respawn_point_objects",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggles debug cycling through multiplayer respawn points objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_export_variant_settings",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Export the current game engine variant settings to the specified text file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_general",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Test game engine general event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_flavor",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Test game engine flavor event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_slayer",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine slayer event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_ctf",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine ctf event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_oddball",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine oddball event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_king",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine king event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_vip",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine vip event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_juggernaut",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine juggernaut event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_territories",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine territories event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_assault",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine assault event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_infection",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine infection event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_gun_game",
	['long'],
	"void",
	['H3', 'HO'],
	"Test game engine gun game event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"force_debugger_not_present",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Forces is_debugger_present() to return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"force_debugger_always_present",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Forces is_debugger_present() to return true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_with_subtitle",
	['sound', 'object', 'real', 'string_id-1', 'string_id-2'],
	"void",
	['H3', 'HO', 'HR'],
	"Plays an impulse sound from the specified source object (or none), with the specified scale and displays a subtitle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_mark_as_outro",
	['sound'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Marks a sound as outro (meaning it plays past an unskipped cinematic)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_naked",
	['sound', 'string_id-1', 'string_id-2'],
	"void",
	['H3', 'HO', 'HR'],
	"<sound> <pitch range name> <permutation index name> through the speakers it was encoded for",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_auto_turret",
	['vehicle', 'trigger_volume', 'real-1', 'real-2', 'real-3'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the specified trigger volume and parameters for an auto turret",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"water_float_reset",
	['object'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Allows an object to continue floating",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_equipment",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_jump",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_activate_team_nav_point_flag",
	['team', 'cutscene_flag', 'real'],
	"void",
	['H3', 'HO'],
	"Activates a nav point type <string> attached to a team anchored to a flag with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_deactivate_team_nav_point_flag",
	['team', 'cutscene_flag'],
	"void",
	['H3', 'HO'],
	"Deactivates a nav point type attached to a team anchored to a flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_activate_team_nav_point_flag",
	['team', 'cutscene_flag', 'real'],
	"void",
	['H3', 'HO'],
	"Activates a nav point type <string> attached to a team anchored to a flag with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_deactivate_team_nav_point_flag",
	['team', 'cutscene_flag'],
	"void",
	['H3', 'HO'],
	"Deactivates a nav point type attached to a team anchored to a flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_activate_team_nav_point_position",
	['team', 'real-1', 'real-2', 'real-3', 'string', 'real-4'],
	"void",
	['H3', 'HO'],
	"Activates a improved nav point type <string> attached to a team anchored to a position with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_deactivate_team_nav_point_position",
	['team', 'string'],
	"void",
	['H3', 'HO'],
	"Deactivates a nav point type attached to a team anchored to a flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_activate_team_nav_point_object",
	['team', 'object', 'string', 'real'],
	"void",
	['H3', 'HO'],
	"Activates a nav point type <string> attached to a team anchored to an object with a vertical offset <real>. if the player is not local to the machine, this will fail",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_deactivate_team_nav_point_object",
	['team', 'string'],
	"void",
	['H3', 'HO'],
	"Deactivates a nav point type attached to a team anchored to an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_breadcrumbs_using_revised_nav_points",
	[],
	"boolean",
	['H3', 'HO'],
	"Checks wether revised navpoints are active",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_variant_child_object_by_marker_id",
	['object', 'string_id'],
	"object",
	['H3', 'HO'],
	"Returns the children of the object that contains the specified model target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_texture_cam",
	['boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"Turns the chud texturecam on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Hides/shows the entire chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_weapon_stats",
	['boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"Hides/shows the weapon huds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_crosshair",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Hides/shows the crosshair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_shield",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Hides/shows the shield",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_grenades",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Hides/shows the grenade hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_messages",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Hides/shows the chud messages",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_motion_sensor",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Hides/shows the motion sensor chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_spike_grenades",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Hides/shows the spike grenade chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_fire_grenades",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Hides/shows the firebomb chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_cinematic_fade",
	['real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Parameter 1 is how, parameter 2 is when",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_spam_suppression_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enables or disables the suppression of event spamming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rumble",
	['real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_atmosphere_fog",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable atmosphere fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motion_blur",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable motion blur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_weather",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable atmosphere fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_patchy_fog",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable patchy fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_look_inverted",
	['controller', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set look inversion for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_vibration_enabled",
	['controller', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set vibration for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_flight_stick_aircraft_controls",
	['controller', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set airrcraft flight stick controls for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_auto_center_look",
	['controller', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set auto center look for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_crouch_lock",
	['controller', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set crouch lock for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_button_preset",
	['controller', 'button', 'preset'],
	"void",
	['H3', 'HO'],
	"Set button preset for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_joystick_preset",
	['controller', 'joystick', 'preset'],
	"void",
	['H3', 'HO'],
	"Set joystick preset for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_look_sensitivity",
	['controller', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set look sensitivity for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_single_player_level_completed",
	['controller', 'long', 'boolean-1', 'game_difficulty', 'boolean-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<controller> <level index> <co-op> <difficulty> <completed> set the single player levels completed state for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_primary_change_color",
	['controller', 'player', 'color'],
	"void",
	['H3', 'HO'],
	"Set primary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_secondary_change_color",
	['controller', 'player', 'color'],
	"void",
	['H3', 'HO'],
	"Set secondary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_tertiary_change_color",
	['controller', 'player', 'color'],
	"void",
	['H3', 'HO'],
	"Set tertiary color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_primary_emblem_color",
	['controller', 'player', 'color'],
	"void",
	['H3', 'HO'],
	"Set primary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_secondary_emblem_color",
	['controller', 'player', 'color'],
	"void",
	['H3', 'HO'],
	"Set secondary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_background_emblem_color",
	['controller', 'player', 'color'],
	"void",
	['H3', 'HO'],
	"Set tertiary color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_player_character_type",
	['controller', 'player', 'character', 'type'],
	"void",
	['H3'],
	"Set player character type for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_emblem_info",
	['controller', 'short-1', 'short-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set emblem for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_subtitle_setting",
	['controller', 'subtitle', 'setting'],
	"void",
	['H3', 'HO'],
	"Set subtitle setting for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_unsignedin_user",
	['controller', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle controller as unsigned-in user",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_display_storage_device_selection",
	['controller'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Display storage device selection ui for the specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"font_cache_bitmap_save",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Save font cache bitmap to targa file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_text_font",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle display of ui text font",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_time_scale_step",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Move the ui time forward by a specified amount on next tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"xoverlapped_debug_render",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle display a list of active xoverlapped tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_load_screen",
	['string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Load the named screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_reset",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Cleans out the halox ui screens and errors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_start",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Tells the window location manager to resume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_stop",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Tells the window location manager to stop bringing up screens on its own",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_post",
	['string_id', 'long', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<error_code> <controller_index> <must_be_cleared> sets an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_post_toast",
	['string_id', 'long', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<error_code> <controller_index> <must_be_cleared> sets an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_resolve",
	['string_id', 'long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<error_name> <controller_index> resolves an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_clear",
	['string_id', 'long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<error_name> <controller_index> clears an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_dialog_show",
	['string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<dialog name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_print_active_screens",
	[],
	"void",
	['H3', 'HO'],
	"Display list of active halox ui screens",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_print_active_screen_strings",
	[],
	"void",
	['H3', 'HO'],
	"Display strings tag file name for current topmost screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_screen_name",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given screen's name, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_screen_animation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given screen animations, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_screen_bounds",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given screen's bounds, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_screen_rotation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given screen's rotation, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_group_name",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given group's name, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_group_animation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given group's animations, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_group_bounds",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given group's bounds, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_group_rotation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given group's rotation, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_name",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list's name, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_animation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list's animations, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_bounds",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list's bounds, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_rotation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list's rotation, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_item_name",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list item's name, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_item_animation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list item's animation, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_item_bounds",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list item's bounds, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_list_item_rotation",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Toggle display of given list item's rotation, optionally recursive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_text_name",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given text widget's name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_text_animation",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given text widget's animation state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_text_bounds",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given text widget's bounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_text_rotation",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given text widget's rotation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_bitmap_name",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given bitmap widget's name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_bitmap_animation",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given bitmap widget's animation state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_bitmap_bounds",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given bitmap widget's bounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_bitmap_rotation",
	['string_id', 'boolean'],
	"void",
	['H3', 'HO'],
	"Toggle display of given bitmap widget's rotation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_music_state",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle display of ui music state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cc_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle closed captions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cc_test",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Test a line of cc text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show_up_to",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Show primary campaign objectives 0..n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish_up_to",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Mark primary campaign objectives 0..n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_show",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Show secondary campaign objective n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_finish",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Mark secondary campaign objective n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_unavailable",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Mark secondary campaign objective n as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"input_suppress_rumble",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disable the friggin' rumble",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"input_disable_claw_button_combos",
	['boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"Disabe the claw button combos (for monkey testing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_network_config",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Writes a new network configuration file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_game_variant",
	['string'],
	"void",
	['H3', 'HO'],
	"Writes the current game variant to a file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_verify_game_variant",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Verifies the contents of a packed game variant file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_load_and_use_game_variant",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Loads the contents of a packed game variant file and submits to networking for use in the current game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_dump",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dump all network quality statistics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_clear",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Clear all network quality statistics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_connection_badness_history",
	['boolean', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set connection history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_host_badness_history",
	['boolean', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set host badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_client_badness_history",
	['boolean', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set client badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_host_badness_history",
	['boolean', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set host badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_client_badness_history",
	['boolean', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set client badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_estimated_bandwidth",
	['boolean', 'long'],
	"void",
	['H3', 'HO'],
	"Set upstream bandwidth history, <is reliable> <bandwidth in kbps>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_maximum_player_count",
	['long'],
	"void",
	['H3', 'HO'],
	"Sets the maximum player count for this squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_campaign_insertion_point",
	['short'],
	"void",
	['H3', 'HO'],
	"Sets the campaign insertion point for this squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_delegate_host",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Network test: delegate host to the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_variant",
	['string'],
	"void",
	['H3', 'HO'],
	"Network test: sets the game variant to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_display_category",
	['event'],
	"void",
	['H3', 'HO'],
	"Sets the global event display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_log_category",
	['event'],
	"void",
	['H3', 'HO'],
	"Sets the global evetn log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_remote_log_category",
	['event'],
	"void",
	['H3', 'HO'],
	"Sets the global remote evetn log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_display_category",
	['string', 'event'],
	"void",
	['H3', 'HO'],
	"Sets the display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_force_display_category",
	['string', 'event'],
	"void",
	['H3', 'HO'],
	"Sets the forced display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_log_category",
	['string', 'event'],
	"void",
	['H3', 'HO'],
	"Sets the log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_remote_log_category",
	['string', 'event'],
	"void",
	['H3', 'HO'],
	"Sets the remote log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_debugger_break_category",
	['string', 'event'],
	"void",
	['H3', 'HO'],
	"Sets the debugger break level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_halt_category",
	['string', 'event'],
	"void",
	['H3', 'HO'],
	"Sets the halt (assert/crash) level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie_from_tag",
	['bink_definition'],
	"void",
	['H3', 'HO', 'HR'],
	"Play a bink movie from a tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_time",
	[],
	"long",
	['H3', 'HO', 'HR'],
	"Uh",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_upload",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Upload all data mining data files to debug server",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_flush",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Flush any pending data mine data to disk",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_open_debug_menu",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Open debug menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_display_mission_segment",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle display of data mine mission segment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_autoexposure_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle autoexposure",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_full",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Animate exposure from <initial> to <final> stops using <initial> to <final> opacity in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_fade_in",
	['real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fade to animated exposure <stops> in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_fade_out",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fade to default exposure settings in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure",
	['real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fade to animated exposure <stops> in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_autoexposure_instant",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Instantly adopt auto exposure values in the next n frames",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_set_environment_darken",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set environmental darkening",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_depth_of_field_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns depth of field on and off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_depth_of_field",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Animate depth of field, in focus from <near> to <far>, with depth of field <depth>, in <ticks>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Interpolate depth of field to <depth>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_blur_animate",
	['real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Interpolate depth of field maximum blur to <blur> in <ticks>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_players_by_team",
	['mp_team'],
	"object_list",
	['H3', 'HO', 'HR', 'H4'],
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_active_player_count_by_team",
	['mp_team'],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"deterministic_end_game",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"End game deterministically, by inserting a simulation queue event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_game_won",
	['mp_team'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Given a team index, declares the game a victory for that team and a loss for all others",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_respawn_override_timers",
	['mp_team'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Causes all players on the specified team waiting to respawn (due to timer) to respawn immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_ai_allegiance",
	['team', 'mp_team'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Causes an allegiance to be formed between an ai squad team and a multiplayer team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_allegiance",
	['mp_team-1', 'mp_team-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Create an allegiance between two multiplayer teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_started",
	[],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Used to determine if the mp game is in the active-round phase or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"give_medal",
	['short'],
	"void",
	['H3', 'HO'],
	"Awards a medal (0..58) to pad 1 due to pad 2 (if they're there)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_scripts_reset",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"On the host in a distributed game, resets the scripts (but not internal hs globals)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_ai_place",
	['ai', 'short?'],
	"void",
	['H3', 'HO'],
	"Places the given number of members of the specified squad as non-authoritative objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_ai_kill",
	['ai'],
	"void",
	['H3', 'HO'],
	"Instantly kills the specified non-authoritative encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_ai_kill_silent",
	['ai'],
	"void",
	['H3', 'HO'],
	"Instantly and silently (no animation or sound played) kills the specified non-authoritative encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_object_create",
	['object_name'],
	"void",
	['H3', 'HO'],
	"Creates a non-authoratative object from the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_object_create_clone",
	['object_name'],
	"void",
	['H3', 'HO'],
	"Creates a non-authoratative object, potentially resulting in multiple objects if it already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_object_create_anew",
	['object_name'],
	"void",
	['H3', 'HO'],
	"Creates a non-authoratative object, destroying it first if it already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_object_destroy",
	['object'],
	"void",
	['H3', 'HO'],
	"Destroys a non-authoratative object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_file_set_backend",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Override the tag file system backend",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_object_belongs_to_team",
	['object', 'mp_team'],
	"void",
	['H3', 'HO'],
	"Causes specified object to belong to the given team, so that only that team can pick it up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_weapon_belongs_to_team",
	['object', 'mp_team'],
	"void",
	['H3', 'HO'],
	"Causes specified weapon to belong to the given team, so that only that team can pick it up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_debug_goal_object_boundary_geometry",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Toggle debug geometry for multiplayer goal objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_dump_candy_monitor_state",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dumps the current candy monitor state to a file on disk",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_camera_third_person",
	['long', 'boolean'],
	"void",
	['H3', 'HO'],
	"<user_index> <third_person (yes/no)> sets user's camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_camera_third_person",
	['long'],
	"boolean",
	['H3', 'HO'],
	"<user_index> gets user's camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_play",
	['controller', 'string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Plays a saved film for given controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_play_last",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Play back last recorded saved film for given controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_manager_should_record_film_default",
	['boolean'],
	"void",
	['H3', 'HO'],
	"Toggle recording of replay in single player game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mover_set_program",
	['object', 'short'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Set the motor program of the given mover object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"floating_point_exceptions_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enables/disables floating point exceptions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_logs_snapshot",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Copy error files to the error snapshot folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_reload_force",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Rather than force a painful xsync to test xsync, allow me to fake a tag_reload",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_unload_force",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Call tag_unload",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_load_force",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Call tag_load",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bink_movie",
	['string'],
	"void",
	['H3', 'HO', 'HR'],
	"Um2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bink_movie_from_tag",
	['bink_definition'],
	"void",
	['H3', 'HO', 'HR'],
	"Um2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_mode",
	['long-1', 'long-2'],
	"void",
	['H3', 'HO'],
	"<user_index> <mode_index> sets user's camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_flying_cam_at_point",
	['long', 'cutscene_camera_point'],
	"void",
	['H3', 'HO'],
	"<user_index> <camera_point> sets a flying camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_coop_player_count",
	[],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the number of coop players active in game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_force_mode",
	['string_id'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Force your will upon the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_output_pulse",
	[],
	"void",
	['H3', 'HO', 'HR'],
	"Dump profile stats to telnet console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"find",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Prints any hs command matching the string passed in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_recycling_volume",
	['trigger_volume', 'long-1', 'long-2'],
	"void",
	['H3', 'HO', 'HR'],
	"Removes garbage in specified trigger volume to a max count over n seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_set_per_frame_publish",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on/off per frame resource publish (stress testing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_recycling_clear_history",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Clear object recycling history",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_cinematics_script",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dump the cinematic script to cinematic_dump.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"global_preferences_clear",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Clears all game preference information",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_set_storage_subdirectory",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<subdirectory> the default is the build number or 'untracked'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_set_storage_user",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<user> use the network file stored on untracked\\<user>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status_line_dump",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dumps active status_lines to system_log.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"loop_it",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Runs the expression at most once per tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"loop_clear",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Runs the expression at most once per tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status_lines_enable",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enables status_lines that were initialized with identifiers that match the input substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status_lines_disable",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disables status_lines that were initialized with identifiers that match the input substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_set_pending_playback_game_speed",
	['real'],
	"void",
	['H3', 'HO'],
	"Set the pending saved film playback speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"designer_zone_sync",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Synchronizes global objects with loaded designer zones",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_designer_zone",
	['designer_zone'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dump interesting info about a designer zone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"designer_zone_activate",
	['designer_zone'],
	"void",
	['H3', 'HO', 'HR'],
	"Activate designer zone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"designer_zone_deactivate",
	['designer_zone'],
	"void",
	['H3', 'HO', 'HR'],
	"Deactivates designer zone, deletes objects that were part of that designer zone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_always_active",
	['object', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets/unsets the object always active flag to ignore pvs changes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_is_active",
	['any', 'tag', 'not', 'resolving'],
	"boolean",
	['H3', 'HO'],
	"Returns true/false if you can create this tag with the active zones",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_set_incremental_publish",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on/off incremental resource publish (prediction)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_enable_optional_caching",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on/off optional resource prediction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_active_resources",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_persistent",
	['object', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"<object_index> <true/false> prevent this object from being garbage collected",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"display_zone_size_estimates",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Display zone size estimates hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"report_zone_size_estimates",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dump zone size estimates to design report log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_disconnect_squad",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disconnects the squad session",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_disconnect_group",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Disconnects the group session",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_clear_squad_session_parameter",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Clears a squad session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_clear_group_session_parameter",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Clears a group session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_life_cycle_pause",
	['string', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Pauses the life cycle in the specified state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_life_cycle_display_states",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Display the life cycle states",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"overlapped_display_task_descriptions",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Displays all tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"overlapped_task_inject_error",
	['string', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Inject error for tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"decorators_split",
	['long', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Duplicates decorator set <index> and moves <percentage> of the decorators into it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bandwidth_profiler_enable",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enables bandwidth profiler",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bandwidth_profiler_set_context",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets bandwidth profiler context",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"overlapped_task_pause",
	['string', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Pause tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_map_variant",
	['string'],
	"void",
	['H3', 'HO'],
	"Writes the current map variant to a file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_verify_map_variant",
	['string'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Verifies the contents of a packed map variant file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"async_set_work_delay_milliseconds",
	['long'],
	"void",
	['H3', 'HO'],
	"Set an artificial delay time for the performance of any asynchronous task work",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_with_effect",
	['looping_sound', 'object', 'real', 'string_id'],
	"void",
	['H3', 'HO', 'HR'],
	"Plays a looping sound from the specified source object (or none), with the specified scale and playback effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_set_demand_throttle_to_io",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on/off demand throttling based on io",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_flush_optional",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Flushes optional resources",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_performance_throttle",
	['string', 'long', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets a default value for a performance throttle for a given number of players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_performance_throttle",
	['string', 'long'],
	"real",
	['H3', 'HO', 'HR', 'H4'],
	"Gets the value of a performance throttle for a given number of players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Activates scenario cinematic zone (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_deactivate",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Deactivates scenario cinematic zone (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate_from_editor",
	['any', 'tag'],
	"void",
	['H3', 'HO'],
	"Activates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_deactivate_from_editor",
	['any', 'tag'],
	"void",
	['H3', 'HO'],
	"Deactivates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tiling_current",
	[],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Returns the actual tiling configuration (could have been overridden from the requested configuration)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_limit_lipsync_to_mouth_only",
	['unit', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Cinematic lipsync means you can't use all the facial bones, just the mouth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_active_zone_tags",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_enable_fast_prediction",
	['boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"Turns on/off faster prediction, in case i messed up something",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_start_first_person_custom_animation",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a unit (puts away weapon if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_playing_custom_first_person_animation",
	['unit'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Returns true if the given unit is still playing a custom animation in first person",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_stop_first_person_custom_animation",
	['unit'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Ends any custom first person animation running on the unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prepare_to_switch_to_zone_set",
	['zone_set'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Prepare for switch to zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate_for_debugging",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Activates scenario cinematic zone for debugging (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_play_random_ping",
	['unit'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Plays a random ping on the unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_fade_out_all_input",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fade out all play control over x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_fade_in_all_input",
	['real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Fade in all play control over x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_lock_gaze",
	['unit', 'point_reference', 'real'],
	"void",
	['H3', 'HO'],
	"Player turn to face point with max velocity degrees/second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_unlock_gaze",
	['unit'],
	"void",
	['H3', 'HO'],
	"Unlock player from any gaze point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_scale_all_input",
	['real-1', 'real-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Scale input to x strength over y seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_auto_core_save",
	['boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"Profiler dumps a core for each encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_bink",
	['long'],
	"bink_definition",
	['H3', 'HO', 'HR', 'H4'],
	"Retrieve the bink tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_custom_animation_speed",
	['object', 'real'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"If the object is playing a custom animation, scale it to n playback speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_at_frame_loop",
	['scenery', 'animation_graph', 'string_id', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Starts a custom animation playing on a piece of scenery at a specific frame and then loops",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_arbiter_ai_navpoint",
	['boolean'],
	"void",
	['H3', 'HR'],
	"Hides/shows the entire chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene",
	['definition', 'cortana_tag_reference_get_scene', 'long'],
	"cinematic",
	['H3', 'HO'],
	"Retrieve a cinematic tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_banhammer_force_download",
	['boolean-1', 'boolean-2'],
	"void",
	['H3', 'HO'],
	"Force banhammer file download",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"font_set_emergency",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Sets the font system into emergency mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_force_ground_fitting_on",
	['unit', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Force ground fitting on, even during custom animations or movement",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_chud_objective",
	['cutscene_title'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"terminal_is_being_read",
	[],
	"boolean",
	['H3', 'HO'],
	"Returns whether or not a terminal is currently being read",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"terminal_was_accessed",
	['object'],
	"boolean",
	['H3', 'HO'],
	"Returns whether or not the given terminal was accessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"terminal_was_completed",
	['object'],
	"boolean",
	['H3', 'HO'],
	"Returns whether or not the given terminal was read to completion",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cortana_terminal_was_accessed",
	[],
	"void",
	['H3'],
	"Hack for ace as cortana's terminal needs to callback to terminal code",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_primary_weapon",
	['unit'],
	"weapon",
	['H3', 'HO', 'HR', 'H4'],
	"Return the primary weapon of the specified unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_cortana_script",
	[],
	"void",
	['H3', 'HO'],
	"Dump the cinematic script to cinematic_dump_cortana.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_animation_graph",
	['animation', 'budget', 'reference'],
	"animation_graph",
	['H3', 'HO'],
	"Get a non resolving reference to a model animation graph budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_award_level_complete_achievements",
	[],
	"void",
	['H3', 'HO'],
	"Causes the player to successfully finish the current level and move to the next",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_looping_sound",
	['looping', 'sound', 'budget', 'reference'],
	"looping_sound",
	['H3', 'HO'],
	"Get a non resolving reference to a looping sound budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cortana_effect_kill",
	[],
	"void",
	['H3', 'HO'],
	"Kills the cortana effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_cortana_effect_cinematic",
	[],
	"void",
	['H3', 'HO'],
	"Destroy cortana effect cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate_infanty",
	['ai-1', 'ai-2'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Migrates the infantry in an encounter into a different squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_cinematic_motion_blur",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable cinematic motion blur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dont_do_avoidance",
	['ai', 'boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Set the ai to not do any vector avoidance when flying",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_clean_up",
	['long'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Unload the scenario cinematic zone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase_inactive",
	['ai', 'short'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Erase inactive actors in the given ai index, and any of those actors who become inactive within the next designated ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"stop_bink_movie",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Stops all bink movie playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits_unskippable",
	[],
	"void",
	['H3', 'HO', 'HR'],
	"Plays credits movie, no button press detection (you can still use cinematic skipping around this)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_sound",
	['sound', 'budget', 'reference'],
	"sound",
	['H3', 'HO'],
	"Get a non resolving reference to a looping sound budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_single_player_level_unlocked",
	['controller', 'short', 'boolean'],
	"void",
	['H3', 'HO', 'HR'],
	"<controller> <level index> <bool locked> set single player level locked state for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physical_memory_dump",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Dumps a record of all physical memory allocations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_validate_all_pages",
	['boolean'],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Resource validation every main_loop_body call",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dip_stats_enable",
	['boolean'],
	"void",
	['H3'],
	"<on> enable dip statistics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dip_stats_dump",
	[],
	"void",
	['H3'],
	"Save dip statistics to file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dip_stats_sort_toggle",
	[],
	"void",
	['H3'],
	"Toggle dip statistics sort mode (inclusive dip, exclusive dip)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sys_info",
	[],
	"void",
	['H3'],
	"Dump cpu, gpu and system information",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_ace_build",
	[],
	"boolean",
	['H3', 'HO'],
	"Returns if this is an ace enabled build",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ssao_enable",
	['short'],
	"void",
	['H3'],
	"Turn on/off ssao",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ssao_radius",
	['real'],
	"void",
	['H3'],
	"Set ssao radius (0.75 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ssao_intensity",
	['real'],
	"void",
	['H3'],
	"Set ssao intensity (1.0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ssao_sampleZThreshold",
	['real'],
	"void",
	['H3'],
	"Set ssao sample z threshold (0.5 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"color_grading_enable",
	['boolean'],
	"void",
	['H3'],
	"Turn on/off color grading",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"lightshafts_enable",
	['boolean'],
	"void",
	['H3'],
	"Turn on/off lightshafts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"TestPrintReal",
	['string', 'real'],
	"void",
	['H3', 'HO'],
	"Prints the specified boolean with the format '<string> = '<real>' to the shell",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_profiler_enable",
	[],
	"void",
	['H3', 'HO', 'HR', 'H4'],
	"Turns on the simulation/bandwidth profiler and configures it for high level use (similar to the old screen-text-based bandwidth profiler)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_profiler_detail_level",
	['long'],
	"long",
	['H3', 'HO', 'HR', 'H4'],
	"Set detail level of simulation profiler capture on the host (affects perf & saved film size).  0-9 are valid, else clamped",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_profiler_enable_downstream_processing",
	['boolean'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Enable/disable the processing of downstream data by the simulation profiler database (default is disabled, so if you want to examine downstream, you need to turn this on at display time.  does not affect recording!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_wake_script",
	['string'],
	"void",
	['H3', 'HO'],
	"On the host in a distributed game, sends a message to clients to wake a dormant script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_skin",
	['controller', 'short-1', 'short-2'],
	"void",
	['H3'],
	"Set skins for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_on",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Turns on the hud camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_off",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Turns off the hud camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_set_position",
	['long', 'real-1', 'real-2', 'real-3'],
	"void",
	['HO', 'HR', 'H4'],
	"Sets the render texture camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_set_target",
	['long', 'real-1', 'real-2', 'real-3'],
	"void",
	['HO', 'HR', 'H4'],
	"Sets the render texture camera target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_attach_to_object",
	['long', 'object', 'string_id'],
	"void",
	['HO', 'HR', 'H4'],
	"Attaches the render texture camera to a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_target_object",
	['long', 'object', 'string_id'],
	"void",
	['HO', 'HR', 'H4'],
	"Targets the render texture camera to view a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_structure",
	['long', 'boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Toggle rendering of structure in the hud camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_highlight_object",
	['long', 'object', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['HO', 'HR', 'H4'],
	"Highlights an object in the given color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_clear_objects",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Clears all objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_spin_around",
	['long', 'object'],
	"void",
	['HO', 'HR', 'H4'],
	"Makes the hud camera spin around the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_from_player_view",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Aligns the hud camera to the player camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_window",
	['long', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['HO', 'HR', 'H4'],
	"Sets the render window of the hud camera (0...1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_unit_list",
	['vehicle', 'unit_seat_mapping', 'object_list'],
	"boolean",
	['HO', 'HR'],
	"Tests whether the named seat has an object in the object list (use  to test all seats for any unit in the list)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_unit",
	['vehicle', 'unit_seat_mapping', 'unit'],
	"boolean",
	['HO', 'HR'],
	"Tests whether the named seat has a specified unit in it (use  to test all seats for this unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat",
	['vehicle', 'unit_seat_mapping'],
	"boolean",
	['HO', 'HR'],
	"Tests whether the named seat has any unit in it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_stats_dump",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Dump usage information for the animations in the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_dialogue_enable",
	['boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Turn player combat dialogue on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fast_and_dumb",
	['boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Turn on/off perception performance hacks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave",
	['long', 'ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Places the specified wave name into squads defined as part of the given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave",
	['long', 'ai', 'short?'],
	"void",
	['HO', 'HR'],
	"Places the given number of squads from the specified wave name into squads defined as part of the given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave_in_limbo",
	['long', 'ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Places the specified wave name into squads defined as part of the given squad group in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave_in_limbo",
	['long', 'ai', 'short?'],
	"void",
	['HO', 'HR'],
	"Places the given number of squads from the specified wave name into squads defined as part of the given squad group in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_exit_limbo",
	['ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Remove the give ai from limbo, generally induced by spawning in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_group_get_squad",
	['ai', 'short'],
	"ai",
	['HO', 'HR', 'H4'],
	"Returns the nth squad from a given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_group_get_squad_count",
	['ai'],
	"short",
	['HO', 'HR', 'H4'],
	"Returns the number of squads in a given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_index_from_spawn_formation",
	['ai', 'string_id'],
	"ai",
	['HO', 'HR', 'H4'],
	"Create an ai index from the given squad and spawn formation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_engineer_explode",
	['ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Register an explosion stimulus with all specified actors, causing engineers to explode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_grunt_kamikaze",
	['ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Register a kamikaze stimulus with all specified actors, causing grunts to go wild",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_starting_location_if_outside_bsp",
	['ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Please use ai_teleport_to_spawn_point_if_outside_bsp instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_spawn_point_if_outside_bsp",
	['ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Teleports a group of actors to the spawn points of their current squad(s) if they are currently outside the world",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_rotate_scenario",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"boolean",
	['HO'],
	"Rotates ai points and normals (e.g. firing points, spawn points) around the given axis (x,y,z) by the given rotation angle (degrees)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_reset_objective",
	['ai'],
	"void",
	['HO', 'HR', 'H4'],
	"Completely reset the given objective, task or task hierarchy (if passed a gate task)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_patrol_objective_disallow",
	['ai', 'boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Disallow the selection of an objective by any squad patrol",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_starting_location",
	['ai'],
	"vehicle",
	['HO', 'HR', 'H4'],
	"Please start using ai_vehicle_get_from_spawn_point instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_spawn_point",
	['ai'],
	"vehicle",
	['HO', 'HR', 'H4'],
	"Returns the vehicle that was spawned at the given spawn point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_ai_navpoint",
	['ai', 'string_id', 'boolean', 'real'],
	"void",
	['HO'],
	"Turns on/off the navpoint and display text of the specified ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_primary_skull",
	['object', 'primary', 'skull'],
	"void",
	['HO'],
	"Award a primary skull to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_secondary_skull",
	['object', 'secondary', 'skull'],
	"void",
	['HO'],
	"Award a secondary skull to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_medal",
	['object', 'short'],
	"void",
	['HO'],
	"Awards a medal (0..58) to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_survival_enabled",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"True if survival mode is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards_point",
	['point_reference', 'real'],
	"void",
	['HO', 'HR', 'H4'],
	"Move to within the given radius of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_move_towards_point",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HO'],
	"Move to within the given radius of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_pda_active",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has used primary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_left",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad left button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_right",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad right button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_up",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad up button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_down",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad down button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_x",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the x button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_y",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the y button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_left_shoulder",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the left shoulder button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_right_shoulder",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the right shoulder button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_waypoint_activate",
	[],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the button action to activate the waypoint since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_reset",
	['unit'],
	"void",
	['HO'],
	"Resets the player action test state so that all tests will return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_pda_active",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has used primary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_grenade_trigger",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has used grenade trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vision_trigger",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has used vision trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_weapons",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has hit the rotate-weapon button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_grenades",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has hit the rotate-grenades button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_melee",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has hit the melee button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_action",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has hit the action key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_accept",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has hit accept since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_cancel",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has hit cancel key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_up",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has looked up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_down",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has looked down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_left",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has looked left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_right",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has looked right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_all_directions",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_all_directions",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_cinematic_skip",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the cinematic skip button (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_start",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the start button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_back",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the back button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_left",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad left button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_right",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad right button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_up",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad up button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_down",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the dpad down button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_x",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the x button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_y",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the y button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_left_shoulder",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the left shoulder button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_right_shoulder",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the right shoulder button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_waypoint_activate",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the button action to activate the waypoint since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_retrain",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if any player has pressed the retrain button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_survival",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Debug map launching: sets the next map to run in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lights_destroy_shot",
	[],
	"void",
	['HO', 'HR'],
	"Destroys any non-persistent existing cinematic lights for the current shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_update_dynamic_light_direction",
	['string', 'long', 'real-1', 'real-2', 'real-3'],
	"void",
	['HO', 'HR'],
	"Updates the direction of a loaded cinematic dynamic light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_update_sh_light",
	['string', 'long', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['HO'],
	"Updates the direction, intensity, and color of a loaded cinematic sh light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_object",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HO'],
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_animation",
	['long-1', 'long-2', 'long-3', 'string_id'],
	"void",
	['HO'],
	"Animate a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_object",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HO'],
	"Destroy a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_object",
	['long-1', 'long-2', 'long-3', 'string_id', 'boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_cinematic_object",
	['long-1', 'long-2', 'long-3', 'string_id', 'boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_object_no_animation",
	['long-1', 'long-2', 'long-3', 'boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_cinematic_object_no_animation",
	['long-1', 'long-2', 'long-3', 'boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_level_advance",
	['string_id'],
	"void",
	['HO'],
	"Transition game to another level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_player",
	['unit', 'string_id'],
	"void",
	['HO'],
	"Award named achievement to player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_all_players",
	['string_id'],
	"void",
	['HO', 'HR', 'H4'],
	"Award named achievement to all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_reset",
	['controller'],
	"void",
	['HO', 'HR', 'H4'],
	"Resets all player training data",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_compass",
	['boolean'],
	"void",
	['HO'],
	"Hides/shows the compass chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_display_pda_minimap_message",
	['string_id', 'cutscene_flag'],
	"void",
	['HO'],
	"Show pda message in chud that directs to the minimap screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_display_pda_objectives_message",
	['string_id', 'long'],
	"void",
	['HO'],
	"Show pda message in chud that directs to the objectives screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_display_pda_communications_message",
	['string_id', 'long'],
	"void",
	['HO'],
	"Show pda message in chud that directs to the fourth wall screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_clear_pda_message",
	[],
	"void",
	['HO'],
	"Clear pda message in chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_object_navpoint",
	['object', 'string_id', 'boolean', 'real'],
	"void",
	['HO'],
	"Turns on/off the navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_bonus_round_show_timer",
	['boolean'],
	"void",
	['HO', 'HR'],
	"Show the bonus timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_bonus_round_start_timer",
	['boolean'],
	"void",
	['HO', 'HR'],
	"Tick the bonus timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_bonus_round_set_timer",
	['real'],
	"void",
	['HO', 'HR'],
	"Set the bonus timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_translation_for_player",
	['unit', 'real-1', 'real-2', 'real-3'],
	"void",
	['HO'],
	"<x> <y> <z>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rotation_for_player",
	['unit', 'real-1', 'real-2', 'real-3'],
	"void",
	['HO'],
	"<yaw> <pitch> <roll>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rumble_for_player",
	['unit', 'real-1', 'real-2'],
	"void",
	['HO'],
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_start_for_player",
	['unit', 'real-1', 'real-2'],
	"void",
	['HO'],
	"<max_intensity> <attack time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_stop_for_player",
	['unit', 'real'],
	"void",
	['HO'],
	"<decay>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"atmosphere_fog_override_fade",
	['long', 'real-1', 'real-2'],
	"void",
	['HO'],
	"Override the atmosphere fog setting to <index> by <percentage> in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motion_blur_enabled",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Check if motion blur is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_player_model_choice",
	['controller', 'player', 'character', 'type'],
	"void",
	['HO'],
	"Set player model choice for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Show secondary campaign objective n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Mark secondary campaign objective n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_unavailable",
	['long'],
	"void",
	['HO', 'HR', 'H4'],
	"Mark secondary campaign objective n as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_target",
	['long', 'object'],
	"void",
	['HO'],
	"<user_index> <object_index> sets the current camera's target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"output_window_add_category",
	['string'],
	"void",
	['HO', 'HR'],
	"Add an event category to be watched in the output window",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"output_window_remove_category",
	['string'],
	"void",
	['HO', 'HR'],
	"Remove an event category from being watched in the output window",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"output_window_list_categories",
	[],
	"void",
	['HO', 'HR'],
	"List all the event categories being watched in the output window",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_control_fade_out_all_input",
	['unit', 'real'],
	"void",
	['HO'],
	"Fade out all play control for player over x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_control_fade_in_all_input",
	['unit', 'real'],
	"void",
	['HO'],
	"Fade in all play control for player over x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_cinematic_title",
	['unit', 'cutscene_title'],
	"void",
	['HO'],
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_check_for_location_achievement",
	['long', 'string_id'],
	"void",
	['HO'],
	"Check if player is at location achievement and looking at it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_survival_cleanup",
	['ai', 'boolean-1', 'boolean-2'],
	"void",
	['HO', 'HR', 'H4'],
	"Activate cure isolation death for the given ai, and optionally delete inactive actors in that group too (ai, on/off, kill inactive)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_intro_crawl_unskippable",
	[],
	"void",
	['HO'],
	"Plays the intro crawl movie, no button press detection (you can still use cinematic skipping around this)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_debug_mode",
	['boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Puts all cinematic playback into debug mode (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_get_object",
	['long-1', 'long-2', 'long-3'],
	"object",
	['HO'],
	"Get an object used in a cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dummy_function",
	[],
	"void",
	['HO', 'HR'],
	"Function that does nothing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_integer_get",
	['string_id'],
	"long",
	['HO'],
	"Get a game progression integer variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_integer_set",
	['string_id', 'long'],
	"void",
	['HO'],
	"Set a game progression integer variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_notify_beacon_found",
	['string_id'],
	"void",
	['HO'],
	"Notify game of which beacon was activated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_notify_audio_log_accessed",
	['short'],
	"void",
	['HO'],
	"Notify game of which audio log was accessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_boolean_get",
	['string_id'],
	"boolean",
	['HO'],
	"Get a game progression boolean variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_boolean_set",
	['string_id', 'boolean'],
	"void",
	['HO'],
	"Set a game progression boolean variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_dump",
	['string'],
	"void",
	['HO'],
	"Dumps all game progression variables to a file with specified file name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_dump_debug",
	['string'],
	"void",
	['HO'],
	"Dumps all game progression variables to a file with specified file name - from both game options and network sessions parameters",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_startup",
	['string'],
	"void",
	['HO'],
	"Sets the file from which to load game progression data on startup",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_reset",
	[],
	"void",
	['HO'],
	"Resets all the state of the game progression system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gp_commit_options",
	[],
	"void",
	['HO'],
	"Debugging command that commits game options to game options so they will persist after a map reset",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_screen_effect",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['HO'],
	"Play the associated area screen effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_screen_effect",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['HO'],
	"Stop the associated area screen effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_level_prepare",
	['string_id'],
	"void",
	['HO'],
	"Prepare to transition game to another level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prepare_game_level",
	['string_id'],
	"void",
	['HO'],
	"Prepare to transition game to another level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_activate_beacon",
	['team', 'cutscene_flag', 'string_id', 'boolean'],
	"void",
	['HO'],
	"Activate a pda beacon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_activate_beacon",
	['team', 'cutscene_flag', 'boolean'],
	"void",
	['HO'],
	"Activate a pda beacon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_activate_marker",
	['team', 'object_name', 'string_id', 'boolean'],
	"void",
	['HO'],
	"Activate a pda beacon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_activate_marker_named",
	['team', 'object_name', 'string_id-1', 'boolean', 'string_id-2'],
	"void",
	['HO'],
	"Activate a named pda beacon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_beacon_is_selected",
	['unit', 'cutscene_flag'],
	"boolean",
	['HO'],
	"Activate a pda beacon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_inside_active_beacon",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if the player is in his active beacon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start_with_network_session",
	['long-1', 'long-2', 'string'],
	"void",
	['HO'],
	"<campaign id> <map id> <scenario> debug map launching: starts a game on the specified map with campaign_id and map_id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"levels_add_campaign_map_with_id",
	['long', 'string'],
	"void",
	['HO', 'HR', 'H4'],
	"<map id> <scenario> add scenario to levels array",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"levels_add_campaign_map",
	['string'],
	"void",
	['HO', 'HR', 'H4'],
	"<scenario> add a single scenario to levels array",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_editor",
	['sound', 'object', 'real'],
	"void",
	['HO', 'HR'],
	"Plays an impulse sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_effect_editor",
	['sound', 'object', 'real', 'string_id'],
	"void",
	['HO', 'HR'],
	"Plays an impulse sound from the specified source object (or none), with the specified scale and effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_3d_editor",
	['sound', 'real-1', 'real-2'],
	"void",
	['HO', 'HR', 'H4'],
	"<sound> <azimuth> <scale> at the sound's minimum distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_editor",
	['looping_sound', 'object', 'real'],
	"void",
	['HO', 'HR'],
	"Plays a looping sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_log_start",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Starts the sound channel debugger log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_log_start_named",
	['string'],
	"void",
	['HO', 'HR', 'H4'],
	"Starts the sound channel debugger log with the specified file name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_log_stop",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Stops the sound channel debugger log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_set_user_input_constraints",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['HO'],
	"Set the user input constraints for a cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"skull_primary_enable",
	['primary', 'skull', 'boolean'],
	"void",
	['HO'],
	"Enable/disable the given primary skull",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"skull_secondary_enable",
	['secondary', 'skull', 'boolean'],
	"void",
	['HO'],
	"Enable/disable the given secondary skull",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_skull_primary_enabled",
	['primary', 'skull'],
	"boolean",
	['HO'],
	"Enable/disable the given primary skull",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_skull_secondary_enabled",
	['secondary', 'skull'],
	"boolean",
	['HO'],
	"Enable/disable the given secondary skull",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_popup_message_index",
	['controller', 'long'],
	"void",
	['HO'],
	"<controller> <message index> set the highest popup message that the player has accepted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_vidmaster_seen",
	['controller', 'boolean'],
	"void",
	['HO'],
	"<controller> <vidmaster_seen> set whether the player has accepted the vidmaster popup",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_enter_lobby",
	['long'],
	"void",
	['HO'],
	"<lobby index> index 0-4",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_respawn_dead_players",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Respawns all dead players even if no lives are left",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_lives_get",
	[],
	"long",
	['HO'],
	"Get the number of lives left in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_lives_set",
	['long'],
	"void",
	['HO'],
	"Set the number of lives left in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_get",
	[],
	"short",
	['HO', 'HR', 'H4'],
	"Get the current set index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_round_get",
	[],
	"short",
	['HO', 'HR', 'H4'],
	"Get the current round index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_wave_get",
	[],
	"short",
	['HO', 'HR', 'H4'],
	"Get the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_multiplier_get",
	[],
	"real",
	['HO', 'HR', 'H4'],
	"Get the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_multiplier_set",
	['real'],
	"void",
	['HO', 'HR', 'H4'],
	"Set the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_bonus_multiplier_get",
	[],
	"real",
	['HO', 'HR', 'H4'],
	"Get the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_bonus_multiplier_set",
	['real'],
	"void",
	['HO', 'HR', 'H4'],
	"Set the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_wave_squad",
	[],
	"long",
	['HO', 'HR', 'H4'],
	"Returns the name of the squad template for the current wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_initial",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Returns true if the current wave is the first of the round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_boss",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Returns true if the current wave is the final of the round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_bonus",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Returns true if the current wave is the bonus round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_last_in_set",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Returns true if the currect wave is the last wave before the end of the set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_uses_dropship",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Get the survival mode current wave uses a dropship property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_flood",
	[],
	"boolean",
	['HO'],
	"Returns true if any squad within the current wave is flood or flood-adjacent",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_current_wave_time_limit",
	[],
	"short",
	['HO', 'HR', 'H4'],
	"Get the survival mode duration property for the current wave from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_scenario_extras_enable",
	[],
	"boolean",
	['HO', 'HR', 'H4'],
	"Get the survival mode scenario hazards enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_scenario_boons_enable",
	[],
	"boolean",
	['HO'],
	"Get the survival mode scenario boons enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_debug_bonus_round",
	[],
	"boolean",
	['HO'],
	"Returns whether debug bonus round behavior is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_debug_bonus_round",
	['boolean'],
	"void",
	['HO'],
	"Sets whether debug bonus round behavior is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_is_vanilla_variant",
	[],
	"boolean",
	['HO'],
	"Returns whether the current survival game variant has vanilla (legacy) round properties",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_resurrection_squad_index",
	['ai'],
	"void",
	['HO'],
	"Sets the squad which units are added to when they become infected",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channel_fadeout_time",
	['real'],
	"void",
	['HO'],
	"Set fadeout time for sound channel debugger",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_rounds_per_set",
	['short'],
	"void",
	['HO'],
	"Set the number of rounds in each set for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_waves_per_round",
	['short'],
	"void",
	['HO'],
	"Set the number of waves in each round for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_model_marker_name_filter",
	['string'],
	"void",
	['HO', 'HR', 'H4'],
	"Sets a substring to search for when rendering model markers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_event_new",
	['string_id'],
	"void",
	['HO'],
	"Fires a start new set game event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_begin_new_set",
	[],
	"void",
	['HO'],
	"Starts a new round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_begin_new_wave",
	[],
	"void",
	['HO'],
	"Starts a new round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_award_hero_medal",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Lets the engine award the hero medal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_get_player_score",
	['unit'],
	"long",
	['HO'],
	"Calculates the score for an individual player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_add_footprint",
	['unit', 'long'],
	"void",
	['HO'],
	"Adds a footprint marker at the <player>'s current location for <ticks>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_is_active",
	['controller'],
	"boolean",
	['HO'],
	"Returns true if that local player has the pda open",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_is_active_deterministic",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if that player unit has the pda open",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_pda_enabled",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables pda activation for specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_nav_enabled",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables nav activation for specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_fourth_wall_enabled",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables fourth wall activation for specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_objectives_enabled",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables objectives activation for specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_force_pda",
	['unit'],
	"void",
	['HO'],
	"Enables pda activation for specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_close_pda",
	['unit'],
	"void",
	['HO'],
	"Enables pda activation for specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_set_footprint_dead_zone",
	['real'],
	"void",
	['HO'],
	"Sets the dead zone for the pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"collision_debug_lightmaps_print",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Prints the collision_debug_lightmaps text to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_coop_campaign_save",
	['boolean'],
	"void",
	['HO'],
	"Enables/disables debugging of co-op campaign save",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_play_arg_sound",
	['unit', 'string_id'],
	"void",
	['HO'],
	"Plays a arg sound file from ui shared globals by name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_stop_arg_sound",
	['unit'],
	"void",
	['HO'],
	"Stops a arg sound file from ui shared globals by name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_look_training_hack",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables or disables the look training hack.  this allows players to touch devices when in a vehicle, but not exit the vehicle or do anything else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_set_active_pda_definition",
	['string_id'],
	"void",
	['HO'],
	"Sets the active pda definition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_arg_has_been_touched_by_unit",
	['device', 'unit', 'long'],
	"boolean",
	['HO'],
	"Returns true if the unit has touched the device in the past x ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_hide_all_screens",
	['boolean'],
	"void",
	['HO'],
	"Hide all ui screens",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_lightmap_inspect",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Show the lightmap status",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables/disables input in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_only_b",
	['unit'],
	"void",
	['HO'],
	"Enables input for only the b button in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_only_dpad",
	['unit'],
	"void",
	['HO'],
	"Enables input for only the dpad buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_only_movement",
	['unit'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_a",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_dismiss",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_x",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_y",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_dpad",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_input_enable_analog_sticks",
	['unit', 'boolean'],
	"void",
	['HO'],
	"Enables input for only the movement buttons in the player's pda",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_for_first_person_cinematic",
	['real', 'long'],
	"void",
	['HO'],
	"Fades all chud elements except for those marked as 'motion sensor'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_vision_mode_render_default",
	['object', 'boolean'],
	"void",
	['HO'],
	"Flag an object so that it renders in the everything else color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_navpoint",
	['unit', 'cutscene_flag', 'real', 'boolean'],
	"void",
	['HO'],
	"Activate a scripted navpoint for a specific player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_message",
	['unit'],
	"void",
	['HO'],
	"Locks the accept button until the user presses accept",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_cancel_message",
	['unit'],
	"void",
	['HO'],
	"Locks the cancel button until the user presses cancel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_y_button",
	['unit'],
	"void",
	['HO'],
	"Locks the accept button until the user presses accept",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_retrain_message",
	['unit'],
	"void",
	['HO'],
	"Locks the retrain button until the user presses it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_kills_by_type",
	['unit', 'long-1', 'long-2'],
	"long",
	['HO'],
	"Retrieves the number of kills a specific player has gotten by metagame type and class, ask an engineer for the mapping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_flashlight_on",
	['unit'],
	"boolean",
	['HO'],
	"Returns true if the unit has a flashlight on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"clear_command_buffer_cache_from_script",
	['boolean'],
	"void",
	['HO'],
	"Clear the command buffer cache",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_resume",
	['looping_sound', 'object', 'real'],
	"void",
	['HO'],
	"Plays a looping sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_bonus_round_set_target_score",
	['long'],
	"void",
	['HO'],
	"Set the bonus round score target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pda_beacon_is_any_selected",
	['object_list', 'cutscene_flag'],
	"boolean",
	['HO'],
	"Returns true if any player has the beacon active",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_ace_playlist_session",
	[],
	"boolean",
	['HO'],
	"Returns if the current map is being played as part of a playlist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_mouse_controller",
	['controller'],
	"void",
	['HO'],
	"Set controller index of mouse user",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_time_limit",
	[],
	"long",
	['HO', 'HR', 'H4'],
	"Get the survival mode time limit from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_shared_team_life_count",
	[],
	"long",
	['HO', 'HR', 'H4'],
	"Get the survival mode spartan life count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_set_count",
	[],
	"long",
	['HO', 'HR', 'H4'],
	"Get the survival mode set count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_max_lives",
	[],
	"long",
	['HO', 'HR', 'H4'],
	"Get the survival mode max lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_end_set",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Ends a set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_end_wave",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Ends a wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_meets_set_start_requirements",
	[],
	"boolean",
	['HO', 'HR'],
	"Determines whether the requirements to commence a set are met",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_pregame",
	['boolean'],
	"void",
	['HO', 'HR'],
	"Sets pregame flag for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_is_pregame",
	[],
	"boolean",
	['HO', 'HR'],
	"Gets pregame flag for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph",
	['string'],
	"void",
	['HO', 'HR', 'H4'],
	"Toggle graphing of some string quantity (ask a coder to graph the stuff and give you the strings)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_reset",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Turn off all graphs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_enable_list",
	['boolean'],
	"void",
	['HO', 'HR', 'H4'],
	"Start tracking available graphs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_filter_list",
	['string'],
	"void",
	['HO', 'HR', 'H4'],
	"Set a substring filter for available graph tracking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_list",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Display the current set of (filtered) available graphs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_hide",
	[],
	"void",
	['HO', 'HR', 'H4'],
	"Hide all graphs temporarily (without losing the active set or disabling the graphing behind the scenes).  just to see past them",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"begin_count",
	['expression(s)'],
	"passthrough",
	['HR'],
	"Evaluates the specified number of expressions in a sequence in random order and returns the last value evaluated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"begin_random_count",
	['expression(s)'],
	"passthrough",
	['HR'],
	"Evaluates the specified number of expressions in a sequence in random order and returns the last value evaluated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"%",
	['number-1', 'number-2'],
	"real",
	['HR'],
	"Returns the remainder of the division of two numbers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_until_game_ticks",
	['boolean', 'short?'],
	"boolean",
	['HR'],
	"Pauses execution of this script until the specified condition is true, checking once per second unless a different number of ticks is specified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_sleep",
	['short', 'script?'],
	"void",
	['HR'],
	"Cinematic only sleep script call which ignores the 1 frame special case for non 30hz builds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"branch",
	['condition', 'script'],
	"void",
	['HR', 'H4'],
	"Stops executing current script when condition met and starts the script indicated in the parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle",
	['object'],
	"vehicle",
	['HR', 'H4'],
	"Converts an object to a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon",
	['object'],
	"weapon",
	['HR'],
	"Converts an object to a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device",
	['object'],
	"device",
	['HR', 'H4'],
	"Converts an object to a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery",
	['object'],
	"scenery",
	['HR', 'H4'],
	"Converts an object to a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_scenery",
	['object'],
	"effect_scenery",
	['HR', 'H4'],
	"Converts an object to a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_script_thread",
	['string_id', 'boolean'],
	"void",
	['HR', 'H4'],
	"Verbose threads spew to log about script and function calls",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_started",
	['string_id'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the continuous, dormant or startup script was started",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_finished",
	['string_id'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the continuous, dormant or startup script was finished",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players",
	[],
	"object_list",
	['HR', 'H4'],
	"Returns a list of the living player units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_human",
	[],
	"object_list",
	['HR', 'H4'],
	"Returns a list of the living spartan player units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_elite",
	[],
	"object_list",
	['HR', 'H4'],
	"Returns a list of the living elite player units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get",
	['long'],
	"unit",
	['HR', 'H4'],
	"Get a player unit by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_in_game_get",
	['long'],
	"player",
	['HR', 'H4'],
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"human_player_in_game_get",
	['long'],
	"player",
	['HR', 'H4'],
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"elite_player_in_game_get",
	['long'],
	"player",
	['HR', 'H4'],
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_is_in_game",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the player is currently in the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"editor_mode",
	[],
	"boolean",
	['HR', 'H4'],
	"Return if we are currently in the editor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_return_objects_by_campaign_type",
	['trigger_volume', 'long'],
	"object_list",
	['HR', 'H4'],
	"Returns list of objects of the specified campaign metagame type that is in the volume or (max 128)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_random",
	['effect', 'point_reference', '[real', 'real]'],
	"void",
	['HR', 'H4'],
	"Starts the specified effect at one of the points in the given a point set, with a given yaw/pitch perturbation (in that order)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_at_point_set_point",
	['effect', 'point_reference', 'long'],
	"void",
	['HR', 'H4'],
	"Starts the specified effect at one of the points in the given a point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_object_marker_loop",
	['effect', 'object', 'string_id'],
	"void",
	['HR', 'H4'],
	"Starts the specified effect on the specified object at the specified marker.  effect loops",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_stop_object_marker",
	['effect', 'object', 'string_id'],
	"void",
	['HR', 'H4'],
	"Stops a running effect that's on a specified object and marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_variant",
	['object_name', 'string_id'],
	"void",
	['HR', 'H4'],
	"Creates an object from the scenario with a given variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_allegiance",
	['object', 'team'],
	"void",
	['HR', 'H4'],
	"Sets what campaign team the object belongs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_cinematic_function_variable",
	['object', 'string_id', 'real-1', 'real-2'],
	"void",
	['HR'],
	"Sets funciton variable for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_cinematic_function_variable",
	['object', 'string_id'],
	"void",
	['HR'],
	"Clears one funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_all_cinematic_function_variables",
	['object'],
	"void",
	['HR'],
	"Clears all funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_at_rest",
	['object'],
	"boolean",
	['HR', 'H4'],
	"Returns whether or not an object's physics is at rest",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_bsp",
	['object'],
	"short",
	['HR', 'H4'],
	"Returns the bsp index that the object is in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_as_fireteam_target",
	['object', 'boolean'],
	"void",
	['HR', 'H4'],
	"Sets the object as something that the fireteam selection process is interested in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_is_reserved",
	['object'],
	"boolean",
	['HR', 'H4'],
	"Checks whether a given object has been reserved by a fireteam",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_enable_damage_section",
	['object', 'string_id', 'real'],
	"void",
	['HR', 'H4'],
	"Enables the specified damage section on the specified object with the specified initial vitality(mostly for debugging purposes)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_disable_damage_section",
	['object', 'string_id'],
	"void",
	['HR', 'H4'],
	"Disables the specified damage section on the specified object (mostly for debugging purposes)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cannot_die_except_kill_volumes",
	['object', 'boolean'],
	"void",
	['HR', 'H4'],
	"Set whether the object can die from damage or not (as opposed to by scripting), except for kill volumes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_ignores_emp",
	['object', 'boolean'],
	"void",
	['HR', 'H4'],
	"Sets whether the object will by immune to emp damage side effects (ie: vehicle disabling)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_recent_body_damage",
	['object'],
	"real",
	['HR', 'H4'],
	"Get object recent body damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_recent_shield_damage",
	['object'],
	"real",
	['HR', 'H4'],
	"Get object recent shield damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_immune_to_friendly_damage",
	['object_list', 'boolean'],
	"void",
	['HR', 'H4'],
	"Controls whether an object takes damage from friendly objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_model_state_property",
	['object', 'long', 'boolean'],
	"void",
	['HR', 'H4'],
	"Sets the desired region (use  for all regions) to the model state with the given name, e.g. (object_set_region_state marine head destroyed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_point",
	['object_list', 'point_reference'],
	"real",
	['HR', 'H4'],
	"Returns minimum distance from any of the specified objects to the specified flag. (returns -1 if there are no objects, or no flag, to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_debug_stop",
	[],
	"void",
	['HR', 'H4'],
	"Stops the havok debug capture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_cheap_particles",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Toggles displaying the cheap particle buffer in the corner of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_rain_occlusion",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Toggles displaying the rain occlusion in the corner of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_rain_fog",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Toggles rendering rain fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_rain_toggle",
	[],
	"void",
	['HR', 'H4'],
	"Toggles rain debug modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_animate",
	['string_id', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Turns on the named weather to a specified amount in the given seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_animate_force",
	['string_id', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Turns on the named weather to a specified amount in the given seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_wrinkle_weights_a",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['HR', 'H4'],
	"Manually set wrinkle weights for mask a",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_wrinkle_weights_b",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['HR', 'H4'],
	"Manually set wrinkle weights for mask b",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_wrinkle_weights_from_console",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Toggles whether debug wrinkle weights come from animation data or console commands",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_emp_stunned",
	['unit'],
	"boolean",
	['HR', 'H4'],
	"This will return whether the unit is stunned by emp damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_mandibles_hidden",
	['unit'],
	"boolean",
	['HR'],
	"Returns true if the given unit needs a mandible replacement",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_set_file_name",
	['string'],
	"void",
	['HR', 'H4'],
	"Sets the file name used for the animation capture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_set_origin_object_name",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Sets the name of the object that will be used as the capture origin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_start_recording",
	[],
	"void",
	['HR', 'H4'],
	"Starts capturing animation on the object currently possessed by the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_stop_recording",
	[],
	"void",
	['HR', 'H4'],
	"Stops capturing animation on the object currently possessed by the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sync_action_create",
	['unit', 'string_id'],
	"boolean",
	['HR', 'H4'],
	"This will spawn all actors necessary to play a sync action and play it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_running_sync_action",
	['object', 'string_id'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the given object is running the named sync action",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle_immediate",
	['unit', 'vehicle', 'string_id'],
	"void",
	['HR'],
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_in_vehicle_type",
	['unit', 'long'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the unit is in a vehicle that matches the specified vehicle type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_vehicle",
	['unit'],
	"vehicle",
	['HR', 'H4'],
	"Returns the parent vehicle if the given unit is seated in one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_set_player_interaction",
	['vehicle', 'unit_seat_mapping', 'boolean-1', 'boolean-2'],
	"void",
	['HR', 'H4'],
	"Allows players/units to enter/exit given vehicle seat. arguments <vehicle> <seat> <player_can_enter> <unit_can_exit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_set_unit_interaction",
	['vehicle', 'unit_seat_mapping', 'boolean-1', 'boolean-2'],
	"void",
	['HR', 'H4'],
	"Allows players/units to enter/exit given vehicle seat. arguments <vehicle> <seat> <player_can_enter> <unit_can_exit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_test_seat",
	['unit', 'unit_seat_mapping'],
	"boolean",
	['HR', 'H4'],
	"Tests whether the named seat has any unit in it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_primary_barrel_firing",
	['weapon', 'boolean'],
	"void",
	['HR', 'H4'],
	"Forcefully fire a weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_never_appears_locked",
	['device', 'boolean'],
	"void",
	['HR'],
	"Changes a machine's never_appears_locked flag, but only if paul is a bertone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position_transition_time",
	['device', 'real'],
	"void",
	['HR', 'H4'],
	"Immediately sets the power of a named device to the given value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage_by_player",
	['player', 'boolean'],
	"void",
	['HR', 'H4'],
	"Gives a specific player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_safe",
	['any_tag'],
	"void",
	['HR', 'H4'],
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"update_dropped_tag_permutation",
	['string-1', 'string-2'],
	"void",
	['HR', 'H4'],
	"Updates the permutation for a previously dropped tag. permutations are specified as a comma-delimited string of region=permutation pairs (e.g. region1=permutation1,region2=permutation2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_updating_enable",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable updating of dialogue tags at runtime, based on stimuli",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_actor_dialogue_enable",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Turn combat dialogue on/off for a particular ai type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_actor_dialogue_effect_enable",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Turn combat dialogue effects on/off for a particular ai type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lod_full_detail_actors",
	['short'],
	"void",
	['HR', 'H4'],
	"Change the number of full detail ai characters we are allowed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lod_full_detail_actors",
	[],
	"void",
	['HR', 'H4'],
	"Display the number of full detail ai characters we are allowed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_full_lod",
	['ai'],
	"void",
	['HR'],
	"Force the given ai to full detail lod",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_low_lod",
	['ai'],
	"void",
	['HR'],
	"Force the given ai to low detail lod",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_clear_lod",
	['ai'],
	"void",
	['HR'],
	"Reset the given ai's lod overrides",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_debug_dump_behavior_tree",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Debug, dont use!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_in_limbo",
	['ai', 'short?'],
	"void",
	['HR', 'H4'],
	"Places the given number of members of the specified squad in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_clump",
	['ai', 'short'],
	"void",
	['HR', 'H4'],
	"Force the given ai into a specific clump",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_designer_clump_perception_range",
	['real'],
	"void",
	['HR', 'H4'],
	"Override the maximum perception range of designer specified clumps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_designer_clump_targeting_group",
	['short'],
	"void",
	['HR'],
	"Force the designer specified clumps to only target a targeting group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kill_no_statistics",
	['ai'],
	"void",
	['HR', 'H4'],
	"Instantly and silently (no animation or sound played) kills the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_add_navpoint",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Add/remove hud navpoint to the actor or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_enumerate_immigrants",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"If someone migrates (or simply changes) into this squad, consider him a full member of the squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_disregard_orphans",
	['ai'],
	"void",
	['HR', 'H4'],
	"The given ai will discard all orphan props, terminating search",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_targeting_group",
	['ai', 'short', 'boolean?'],
	"void",
	['HR', 'H4'],
	"Set the ai to only target other guys of targeting group x (true/false whether the player should also be targeted)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_cue",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Place the named ai cue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_remove_cue",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Remove the named ai cue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_evaluations_shading_none",
	[],
	"void",
	['HR', 'H4'],
	"Render no fp evaluation shading",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_evaluations_shading_all",
	[],
	"void",
	['HR', 'H4'],
	"Render all fp evaluation shading",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_evaluations_shading",
	['firing_point_evaluator'],
	"void",
	['HR', 'H4'],
	"Add a specific fp evaluation shading to render",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_set_team",
	['object', 'team'],
	"void",
	['HR', 'H4'],
	"Flag an object as being owned by a certain team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_set_targeting_bias",
	['object', 'real'],
	"void",
	['HR', 'H4'],
	"Sets the targeting preference for this object in relation to other equal targets [-1, 1]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_set_targeting_ranges",
	['object', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Sets override weapon ranges for enemies attacking this object <min> <max>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_enable_targeting_from_vehicle",
	['object', 'boolean'],
	"void",
	['HR', 'H4'],
	"If enabled, actors in vehicles are not allowed to target this object <object> <true/false>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_enable_grenade_attack",
	['object', 'boolean'],
	"void",
	['HR', 'H4'],
	"If disabled, actors cannot attack the object with grenades <object> <true/false>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_needs_vehicle",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns if the given player needs a vehicle at the moment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_patrol_enable",
	['string_id', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable a squad patrol",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_combat_status",
	['ai', 'short'],
	"void",
	['HR'],
	"Set the combat status for the given ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destroy",
	['string_id'],
	"boolean",
	['HR', 'H4'],
	"Destroy the given flock, killing all members randomly over time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_definition_set",
	['string_id', 'any_tag'],
	"boolean",
	['HR', 'H4'],
	"Set the definition of the given flock to the given tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_set_targeting_group",
	['string_id', 'short'],
	"void",
	['HR', 'H4'],
	"Set the flock to only target other guys in targeting group x",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destination_set_enabled",
	['string_id-1', 'string_id-2', 'boolean'],
	"void",
	['HR', 'H4'],
	"Sets the enabled flag on the flock destination",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destination_set_position",
	['string_id-1', 'string_id-2', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Sets the position of a flock destination to the location of an ai point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destination_copy_position",
	['string_id-1', 'string_id-2', 'string_id-3'],
	"void",
	['HR', 'H4'],
	"Sets the position of one flock destination to the position of another flock destination",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_create_runtime_squad",
	['string'],
	"boolean",
	['HR', 'H4'],
	"Create a new squad definition entry with the given name. arg: <squad_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_create_runtime_point_set",
	['string'],
	"boolean",
	['HR', 'H4'],
	"Enables mantini to create new point sets in memory. arg: <point_set_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_runtime_point_to_set",
	['string-1', 'string-2', 'real-1', 'real-2', 'real-3', 'real-4'],
	"boolean",
	['HR', 'H4'],
	"Enables mantini to add a point to an in memory point set.  arg: <point_set_name> <point_name> <x> <y> <yaw> <pitch>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_runtime_point_to_set_from_camera",
	['string-1', 'string-2', 'real-1', 'real-2'],
	"boolean",
	['HR', 'H4'],
	"Enables mantini to add a point to an in memory point set along the current camera fwd collision point.  arg: <point_set_name> <point_name> <yaw> <pitch>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_starting_location_to_squad",
	['string-1', 'string-2', 'long', 'point_reference'],
	"boolean",
	['HR', 'H4'],
	"Enables mantini to add a spawn point to a squad identified by an ai point.  arg: <squad_name> <starting loc name> <cell_index> <pointref>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_starting_location_to_squad_from_camera",
	['string-1', 'string-2', 'long', 'real'],
	"boolean",
	['HR', 'H4'],
	"Enables mantini to add a spawn point to a squad identified from the camera position.  arg: <squad_name> <starting loc name> <cell_index> <offset in wus>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_cell_to_runtime_squad",
	['string-1', 'string-2'],
	"long",
	['HR', 'H4'],
	"Add a character to a runtime squad. arg: <squad_name> <character tag>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_get_runtime_squad_cell_count",
	['string'],
	"long",
	['HR', 'H4'],
	"Get the cell count of a runtime squad. arg: <squad_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_squad_team",
	['string', 'team'],
	"boolean",
	['HR', 'H4'],
	"Set the team for a runtime squad. arg: <squad_name> <team>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_spawn_point_weapons",
	['ai', 'string-1', 'string-2'],
	"boolean",
	['HR', 'H4'],
	"Set primary and secondary weapon for a spawn point. arg: <spawn_point> <primary weapon tag> <secondary weapon tag>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_spawn_point_vehicle",
	['ai', 'string'],
	"boolean",
	['HR', 'H4'],
	"Set vehicle for a spawn point. arg: <spawn_point> <vehicle tag>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_spawn_point_variants",
	['ai', 'string_id-1', 'string_id-2'],
	"boolean",
	['HR', 'H4'],
	"Set actor and vehicle variants for spawn point. arg: <spawn_point> <actor variant> <vehicle variant>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_squad_cell_spawn_count",
	['string', 'long-1', 'long-2'],
	"boolean",
	['HR', 'H4'],
	"Set cell spawn count. arg: <squad name> <cell index> <spawn count>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_clear_runtime_squads",
	[],
	"boolean",
	['HR', 'H4'],
	"Clears all runtime created squads. returns false if there were none to clear",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_remove_pointset",
	['string'],
	"boolean",
	['HR', 'H4'],
	"Clears all point sets after a pointset that contains the specified substring. returns false if there were none to clear. arg: <substring to search for in pointset name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fire_dialogue_event",
	['ai', 'string', 'object'],
	"void",
	['HR', 'H4'],
	"Runs a dialogue event on actor closest to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_vocalization",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Runs a dialogue event on actor closest to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_vocalization_on_team",
	['string_id', 'team'],
	"void",
	['HR', 'H4'],
	"Runs a dialogue event on actor closest to a player that's allied with the given team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_points",
	['player', 'long'],
	"void",
	['HR', 'H4'],
	"Award bonus metagame points to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_skull",
	['player', 'skull'],
	"void",
	['HR', 'H4'],
	"Award a skull to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_test",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Starts a performance with the given name, spawns needed actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_folder_activate",
	['folder'],
	"void",
	['HR', 'H4'],
	"Activates inactive performances inside a given folder name, waits for actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_folder_deactivate",
	['folder'],
	"void",
	['HR', 'H4'],
	"Deactivates active performances inside a given folder name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_activate",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Activates an inactive performance with a given name, waits for actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_setup_and_begin",
	['string_id-1', 'string_id-2', 'real'],
	"boolean",
	['HR', 'H4'],
	"Finds all of the actors needed for the performance, and then starts the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_new",
	['string_id', 'boolean'],
	"long",
	['HR', 'H4'],
	"Creates a new instance of a performance given a performance definition name. if last argument true, allows duplicates",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cast_squad_in_performance",
	['long', 'ai'],
	"void",
	['HR', 'H4'],
	"Finds and assigns roles for actors in the given squad in a performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_begin",
	['long'],
	"void",
	['HR', 'H4'],
	"Starts the script for a performance if all of the critical roles have been cast",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_kill_by_name",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Kills any performance with the given name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_kill_by_ai",
	['ai'],
	"void",
	['HR', 'H4'],
	"Kills any performance that has cast an ai from the given squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_fake_task_transition",
	['string_id-1', 'string_id-2'],
	"void",
	['HR', 'H4'],
	"Unblocks an actor waiting looping animation that's waiting on a task transition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_play_line_by_id",
	['short'],
	"void",
	['HR', 'H4'],
	"Play a line (referenced by line id) in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_play_line",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Play a line (referenced by name) in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_actor_by_index",
	['short'],
	"ai",
	['HR', 'H4'],
	"Get the actor in the given participant slot of a performace",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_actor",
	['string_id'],
	"ai",
	['HR', 'H4'],
	"Get the actor who playing the given named role in a performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_actor_count",
	[],
	"short",
	['HR', 'H4'],
	"Get the total number of actors currently in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_role_count",
	[],
	"short",
	['HR', 'H4'],
	"Get the total number of roles in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_line_count",
	[],
	"short",
	['HR', 'H4'],
	"Get the total number of lines in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_last_played_line_index",
	[],
	"short",
	['HR', 'H4'],
	"Get the index of the last line played in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_is_blocked",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if a line is executing that is blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"actor_from_performance",
	['long', 'string_id'],
	"ai",
	['HR', 'H4'],
	"Get a specified actor from a performance given by its runtime index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_add_fireteam_squad",
	['unit', 'ai'],
	"void",
	['HR', 'H4'],
	"Adds the given squad to the given player's fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_remove_fireteam_squad",
	['unit', 'ai'],
	"void",
	['HR', 'H4'],
	"Removes the given squad from the given player's fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_set_fireteam_max",
	['unit', 'short'],
	"void",
	['HR', 'H4'],
	"Sets the maximum number of actors allowed in the players fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_set_fireteam_no_max",
	['unit'],
	"void",
	['HR', 'H4'],
	"Sets the maximum number of actors allowed in the players fire team to unlimited",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_set_fireteam_max_squad_absorb_distance",
	['unit', 'real'],
	"void",
	['HR', 'H4'],
	"Sets the maximum distance at which this squad can absorb nearby squads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_fireteam_absorber",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enables or disables fireteam absortion for a given squad in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_fireteam_fallback_squad",
	['unit', 'ai'],
	"void",
	['HR', 'H4'],
	"Sets the squad that ai will migrate into if the player dies",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_is_in_fireteam",
	['ai'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the given ai is in a fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_alert",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_damage",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_combat_status",
	['ai', 'short'],
	"void",
	['HR', 'H4'],
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_vehicle_exit",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_command_script_attached",
	['ai', 'ai_command_script'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the command script is in the ai's cs queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Flies the actor to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"Flies the actor to the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2'],
	"void",
	['HR', 'H4'],
	"Flies the actor to the given point and orients him in the appropriate direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2', 'real'],
	"void",
	['HR', 'H4', 'H4'],
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Flies the actor through the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"Flies the actor through the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Moves the actor to a specified point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2'],
	"void",
	['HR', 'H4'],
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2', 'real'],
	"void",
	['HR', 'H4'],
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_face",
	['ai', 'boolean', 'point_reference-1', 'point_reference-2'],
	"void",
	['HR', 'H4'],
	"Moves the actor to a specified point and has him face the second point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_posture",
	['ai', 'boolean', 'point_reference', 'string_id'],
	"void",
	['HR', 'H4'],
	"Actor moves to the point and performs a posture once there",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_attach_to_spline",
	['string_id'],
	"void",
	['HR', 'H4'],
	"For use in flying vehicles: set this vehicle to pathfind using the designated spline",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_attach_to_spline",
	['ai', 'boolean', 'string_id'],
	"void",
	['HR', 'H4'],
	"For use in flying vehicles: set this vehicle to pathfind using the designated spline",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_nearest",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Given a point set, ai goes toward the nearest point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_in_direction",
	['ai', 'boolean', 'real-1', 'real-2', 'real-3'],
	"void",
	['HR', 'H4'],
	"Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['ai', 'boolean', 'object'],
	"void",
	['HR', 'H4'],
	"Move in the direction of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['ai', 'boolean-1', 'object', 'boolean-2'],
	"void",
	['HR', 'H4'],
	"Move in the direction of the given object (and melee the target or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards_point",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"Move to within the given radius of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"A swarm swarms towards the point (or point set) in question, the individual forms stopping when they get within the given radius",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_from",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"A swarm swarms away from the point in question, going at least the given distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_pause",
	['ai', 'boolean', 'real'],
	"void",
	['HR', 'H4'],
	"The actor does nothing for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_grenade",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	['HR'],
	"Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_use_equipment",
	['real'],
	"void",
	['HR', 'H4'],
	"Actor uses their current equipment for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_use_equipment",
	['ai', 'boolean', 'real'],
	"void",
	['HR', 'H4'],
	"Actor uses their current equipment for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump",
	['ai', 'boolean', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Actor jumps in direction of angle at the given velocity (angle, velocity)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump_to_point",
	['ai', 'boolean', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Actor jumps with given horizontal and vertical velocity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vocalize",
	['ai', 'boolean', 'short'],
	"void",
	['HR', 'H4'],
	"Actor emits vocalization of given type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['ai', 'boolean', 'sound'],
	"void",
	['HR'],
	"Actor plays an impulse sound and the atom blocks until it is complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['ai', 'boolean', 'sound', 'real'],
	"void",
	['HR', 'H4'],
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['ai', 'boolean', 'sound', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length, at the given volume (0..1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	['HR', 'H4'],
	"Actor plays an ai action towards the given point. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_object",
	['ai', 'boolean', 'object', 'short'],
	"void",
	['HR', 'H4'],
	"Actor plays an ai action towards the given object. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_player",
	['ai', 'boolean', 'short'],
	"void",
	['HR', 'H4'],
	"Actor plays an ai action towards the nearest_player. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['ai', 'boolean-1', 'animation_graph', 'string_id', 'boolean-2'],
	"void",
	['HR', 'H4'],
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['ai', 'boolean-1', 'animation_graph', 'string_id', 'boolean-2', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['ai', 'boolean-1', 'animation_graph', 'string_id', 'boolean-2'],
	"void",
	['HR', 'H4'],
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['ai', 'boolean-1', 'animation_graph', 'string_id', 'boolean-2', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['ai', 'animation_graph', 'string_id', 'boolean'],
	"void",
	['HR', 'H4'],
	"Starts a looping custom animation playing on the actor (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['ai', 'animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_line",
	['ai', 'boolean', 'ai_line'],
	"void",
	['HR', 'H4'],
	"Play the named line in the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_die",
	['ai', 'boolean', 'short'],
	"void",
	['HR', 'H4'],
	"Actor dies in specified manner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_deploy_turret",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Deploy a turret at the given script point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach",
	['ai', 'boolean', 'object', 'real-1', 'real-2', 'real-3'],
	"void",
	['HR', 'H4'],
	"(approach <object> <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_player",
	['ai', 'boolean', 'real-1', 'real-2', 'real-3'],
	"void",
	['HR', 'H4'],
	"(approach player <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['ai', 'boolean', 'vehicle'],
	"void",
	['HR', 'H4'],
	"Actor gets in the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['ai', 'boolean', 'vehicle', 'unit_seat_mapping'],
	"void",
	['HR', 'H4'],
	"Actor gets in the named seat of the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_style",
	['ai', 'style'],
	"void",
	['HR', 'H4'],
	"Override the actor's style",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_force_combat_status",
	['ai', 'short'],
	"void",
	['HR', 'H4'],
	"Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_targeting",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor autonomous target selection enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_looking",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor autonomous looking enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_moving",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor autonomous moving enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_dialogue",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor combat dialogue enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_activity_termination",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Autonomous termination of activities is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_dialogue_global",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Combat dialogue is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Actor looks at the point for the remainder of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_player",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor looks at nearest player for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_object",
	['ai', 'boolean', 'object'],
	"void",
	['HR', 'H4'],
	"Actor looks at the object for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_player",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_object",
	['ai', 'boolean', 'object'],
	"void",
	['HR', 'H4'],
	"Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_player",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_object",
	['ai', 'boolean', 'object'],
	"void",
	['HR', 'H4'],
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor is allowed to shoot at its target or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['ai', 'boolean', 'object'],
	"void",
	['HR', 'H4'],
	"Actor shoots at given target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	['HR', 'H4'],
	"Actor shoots at given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_secondary_trigger",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor uses secondary trigger whenever he shoots",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_lower_weapon",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor keeps weapon lowered",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed",
	['ai', 'real'],
	"void",
	['HR', 'H4'],
	"Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed_instantaneous",
	['ai', 'real'],
	"void",
	['HR', 'H4'],
	"Set the instantaneous speed of the vehicle we're driving",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_boost",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enables or disables boost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_turn_sharpness",
	['ai', 'boolean', 'real'],
	"void",
	['HR', 'H4'],
	"Set the sharpness of a vehicle turn (values 0 -> 1). only applicable to nondirectional flying vehicles (e.g. dropships)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_pathfinding_failsafe",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor blocks until pathfinding calls succeed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_pathfinding_radius",
	['ai', 'real'],
	"void",
	['HR', 'H4'],
	"Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_ignore_obstacles",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor does not avoid obstacles when true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_stop",
	['ai'],
	"void",
	['HR', 'H4'],
	"Actor stops approaching",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_push_stance",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Actor pushes given stance during this command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_push_stance",
	['ai', 'string_id'],
	"void",
	['HR', 'H4'],
	"Actor pushes given stance during this command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor crouches for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['ai', 'boolean', 'real'],
	"void",
	['HR', 'H4'],
	"Actor crouches / uncrouches, transitioning over the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_walk",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor walks for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_set",
	['ai', 'string_id', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor enters the given posture (enters immediately rather than plays the entry animation if argument is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_exit",
	['ai'],
	"void",
	['HR', 'H4'],
	"Actor exits the posture it's in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stow",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Actor stows its current weapon, based on the second bool variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stow",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Actor stows its current weapon, based on the second bool variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_teleport",
	['ai', 'point_reference-1', 'point_reference-2'],
	"void",
	['HR', 'H4'],
	"Actor teleports to point1 facing point2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_custom_animation",
	['ai'],
	"void",
	['HR', 'H4'],
	"Stop running a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_sound",
	['ai', 'sound'],
	"void",
	['HR', 'H4'],
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_player_melee",
	['ai', 'boolean', 'long'],
	"void",
	['HR', 'H4'],
	"Actor performs player-specific melee",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_melee_direction",
	['ai', 'boolean', 'long'],
	"void",
	['HR', 'H4'],
	"Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_smash_direction",
	['ai', 'boolean', 'long'],
	"void",
	['HR', 'H4'],
	"Actor performs smash in provided direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_cinematic_scene",
	['cinematic_scene_definition', 'long', 'cutscene_flag'],
	"void",
	['HR'],
	"Sets the scene, shot, and cutscene flag for the cinematic camera (note: camera must be in cinematic mode by calling camera_set_cinematic)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_print_camera_transform",
	['long'],
	"void",
	['HR', 'H4'],
	"Spews camera transform for the given output user index. for remote tools",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_print_deterministic_camera_transform",
	['long'],
	"void",
	['HR', 'H4'],
	"Spews camera transform for the reticule for the given output user index. for remote tools",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_night_vision_on",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has night vision on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_night_vision_on",
	['unit'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the unit has a flashlight on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_jump",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the jump button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_equipment",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the equipment button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_context_primary",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the reload button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_vehicle_trick_primary",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the vehicle trick button on the primary trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_vehicle_trick_secondary",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the vehicle trick button on the grenade trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_up",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_down",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_left",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_right",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_reset",
	['player'],
	"void",
	['HR', 'H4'],
	"Resets the player action test state so that all tests will return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_primary_trigger",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has used primary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_grenade_trigger",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has used grenade trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vision_trigger",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has used vision trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_weapons",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the rotate-weapon button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_grenades",
	['player'],
	"boolean",
	['HR'],
	"Returns true if any player has hit the rotate-grenades button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_jump",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the jump button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_equipment",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the equipment button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_context_primary",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the reload button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vehicle_trick_primary",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the vehicle trick button on the primary trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vehicle_trick_secondary",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the vehicle trick button on the grenade trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_melee",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the melee button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_action",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit the action key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_accept",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit accept since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_cancel",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has hit cancel key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_up",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has looked up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_down",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has looked down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_left",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has looked left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_right",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has looked right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_all_directions",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_all_directions",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_cinematic_skip",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed the cinematic skip button (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_start",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed the start button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_back",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed the back button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_up",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_down",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_left",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_right",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has pressed dpad right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_message",
	['player'],
	"void",
	['HR', 'H4'],
	"Locks the accept button until the player presses accept",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_cancel_message",
	['player'],
	"void",
	['HR', 'H4'],
	"Locks the cancel button until the player presses cancel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enable_soft_ping_region",
	['unit', 'damage_region', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable pain screen damage weight outputs on all units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_print_soft_ping_regions",
	['unit'],
	"void",
	['HR', 'H4'],
	"Print the pain screen state on all the units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_pitch",
	['player', 'real', 'long'],
	"void",
	['HR', 'H4'],
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_has_female_voice",
	['player'],
	"boolean",
	['HR', 'H4'],
	"Returns true if the player has selected the female voice option",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_teleport_player",
	['unit-1', 'unit-2'],
	"void",
	['HR', 'H4'],
	"For testing: teleports one player to another's location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_reload",
	[],
	"void",
	['HR', 'H4'],
	"Looks for local tags on disk if they are not already loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_force_local",
	[],
	"void",
	['HR', 'H4'],
	"Forces game to use local tags if available",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_force_content",
	[],
	"void",
	['HR', 'H4'],
	"Forces game to use content tags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_force_clear",
	[],
	"void",
	['HR', 'H4'],
	"Clears any force on the content status system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_print_zone_sets",
	[],
	"void",
	['HR', 'H4'],
	"Prints out the names of all the zone sets",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_print_current_zone_set",
	[],
	"void",
	['HR', 'H4'],
	"Brings out the names of all the bsps in the current zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_map_and_zone_set",
	['string-1', 'string-2'],
	"void",
	['HR', 'H4'],
	"Switches to a different scenario and zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_snapshot",
	['long', 'string'],
	"void",
	['HR', 'H4'],
	"Takes a set of snapshot of object and saves as <snapshot\\name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"structure_instance_snapshot",
	['long'],
	"void",
	['HR', 'H4'],
	"Takes snapshot of all the instances in this bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_thumbnail",
	['string-1', 'string-2', 'string-3'],
	"void",
	['HR', 'H4'],
	"Takes snapshots of objects to be used as thumnail previews",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_halt",
	['string'],
	"void",
	['HR', 'H4'],
	"Goes to a halted pregame state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_player_count",
	['long'],
	"void",
	['HR'],
	"Debug map launching: sets the number of splitscreen players for the next map; does not set game mode (campaign vs. multiplayer)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_set_variant",
	['string'],
	"void",
	['HR', 'H4'],
	"Launches a game variant a on a map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_active_skulls",
	['long'],
	"void",
	['HR', 'H4'],
	"Debug map launching: sets the active skulls of the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_zone_set",
	['string'],
	"void",
	['HR', 'H4'],
	"Debug map launching: sets the initial bsp for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_cache_flush",
	[],
	"void",
	['HR'],
	"Don't make me kick your grunt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"geometry_cache_flush",
	[],
	"void",
	['HR'],
	"We fear change",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_cache_flush",
	[],
	"void",
	['HR'],
	"It's just sooooo wrong",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_tags",
	[],
	"void",
	['HR'],
	"Writes all memory being used by tag files into tag_memory_dump.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_single_tag",
	[],
	"void",
	['HR', 'H4'],
	"Inspect a single tag for programmer within visual studio",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_in_for_player",
	['player'],
	"void",
	['HR', 'H4'],
	"Fade in a player's screen from black",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_out_for_player",
	['player'],
	"void",
	['HR', 'H4'],
	"Fade out a player's screen to black",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_out_from_game",
	['string_id'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematics tag for fading out from the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_in_to_cinematic",
	['string_id'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematics tag for fading in to the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_out_from_cinematic",
	['string_id'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematics tag for fading out from the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_in_to_game",
	['string_id'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematics tag for fading in to the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_out_from_game",
	['cinematic_transition_definition'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematic transition for fading out from the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_in_to_cinematic",
	['cinematic_transition_definition'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematic transition for fading in to the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_out_from_cinematic",
	['cinematic_transition_definition'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematic transition for fading out from the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_in_to_game",
	['cinematic_transition_definition'],
	"short",
	['HR'],
	"Executes the fade settings setup in the cinematic transition for fading in to the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_run_script_by_name",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Runs a cinematic script by name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_shot",
	['cinematic_scene_definition', 'long'],
	"void",
	['HR'],
	"Sets the scene and shot for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_create",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Creates an object for use by cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_create_cinematic_anchor",
	['cutscene_flag'],
	"void",
	['HR', 'H4'],
	"Creates a cinematic anchor object for use by cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_destroy",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Destroys an object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_objects_destroy_all",
	[],
	"void",
	['HR', 'H4'],
	"Destroys all objects created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_in_progress",
	[],
	"boolean",
	['HR', 'H4'],
	"Tests if a cinematic is in progress",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_can_be_skipped",
	[],
	"boolean",
	['HR', 'H4'],
	"Tests if a cinematic can be skipped",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_update_vmf_light",
	['string', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7'],
	"void",
	['HR'],
	"Updates the vmf light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_update_analytical_light",
	['string', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['HR'],
	"Updates the analytical light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_update_ambient_light",
	['string', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['HR'],
	"Updates the ambient light",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_update_scales",
	['string', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['HR'],
	"Updates the weights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_get",
	['string_id'],
	"object",
	['HR', 'H4'],
	"Returns an object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_unit_get",
	['string_id'],
	"unit",
	['HR', 'H4'],
	"Returns a unit created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_weapon_get",
	['string_id'],
	"weapon",
	['HR', 'H4'],
	"Returns a weapon created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_scene",
	['long'],
	"cinematic_scene_definition",
	['HR'],
	"Retrieve a cinematic tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_object_coop_flags_valid",
	['long-1', 'long-2'],
	"boolean",
	['HR', 'H4'],
	"Evaluate if a cinematic object should be displayed for the current coop flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_object",
	['long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_cinematic_object",
	['long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_animation",
	['long-1', 'long-2', 'string_id'],
	"void",
	['HR', 'H4'],
	"Animate a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_object",
	['long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Destroy a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_objects",
	['long'],
	"void",
	['HR', 'H4'],
	"Destroys all cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_scene",
	['long'],
	"void",
	['HR', 'H4'],
	"Creates cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_scene",
	['long'],
	"void",
	['HR', 'H4'],
	"Destroys cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_effect",
	['long-1', 'long-2', 'long-3', 'object'],
	"void",
	['HR'],
	"Play a cinematic effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_music",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HR'],
	"Play a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_dialogue",
	['long-1', 'long-2', 'long-3', 'object'],
	"void",
	['HR'],
	"Play a cinematic dialogue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_music",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HR'],
	"Stops a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_screen_effect",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HR'],
	"Play a cinematic screen effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_screen_effect",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HR'],
	"Stop the associated area screen effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_set_user_input_constraints",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HR', 'H4'],
	"Set user input constraints from a cinematic tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_revert",
	[],
	"void",
	['HR', 'H4'],
	"Causes the player to revert to his previous saved game (for testing and cinematic skipping only please!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_award_level_complete_achievements",
	[],
	"void",
	['HR', 'H4'],
	"Awards end of level progress to players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_set",
	['short'],
	"void",
	['HR', 'H4'],
	"Debug map launching: sets the map insertion_point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_player",
	['player', 'string_id'],
	"void",
	['HR', 'H4'],
	"Award named achievement to player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_controller",
	['controller', 'string_id'],
	"void",
	['HR', 'H4'],
	"Award named achievement to player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_dead_teammates",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Debug dead teammate influencers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_force_immediate_save_on_core_load",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Forces film core loads to trigger game_save_immediate() on load (which mimics the game save that occurs on core load in stress jobs)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_reverted",
	[],
	"boolean",
	['HR'],
	"Don't use this for anything, you black-hearted jerks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_lives_get",
	['team'],
	"long",
	['HR', 'H4'],
	"Get the number of lives left in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_lives_set",
	['team', 'long'],
	"void",
	['HR', 'H4'],
	"Set the number of lives left in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_mp_round_count",
	[],
	"long",
	['HR', 'H4'],
	"Get the number of mp rounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_mp_round_current",
	[],
	"long",
	['HR', 'H4'],
	"Get the current mp round index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_waves_per_round",
	[],
	"short",
	['HR', 'H4'],
	"Get the number of waves per round for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_rounds_per_set",
	[],
	"short",
	['HR', 'H4'],
	"Get the number of rounds per set for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_begin_new_set",
	[],
	"void",
	['HR', 'H4'],
	"Starts a new set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_begin_new_wave",
	[],
	"void",
	['HR', 'H4'],
	"Starts a new wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_incident_new",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Fires a start new set game event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_bonus_lives_awarded",
	[],
	"long",
	['HR', 'H4'],
	"Get the survival mode bonus lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_bonus_target",
	[],
	"long",
	['HR', 'H4'],
	"Get the survival mode bonus target from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_elite_life_count",
	[],
	"long",
	['HR', 'H4'],
	"Get the survival mode elite life count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_generator_count",
	[],
	"long",
	['HR', 'H4'],
	"Get the survival mode generator count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_bonus_lives_elite_death",
	[],
	"long",
	['HR', 'H4'],
	"Get the survival mode bonus lives for killing an elite player from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_weapon_drops_enable",
	[],
	"boolean",
	['HR', 'H4'],
	"Get the survival mode weapon drops enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_ammo_crates_enable",
	[],
	"boolean",
	['HR', 'H4'],
	"Get the survival mode ammo crates enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_waves_disabled",
	[],
	"boolean",
	['HR'],
	"Get the survival mode waves disabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_generator_defend_all",
	[],
	"boolean",
	['HR', 'H4'],
	"Get the survival mode generator defend all property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_generator_random_spawn",
	[],
	"boolean",
	['HR', 'H4'],
	"Get the survival mode generator random spawn property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_respawn_time_seconds",
	['mp_team'],
	"long",
	['HR', 'H4'],
	"Respawn time for a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_team_respawns_on_wave",
	['team'],
	"boolean",
	['HR', 'H4'],
	"Does this team respawn only when waves complete?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_sudden_death",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Start or stop sudden death for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_increment_human_score",
	['player'],
	"void",
	['HR', 'H4'],
	"Increments the player's score by one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_increment_elite_score",
	['player'],
	"void",
	['HR', 'H4'],
	"Increments the player's score by one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_spartan_license_plate",
	['long-1', 'long-2', 'string_id-1', 'string_id-2', 'string_id-3'],
	"void",
	['HR', 'H4'],
	"Shows the license plate for spartans: variant icon, designator icon, variant text, description text, designator text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_elite_license_plate",
	['long-1', 'long-2', 'string_id-1', 'string_id-2', 'string_id-3'],
	"void",
	['HR', 'H4'],
	"Shows the license plate for elites: variant icon, designator icon, variant text, description text, designator text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_player_count_by_team",
	['team'],
	"long",
	['HR', 'H4'],
	"Given a team index, returns the player count of that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_players_by_team",
	['team'],
	"object_list",
	['HR', 'H4'],
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_preload_dialogue_sounds",
	['string'],
	"void",
	['HR', 'H4'],
	"<dialogue> preloads the dialogue tag so the sounds it refer to don't hitch in the dialog view",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_resume",
	['looping_sound', 'object', 'real'],
	"void",
	['HR'],
	"Plays a looping sound from the specified source object (or none), with the specified scale without playing the intro",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_activate_layer",
	['looping_sound', 'long'],
	"void",
	['HR'],
	"Activates a looping sound layer (1-4)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_deactivate_layer",
	['looping_sound', 'long'],
	"void",
	['HR'],
	"Deactivates a looping sound layer (1-4)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_start_global_effect",
	['string_id', 'real'],
	"void",
	['HR', 'H4'],
	"Start a global effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_start_timed_global_effect",
	['string_id', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Start a global sound effect for a given amount of time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_stop_global_effect",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Stop a global effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_enable_acoustic_palette",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Reenable a disabled acoustic palette",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_disable_acoustic_palette",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Disable an acoustic palette",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_force_alternate_state",
	['vehicle', 'boolean'],
	"void",
	['HR', 'H4'],
	"Forces alternate state for selected vehicle (like deploying a wolverine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_night_vision",
	[],
	"void",
	['HR', 'H4'],
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_cinematics",
	['boolean'],
	"void",
	['HR'],
	"Hides/shows the cinematics huds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_weapon_stats_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_crosshair_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_shield_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_grenades_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_messages_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_motion_sensor_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_chapter_title_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_fade_cinematics_for_player",
	['player', 'real', 'long'],
	"void",
	['HR'],
	"Fade out the hud to <real> opacity over <integer> ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_object",
	['object', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_object_with_priority",
	['object', 'long', 'string_id?'],
	"void",
	['HR'],
	"Turns on the navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_flag",
	['cutscene_flag', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the navpoint and display text of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_flag_with_priority",
	['cutscene_flag', 'long', 'string_id?'],
	"void",
	['HR'],
	"Turns on the navpoint and display text of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_object_for_player",
	['player', 'object', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_object_for_player_with_priority",
	['player', 'object', 'long', 'string_id?'],
	"void",
	['HR'],
	"Turns on the navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_flag_for_player",
	['player', 'cutscene_flag', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the navpoint and display text of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_flag_for_player_with_priority",
	['player', 'cutscene_flag', 'long', 'string_id?'],
	"void",
	['HR'],
	"Turns on the navpoint and display text of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_object_set_vertical_offset",
	['object', 'real'],
	"void",
	['HR'],
	"Set the vertical offset in world units for a chud_track_object object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_track_cutscene_flag_set_vertical_offset",
	['cutscene_flag', 'real'],
	"void",
	['HR'],
	"Set the vertical offset in world units for a chud_track_cutscene_flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_flag",
	['cutscene_flag', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the improved navpoint and display text of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_flag_with_priority",
	['cutscene_flag', 'long'],
	"void",
	['HR'],
	"Turns on the improved navpoint and display text of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_object",
	['object', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the improved navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_position",
	['real-1', 'real-2', 'real-3', 'string', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the improved navpoint in the specified position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_position_with_priority",
	['real-1', 'real-2', 'real-3', 'string', 'long', 'boolean'],
	"void",
	['HR'],
	"Turns on/off the improved navpoint in the specified position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_object_with_priority",
	['object', 'long', 'string_id?'],
	"void",
	['HR'],
	"Turns on the improved navpoint and display text of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_track_object_set_vertical_offset",
	['object', 'real'],
	"void",
	['HR'],
	"Set the vertical offset in world units for a chud_breadcrumbs_track_object object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_breadcrumbs_using_revised_nav_points",
	[],
	"boolean",
	['HR'],
	"Checks wether revised navpoints are active",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_post_message_HACK",
	['string'],
	"void",
	['HR'],
	"Posts a string to the given user's hud.  use none for all users",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_post_message",
	['player', 'string_id'],
	"void",
	['HR'],
	"Posts a string to the given player's hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_post_medal",
	['player', 'string_id'],
	"void",
	['HR'],
	"Posts a medal to the given player's hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_set_static_hs_variable",
	['player', 'long', 'real'],
	"void",
	['HR'],
	"Sets a chud variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_set_countdown_hs_variable",
	['player', 'long', 'real'],
	"void",
	['HR'],
	"Sets a chud variable that counts down to 0",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_set_countup_hs_variable",
	['player', 'long', 'real'],
	"void",
	['HR'],
	"Sets a chud variable that counts up forever",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_clear_hs_variable",
	['player', 'long'],
	"void",
	['HR'],
	"Clear a chud variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_get_hs_variable",
	['real', 'player'],
	"void",
	['HR'],
	"Get the value of a chud variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_screen_objective",
	['string_id'],
	"void",
	['HR'],
	"Hides/shows the objective tip in the chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_screen_chapter_title",
	['string_id'],
	"void",
	['HR'],
	"Hides/shows the chapter title in the chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_screen_training",
	['player', 'string_id'],
	"void",
	['HR', 'H4'],
	"Hides/shows the training tip in the chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_translation_for_player",
	['player', 'real-1', 'real-2', 'real-3'],
	"void",
	['HR', 'H4'],
	"<x> <y> <z>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rotation_for_player",
	['player', 'real-1', 'real-2', 'real-3'],
	"void",
	['HR', 'H4'],
	"<yaw> <pitch> <roll>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rumble_for_player",
	['player', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_start_for_player",
	['player', 'real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"<max_intensity> <attack time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_stop_for_player",
	['player', 'real'],
	"void",
	['HR', 'H4'],
	"<decay>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"antialias_blur",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable antialias blur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_ssao",
	['boolean'],
	"void",
	['HR'],
	"Enable/disable ssao",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_planar_fog",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable planar fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_disable_vsync",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable vsync",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_has_skills",
	[],
	"boolean",
	['HR', 'H4'],
	"Are you the best?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_has_mad_secret_skills",
	['long'],
	"void",
	['HR', 'H4'],
	"You are the best!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_invert_look",
	['player'],
	"void",
	['HR', 'H4'],
	"Invert player's look inversion setting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_southpaw",
	['controller', 'boolean'],
	"void",
	['HR', 'H4'],
	"Set southpaw for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_clench_protection",
	['controller', 'boolean'],
	"void",
	['HR', 'H4'],
	"Set clench protection look for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_button_preset",
	['controller', 'button_preset'],
	"void",
	['HR', 'H4'],
	"Set button preset for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_custom_button",
	['controller', 'long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Set custom button for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_joystick_preset",
	['controller', 'joystick_preset'],
	"void",
	['HR', 'H4'],
	"Set joystick preset for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_single_player_levels",
	['controller'],
	"void",
	['HR', 'H4'],
	"<controller> unlock all single player levels for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_lock_single_player_levels",
	['controller'],
	"void",
	['HR', 'H4'],
	"<controller> lock all single player levels for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_skulls",
	['controller'],
	"void",
	['HR', 'H4'],
	"<controller> unlock all campaign skulls for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_lock_skulls",
	['controller'],
	"void",
	['HR', 'H4'],
	"<controller> lock all campaign skulls for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_models",
	['controller'],
	"void",
	['HR', 'H4'],
	"<controller> unlock all model permutations for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_lock_models",
	['controller'],
	"void",
	['HR', 'H4'],
	"<controller> lock all model permutations for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_primary_change_color",
	['controller', 'player_color'],
	"void",
	['HR', 'H4'],
	"Set primary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_secondary_change_color",
	['controller', 'player_color'],
	"void",
	['HR', 'H4'],
	"Set secondary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_tertiary_change_color",
	['controller', 'player_color'],
	"void",
	['HR', 'H4'],
	"Set tertiary color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_primary_emblem_color",
	['controller', 'player_color'],
	"void",
	['HR', 'H4'],
	"Set primary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_secondary_emblem_color",
	['controller', 'player_color'],
	"void",
	['HR', 'H4'],
	"Set secondary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_background_emblem_color",
	['controller', 'player_color'],
	"void",
	['HR', 'H4'],
	"Set tertiary color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_player_character_type",
	['controller', 'player_model_choice'],
	"void",
	['HR', 'H4'],
	"Set player character type for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_voice_output_setting",
	['controller', 'voice_output_setting'],
	"void",
	['HR', 'H4'],
	"Set voice output setting for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_subtitle_setting",
	['controller', 'subtitle_setting'],
	"void",
	['HR', 'H4'],
	"Set subtitle setting for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_nag_message_data",
	['controller', 'long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['HR', 'H4'],
	"<controller> <last global nag msg id> <last per user nag msg id> <last global nag msg view count> <last per-user nag msg view count>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_temporary_users_always_attached",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Toggle pretending that temporary users' controllers are always attached",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_new_user_experience",
	['controller', 'boolean'],
	"void",
	['HR', 'H4'],
	"<controller> set if this controller will get the new user experience",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_initial_bonus_toast",
	['controller', 'boolean'],
	"void",
	['HR', 'H4'],
	"<controller> set if this controller has seen the 5000 initial credits toast",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_loyalty_bonus_toast",
	['controller', 'short'],
	"void",
	['HR'],
	"<controller> <credits> act as if this controller was awarded loyalty credits from the lsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_generic_bonus_toast",
	['controller', 'short'],
	"void",
	['HR'],
	"<controller> <credits> act as if this controller was awarded bonus credits from the lsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_target_platform",
	['string'],
	"void",
	['HR', 'H4'],
	"Set target platform for shader compiling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_shader_pipeline",
	['string'],
	"void",
	['HR', 'H4'],
	"Set valid part of pipeline for compiling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_filter_shader_type",
	['string'],
	"void",
	['HR', 'H4'],
	"Skip compiling for one specifical type of templated shader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_filter_category_option",
	['string-1', 'string-2'],
	"void",
	['HR', 'H4'],
	"Skip compiling for one specifical combination of category and option for templated shader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_set_string",
	['long', 'string_id'],
	"void",
	['HR', 'H4'],
	"Set the primary campaign objective string into the objectives text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_set_string",
	['long', 'string_id'],
	"void",
	['HR', 'H4'],
	"Set the secondary campaign objective string into the objectives text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show_string",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Show secondary campaign objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish_string",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Mark secondary campaign objective as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_unavailable_string",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Mark secondary campaign objective as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_show_string",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Show secondary campaign objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_finish_string",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Mark secondary campaign objective as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_unavailable_string",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Mark secondary campaign objective as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_game_variant",
	['boolean', 'string'],
	"void",
	['HR', 'H4'],
	"Writes the current game variant to a file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_use_hopper_directory",
	['string'],
	"void",
	['HR'],
	"Set which hopper directory to use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_speculative_migration_badness_history",
	['boolean', 'short'],
	"void",
	['HR', 'H4'],
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_bridging_badness_history",
	['boolean', 'short'],
	"void",
	['HR', 'H4'],
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_speculative_migration_badness_history",
	['boolean', 'short'],
	"void",
	['HR', 'H4'],
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_bridging_badness_history",
	['boolean', 'short'],
	"void",
	['HR', 'H4'],
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_variant",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Network test: sets the game variant to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppression",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable event suppression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppress_display",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Disables console display for events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_display",
	['event'],
	"void",
	['HR', 'H4'],
	"Sets the global event console display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_log",
	['event'],
	"void",
	['HR', 'H4'],
	"Sets the global event log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_debugger",
	['event'],
	"void",
	['HR', 'H4'],
	"Sets the global event debugger display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_datamine",
	['event'],
	"void",
	['HR', 'H4'],
	"Sets the global event datamine level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_display",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_force_display",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the forced console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_log",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_debugger",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the debugger display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_debugger_break",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the debugger break level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_halt",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the halt (assert/crash) level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_datamine",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Sets the datamine level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_list_categories",
	['string'],
	"void",
	['HR', 'H4'],
	"Lists all categories that exist under a particular category string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_disable_suppression",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_suppression): disable/enable event suppression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_display_category",
	['event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_global_display): sets the global event console display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_log_category",
	['event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_global_log): sets the global event log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_remote_log_category",
	['event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_global_datamine): sets the global event datamine level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_display_category",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_category_display): sets the console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_force_display_category",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_category_force_display): sets the forced console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_debugger_break_category",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_category_debugger_break): sets the debugger break level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_halt_category",
	['string', 'event'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_category_halt): sets the halt (assert/crash) level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_list_categories",
	['string'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_list_categories): lists all categories that exist under a particular category string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppress_console_display",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Deprecated(use events_suppress_display): disables console display for events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits_skip_to_menu",
	[],
	"void",
	['HR'],
	"Plays credits movie, pressing any button will stop credits and launch main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_header_flag",
	['long', 'boolean'],
	"void",
	['HR', 'H4'],
	"Sets the source flags of the data mine header (used for backend bucketing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_show_guide_status",
	[],
	"void",
	['HR'],
	"Prints the guide status as automation events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_show_users_xuids",
	[],
	"void",
	['HR'],
	"Prints the signed in users' xuids as automation events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_show_are_users_friends",
	['long', 'string'],
	"void",
	['HR'],
	"Prints whether the current controller and specified xuid are friends as automation events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_invite_friend",
	['long', 'string'],
	"void",
	['HR'],
	"Shows the guide send friend invite ui from the current controller to the specified xuid",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_get_squad_session_id",
	[],
	"void",
	['HR'],
	"Get the current squad session id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_active_screens",
	['long'],
	"void",
	['HR', 'H4'],
	"<arbitrary int> list the current cui screens",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_screen_components",
	['long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"<arbitrary int> <window index> lists widgets in a screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_component_properties",
	['long-1', 'long-2', 'string_id'],
	"void",
	['HR', 'H4'],
	"<arbitrary int> <window index> <component_name> lists a component's property names, types and values",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_send_button_press",
	['long-1', 'long-2', 'long-3', 'string'],
	"void",
	['HR', 'H4'],
	"<arbitrary int> <window index> <controller index> <button name> sends the button press to the screen.  use controller index -1 for automatically guessing the right controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_string_id",
	['long-1', 'long-2', 'string_id-1', 'string_id-2', 'string_id-3', 'string_id-4'],
	"void",
	['HR', 'H4'],
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_long",
	['long-1', 'long-2', 'string_id-1', 'string_id-2', 'string_id-3', 'long-3'],
	"void",
	['HR', 'H4'],
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_boolean",
	['long-1', 'long-2', 'string_id-1', 'string_id-2', 'string_id-3', 'boolean'],
	"void",
	['HR', 'H4'],
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_text",
	['long-1', 'long-2', 'string_id-1', 'string_id-2', 'string_id-3', 'string'],
	"void",
	['HR', 'H4'],
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_download_storage_file",
	['string-1', 'string-2'],
	"void",
	['HR'],
	"<url> <filename> downloads a file from lsp to the client",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_game_results_save_to_file",
	['string'],
	"void",
	['HR'],
	"<filename> save game results to a file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_game_results_load_from_file",
	['string'],
	"void",
	['HR'],
	"<filename> load game results into memory for use in the carnage report.  the format may change build to build causing this to fail or weird results to come up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_game_results_make_random",
	[],
	"void",
	['HR'],
	"Makes random game results using the current variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_fragment_utility_drive",
	['long-1', 'long-2', 'long-3'],
	"void",
	['HR'],
	"<file_count> <growth_repetitions> <growth_size> writes files of varying sizes to the utiltiy drive in an effort to fragment it really badly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now_on_next_kill",
	['string'],
	"void",
	['HR', 'H4'],
	"Uploads files for a bug <name> for the next kill that could produce an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_selected_actor_jump",
	['real-1', 'real-2'],
	"void",
	['HR', 'H4'],
	"Makes the currently selected actor jump x wus forward and y wus up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_loaded_tags",
	[],
	"void",
	['HR'],
	"Dump a list of open tags to tag_dump_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_start",
	['string_id'],
	"void",
	['HR', 'H4'],
	"<name> starts up the specified interpolator - uses the name of the interpolator defined in tags, not scenario_interpolatorxx!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_stop",
	['string_id'],
	"void",
	['HR', 'H4'],
	"<name> stops the progression of the specified interpolator - uses the name of the interpolator defined in tags, not scenario_interpolatorxx!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_stop_all",
	[],
	"void",
	['HR', 'H4'],
	"Stops all interpolators",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_dump",
	['string_id'],
	"void",
	['HR', 'H4'],
	"<name> prints out the status of the specified interpolator",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_dump_all",
	[],
	"void",
	['HR', 'H4'],
	"Prints out the status of all defined interpolators in the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_animation",
	['animation_graph', 'string_id'],
	"void",
	['HR'],
	"Begin loading an animation for the graph provided",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_player_count_by_team",
	['mp_team'],
	"long",
	['HR', 'H4'],
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_end_with_winning_player",
	['player'],
	"void",
	['HR', 'H4'],
	"Ends the current round with a winning player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_end_with_winning_team",
	['mp_team'],
	"void",
	['HR', 'H4'],
	"Ends the current round with a winning team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_end",
	[],
	"void",
	['HR', 'H4'],
	"Ends the current round with no winning team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"profiler_dump_history",
	[],
	"void",
	['HR'],
	"Dump profile history",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_mode",
	['unit', 'long'],
	"void",
	['HR', 'H4'],
	"<unit_index> <mode_index> sets user's camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_flying_cam_at_point",
	['unit', 'cutscene_camera_point'],
	"void",
	['HR', 'H4'],
	"<unit_index> <camera_point> sets a flying camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_target",
	['unit', 'object'],
	"void",
	['HR', 'H4'],
	"<unit_index> <object_index> sets the current camera's target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_orbiting_cam_at_target_relative_point",
	['unit', 'string_id', 'real-1', 'real-2', 'real-3'],
	"void",
	['HR', 'H4'],
	"<unit_index> <target_marker_name> <relative_x_position> <relative_y_position> <relative_z_position> sets an orbiting camera pointing at a given marker from an object relative point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_cycle_debug_camera",
	['long'],
	"void",
	['HR', 'H4'],
	"<user index>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"string_id_name",
	['long'],
	"void",
	['HR', 'H4'],
	"Prints the name of the string id to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_recycling_volume_by_type",
	['trigger_volume', 'long-1', 'long-2', 'long-3'],
	"void",
	['HR'],
	"Removes garbage objects matching the type mask in the specified trigger volume to a max count over n seconds. 1=biped, 2=vehicle, 4=weapon, 8=equipment, and 1024=crate. add values together for combos, zero means all types syntax: <trigger_volume> <max_count> <time_to_collect> <type_mask>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_tag_stats",
	[],
	"void",
	['HR'],
	"Dump tag group memory usage stats into tag_groups_memory_usage_stats.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_run_locally",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Run off local storage files e:\\reach\\storage\\title\\<title_id>\\",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"on_target_platform",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if the game thinks it's running on the target platform",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"f7_profiler_enable",
	['boolean'],
	"void",
	['HR'],
	"Toggles the profile collection on/off - use to eliminate 95% of f7 profiler cpu overhead if desired for testing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"f7_profiler_substring_activate",
	['string'],
	"void",
	['HR'],
	"Activates profile sections based on a substring. supports * wildcard. use profiler_activate  to reset filtering",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"f7_profiler_substring_deactivate",
	['string'],
	"void",
	['HR'],
	"Deactivates profile sections based on a substring. supports * wildcard. use profiler_deactivate  to reset filtering",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_get_game_id",
	[],
	"void",
	['HR', 'H4'],
	"Prints the id of the game to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"noguchis_mystery_tour",
	['string'],
	"void",
	['HR'],
	"Set the additional music directory to dump into the cache file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_film_timestamp",
	['real'],
	"void",
	['HR', 'H4'],
	"Seeks to a film time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_is_active",
	['any_tag_not_resolving'],
	"boolean",
	['HR', 'H4'],
	"Returns true/false if you can create this tag with the active zones",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_enabled",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable the priority display system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_object_names",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable object name display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_machine_filter",
	[],
	"void",
	['HR', 'H4'],
	"Set machine filter to output user 0's currently watched player (selected via follow cam in film)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_priority_scope_tick",
	[],
	"void",
	['HR', 'H4'],
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_priority_scope_second_worst",
	[],
	"void",
	['HR', 'H4'],
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_priority_scope_second_best",
	[],
	"void",
	['HR', 'H4'],
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_color_by_relevance",
	[],
	"void",
	['HR', 'H4'],
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_color_by_update_period",
	[],
	"void",
	['HR', 'H4'],
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_color_by_final_priority",
	[],
	"void",
	['HR', 'H4'],
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_map_variant",
	['boolean', 'string'],
	"void",
	['HR', 'H4'],
	"Writes the current map variant to a file in .bin format (same as .mvar)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_load_and_use_map_variant",
	['string'],
	"void",
	['HR', 'H4'],
	"Reads a built map variant and slams it into the squad session",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"write_current_map_variant",
	['boolean', 'string'],
	"void",
	['HR', 'H4'],
	"Writes the current map variant to a file in .mvar format (same as .bin). see map_variants subdirectory on your devkit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"read_map_variant_and_make_current",
	['string'],
	"void",
	['HR', 'H4'],
	"Reads a map variant from a .mvar file in the map_variants subdirectory and slams it into the squad session.  can be executed in the lobby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"async_set_thread_work_delay_milliseconds",
	['long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Set an artificial delay time for a specific async thread to test the performance of any asynchronous task work",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate_from_editor",
	['any_tag'],
	"void",
	['HR', 'H4'],
	"Activates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_deactivate_from_editor",
	['any_tag'],
	"void",
	['HR'],
	"Deactivates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_lock_gaze",
	['player', 'point_reference', 'real'],
	"void",
	['HR', 'H4'],
	"Player turn to face point with max velocity degrees/second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_unlock_gaze",
	['player'],
	"void",
	['HR'],
	"Unlock player from any gaze point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_cinematic_title",
	['player', 'cutscene_title'],
	"void",
	['HR', 'H4'],
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_animation_graph",
	['animation_budget_reference'],
	"animation_graph",
	['HR', 'H4'],
	"Get a non resolving reference to a model animation graph budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_looping_sound",
	['looping_sound_budget_reference'],
	"looping_sound",
	['HR', 'H4'],
	"Get a non resolving reference to a looping sound budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enable_stuck_flying_kill",
	['ai', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable suicide condition for flying vehicles who are 'stuck'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_stuck_velocity_threshold",
	['ai', 'real'],
	"void",
	['HR', 'H4'],
	"Change the velocity threshold at which we will detect 'stuck' directional flying movement",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_sound",
	['sound_budget_reference'],
	"sound",
	['HR'],
	"Get a non resolving reference to a looping sound budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_get_object",
	['long-1', 'long-2'],
	"object",
	['HR', 'H4'],
	"Get an object used in a cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_override_team",
	['long', 'team'],
	"void",
	['HR'],
	"Sets the team for a specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_stance",
	['unit', 'string_id'],
	"void",
	['HR', 'H4'],
	"Specify the desired stance for this unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_stance",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Specify the stance for all players currently in the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_insert_marker",
	['string'],
	"void",
	['HR', 'H4'],
	"Inserts a film marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_marker",
	['long'],
	"void",
	['HR'],
	"Seeks to a film marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_simulation_set_stream_bandwidth",
	['long'],
	"void",
	['HR', 'H4'],
	"Adjusts the per-stream bandwidth cap and forces all streams to limit themselves to that cap immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_fadeout_time",
	['real'],
	"void",
	['HR', 'H4'],
	"Set fadeout time for sound channel debugger",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"skull_enable",
	['skull', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable the given skull",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"allow_object_to_be_lased",
	['object', 'boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable object laser designation for prototyping purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_object_being_lased",
	['object'],
	"boolean",
	['HR', 'H4'],
	"Check whether an object is being lased by a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_get_player_score",
	['player'],
	"long",
	['HR', 'H4'],
	"Calculates the score for an individual player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"load_binary_game_engine",
	['string'],
	"void",
	['HR', 'H4'],
	"Load a compiled megalo engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_files_display_file_names",
	[],
	"void",
	['HR', 'H4'],
	"Displays files network storage is tracking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_files_force_download",
	['string'],
	"void",
	['HR', 'H4'],
	"Forces the download of a network file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_colorbars",
	['long'],
	"void",
	['HR', 'H4'],
	"Show the lightmap status",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_force_global_repeater_use",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Forces maximum repeater use, with randomly shuffling repeater assignments every few seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"levels_add_multiplayer_map",
	['string'],
	"void",
	['HR', 'H4'],
	"<scenario> add a single scenario to mp level datum array",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_team_picker_unit_test",
	[],
	"void",
	['HR', 'H4'],
	"Run team picker unit tests",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_objects_unit_seats_filter",
	['string'],
	"void",
	['HR', 'H4'],
	"Set the filter for unit seat debugging.  set to empty string to clear",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_lock_enforcement",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable or disable assertions in the synchronization manager lock hierarchy",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rewards_get_cookie_total",
	['controller'],
	"long",
	['HR'],
	"Fetches the specified controller's lifetime cookie earn total (not his currently available cookies!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_set_screen_name_override_prefix",
	['string'],
	"void",
	['HR', 'H4'],
	"Set prefix for cui screen name overrides",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_load_screen",
	['cui_screen_definition'],
	"void",
	['HR', 'H4'],
	"Loads a cui screen from a definition tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_load_themed_screen",
	['cui_screen_definition', 'string_id'],
	"void",
	['HR', 'H4'],
	"Loads a cui screen from a definition tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_profile_clear_to_default_values",
	['controller'],
	"void",
	['HR', 'H4'],
	"Slam the specified controller to default profile values",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident",
	['string_id'],
	"void",
	['HR', 'H4'],
	"Fire a global incident for all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_player",
	['string_id', 'player'],
	"void",
	['HR', 'H4'],
	"Fire an incident for a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_team",
	['string_id', 'mp_team'],
	"void",
	['HR', 'H4'],
	"Fire an incident for a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_player_and_effect_player",
	['string_id', 'player-1', 'player-2'],
	"void",
	['HR', 'H4'],
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_player_and_effect_team",
	['string_id', 'player', 'mp_team'],
	"void",
	['HR', 'H4'],
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_team_and_effect_player",
	['string_id', 'mp_team', 'player'],
	"void",
	['HR', 'H4'],
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_team_and_effect_team",
	['string_id', 'mp_team-1', 'mp_team-2'],
	"void",
	['HR', 'H4'],
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_campaign_team",
	['string_id', 'team'],
	"void",
	['HR', 'H4'],
	"Loops over all players on the campaign team and calls submit_incident_with_cause_player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_campaign_insertion_point",
	['short'],
	"void",
	['HR'],
	"Set the campaign insertion point squad session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hs_make_interactive_scripts_deterministic",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable or disable the routing of interactive script execution through the simulation system for determinism.  you can also use determinize <normal script call> to determinize a single script call",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"threadlib_runtests",
	[],
	"void",
	['HR'],
	"Runs the unit tests for threadlib",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_respawn_vehicle",
	['player', 'object_definition'],
	"void",
	['HR', 'H4'],
	"Sets a vehicle definition for a player to spawn in - the player will continue to spawn in this vehicle until you set it to none",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"teleport_players_into_vehicle",
	['unit'],
	"boolean",
	['HR', 'H4'],
	"Tries to teleport all alive players into the specified vehicle, returns true if all players ended up in the vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"command_buffer_cache_playback_enable",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable command buffer playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_spartan_loadout",
	['player'],
	"void",
	['HR', 'H4'],
	"Set player loadout palette to spartan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_elite_loadout",
	['player'],
	"void",
	['HR', 'H4'],
	"Set player loadout palette to elite",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"location_names_print",
	[],
	"void",
	['HR', 'H4'],
	"Print all valid location names for the current scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host",
	['string'],
	"void",
	['HR', 'H4'],
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host_squad",
	['string'],
	"void",
	['HR', 'H4'],
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host_posse",
	['string'],
	"void",
	['HR', 'H4'],
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host_group",
	['string'],
	"void",
	['HR', 'H4'],
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_dump_network_statistics",
	[],
	"void",
	['HR'],
	"Dump the current local network statistics structure to a file (same blob that is uploaded to machineupdatenetworkstats.ashx)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_enable_block_detection",
	['long'],
	"void",
	['HR', 'H4'],
	"If non-zero, turns on network block detection w/ the provided ms threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_enable_block_detection",
	['long'],
	"void",
	['HR', 'H4'],
	"If non-zero, turns on main loop block detection w/ the provided ms threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_synchronous_networking_request_vblank_slip",
	[],
	"void",
	['HR', 'H4'],
	"Force the main loop to slip an extra vblank during its next sleep to try to get to a more stable place relative to the incoming game tick stream",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_button_action_mapping_set",
	['long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Allows remapping of individual actions in custom button preset, contact a programmer for a list of what each parameter corresponds to",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_appearance_force_model_area",
	['long', 'string_id'],
	"void",
	['HR', 'H4'],
	"Force every player to spawn with a particular selection for a particular area",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_appearance_force_model_area_disable",
	['long'],
	"void",
	['HR', 'H4'],
	"Disable forcing every player to spawn with a particular selection for a particular area",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_instanced_geometry_names_filter",
	['string'],
	"void",
	['HR', 'H4'],
	"Filters instance debugging by name (substring included, set to emptry string to clear)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"stream_manager_load_core",
	['string'],
	"void",
	['HR', 'H4'],
	"Slam the network stream manager state with a saved core",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"stream_manager_save_cores",
	['long'],
	"void",
	['HR', 'H4'],
	"Begin dumping cores every x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_waypoint_flags",
	['controller', 'long', 'boolean'],
	"void",
	['HR', 'H4'],
	"Set a waypoint flag in the profile (outgoing to waypoint)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"waypoint_set_unlock_flag",
	['controller', 'long', 'boolean'],
	"void",
	['HR', 'H4'],
	"Set a waypoint flag in the profile (incoming from waypoint)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"async_test_hang",
	['real', 'long-1', 'long-2'],
	"void",
	['HR', 'H4'],
	"Create and async task that hangs for the specified number of seconds with the specified async category and priority",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_campaign",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as campaign",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_firefight",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as firefight",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_multiplayer",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as multiplayer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_matchmaking",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as matchmaking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_custom_games",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as custom games",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_solo",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as solo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_coop",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as coop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_four_player_coop",
	[],
	"void",
	['HR', 'H4'],
	"Force all incidents to report as 4 player coop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_sound_stress_test_message_queue",
	[],
	"void",
	['HR', 'H4'],
	"Generate a bunch of messages to fill up the message queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_log_channel_message_queue_state",
	['long', 'boolean'],
	"void",
	['HR', 'H4'],
	"Turn on/off logging of message queue state every time a message is sent for the specified channel index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"global_preferences_set_campaign_state",
	['long'],
	"void",
	['HR'],
	"Sets the global preferences campaign state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"lightmap_memory_inspect",
	[],
	"void",
	['HR'],
	"Output the lightmap memory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_set_random_holiday",
	[],
	"void",
	['HR', 'H4'],
	"Set the game to a random holiday (used by stress to verify that setting boxes to random holidays on boot doesn't cause films to go out of sync)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"airstrike_enable",
	['boolean'],
	"void",
	['HR'],
	"Enable/disable airstrikes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"airstrike_weapons_exist",
	[],
	"boolean",
	['HR'],
	"Returns whether there is a player enable/disable airstrikes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"airstrike_set_launches",
	['long'],
	"void",
	['HR'],
	"Sets the number of available airstrikes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_global_property_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Add global property watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_property_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Add property watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_global_property_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Remove global property watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_property_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Remove property watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_global_property_watches",
	[],
	"void",
	['HR', 'H4'],
	"Remove all global property watches",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_property_watches",
	[],
	"void",
	['HR', 'H4'],
	"Remove all property watches for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_global_binding_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Add global binding watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_binding_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Add binding watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_global_binding_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Remove global binding watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_binding_watch",
	['string'],
	"void",
	['HR', 'H4'],
	"Remove binding watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_global_binding_watches",
	[],
	"void",
	['HR', 'H4'],
	"Remove all global binding watches",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_binding_watches",
	[],
	"void",
	['HR', 'H4'],
	"Remove all binding watches for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_global",
	[],
	"void",
	['HR', 'H4'],
	"Clear all global state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear",
	[],
	"void",
	['HR', 'H4'],
	"Clear all state for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_record_custom_penalty",
	['player', 'real'],
	"void",
	['HR', 'H4'],
	"Add griefing points to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_reset",
	[],
	"void",
	['HR', 'H4'],
	"Reset griefing system for xbox",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_force_social_matchmaking",
	[],
	"void",
	['HR', 'H4'],
	"Force the griefing system to believe that it is social matchmaking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_force_ranked_matchmaking",
	[],
	"void",
	['HR', 'H4'],
	"Force the griefing system to believe that it is ranked matchmaking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_ranked_matchmaking_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the ranked matchmaking multiplier",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_social_matchmaking_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the ranked matchmaking multiplier",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_custom_game_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Force the griefing system to believe it is a custom game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_objects_in_sphere_radius",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the maximum distance for nearby enemey players/ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_ai_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the multiplier for ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_enemy_ai_nearby_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the multiplier when an enemy ai is nearby the betrayed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_enemy_player_nearby_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the multiplier when an enemy player is nearby the betrayed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_same_squad_multiplier",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the multiplier when both the betrayed and betrayer are in the same matchmaking party",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_shield_damage_base_penalty",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the shield damage base penalty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_body_damage_base_penalty",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the body damage base penalty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_betrayal_base_penalty",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the betrayal base penalty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_betrayal_boot_cutoff",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the betrayal boot cutoff",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_ejection_cutoff",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the ejection cutoff",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_betrayal_decay_seconds",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the seconds it takes to decay a griefing point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_eject_decay_seconds",
	['real'],
	"void",
	['HR', 'H4'],
	"Set the seconds it takes to decay an ejection point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_disconnect_and_reconnect_all_channels",
	[],
	"void",
	['HR', 'H4'],
	"For reproing omaha bug 26715, allows you to instantly unilaterally reset a machine's network message queues, bringing a danger of misinterpreting incoming fragments",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_profile",
	['starting_profile', 'player?'],
	"void",
	['HR', 'H4'],
	"Sets the profile for this player to spawn/respawn with",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_set_challenge_response",
	['string', 'boolean', 'long'],
	"void",
	['HR', 'H4'],
	"Change challenge responses",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_set_challenge_failure_on_timeout",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Enable/disable failures on timeouts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_set_challenge_force_fail",
	['boolean'],
	"void",
	['HR', 'H4'],
	"Force challenge response failures",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_disable_challenges",
	['boolean'],
	"void",
	['HR'],
	"Disables security challenges",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_player_appearance_encode_for_sneakernet",
	[],
	"void",
	['HR'],
	"Creates an encoded player appearance suitable for sneakernet from the first signed in controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_player_appearance_decode_from_sneakernet",
	['string'],
	"void",
	['HR'],
	"Applies a sneakernet encoded player appearance to the first signed in controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_content_resize_cache",
	['long'],
	"void",
	['HR'],
	"Set ui content cache size",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motl_dump_bitvector_for_scenario",
	[],
	"void",
	['HR', 'H4'],
	"Dumps the multiplayer object type bitvector for the current loaded scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motl_verify_mapinfo_for_scenario",
	[],
	"void",
	['HR'],
	"Checks the current level's mapinfo motl bitvector against what is actually loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"EnableWeaponTTEDebug",
	['boolean'],
	"void",
	['HR'],
	"Enable/disable player weapon fire rate debug info",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ForceFullAutoMagnum",
	['boolean'],
	"void",
	['HR'],
	"Force magnum into full auto mode?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ForceAllFullAuto",
	['boolean'],
	"void",
	['HR'],
	"Force all weapons into full auto mode?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"DisablePauseOnDefocus",
	['boolean'],
	"void",
	['HR'],
	"Disable the pause on defocus behaviour - can be used to speed up tag load whilst doing other work",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"EnablePlayerBarrelStateDebug",
	['boolean'],
	"void",
	['HR'],
	"Enable/disable player weapon barrel state debug info",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"DisableWeaponTimingFeatures",
	[],
	"void",
	['HR'],
	"Disable all weapon debug features",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_secondary_trigger",
	['player'],
	"boolean",
	['HR'],
	"Returns true if any player has used weapon secondary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_secondary_trigger",
	[],
	"boolean",
	['HR', 'H4'],
	"Returns true if any player has used secondary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_key_evaluate",
	['string', 'boolean'],
	"void",
	['HR'],
	"Toggles the rendering of the first active user's weapon debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_machinima_camera_enable_toggle",
	[],
	"boolean",
	['HR'],
	"Returns true if it is now enabled or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_silently",
	['variable_name', 'expression'],
	"void",
	['H4'],
	"Set the value of a global variable without echoing the result",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_sleep",
	['short', 'script?'],
	"void",
	['H4'],
	"Pauses execution of this script (or, optionally, another script) for the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_advanced",
	['string'],
	"void",
	['H4'],
	"Print a string to the screen for debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_network",
	['string'],
	"void",
	['H4'],
	"Print a string to the screen for debugging purposes and distributes it to clients",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"string",
	['expression'],
	"string",
	['H4'],
	"Creates a string from the expression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon",
	['object'],
	"weapon",
	['H4'],
	"Converts an object to a weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bool",
	['value'],
	"boolean",
	['H4'],
	"Evaluates an object as a specific type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"real",
	['value'],
	"real",
	['H4'],
	"Evaluates an object as a specific type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"short",
	['value'],
	"short",
	['H4'],
	"Evaluates an object as a specific type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"long",
	['value'],
	"long",
	['H4'],
	"Evaluates an object as a specific type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_to_flag",
	['object', 'name', 'time', 'target', 'flag'],
	"void",
	['H4'],
	"Moves the specified object to the specified flag over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_to_point",
	['object', 'name', 'time', 'target', 'point'],
	"void",
	['H4'],
	"Moves the specified object to the specified point over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_along_point_set",
	['object', 'name', 'time', 'target', 'point', 'set'],
	"void",
	['H4'],
	"Moves the specified object along an ordered point set over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_by_offset",
	['object', 'name', 'time', 'X', 'offset-1', 'Y', 'offset-2', 'Z', 'offset-3'],
	"void",
	['H4'],
	"Moves the specified object by the specified vector over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_rotate_to_flag",
	['object', 'name', 'yaw', 'time-1', 'pitch', 'time-2', 'roll', 'time-3', 'target', 'flag'],
	"void",
	['H4'],
	"Rotates the specified object to the specified flags orientation over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_rotate_to_point",
	['object', 'name', 'yaw', 'time-1', 'pitch', 'time-2', 'roll', 'time-3', 'target', 'point'],
	"void",
	['H4'],
	"Rotates the specified object to aim at the specified point over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_rotate_by_offset",
	['object', 'name', 'yaw-1', 'time-1', 'pitch-1', 'time-2', 'roll-1', 'time-3', 'yaw-2', 'degrees-1', 'pitch-2', 'degrees-2', 'roll-2', 'degrees-3'],
	"void",
	['H4'],
	"Rotates the specified object by the specified angles over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thread",
	['function_name'],
	"long",
	['H4'],
	"Runs the specified static haloscript function in its own thread and continues",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"->",
	['object-1', 'name-1', 'member-1', 'function', 'call', '/-1', 'object-2', 'member-2', 'script', 'name-2', '/-2', 'member-3', 'variable'],
	"passthrough",
	['H4'],
	"Call a member script function on an object, or access object member data",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"__object_list_dtor",
	['long'],
	"void",
	['H4'],
	"Destructor function for hs object list type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"~",
	['real'],
	"real",
	['H4'],
	"Returns the negative of the specified expression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"queue_exec",
	['string'],
	"void",
	['H4'],
	"Executes a file full of arbitrary haloscript",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_text",
	['string'],
	"long",
	['H4'],
	"Displays rich text on screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_text_index",
	['long', 'string'],
	"long",
	['H4'],
	"Displays text at the given string index, overwriting any text that might already be displayed in that slot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"clear_all_text",
	[],
	"void",
	['H4'],
	"Clears all rich text currently being displayed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_defaults",
	[],
	"void",
	['H4'],
	"Restore rich text settings to defaults",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_lifespan",
	['long'],
	"void",
	['H4'],
	"Set rich text render life span in ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_color",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H4'],
	"Set rich text color in argb format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_margins",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H4'],
	"Set text margins as percentage offsets from the edges of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_scale",
	['real'],
	"void",
	['H4'],
	"Set text scale factor (default 1.0)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_indents",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"Set text indents",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_wrap",
	['boolean-1', 'boolean-2'],
	"void",
	['H4'],
	"Set text wrap modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_font",
	['font'],
	"void",
	['H4'],
	"Set whether the text should be bottom-justified (aligned to the bottom margin)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_justification",
	['text_justification'],
	"void",
	['H4'],
	"Set whether the text should be bottom-justified (aligned to the bottom margin)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_alignment",
	['text_alignment'],
	"void",
	['H4'],
	"Set the text alignment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_shadow_style",
	['text_drop_shadow_type'],
	"void",
	['H4'],
	"Set whether the text should be bottom-justified (aligned to the bottom margin)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_shadow_color",
	['real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H4'],
	"Set rich text shadow color in argb format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_variable",
	['string', 'boolean'],
	"void",
	['H4'],
	"Turn on/off debugging of a specific global variable); enclose the variable name with single quote characters ('my_variable')",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_script",
	['script'],
	"boolean",
	['H4'],
	"Immediately terminate the thread running the specified script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"IsThreadValid",
	['long'],
	"boolean",
	['H4'],
	"Returns true if the given thread index is a valid running thread. returns false if no running thread with the given index exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetCurrentThreadId",
	[],
	"long",
	['H4'],
	"Retrieves the current executing thread index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_possess_ai",
	['long', 'ai'],
	"void",
	['H4'],
	"Cause player of absolute index to possess specified ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_first_alive",
	[],
	"unit",
	['H4'],
	"Get the first player who is alive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_first_valid",
	[],
	"unit",
	['H4'],
	"Get the first player who is valid and connected, alive or dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_is_alive",
	['unit'],
	"boolean",
	['H4'],
	"Returns whether the biped is alive or dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trigger_volume_from_string",
	['string_id'],
	"trigger_volume",
	['H4'],
	"Retrieves the trigger volume with the provided name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_not_inside",
	['trigger_volume', 'cutscene_flag'],
	"void",
	['H4'],
	"Moves all players outside a specified trigger volume to a specified flag exiting vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_inside",
	['trigger_volume', 'cutscene_flag'],
	"void",
	['H4'],
	"Moves all players inside the specified trigger volume to a specified flag exiting vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_not_inside_with_vehicles",
	['trigger_volume', 'cutscene_flag'],
	"void",
	['H4'],
	"Moves all players outside a specified trigger volume to a specified flag with vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_inside_with_vehicles",
	['trigger_volume', 'cutscene_flag'],
	"void",
	['H4'],
	"Moves all players inside the specified trigger volume to a specified flag with vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"teleport_player_to_flag",
	['player', 'cutscene_flag', 'boolean'],
	"void",
	['H4'],
	"Teleports a player to the specified flag with or without their vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_object_bounding_sphere_center",
	['trigger_volume', 'object'],
	"boolean",
	['H4'],
	"Returns true if the specified object's bounding sphere center is within the specified volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players_lookat",
	['trigger_volume', 'real-1', 'real-2'],
	"boolean",
	['H4'],
	"Returns true if the trigger volume is viewable by any player (with the specified parameters). trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players_all_lookat",
	['trigger_volume', 'real-1', 'real-2'],
	"boolean",
	['H4'],
	"Returns true if the trigger volume is viewable by all players (with the specified parameters). trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trigger_volume_stats",
	[],
	"void",
	['H4'],
	"Print stats about current trigger volume usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_delete_from_flag",
	['effect', 'cutscene_flag'],
	"void",
	['H4'],
	"Deletes the specified effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_kill_from_flag",
	['effect', 'cutscene_flag'],
	"void",
	['H4'],
	"Deletes the specified effect at the specified flag, and kills all the particles from it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_restart_all_instances",
	['effect'],
	"void",
	['H4'],
	"Deletes the specified effect at all instance and restarts them",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_delete_all_in_volume",
	['trigger_volume'],
	"void",
	['H4'],
	"Deletes all unattached effects in the given volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_kill_object_marker",
	['effect', 'object', 'string_id'],
	"void",
	['H4'],
	"Stops a running effect that's on a specified object and marker, and kills all the particles from it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_attached_to_camera_new",
	['effect'],
	"void",
	['H4'],
	"Starts the specified effect attached to the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_attached_to_camera_stop",
	['effect'],
	"void",
	['H4'],
	"Stops the specified effect attached to the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_attached_to_camera_set_scale",
	['effect', 'real'],
	"void",
	['H4'],
	"Sets the scale of the specified effect attached to the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_between_points",
	['effect', 'cutscene_flag-1', 'cutscene_flag-2'],
	"void",
	['H4'],
	"Starts the specified effect between the specified flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_between_object_markers",
	['effect', 'object-1', 'string_id-1', 'object-2', 'string_id-2'],
	"void",
	['H4'],
	"Starts the specified effect between the specified objects at the specified markers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetSkyObjectOverride",
	['string_id'],
	"object",
	['H4'],
	"Overrides the sky from the .scenario file with an explicit sky.  none to clear override",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"move_cutscene_flag",
	['cutscene_flag', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7'],
	"void",
	['H4'],
	"Moves a cutscene flag (from maya)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_light_cone_parameters",
	['cutscene_flag', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7'],
	"void",
	['H4'],
	"Changes the parameters on a light cone (from maya)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screen_effect_new",
	['any_tag', 'cutscene_flag'],
	"void",
	['H4'],
	"Starts the specified area screen effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screen_effect_delete",
	['any_tag', 'cutscene_flag'],
	"void",
	['H4'],
	"Deletes the specified area screen effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_dissolve_from_marker",
	['object', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Activates an object's dissolve of a specified type from the specified marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_clip_plane",
	['object', 'cutscene_flag'],
	"void",
	['H4'],
	"Turns on a clip plane for the object at the given marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_clip_plane",
	['object'],
	"void",
	['H4'],
	"Turns off the clip plane for the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_with_fire",
	['object', 'string_id', 'real'],
	"void",
	['H4'],
	"Causes the specified damage at the specified object using fire damage response effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_with_fire_from_object",
	['object-1', 'object-2', 'string_id', 'real'],
	"void",
	['H4'],
	"Causes the specified damage at the specified object using fire damage response effect with the fire objects position for damage origin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_with_fire_from_trigger_volume",
	['object', 'trigger_volume', 'string_id', 'real'],
	"void",
	['H4'],
	"Causes the specified damage at the specified object using fire damage response effect with the trigger volumes centre of mass for damage origin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_damaged_by_unit",
	['player', 'long', 'short'],
	"boolean",
	['H4'],
	"Has player been damaged by given unit within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_damaged_by_ai",
	['player', 'ai', 'short'],
	"boolean",
	['H4'],
	"Has player been damaged by specified ai within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_damaged_by_weapon",
	['player', 'object_definition', 'short'],
	"boolean",
	['H4'],
	"Has player been damaged by given weapon type within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_damaged_by_unit",
	['object_list', 'long', 'short'],
	"boolean",
	['H4'],
	"Has anyone in player unit list been damaged by given unit within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_damaged_by_ai",
	['object_list', 'ai', 'short'],
	"boolean",
	['H4'],
	"Has anyone in player unit list been damaged by specified ai within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_damaged_by_weapon",
	['object_list', 'object_definition', 'short'],
	"boolean",
	['H4'],
	"Has anyone in player unit list been damaged by given weapon type within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_valid",
	['object_name'],
	"boolean",
	['H4'],
	"Returns whether an object by this name exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_active_for_script",
	['object'],
	"boolean",
	['H4'],
	"Returns whether the object is in a state where its scripts are running",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"find_object_name_from_string_id",
	['string_id'],
	"object_name",
	['H4'],
	"Find an object name using a string id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_string_id",
	['string_id'],
	"void",
	['H4'],
	"Creates an object from the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_list",
	['object_list'],
	"void",
	['H4'],
	"Destroys all objects in a list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"lookup_object_name_index_by_name",
	['object_name'],
	"void",
	['H4'],
	"Displays the scenario object index for the given name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"lookup_folder_index_by_name",
	['folder'],
	"void",
	['H4'],
	"Displays the scenario folder index for the given name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hs_object_buckling_magnitude_get",
	['object'],
	"real",
	['H4'],
	"Returns the amoount [0-1] that a scarab is buckling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cortana_rampancy_set",
	['real'],
	"void",
	['H4'],
	"Sets cortana's rampancy value, from 0 to 1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cortana_rampancy_get",
	[],
	"real",
	['H4'],
	"Returns cortana's rampancy value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"self_illum_color_setting_set",
	['long'],
	"void",
	['H4'],
	"Sets forerunner self illumination color setting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"self_illum_color_setting_get",
	[],
	"long",
	['H4'],
	"Gets forerunner self illumination color setting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_cinematic_function_variable",
	['object', 'boolean', 'string_id', 'real-1', 'real-2'],
	"void",
	['H4'],
	"Sets funciton variable for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_cinematic_function_variable",
	['object', 'boolean', 'string_id'],
	"void",
	['H4'],
	"Clears one funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_all_cinematic_function_variables",
	['object', 'boolean?'],
	"void",
	['H4'],
	"Clears all funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_phantom_directional_multiplier",
	['object', 'real'],
	"void",
	['H4'],
	"Sets directional acceleration multiplier",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_dispose",
	['object'],
	"void",
	['H4'],
	"Marks a placed object as garbage to be collected on next pass",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_x",
	['object'],
	"real",
	['H4'],
	"Returns x component of object's world location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_y",
	['object'],
	"real",
	['H4'],
	"Returns y component of object's world location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_z",
	['object'],
	"real",
	['H4'],
	"Returns z component of object's world location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_current_zone_set_objects",
	[],
	"void",
	['H4'],
	"Dumps objects loaded in the current zone set according to bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_maximum_vitality",
	['object', 'boolean'],
	"real",
	['H4'],
	"Object_get_maximum_vitality <object> <ignoredifficulty_bool>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_health",
	['object', 'real'],
	"void",
	['H4'],
	"Set the health [0,1] of the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_override_physics_motion_type",
	['object', 'long'],
	"void",
	['H4'],
	"Overrides the motion type of the object [1st paramater object, 2nd parameter 0:default, 1:fixed, 2:keyframed, 3:dynamic]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_physically_attach",
	['object-1', 'string_id-1', 'object-2', 'string_id-2'],
	"void",
	['H4'],
	"Attaches the second object to the first and keeps the child physical both strings can be empty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_velocity",
	['object'],
	"real",
	['H4'],
	"Returns the singular velocity of the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_angular_velocity",
	['object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Sets the (object-relative) angular velocity of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_damage_repair_section",
	['object', 'string_id', 'real'],
	"void",
	['H4'],
	"Applies repair to a damage section",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_orientation_direct",
	['object', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H4'],
	"Moves the specified object to the given world-space position and orientation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_orientation_direct_by_id",
	['long', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H4'],
	"Moves the specified (by uid) object to the given world-space position and orientation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_child_interaction_locked",
	['object', 'boolean'],
	"void",
	['H4'],
	"Set or clear a lock on the interaction with any children of this object.  use to lock the contents of a closed crate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_cinematic_visibility",
	['object', 'boolean'],
	"void",
	['H4'],
	"Turn on or off forced inclusion of this object in the visible set, as if a cinematic object.  use with caution.  use to make control object device machines part of the scene so children don't become inactive.  <object> <true/false>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_get_variant_index",
	['object_definition', 'string_id'],
	"long",
	['H4'],
	"Returns variant index from object tag and variant name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_teleport_to_object",
	['object-1', 'object-2'],
	"void",
	['H4'],
	"Moves the specified object to in front of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_teleport_to_location",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H4'],
	"Teleports player to a given location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prefab_set_scale",
	['long-1', 'long-2', 'real'],
	"void",
	['H4'],
	"Sets the scale of a prefab, and all of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prefab_set_rotation",
	['long-1', 'long-2', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H4'],
	"Sets the rotation of a prefab, and all of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prefab_set_translation",
	['long-1', 'long-2', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Sets the translation of a prefab, and all of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_region_properties",
	['object', 'string_id'],
	"short",
	['H4'],
	"Gets the current model properties of the desired region, e.g. (object_get_region_properties marine head)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ObjectOverrideNavMeshCutting",
	['object', 'boolean'],
	"void",
	['H4'],
	"Force an object to cut or not cut the navmesh",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ObjectOverrideNavMeshObstacle",
	['object', 'boolean'],
	"void",
	['H4'],
	"Force an object to generate or not generate navmesh obstacles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_range",
	['short-1', 'short-2'],
	"short",
	['H4'],
	"Returns a random value in the range [lower bound, upper bound]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"real_random_range",
	['real-1', 'real-2'],
	"real",
	['H4'],
	"Returns a random value in the range [lower bound, upper bound]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_force_value",
	['string', 'real'],
	"void",
	['H4'],
	"Makes any random for the purpose return the supplied value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_display_value",
	['string'],
	"void",
	['H4'],
	"Display the value for the given random purpose",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_get_gravity",
	[],
	"real",
	['H4'],
	"Get global gravity acceleration relative to halo standard gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_toggle_force_gravity_actions",
	['boolean', 'real'],
	"void",
	['H4'],
	"Toggle forcing gravity actions on all objects that get created",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_gravity",
	['object', 'real', 'boolean'],
	"void",
	['H4'],
	"Sets the gravity local to this object. this is relative to halo gravity(earth*1.3), just like physics_set_gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_remove_all_gravity_actions",
	[],
	"void",
	['H4'],
	"Turn off all gravity actions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_time_is_time",
	['long-1', 'long-2', 'long-3', 'long-4', 'long-5', 'long-6'],
	"boolean",
	['H4'],
	"In: year,month,day,hour,minute,seconds. returns true if the time specified is the current time. mask out inputs with -1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_set_enabled",
	['boolean'],
	"void",
	['H4'],
	"Enables/disables a test simulation of localized physics isolated from all other physics. [bool enabled]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_setup_from_object",
	['object-1', 'object-2'],
	"void",
	['H4'],
	"Simulates a debug object at the center of mass of the passed in object. [object early mover, object target]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_setup_relative_position",
	['object', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Simulates a debug object at a position relative to the early mover [object early mover, real x, real y, real z]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_realign",
	[],
	"void",
	['H4'],
	"Realigns the simulated object with the early mover [void]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_memory_enable_callstack_tracing",
	['boolean'],
	"void",
	['H4'],
	"Enables or disables havok memory system callstack traces",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_memory_dump_to_files",
	[],
	"void",
	['H4'],
	"Dumps stacktrace and tracker data to files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"HavokRemoveBSPRigidBodies",
	['long'],
	"void",
	['H4'],
	"Remove bsp rigid body",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"HavokAddBSPRigidBodies",
	['long'],
	"void",
	['H4'],
	"Remove bsp rigid body",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_time",
	['unit'],
	"long",
	['H4'],
	"Return the time remaining in the specified unit's cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"enable_first_person_fov",
	['object', 'boolean', 'short'],
	"void",
	['H4'],
	"Enable or disable the first-person fov tweak",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_object_list",
	[],
	"void",
	['H4'],
	"Outputs list of active objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_d3d_resources",
	[],
	"void",
	['H4'],
	"Outputs text of d3d resource usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_toggle_open",
	['unit'],
	"void",
	['H4'],
	"Toggles the hatches on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_kill_list_silent",
	['object_list'],
	"void",
	['H4'],
	"Kills a list of units silently (doesn't make them play their normal death animation or sound)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_hold_last_frame",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	['H4'],
	"Starts a custom animation playing on a unit and holds on the last frame (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_start_stopping_at_frame_and_hold",
	['unit', 'animation_graph', 'string_id', 'boolean', 'real'],
	"boolean",
	['H4'],
	"Starts a custom animation playing on a unit and holds when it reaches the specified frame (unit, string animation_graph, string animation_name, bool interpolate, real frame)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_team_index",
	['unit'],
	"team",
	['H4'],
	"Returns the team index of the unit, returns -1 if the unit does not have a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle",
	['unit-1', 'unit-2', 'string_id'],
	"void",
	['H4'],
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle_immediate",
	['unit-1', 'unit-2', 'string_id'],
	"void",
	['H4'],
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_in_air_ticks",
	['vehicle'],
	"long",
	['H4'],
	"Returns number of ticks the vehicle has been airborne",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_unit_list",
	['unit', 'unit_seat_mapping', 'object_list'],
	"boolean",
	['H4'],
	"Tests whether the named seat has an object in the object list (use  to test all seats for any unit in the list)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_unit",
	['unit-1', 'unit_seat_mapping', 'unit-2'],
	"boolean",
	['H4'],
	"Tests whether the named seat has a specified unit in it (use  to test all seats for this unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat",
	['unit', 'unit_seat_mapping'],
	"boolean",
	['H4'],
	"Tests whether the named seat has any unit in it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_set_collision_group",
	['vehicle', 'havok_group'],
	"void",
	['H4'],
	"Override a vehicle's collision group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_ultimate_parent_vehicle_collision_group",
	['object', 'havok_group'],
	"void",
	['H4'],
	"Override a unit's ultimate parent's collision group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_maximum_vitality",
	['object', 'real-1', 'real-2'],
	"void",
	['H4'],
	"Sets a objects's maximum body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_record",
	['unit'],
	"void",
	['H4'],
	"Records the unit <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_play_on_unit",
	['unit'],
	"void",
	['H4'],
	"Plays a recording on the unit <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_play",
	['unit'],
	"void",
	['H4'],
	"Plays recorded motion on the specified unit <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_play_and_blend",
	['unit', 'real'],
	"void",
	['H4'],
	"Plays recorded motion on the specified unit and blends from where the previous recording left off <unit> <real: blend time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_playback_rate",
	['unit', 'real'],
	"void",
	['H4'],
	"Transitions to new playback rate over specified period of time <unit> <real: desired rate> <real: smooth seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_playback_rate_smooth",
	['unit', 'real-1', 'real-2'],
	"void",
	['H4'],
	"Sets the playback rate on the specified unit <unit> <real>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_time_position",
	['unit', 'real'],
	"void",
	['H4'],
	"Sets the position in the time line to the specified time on the specified unit <unit> <real>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_get_time_position_seconds",
	['unit'],
	"real",
	['H4'],
	"Get the current time position in seconds <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_pause_smooth",
	['unit', 'boolean', 'real'],
	"void",
	['H4'],
	"Transitions to/from a pause  <unit> <bool:paused> <real:smooth_seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_rewinding",
	['unit', 'boolean'],
	"void",
	['H4'],
	"Changes the playback direction <unit> <bool:reverse>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_paused",
	['boolean'],
	"void",
	['H4'],
	"Updates the paused status<bool paused>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_pause",
	['unit', 'boolean'],
	"void",
	['H4'],
	"Updates the paused status <unit><bool paused>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_stop",
	['unit'],
	"void",
	['H4'],
	"Stops recording and playback <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_load",
	['string'],
	"void",
	['H4'],
	"Loads the unit recording from the specified location <string filename>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_setup_for_unit",
	['unit', 'string'],
	"void",
	['H4'],
	"Sets up the unit to use/create a unit recording <unit> <string gamedata->scenariounitrecordings name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_equipment",
	['player', 'object_definition', 'boolean-1', 'boolean-2', 'boolean-3'],
	"void",
	['H4'],
	"<player> <object> <dropcurrent_bool> <primary_bool> <silent_bool> last 3 args: drop or delete current, primary or hero assist, silent or play effects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_equipment",
	['unit', 'object_definition', 'boolean-1', 'boolean-2', 'boolean-3'],
	"void",
	['H4'],
	"<unit> <equip_def> <dropcurrent_bool> <primary_bool> <silent_bool> last 3 args: drop or delete current, primary or hero assist, silent or play effects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_drop_weapon",
	['unit', 'weapon', 'long'],
	"void",
	['H4'],
	"3rd arg is type: 0:default, 1:delete, 2:dual_primary, 3:dual_secondary, 4:response_to_deletion, 5:throw",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_add_weapon",
	['unit', 'weapon', 'long'],
	"boolean",
	['H4'],
	"Returns success. 3rd arg is add method: -1:unknown, 0:normal, 1:silent, 2:as_only, 3:as_primary, 4:swap_for_primary, 5:as_secondary, 6:swap_for_secondary, 7:as_secondary_silently",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_current_amount",
	['weapon', 'real'],
	"void",
	['H4'],
	"<weapon> <percent> ; where percent is of max ammo or of full charge",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_rounds_total",
	['weapon', 'long'],
	"long",
	['H4'],
	"<weapon> <magazine_index> ; returns clip ammo + backpack inventory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_age",
	['weapon'],
	"real",
	['H4'],
	"Returns age [0 ... 1] where 0:fully powered, 1:depleted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_age",
	['weapon', 'real'],
	"void",
	['H4'],
	"0.0:fully powered, 1.0:depleted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_lockon_state",
	['weapon'],
	"long",
	['H4'],
	"Returns 0:none, 1:tracking, 2:locked",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_lockon_target",
	['weapon', 'boolean-1', 'boolean-2'],
	"object",
	['H4'],
	"<weapon> <driver_if_vehicle_bool> <gunner_if_vehicle_bool> // returns target object being tracked. if vehicle, optionally returns targeted vehicle's driver or gunner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_trigger_get_charged_fraction",
	['weapon', 'short'],
	"real",
	['H4'],
	"<weapon> <trigger_index> ; returns charge 0.0 - 1.0",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_target_designator_show_hud",
	['player'],
	"void",
	['H4'],
	"Sets flag to show the target designator hud for a given player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_target_designator_hide_hud",
	[],
	"void",
	['H4'],
	"Sets flag to hide the target designator hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_target_designator_cooldown_timer",
	['player'],
	"real",
	['H4'],
	"Returns the cool down counter for the target designator",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_target_designator_cooldown_timer",
	['real'],
	"void",
	['H4'],
	"Begins the cool down counter for the target designator for the given time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_force_end_target_designator_cooldown_timer",
	[],
	"void",
	['H4'],
	"Force ends the cool down counter for the target designator",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_weapons_override_projectiles_per_shot",
	['long'],
	"void",
	['H4'],
	"Override barrel's projectiles_per_shot. -1 disables override",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_weapons_override_projectile_error_angles",
	['real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Override barrel's projectiles error angles (inner, low, high). each of three overrides will be disabled by specifying -1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_weapons_state_trace_filter",
	['string'],
	"void",
	['H4'],
	"Gun type name to filter on like 'storm_sticky_detonator'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_ignore_ai_set",
	['device', 'boolean'],
	"void",
	['H4'],
	"True makes the given device ignore ai (won't open for ai), false makes it work for ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_jump_cost_scale",
	['real'],
	"void",
	['H4'],
	"Scale pathing cost of jumps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_full_lod",
	['ai', 'boolean?'],
	"void",
	['H4'],
	"Enables/disables forced full lod mode on specified actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_equipment_drop_rate",
	['ai', 'real'],
	"void",
	['H4'],
	"Sets chance (between 0.0 and 1.0) that ai will drop equipment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_long",
	['long'],
	"void",
	['H4'],
	"Places the specified squad (using a long) on the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave",
	['long', 'ai', 'long?'],
	"void",
	['H4'],
	"Places the given number of squads from the specified wave name into squads defined as part of the given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave_in_limbo",
	['long', 'ai', 'long?'],
	"void",
	['H4'],
	"Places the given number of squads from the specified wave name into squads defined as part of the given squad group in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_with_shards",
	['ai', 'short?'],
	"long",
	['H4'],
	"Places the given number of members of the specified squad using forerunner shards",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_with_birth",
	['ai'],
	"long",
	['H4'],
	"Places the specified squad on the map using forerunner birth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_internal_query_clump_for_target",
	['ai'],
	"void",
	['H4'],
	"Internal use only. post shard spawn targeting update from nearby bishops",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase_out_of_context",
	[],
	"void",
	['H4'],
	"Erases ai that have been made inactive because the bsp unloaded under them",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_flee_target",
	['ai', 'object'],
	"void",
	['H4'],
	"Makes specified ai flee from the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kamikaze_disable",
	['ai', 'boolean'],
	"void",
	['H4'],
	"Disable kamikaze behavior on specified ai units when set to true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_advance_immediate",
	['ai'],
	"void",
	['H4'],
	"Order advance for actor/squad/squad-group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enter_limbo",
	['ai'],
	"void",
	['H4'],
	"Puts the ai in limbo state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allow_resurrect",
	['ai', 'boolean'],
	"void",
	['H4'],
	"Enable / disable resurrection logic on specified character",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_swap_weapons",
	['ai'],
	"void",
	['H4'],
	"Swaps primary / secondary weapons on specified ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_is_shooting",
	['ai'],
	"boolean",
	['H4'],
	"Returns true if any character in specified squad/spawn point is currently firing his weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fighting_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of actors that are fighting in a squad or squad_group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_living_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of living actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_in_limbo_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of living actors in the specified encounter and/or squad that are in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_not_in_limbo_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of living actors in the specified encounter and/or squad that are not in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_in_vehicle_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of living actors in the specified encounter and/or squad who are currently in a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_body_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of actors who have died in the completiong of the given objective/task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_swarm_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of swarm actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_nonswarm_count",
	['ai'],
	"long",
	['H4'],
	"Return the number of non-swarm actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_particleize",
	['object', 'any_tag'],
	"void",
	['H4'],
	"Particleize object, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_particleize_to_marker",
	['object-1', 'object-2', 'string_id', 'any_tag'],
	"void",
	['H4'],
	"Particleize object, to-object, to-marker, particlemane-tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_particleize_to_area",
	['object', 'ai', 'any_tag'],
	"void",
	['H4'],
	"Particleize object, to spawn_point, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_particleize",
	['ai', 'any_tag'],
	"void",
	['H4'],
	"Particleize ai, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_particleize_dead_to_area",
	['ai', 'real', 'any_tag'],
	"void",
	['H4'],
	"Particleize dead bipeds to an area spawn_point, radius, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_particleize_clear_area",
	[],
	"void",
	['H4'],
	"Clear target set from dead_to_area",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_objective",
	['ai'],
	"string_id",
	['H4'],
	"Get the objective assigned to an ai as a string id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_stationkeeping",
	['boolean'],
	"void",
	['H4'],
	"Render stationkeeping debug",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_driver",
	['vehicle'],
	"ai",
	['H4'],
	"Returns the ai driver for a given vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_get_loaded_map_name",
	[],
	"string",
	['H4'],
	"Returns the name of the currently loaded map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line",
	['ai', 'ai_line'],
	"short",
	['H4'],
	"Play the given mission dialogue line on the given ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_at_player",
	['ai', 'ai_line'],
	"short",
	['H4'],
	"Play the given mission dialogue line on the given ai, directing the ai's gaze at the nearest visible player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object",
	['object', 'ai_line'],
	"short",
	['H4'],
	"Play the given mission dialogue line on the given object (uses first available variant)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object_for_team",
	['object', 'ai_line', 'mp_team'],
	"short",
	['H4'],
	"Play the given mission dialogue line on the given object (uses first available variant) if anyone on the local box is on the specified team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lines",
	[],
	"short",
	['H4'],
	"Cycles through ai line-spray modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allocate_station",
	['string_id'],
	"void",
	['H4'],
	"Grab a station slot and assign it the specified name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_assign_actor_station",
	['string_id', 'ai'],
	"void",
	['H4'],
	"Tell actor to maintain station",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_release_station",
	['string_id'],
	"void",
	['H4'],
	"Release station",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_station_on_object",
	['string_id', 'object'],
	"void",
	['H4'],
	"Base station in object reference frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_station_set_bounds",
	['string_id', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H4'],
	"Station boundary min max pairs for range, yaw, pitch. range in wu, angles in degrees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_station_predict_time",
	['string_id', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Project intercepts to station this far when moving slow to fast (fast speed), (time at speed 0), (time at fast speed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_capture_allegiance",
	['object-1', 'object-2'],
	"void",
	['H4'],
	"Squad containing first unit takes the team of the unit in the second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_path_ignore_object_obstacle",
	['ai', 'object'],
	"void",
	['H4'],
	"Tells the actor to ignore pathfinding obstacles associated with object <ai> <object>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_path_clear_ignore_object_obstacle",
	['ai'],
	"void",
	['H4'],
	"Tells the actor to stop ignoring the obstacle <ai>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_role",
	['short'],
	"ai",
	['H4'],
	"Returns the given member of the cast (as per more recent vs_cast call)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_moving",
	[],
	"void",
	['H4'],
	"Returns true if the actor is currently following a path",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_dock",
	['point_reference-1', 'point_reference-2', 'real'],
	"void",
	['H4'],
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance) and stops there. best used at very short range",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_over_object",
	['object', 'real-1', 'real-2'],
	"void",
	['H4'],
	"Flies by the point that is the given height above the object (within the given tolerance measured on the ground)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_over_object",
	['ai', 'boolean', 'object', 'real-1', 'real-2'],
	"void",
	['H4'],
	"Flies by the point that is the given height above the object (within the given tolerance measured on the ground)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_to_point",
	['point_reference'],
	"void",
	['H4'],
	"Phase to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_to_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H4'],
	"Phase to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_in",
	[],
	"void",
	['H4'],
	"Play phase in animation. return instantly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_in",
	['ai', 'boolean'],
	"void",
	['H4'],
	"Play phase in animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_in_blocking",
	[],
	"void",
	['H4'],
	"Play phase in animation and block until complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_leap_to_point",
	['point_reference'],
	"void",
	['H4'],
	"Leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_leap_to_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H4'],
	"Leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_oriented_leap_to_point",
	['point_reference'],
	"void",
	['H4'],
	"Oriented_leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_oriented_leap_to_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H4'],
	"Oriented_leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_to",
	['point_reference', 'real'],
	"void",
	['H4'],
	"A swarm swarms towards the point (or prontrtroint set) in question, the individual forms stopping when they get within the given radius",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_from",
	['point_reference', 'long'],
	"void",
	['H4'],
	"A swarm swarms away from the point in question, going at least the given distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gcs_renade",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	['H4'],
	"Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['sound', '[real', 'real]'],
	"void",
	['H4'],
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face",
	['boolean', 'point_reference'],
	"void",
	['H4'],
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face",
	['ai', 'boolean', 'point_reference'],
	"void",
	['H4'],
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_player",
	['boolean'],
	"void",
	['H4'],
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_player",
	['ai', 'boolean'],
	"void",
	['H4'],
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_object",
	['boolean', 'object'],
	"void",
	['H4'],
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_object",
	['ai', 'boolean', 'object'],
	"void",
	['H4'],
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_throttle_set",
	['boolean', 'real'],
	"void",
	['H4'],
	"Forces throttle to the specified value (0-1) for remainder of command script or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_throttle_set",
	['ai', 'boolean', 'real'],
	"void",
	['H4'],
	"Forces throttle to the specified value (0-1) for remainder of command script or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_actor_on_station",
	['string_id'],
	"void",
	['H4'],
	"Assigns actor to stationkeeping station",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"actorsClearErrors",
	[],
	"void",
	['H4'],
	"Clears all actor errors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_play_show",
	['string_id'],
	"long",
	['H4'],
	"Creates a new show with a given name. returns a show id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_stop_show",
	['long'],
	"void",
	['H4'],
	"Stops the show with the given id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_is_playing",
	['long'],
	"boolean",
	['H4'],
	"Returns true if the given show is still playing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_is_action_done",
	['string_id'],
	"boolean",
	['H4'],
	"Returns true if the action with the given name is done. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_is_action_playing",
	['string_id'],
	"boolean",
	['H4'],
	"Returns true if the action with the given name is currently playing. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_get_puppet",
	['string_id'],
	"object",
	['H4'],
	"Returns the object with the given puppet name. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_kill_biped",
	['object', 'boolean'],
	"void",
	['H4'],
	"<object> <ragdoll>. kills the puppet at the end of the animation and optionally activates the ragdoll. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_exit_vehicle_immediate",
	['object', 'boolean-1', 'boolean-2'],
	"void",
	['H4'],
	"<biped> <standing> <instant ready weapon>. tells a character to exit the vehicle immediately. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_disable_splitscreen",
	['boolean'],
	"void",
	['H4'],
	"Disables splitscreen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_control",
	['object', 'boolean'],
	"void",
	['H4'],
	"Toggles script control of the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_attach",
	['object', 'string_id', 'boolean'],
	"void",
	['H4'],
	"<object> <marker> <fov>. attaches the scripted camera to a marker of an object. if fov is true, the scale of the marker determines the fov (in radians)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_cinematic_scene",
	['cinematic_scene_data_definition', 'long', 'cutscene_flag'],
	"void",
	['H4'],
	"Sets the scene, shot, and cutscene flag for the cinematic camera (note: camera must be in cinematic mode by calling camera_set_cinematic)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_set_position_facing",
	['real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H4'],
	"Sets the debug flycam to the specified world-space coordinates and orientation vector",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_deactivate_all_equipment",
	[],
	"void",
	['H4'],
	"Deactivates all players equipments",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_disable_movement",
	['player', 'boolean'],
	"void",
	['H4'],
	"Toggle input for a specific player. the look stick works, but nothing else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_grenades_prev",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has hit the rotate-grenades-prev button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_grenades_next",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has hit the rotate-grenades-next button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_fwd",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has moved forward since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_back",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has moved back since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_left",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has moved left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_right",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has moved right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_secondary_trigger",
	['player'],
	"boolean",
	['H4'],
	"Returns true if any player has used secondary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_grenades_prev",
	['player'],
	"boolean",
	['H4'],
	"Returns true if any player has hit the rotate-grenades-prev button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_grenades_next",
	['player'],
	"boolean",
	['H4'],
	"Returns true if any player has hit the rotate-grenades-next button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_fwd",
	['player'],
	"boolean",
	['H4'],
	"Returns true if a player has moved forward since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_back",
	['player'],
	"boolean",
	['H4'],
	"Returns true if a player has moved back since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_left",
	['player'],
	"boolean",
	['H4'],
	"Returns true if a player has moved left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_right",
	['player'],
	"boolean",
	['H4'],
	"Returns true if a player has moved right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_hero_assist",
	['player'],
	"boolean",
	['H4'],
	"Returns true if any player has pressed 'hero assist' (sprint) since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_action_tap",
	['player'],
	"boolean",
	['H4'],
	"Returns true while the given player is tapping the action button",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_lookstick_forward",
	['player'],
	"boolean",
	['H4'],
	"True if the specified player pushed forward on lookstick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_lookstick_backward",
	['player'],
	"boolean",
	['H4'],
	"True if the specified player pushed backward on lookstick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset_debug",
	[],
	"void",
	['H4'],
	"Starts the map from the beginning.  this is a debug only command!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset_random",
	[],
	"void",
	['H4'],
	"Starts the map from the beginning with a new random seed.  this is a debug only command!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_switch_to_bsp",
	['string'],
	"void",
	['H4'],
	"Loads a single bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_print_bsps_bounds",
	[],
	"void",
	['H4'],
	"Prints the active bsps bounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"go_to_camera_point",
	['long'],
	"void",
	['H4'],
	"Goes to the camera point at the index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_scenario",
	['string'],
	"void",
	['H4'],
	"Goes to every camera point and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_current_zone_set",
	['string'],
	"void",
	['H4'],
	"Goes to every camera point in the current bsp and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_zone_set",
	['string', 'short', 'string?'],
	"void",
	['H4'],
	"Goes to every camera point in a zone set and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_scenario",
	['string'],
	"void",
	['H4'],
	"Goes to every camera point and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_current_zone_set",
	['string'],
	"void",
	['H4'],
	"Goes to every camera point in the current bsp and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"perf_capture_at_location",
	['string'],
	"void",
	['H4'],
	"Takes perf data at a location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streaming_report_at_location",
	['string'],
	"void",
	['H4'],
	"Takes streaming data at a location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_simple",
	['string'],
	"void",
	['H4'],
	"Takes a simple screenshot and saves as <name>.tif, static_cast<hsfunctionflags>(flag(ehsfunction_debugflag))",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_orthographic",
	['long', 'string'],
	"void",
	['H4'],
	"Takes an nxn multiple-page orthographic screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_map_generate",
	['real', 'string'],
	"void",
	['H4'],
	"Takes an ordnance map screenshot of the specified size (in megs) and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"module",
	['string'],
	"void",
	['H4'],
	"Specifies modules to load after main map loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_firefight",
	[],
	"void",
	['H4'],
	"Debug map launching: sets the next map to run in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_sandbox",
	[],
	"void",
	['H4'],
	"Debug map launching: sets the next map to run in sandbox mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_player_count",
	['long'],
	"void",
	['H4'],
	"Debug map launching: sets the number of splitscreen players for the next map); does not set game mode (campaign vs. multiplayer)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_multiplayer",
	[],
	"void",
	['H4'],
	"Debug map launching: sets the next map to run in multiplayer (megalo)  mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_BSP",
	['string'],
	"void",
	['H4'],
	"Debug map launching: sets the initial bsp for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_starting_location",
	['long'],
	"void",
	['H4'],
	"Debug map launching: sets the initial starting point for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_in",
	['real-1', 'real-2', 'real-3', 'long'],
	"void",
	['H4'],
	"Does a screen fade in from a particular color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_out",
	['real-1', 'real-2', 'real-3', 'long'],
	"void",
	['H4'],
	"Does a screen fade out to a particular color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"init_light_rigs_of_shot",
	['long'],
	"void",
	['H4'],
	"Init light rigs of the current shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shutdown_all_light_rigs",
	[],
	"void",
	['H4'],
	"Shutdown all persistent and non-persistent light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shutdown_light_rigs_of_shot",
	[],
	"void",
	['H4'],
	"Shutdown any non-persistent existing light rigs of the current shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"apply_scriptable_light_rigs",
	['object', 'string_id', 'cinematic_lightprobe', 'cutscene_camera_point'],
	"void",
	['H4'],
	"Applies scriptable light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unapply_scriptable_light_rigs",
	['object'],
	"void",
	['H4'],
	"Unapply scriptable light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"restore_all_vmf_light_rigs",
	[],
	"void",
	['H4'],
	"Restore all vmf light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_light_rig_direction",
	['string', 'long', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Script light rig direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_light_rig_vmf",
	['string', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7'],
	"void",
	['H4'],
	"Script light rig vmf",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scrip_light_rig_fill",
	['string', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H4'],
	"Script light rig fill",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_light_rig_balance",
	['string', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Script light rig balance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bake_forge_lights",
	['boolean'],
	"void",
	['H4'],
	"Bake lights on the xbox for forge world maps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_lightmap_direct_scalar_bsp",
	['short'],
	"real",
	['H4'],
	"Get lightmap direct scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_lightmap_indirect_scalar_bsp",
	['short'],
	"real",
	['H4'],
	"Get lightmap indirect scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_lightmap_analytic_scalar_bsp",
	['short'],
	"real",
	['H4'],
	"Get lightmap analytic scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_lightmap_direct_scalar_bsp",
	['short', 'real'],
	"void",
	['H4'],
	"Set lightmap direct scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_lightmap_indirect_scalar_bsp",
	['short', 'real'],
	"void",
	['H4'],
	"Set lightmap indirect scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_lightmap_analytic_scalar_bsp",
	['short', 'real'],
	"void",
	['H4'],
	"Set lightmap analytic scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_out_from_game",
	['string_id'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematics tag for fading out from the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_in_to_cinematic",
	['string_id'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematics tag for fading in to the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_out_from_cinematic",
	['string_id'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematics tag for fading out from the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_in_to_game",
	['string_id'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematics tag for fading in to the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_out_from_game",
	['cinematic_transition_definition'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematic transition for fading out from the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_in_to_cinematic",
	['cinematic_transition_definition'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematic transition for fading in to the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_out_from_cinematic",
	['cinematic_transition_definition'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematic transition for fading out from the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_in_to_game",
	['cinematic_transition_definition'],
	"long",
	['H4'],
	"Executes the fade settings setup in the cinematic transition for fading in to the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_skip_start_internal",
	[],
	"void",
	['H4'],
	"Enable cinematic skipping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_skip_stop_internal",
	[],
	"void",
	['H4'],
	"Disable cinematic skipping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_skip_in_progress",
	[],
	"boolean",
	['H4'],
	"Is cinematic skippable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_clear_title",
	['cutscene_title'],
	"void",
	['H4'],
	"Clears the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_shot",
	['cinematic_scene_definition', 'cinematic_scene_data_definition', 'long'],
	"void",
	['H4'],
	"Sets the scene and shot for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_atmospere_fog",
	['long'],
	"void",
	['H4'],
	"Sets atmosphere fog for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_camera_settings",
	['long'],
	"void",
	['H4'],
	"Sets camera fx settings for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_ssao_mode",
	['long'],
	"void",
	['H4'],
	"Sets ssao mode for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_lightmap_scalars",
	['real-1', 'real-2'],
	"void",
	['H4'],
	"Sets lightmap direct and indirect scalars for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_full_screen_bink",
	['boolean'],
	"void",
	['H4'],
	"Sets or removes cinematic full screen bink options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_get_in_progress_index",
	[],
	"long",
	['H4'],
	"Returns scenario index of cinematic in progress",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_check_scenario_pruning",
	['string'],
	"long",
	['H4'],
	"Checks if cinematic scripts have been pruned",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_prune_object",
	['string'],
	"void",
	['H4'],
	"Prunes object type from cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CinematicLightingUpdateShadow",
	['string', 'real-1', 'real-2', 'real-3'],
	"void",
	['H4'],
	"Cinematic update for shadows",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CinematicLightingUpdateSample",
	['string', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6'],
	"void",
	['H4'],
	"Cinematic update the sampled params",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CinematicLightingUpdateProbe",
	['string', 'long', 'real-1', 'real-2', 'real-3', 'real-4'],
	"void",
	['H4'],
	"Cinematic update the probe data",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_reset",
	['boolean'],
	"void",
	['H4'],
	"Resets the cinematics internal state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_enter",
	[],
	"void",
	['H4'],
	"Debug setup at the start of cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_exit",
	[],
	"void",
	['H4'],
	"Debug setup at the end of cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_play",
	['string-1', 'string-2', 'boolean', 'long'],
	"boolean",
	['H4'],
	"Debug play cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_stop",
	[],
	"void",
	['H4'],
	"Debug stop cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_pause",
	[],
	"void",
	['H4'],
	"Pause/resume the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_step_one_frame",
	[],
	"void",
	['H4'],
	"Step the cinematic one frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_settings_enable",
	['boolean'],
	"void",
	['H4'],
	"Enables/disables all cinematic settings (lightmap, fog, camera, etc)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_cinematic_skip_script_stripping",
	['boolean'],
	"void",
	['H4'],
	"Skip cinematic script stripping (will play with missing shots)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_scene",
	['long'],
	"cinematic_scene_definition",
	['H4'],
	"Retrieve a cinematic scene tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_scene_data",
	['long'],
	"cinematic_scene_data_definition",
	['H4'],
	"Retrieve a cinematic scene data tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_hide_scene_object",
	['long'],
	"void",
	['H4'],
	"Hides specified object in current cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_shot",
	['long-1', 'long-2', 'cutscene_flag'],
	"void",
	['H4'],
	"Sets the scene, shot, and cutscene flag for the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_initialize_shot",
	['long'],
	"void",
	['H4'],
	"Intializes the cinematic for the given shot of the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_shot",
	[],
	"void",
	['H4'],
	"Destroys current cinematic shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_effect",
	['long'],
	"void",
	['H4'],
	"Play a cinematic effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_effect_from_flag",
	['long', 'cutscene_flag'],
	"void",
	['H4'],
	"Play a cinematic effect attached to fx marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_effect",
	['long'],
	"void",
	['H4'],
	"Stop a cinematic effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_effect_from_flag",
	['long', 'cutscene_flag'],
	"void",
	['H4'],
	"Stop a cinematic effect attached to fx marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_kill_effect",
	['long'],
	"void",
	['H4'],
	"Stop a cinematic effect and kill all its particles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_kill_effect_from_flag",
	['long', 'cutscene_flag'],
	"void",
	['H4'],
	"Stop a cinematic effect attached to fx marker and kill all its particles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_music",
	['long'],
	"void",
	['H4'],
	"Play a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_dialogue",
	['long'],
	"void",
	['H4'],
	"Play a cinematic dialogue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_music",
	['long'],
	"void",
	['H4'],
	"Stops a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_screen_effect",
	['long'],
	"void",
	['H4'],
	"Starts playing a cinematic screen effect (.screen_effect)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_screen_effect",
	['long'],
	"void",
	['H4'],
	"Stops playing a cinematic screen effect (.screen_effect)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_texture_movie",
	['long-1', 'long-2', 'long-3'],
	"void",
	['H4'],
	"Plays texture bink movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_texture_movie",
	['long-1', 'long-2', 'long-3'],
	"void",
	['H4'],
	"Stops texture bink movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_won_with_finish_timer_override",
	['real'],
	"void",
	['H4'],
	"Causes the player to successfully finish the current level and move to the next; overrides finish timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GameSetBadNextRevert",
	['boolean'],
	"void",
	['H4'],
	"Marks the next revert as bad. after too many bad reverts in a row the game will go back 2 checkpoints",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_drop_pod",
	['boolean'],
	"void",
	['H4'],
	"Debug ordnance drop pod influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_auto_turret",
	['boolean'],
	"void",
	['H4'],
	"Debug auto turret influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_get_index",
	[],
	"short",
	['H4'],
	"Gets the current debug cycling multiplayer spawn point index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_set_index",
	['short'],
	"void",
	['H4'],
	"Sets the current debug cycling multiplayer spawn point index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_ordnance_drop_check",
	['boolean'],
	"void",
	['H4'],
	"Toggles testing ordnance drop points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_kill_user_and_adjust_index",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"<user index> <index adjustment> - kills the unit associated with the given local user index [0..3] and adds the adjustment to the next debug spawning index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_spawn_point_debugging_level",
	['long'],
	"void",
	['H4'],
	"Set spawn point debugging level (0 == none)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save_state_every_second",
	['boolean'],
	"void",
	['H4'],
	"Toggle saving game state out every second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_trigger",
	['sound', 'object', 'real', 'long'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start",
	['sound', 'object', 'real'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_marker",
	['sound', 'object', 'string_id', 'real'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object and marker(or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_effect",
	['sound', 'object', 'real', 'string_id'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object (or none));, with the specified scale and effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_with_subtitle",
	['sound', 'object', 'real', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object (or none));, with the specified scale and displays a subtitle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_stop_object",
	['sound', 'object'],
	"void",
	['H4'],
	"Stops the specified impulse sound that's playing on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_max_time",
	['sound'],
	"long",
	['H4'],
	"Returns the maximum playing time in ticks for the specified sound tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_sound_subtitle",
	['sound'],
	"real",
	['H4'],
	"Play the subtitle for the specified sound tag without playing the sound itself. returns the sound duration in seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_start",
	['sound_event'],
	"void",
	['H4'],
	"Start a music piece with this event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_stop",
	['sound_event'],
	"void",
	['H4'],
	"Stop a music piece with this event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_set_state",
	['sound_event'],
	"void",
	['H4'],
	"Set music state with this event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_trigger",
	['sound_event'],
	"void",
	['H4'],
	"Plays a music event (but this event is not saved for restore)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_override_custom_soundtrack",
	['boolean'],
	"void",
	['H4'],
	"Temporarily overrides custom user soundtrack (for cinematics/vignettes/etc)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_state",
	['sound_event'],
	"void",
	['H4'],
	"Sends a state event. will be restored from save",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voiceover_play",
	['long'],
	"boolean",
	['H4'],
	"Plays the nth entry in the current level's voiceover tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voiceover_stop",
	[],
	"void",
	['H4'],
	"Stops playing any active voiceover sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_marker",
	['looping_sound', 'object', 'string_id', 'real'],
	"void",
	['H4'],
	"Plays a looping sound from the specified source object and marker(or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_stop_object",
	['looping_sound', 'object'],
	"void",
	['H4'],
	"Stops the specified looping sound playing on the given source object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_start_trick",
	['vehicle', 'long'],
	"void",
	['H4'],
	"Make a vehicle start a trick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_ignore_damage_knockback",
	['vehicle', 'boolean'],
	"void",
	['H4'],
	"Stops the vehicle from getting knocked around by damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object",
	['object', 'boolean'],
	"void",
	['H4'],
	"Turns on/off a navpoint tracking an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_named",
	['object', 'string_id'],
	"void",
	['H4'],
	"Turns on a navpoint tracking an object with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_named_with_string",
	['object', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Turns on a navpoint tracking an object with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_for_player",
	['player', 'object', 'boolean'],
	"void",
	['H4'],
	"Turns on/off a navpoint tracking an object for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_for_player_named",
	['player', 'object', 'string_id'],
	"void",
	['H4'],
	"Turns on a navpoint tracking an object with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_for_player_named_with_string",
	['player', 'object', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Turns on a navpoint tracking an object with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_object_set_vertical_offset",
	['object', 'real'],
	"void",
	['H4'],
	"Set the vertical offset in world units for a tracked object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_object_set_on_radar",
	['object', 'boolean-1', 'boolean-2'],
	"void",
	['H4'],
	"Set the object on the radar for a tracked object: first bool is for enable/disable, second is to show extended range in radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_objects_of_type",
	['object_definition', 'string_id', 'boolean'],
	"void",
	['H4'],
	"Mark all of these objects with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_object",
	['object'],
	"boolean",
	['H4'],
	"Checks if tracking is on for an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_object_for_player",
	['player', 'object'],
	"boolean",
	['H4'],
	"Checks if tracking is on for an object for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag",
	['cutscene_flag', 'boolean'],
	"void",
	['H4'],
	"Turns on/off a navpoint tracking a cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_named",
	['cutscene_flag', 'string_id'],
	"void",
	['H4'],
	"Turns on a navpoint tracking a cutscene flag with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_named_with_string",
	['cutscene_flag', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Turns on a navpoint tracking a cutscene flag with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_for_player",
	['player', 'cutscene_flag', 'boolean'],
	"void",
	['H4'],
	"Turns on/off a navpoint tracking a cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_for_player_named",
	['player', 'cutscene_flag', 'string_id'],
	"void",
	['H4'],
	"Turns on a navpoint tracking a cutscene flag with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_for_player_named_with_string",
	['player', 'cutscene_flag', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Turns on a navpoint tracking a cutscene flag with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_cutscene_flag_set_vertical_offset",
	['cutscene_flag', 'real'],
	"void",
	['H4'],
	"Set the vertical offset in world units for a chud_track_cutscene_flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_cutscene_flag_set_on_radar",
	['cutscene_flag', 'boolean-1', 'boolean-2'],
	"void",
	['H4'],
	"Set the object on the radar for a tracked flag: first bool is for enable/disable, second is to show extended range in radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_flag",
	['cutscene_flag'],
	"boolean",
	['H4'],
	"Checks if tracking is on for a cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_flag_for_player",
	['player', 'cutscene_flag'],
	"boolean",
	['H4'],
	"Checks if tracking is on for a cutscene flag for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_scripting_force_enemy_always_on",
	['boolean'],
	"void",
	['H4'],
	"Forces the enemy navpoints to always be on: bool is for enable/disable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows the whole hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_messages",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows hud text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_radar",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows the radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_crosshair",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows the crosshair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_shield",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows the shield bar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_weapon",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows the weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_navpoints",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows nav points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_toast_commendations",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows toast commendations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_fanfares",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows fanfare messages",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_play_global_animtion",
	['string_id'],
	"void",
	['H4'],
	"Adds an animation to play on the whole hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_stop_global_animtion",
	['string_id'],
	"void",
	['H4'],
	"Removes an animation played on the whole hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_medal_posting_ui",
	['boolean'],
	"void",
	['H4'],
	"Hides/shows hud messages related to attaining a medal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_rampancy_intensity",
	['player', 'real'],
	"void",
	['H4'],
	"Sets the intensity of cortana's rampancy",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_play_pip",
	['string'],
	"void",
	['H4'],
	"Depricated: use hud_play_pip_from_tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_play_pip_from_tag",
	['bink_definition'],
	"void",
	['H4'],
	"Plays a pip video from a bink tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_mode",
	['long'],
	"void",
	['H4'],
	"Set morphological antialiasing mode (0 = disable, 1 = color, 2 = depth, 3 = color + depth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_color_exponent",
	['real'],
	"void",
	['H4'],
	"Set morphological antialiasing color exponent",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_color_threshold",
	['real'],
	"void",
	['H4'],
	"Set morphological antialiasing color threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_depth_threshold",
	['real'],
	"void",
	['H4'],
	"Set morphological antialiasing depth threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_search_steps",
	['long'],
	"void",
	['H4'],
	"Set morphological antialiasing maximum search steps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_separate_generate",
	['boolean'],
	"void",
	['H4'],
	"Set morphological antialiasing to separate the generate pass into horizontal / vertical",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"user_interface_hud_show_ammo_navpoints",
	['boolean'],
	"void",
	['H4'],
	"Overrides ui-globals tag to show/hide navpoints on ammo sources when you need ammo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_loyalty_bonus_toast",
	['controller', 'currency_type', 'short'],
	"void",
	['H4'],
	"<controller> <currency type> <bonus> act as if this controller was awarded a loyalty bonus from the lsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_generic_bonus_toast",
	['controller', 'currency_type', 'short'],
	"void",
	['H4'],
	"<controller> <currency type> <bonus> act as if this controller was awarded a generic bonus from the lsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_force_user_image_upload",
	[],
	"void",
	['H4'],
	"Disables all live, lsp connectivity, and dirty checks when attempting to upload the user image",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"input_disable_claw_button_combos",
	['boolean'],
	"void",
	['H4'],
	"Disable the claw button combos (for monkey testing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_offer_info",
	[],
	"void",
	['H4'],
	"Writes a new offer info file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_maximum_player_count",
	['long'],
	"boolean",
	['H4'],
	"Sets the maximum player count for this squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_refuse_all_joins",
	['boolean'],
	"void",
	['H4'],
	"Refuses all join requests",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_dump_file",
	['string'],
	"void",
	['H4'],
	"Dumps all events from the given file to the output",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_log_event",
	['event', 'string'],
	"void",
	['H4'],
	"Logs an event in the game using the same syntax as the engine's event macro",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie",
	['string', 'long?'],
	"void",
	['H4'],
	"Play a bink movie file directly with playback flags.  the directory and '_60.bik' is implied.  eg: play_bink_movie('081_crash') will play file bink\\081_crash_60.bik",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie_from_tag",
	['bink_definition', 'long?'],
	"void",
	['H4'],
	"Play a bink movie from a tag with playback flags (from bink_playback.h)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits_skip_to_menu",
	[],
	"void",
	['H4'],
	"Plays credits movie, pressing a button will stop credits and launch main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits_unskippable",
	[],
	"void",
	['H4'],
	"Plays credits movie, no button press detection",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_time",
	[],
	"long",
	['H4'],
	"The number of ticks left in the currently playing bink",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_pause",
	['boolean'],
	"void",
	['H4'],
	"Pause/unpause bink movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_any_loading",
	[],
	"boolean",
	['H4'],
	"Is any player bink movie being loaded?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_any_playing",
	[],
	"boolean",
	['H4'],
	"Is any player bink movie being played?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_playing",
	[],
	"boolean",
	['H4'],
	"Is all players bink movie being played?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_local_loading",
	[],
	"boolean",
	['H4'],
	"Is local bink movie being loaded?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_local_playing",
	[],
	"boolean",
	['H4'],
	"Is local bink movie being played?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_session_tag",
	['string'],
	"void",
	['H4'],
	"Tags a datamine session with a label",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"display_video_standard",
	[],
	"void",
	['H4'],
	"Displays the video standard the game is in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_fake_outgoing_join_type",
	['long-1', 'long-2', 'long-3', 'long-4'],
	"void",
	['H4'],
	"<gui_game_mode [0 .. 14]> <session_game_mode [0 .. 4]> <network_game_type [0 .. 3]> <game_engine_type [0 .. 5]>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_instanced_list_item_by_text",
	['long-1', 'long-2', 'long-3', 'string_id-1', 'string_id-2', 'string_id-3', 'string'],
	"void",
	['H4'],
	"<command_index> <window_index> <list_index> <list_name> <list_data_name> <property_name> <property_value> triggers the named item in the matching list (if list_index equals 1, then select the item from the second matching list)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_expand_list_item_by_list_item_index",
	['long-1', 'long-2', 'string_id', 'long-3', 'boolean'],
	"void",
	['H4'],
	"<command_index> <window_index> <list_name> <list item index> <expand> expands or collapses the indexed list item",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_list_item_index",
	['long-1', 'long-2', 'string_id', 'long-3'],
	"void",
	['H4'],
	"<command_index> <window_index> <list_name> <list item index> directly triggers the indexed list item",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_list_item_name",
	['long-1', 'long-2', 'string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"<command_index> <window_index> <list_name> <list item index> directly triggers the named list item",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_list_item_names",
	['long', 'string_id'],
	"void",
	['H4'],
	"<window_index> <list_name> gives the list of available list item names for the list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_screen_size",
	['string_id', 'boolean'],
	"void",
	['H4'],
	"<screen_name> <verbose detail> displays the total size in content of the named screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_active_screen_size",
	['long', 'boolean'],
	"void",
	['H4'],
	"<window_index> <verbose detail> displays the total size in content of the current screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_total_screens_size",
	['boolean'],
	"void",
	['H4'],
	"<verbose detail> displays the total size in content of all ui content loaded for the current level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_stats",
	['long'],
	"void",
	['H4'],
	"<window index> shows summary stats for the ui system and current screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_redraw_all_portraits",
	[],
	"void",
	['H4'],
	"Redraws all the player portraits",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_screen_strings",
	['long'],
	"void",
	['H4'],
	"<window_index> list the current active screens and path to references",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NetworkDisallowMatchJoinInProgress",
	['boolean'],
	"void",
	['H4'],
	"Disallow (or un-disallow) late joins",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_near",
	['real'],
	"void",
	['H4'],
	"Interpolate depth of field near aperture to <depth>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_far",
	['real'],
	"void",
	['H4'],
	"Interpolate depth of field far aperture to <depth>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_blur_near",
	['real'],
	"void",
	['H4'],
	"Interpolate depth of field near blur to <blur>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_blur_far",
	['real'],
	"void",
	['H4'],
	"Interpolate depth of field far blur to <blur>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_SetFilePath",
	['string'],
	"void",
	['H4'],
	"Sets an alternative base directory for determinism files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bink_movie",
	['string', 'long?'],
	"void",
	['H4'],
	"Predict a bink movie file directly with playback flags. the directory and '_60.bik' is implied. eg: predict_bink_movie('081_crash', 0) will play file bink\\081_crash_60.bik",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bink_movie_from_tag",
	['bink_definition', 'long?'],
	"void",
	['H4'],
	"Predict a bink movie from tag with playback flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_recycling_volume",
	['trigger_volume', 'long-1', 'long-2'],
	"void",
	['H4'],
	"Removes garbage in specified trigger volume to a max count over n seconds syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_recycling_volume_by_type",
	['trigger_volume', 'long-1', 'long-2', 'long-3'],
	"void",
	['H4'],
	"Removes garbage objects matching the type mask in the specified trigger volume that are over the max count allowed in the volume over n seconds. 1=biped, 2=vehicle, 4=weapon, 8=equipment, and 1024=crate. add values together for combos, zero means all types syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)> <type_mask>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_offscreen_recycling_volume",
	['trigger_volume', 'long-1', 'long-2'],
	"void",
	['H4'],
	"Removes garbage in specified trigger volume to a max count over n seconds syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_offscreen_recycling_volume_by_type",
	['trigger_volume', 'long-1', 'long-2', 'long-3'],
	"void",
	['H4'],
	"Removes garbage objects matching the type mask in the specified trigger volume that are over the max count allowed in the volume over n seconds. 1=biped, 2=vehicle, 4=weapon, 8=equipment, and 1024=crate. add values together for combos, zero means all types syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)> <type_mask>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate_get",
	[],
	"long",
	['H4'],
	"Returns game tick rate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate_scalar_get",
	[],
	"long",
	['H4'],
	"Returns game_tick_rate/retail_tick_rate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_game_set_player_standing",
	['string', 'long'],
	"void",
	['H4'],
	"Set's a player's standing by gamertag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"generate_rsa_2048_key_pair",
	[],
	"void",
	['H4'],
	"Generates an rsa key pair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"create_secure_test_file",
	[],
	"void",
	['H4'],
	"Generates a compressed encrypted test file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_set_playback_game_speed",
	['real'],
	"boolean",
	['H4'],
	"Set the saved film playback speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_leaderboard_set_user_stats",
	['long-1', 'real-1', 'real-2', 'long-2', 'long-3', 'long-4'],
	"void",
	['H4'],
	"Slams user leaderboard values locally",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_leaderboard_set_user_game_stats",
	['long-1', 'long-2', 'long-3', 'long-4', 'long-5'],
	"void",
	['H4'],
	"Slams more user stats",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"report_built_in_map_variant_object_count",
	[],
	"void",
	['H4'],
	"Checks that a all objects in the scenario can be placed in the built-in .mvar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_with_effect",
	['looping_sound', 'object', 'real', 'string_id'],
	"void",
	['H4'],
	"Plays a looping sound from the specified source object (or none));, with the specified scale and playback effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_simulate_demand",
	['long'],
	"boolean",
	['H4'],
	"Simulates resource demand in cache builds by consuming the specified amount of resource memory (while releasing any consumption from previous calls to this function). returns true if successful; otherwise false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_zone_set_streaming_cache_enable",
	['boolean'],
	"void",
	['H4'],
	"Turns on/off new beam texture streaming system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_pin_tag_index",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"Pins a tag and variant to the highest priority for streaming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_unpin_tag_index",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"Removes the pin on a tag and variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_pin_tag",
	['any_tag_not_resolving', 'long'],
	"void",
	['H4'],
	"Pins a tag and variant to the highest priority for streaming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_unpin_tag",
	['any_tag_not_resolving', 'long'],
	"void",
	['H4'],
	"Removes the pin on a tag and variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_pin_tag",
	['any_tag_not_resolving'],
	"void",
	['H4'],
	"Pins a tag to the highest priority for streaming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_unpin_tag",
	['any_tag_not_resolving'],
	"void",
	['H4'],
	"Removes the pin on a tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_clear_all_pinned_tags",
	[],
	"void",
	['H4'],
	"Clears all currently pinned tags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_deactivate_from_editor",
	[],
	"void",
	['H4'],
	"Deactivates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_enable_fast_prediction",
	['boolean'],
	"void",
	['H4'],
	"Turns on/off faster prediction, in case i fucked up something",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PreparingToSwitchZoneSet",
	[],
	"boolean",
	['H4'],
	"Can be polled to check whether the asynchronous memory load started by main_prepare_for_switch_zone_set is complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"EnableMidmissionLoadScreenForDVDOnly",
	['boolean'],
	"void",
	['H4'],
	"Sets trigger_midmission_load_screen if any player in the game is in no hdd mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_lock_gaze_marker",
	['player', 'object', 'string_id', 'real'],
	"void",
	['H4'],
	"Player turn to face marker with max velocity degrees/second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_clamp_gaze",
	['player', 'point_reference', 'real'],
	"void",
	['H4'],
	"<player> <point> <max angle degrees> force player view to be within give angle of point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_clamp_gaze_marker",
	['player', 'object', 'string_id', 'real'],
	"void",
	['H4'],
	"<player> <object> <markername> <max angle degrees> force player view to be withing given angle of object and/or object's marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_unlock_gaze",
	['player'],
	"void",
	['H4'],
	"Unlock player from any gaze point or gaze clamp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_set_force_match_configurations",
	['long-1', 'long-2', 'long-3', 'boolean'],
	"void",
	['H4'],
	"Sets matchmaking voice options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_set_force_hud",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"Sets matchmaking voice hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_cinematic_structure_lighting_enable",
	['boolean'],
	"void",
	['H4'],
	"Enable/disable cinematic structure lighting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_cinematic_hologram_lighting_enable",
	['boolean'],
	"void",
	['H4'],
	"Enable/disable cinematic hologram lighting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_link_light_object",
	['string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Links dynamic light to cinematic object. light must have cinema objects only on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_unlink_light_object",
	['string_id-1', 'string_id-2'],
	"void",
	['H4'],
	"Unlinks dynamic light from cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_unlink_light",
	['string_id'],
	"void",
	['H4'],
	"Unlinks dynamic light from all cinematic objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_override_team",
	['long', 'team'],
	"void",
	['H4'],
	"Sets the campaign team for a specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_team",
	['long', 'mp_team'],
	"void",
	['H4'],
	"Sets the multiplayer-team for a specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_editor",
	['sound', 'object', 'real'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_effect_editor",
	['sound', 'object', 'real', 'string_id'],
	"void",
	['H4'],
	"Plays an impulse sound from the specified source object (or none) with the specified scale and effect (or none)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_editor",
	['looping_sound', 'object', 'real'],
	"void",
	['H4'],
	"Plays a looping sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_marker",
	['long'],
	"boolean",
	['H4'],
	"Seeks to a film marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_currency_issue_award_to_team",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"Awards the latter amount of money to the former team index.  use 0 or 1 for team index.  host only!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_skull_active",
	['skull'],
	"boolean",
	['H4'],
	"Is the given skull currently enabled/disabled?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_app_add_to_players",
	['long'],
	"void",
	['H4'],
	"Adds a custom app to all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_player_biped_custom_app",
	['player', 'string'],
	"void",
	['H4'],
	"Add custom app (aka armor mod) to biped. like: add_player_biped_custom_app player0 [none | app_grenadier2 | app_resourceful | etc] ; change is effective immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"remove_player_biped_custom_app",
	['player', 'string'],
	"void",
	['H4'],
	"Removes custom app (aka armor mod) from biped. like: remove_player_biped_custom_app player0 [none | app_grenadier2 | app_resourceful | etc] ; change is effective immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"adjust_team_score",
	['mp_team', 'long'],
	"boolean",
	['H4'],
	"Adjusts a team's score up or down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"adjust_player_score",
	['player', 'long'],
	"boolean",
	['H4'],
	"Adjusts a player's score up or down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"enable_roles",
	['boolean'],
	"void",
	['H4'],
	"Enable or disable roles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_role_ui",
	['long', 'real'],
	"void",
	['H4'],
	"Shows the roles ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_team_picker_exhaustive_unit_test",
	[],
	"void",
	['H4'],
	"Run exhaustive team picker unit tests",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_player_custom_app",
	['player', 'long', 'string'],
	"void",
	['H4'],
	"Set custom app category (aka armor mod). like: set_player_custom_app player0 <appslotindex_0_1> [none | app_grenadier2 | app_resourceful | etc] ; where 2nd arg is which category (first or second)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_clear_screens",
	[],
	"void",
	['H4'],
	"Clears all cui screens",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_set_new_objective",
	['string_id'],
	"void",
	['H4'],
	"Activates the new objective title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_set_objective_complete",
	['string_id'],
	"void",
	['H4'],
	"Activates the objective complete title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_show_cinematic_title",
	['string_id'],
	"void",
	['H4'],
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_show_radio_transmission_hud",
	['string_id'],
	"void",
	['H4'],
	"Enables the radio transmission hud icon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_hide_radio_transmission_hud",
	[],
	"void",
	['H4'],
	"Disables the radio transmission hud icon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_toggle_bomb_icon",
	['boolean'],
	"void",
	['H4'],
	"Toggle display of ui bomb icon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rewards_get_grade",
	['controller'],
	"long",
	['H4'],
	"Get player grade for specific controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"exit_experience_set_params",
	['string_id', 'string', 'long-1', 'long-2', 'long-3', 'long-4', 'long-5'],
	"void",
	['H4'],
	"Sets test parameters to show on the exit experience screen. parameters are: game mode (matchmaking, campaign, survival, custom_game, survival_matchmaking), score bitfield (eg. 10111111111), commendation count, count, challenge count, achievements count, cookies before, cookies after, xp before, xp after",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"award_medal",
	['controller', 'string_id', 'long'],
	"void",
	['H4'],
	"Award a medal to the specified local controller: <controller> <medal name> <point override value -- 0 to use tag data>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_campaign_insertion_point",
	['short'],
	"boolean",
	['H4'],
	"Set the campaign insertion point squad session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_team_respawn_vehicle",
	['mp_team', 'object_definition'],
	"void",
	['H4'],
	"Sets a vehicle definition for a player to spawn in - the player will continue to spawn in this vehicle until you set it to none",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"content_test_set_active",
	['long'],
	"void",
	['H4'],
	"Enable or disable the test harness for the content system (which will run through a bunch of operations and spew any errors encountered)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"content_test_set_active_test_pass",
	['string', 'long'],
	"void",
	['H4'],
	"Enable a specific test pass for the content system (e.g. standard, create)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_grenade_type",
	['player', 'short'],
	"void",
	['H4'],
	"Set player's current grenade type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_optout_loadout_item",
	['string'],
	"void",
	['H4'],
	"Optout another designer loadout item. can be primary weapon, ability, mod, or ordnance. like: 'sniper_rifle', 'aa_reflect', 'app_stealth', 'ord_weap_storm_mortar'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_clear_loadout_optouts",
	[],
	"void",
	['H4'],
	"Clear/reset designer item optout list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_animation_on_object",
	['object', 'string_id'],
	"void",
	['H4'],
	"Animates the specified object using the specified animation id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_animation_on_object_with_graph",
	['object', 'animation_graph', 'string_id'],
	"void",
	['H4'],
	"Animates the specified object using the specified animation id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pause_animation_on_object",
	['object'],
	"void",
	['H4'],
	"Pauses the state animation being played on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"resume_animation_on_object",
	['object'],
	"void",
	['H4'],
	"Resumes the state animation being played on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_playback_ratio_and_pause_on_object",
	['object', 'real'],
	"void",
	['H4'],
	"Sets the animation position [0,1] and pauses the state animation being played on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"setup_scene_viewer_animation_debug",
	['object', 'string_id'],
	"void",
	['H4'],
	"Sets up the scene viewer with the specified object and animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_animation_at_time",
	['object', 'string_id', 'real'],
	"void",
	['H4'],
	"Adds the specified object and animation to the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_move_along_point_set_at_time",
	['object', 'point_set_reference', 'real-1', 'real-2'],
	"void",
	['H4'],
	"Moves the specified object along the given point set for the scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_spawn_ai_at_time",
	['ai', 'real'],
	"void",
	['H4'],
	"Spawns the specified ai at the specified time for the scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_start_performance_at_time",
	['ai', 'real', 'string_id'],
	"void",
	['H4'],
	"Starts the specified performance on the specified ai at the specified time for the scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_generate_haloscript",
	[],
	"void",
	['H4'],
	"Prints out to a file, prototypical code for the scene as it's currently laid out",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_save_scene_to_XML",
	['string'],
	"void",
	['H4'],
	"Saves the current scene in xml format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_load_XML_scene_file",
	['string'],
	"void",
	['H4'],
	"Loads a scene file in xml format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_reset_current_scene",
	[],
	"void",
	['H4'],
	"Resets the current scene back to time 0",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"global_preferences_set_campaign_state",
	['long'],
	"boolean",
	['H4'],
	"Sets the global preferences campaign state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_load_machine_file",
	['string'],
	"void",
	['H4'],
	"Load a machine file blf (pulled via gameadmin) directly.  be sure to turn off banhammer lsp syncs to avoid getting your handiwork overwritten",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"airstrike_set_launches",
	['player', 'long'],
	"void",
	['H4'],
	"Sets the number of available airstrikes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_new_user_experience_force_event",
	[],
	"void",
	['H4'],
	"Forces the new user armory event component to throw an event like there is a new user",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"version",
	['long'],
	"void",
	['H4'],
	"Specify the current version of haloscript to use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_assumptions",
	['string'],
	"void",
	['H4'],
	"Sets the assumption mask",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motl_verify_mapinfo_for_scenario",
	[],
	"boolean",
	['H4'],
	"Checks the current level's mapinfo motl bitvector against what is actually loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_thread_tick_to_file",
	['long-1', 'long-2', 'string'],
	"void",
	['H4'],
	"Creates a tracedump of the desired thread and tick in a specific file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyUnit",
	['unit', 'string'],
	"void",
	['H4'],
	"Notifies an event linked to a unit that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyObject",
	['object', 'string'],
	"void",
	['H4'],
	"Notifies an event linked to an object that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyPlayer",
	['player', 'string'],
	"void",
	['H4'],
	"Notifies an event linked to a player that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyLevel",
	['string'],
	"void",
	['H4'],
	"Notifies an event linked to the level that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyGlobal",
	['string'],
	"void",
	['H4'],
	"Notifies event linked to anything that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"UnitEventStatus",
	['unit', 'string'],
	"boolean",
	['H4'],
	"Checks whether an event tied to a unit has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ObjectEventStatus",
	['object', 'string'],
	"boolean",
	['H4'],
	"Checks whether an event tied to an object has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerEventStatus",
	['player', 'string'],
	"boolean",
	['H4'],
	"Checks whether an event tied to a player has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"LevelEventStatus",
	['string'],
	"boolean",
	['H4'],
	"Checks whether an event tied to the level has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_ordnance_points",
	['player', 'long'],
	"void",
	['H4'],
	"Sets the ordnance points for a given player (player index, ordnance points)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_ordnance_tier",
	['player', 'long'],
	"void",
	['H4'],
	"Sets the ordnance progression tier for a given player (player index, zero-based tier)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_ordnance_points_and_tier",
	['player', 'long-1', 'long-2'],
	"void",
	['H4'],
	"Sets the ordnance points and tier for a given player (player index, ordnance points, ordnance tier)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ActivateOrdnanceEquipment",
	['player', 'object_definition'],
	"object",
	['H4'],
	"Directly equips and activates given equipment. bypassing normal ordnance mechanisms",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop_random",
	['string', 'boolean', 'real'],
	"void",
	['H4'],
	"<set_name_string> <randomize_bool> <stagger_seconds>; triggers the ordnance system to drop the set with given name (or random if empty string). 2nd arg: false will not randomize weapons/drop points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop",
	['cutscene_flag', 'string_id'],
	"void",
	['H4'],
	"Triggers the random ordnance system to spawn a specific weapon at given location. <flag_object> <weapon_variant_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop_random_enable",
	['boolean'],
	"void",
	['H4'],
	"Enables/disables random ordnance system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop_random_is_enabled",
	[],
	"boolean",
	['H4'],
	"Returns current enable state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_show_nav_markers",
	['boolean'],
	"void",
	['H4'],
	"Show/hide ordnance nav markers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_set_droppod_object",
	['object_definition', 'effect'],
	"void",
	['H4'],
	"Set ordnance drop pod scenery object type and the locator effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_silent_assist_level",
	['player', 'long'],
	"void",
	['H4'],
	"Sets the silent-assist level for a given player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_silent_assist_level",
	['player'],
	"long",
	['H4'],
	"Gets the current silent assist level for the given player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_respawn_dead_players",
	[],
	"void",
	['H4'],
	"Respawns all dead players even if no lives are left",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_lives_get",
	[],
	"long",
	['H4'],
	"Get the number of lives left in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_lives_set",
	['long'],
	"void",
	['H4'],
	"Set the number of lives left in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_infinite_lives_set",
	['boolean'],
	"void",
	['H4'],
	"Enable or disable infinite lives mode in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_goal_get",
	[],
	"short",
	['H4'],
	"Get the current set index for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_waves_in_player_goal",
	[],
	"short",
	['H4'],
	"Get the number of waves per round for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_wave_get",
	[],
	"short",
	['H4'],
	"Get the current wave index for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_wave_squad",
	[],
	"long",
	['H4'],
	"Returns the name of the squad template for the current wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_award_hero_medal",
	[],
	"void",
	['H4'],
	"Lets the engine award the hero medal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_time_limit",
	[],
	"long",
	['H4'],
	"Get the firefight mode time limit from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_goal_count",
	[],
	"long",
	['H4'],
	"Get the firefight mode set count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_bonus_lives_awarded",
	[],
	"long",
	['H4'],
	"Get the firefight mode bonus lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_shared_team_life_count",
	[],
	"long",
	['H4'],
	"Get the firefight mode spartan life count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_max_lives",
	[],
	"long",
	['H4'],
	"Get the firefight mode max lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_ammo_crates_enable",
	[],
	"boolean",
	['H4'],
	"Get the firefight mode ammo crates enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_current_wave_spawn_method",
	[],
	"delivery_method",
	['H4'],
	"Get the firefight mode current wave uses a dropship property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_team_respawns_on_wave",
	[],
	"boolean",
	['H4'],
	"Does this team respawn only when waves complete?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_sudden_death",
	['boolean'],
	"void",
	['H4'],
	"Start or stop sudden death for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_player_count_by_team",
	['team'],
	"long",
	['H4'],
	"Given a team index, returns the player count of that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_increment_player_goal",
	['wave_difficulty'],
	"long",
	['H4'],
	"Move on to the next valid player goal, returns the index of the player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_start_goals",
	['wave_difficulty'],
	"void",
	['H4'],
	"Sets up the first player goal. with the given difficulty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_increment_wave",
	[],
	"long",
	['H4'],
	"Move on to the next valid wave, returns the index of the wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_current_player_goal_type",
	[],
	"firefight_goal",
	['H4'],
	"Get the firefight goal type for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_player_goal_type",
	['long'],
	"firefight_goal",
	['H4'],
	"Get the firefight goal type for the specified player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_set_squad_group",
	['ai'],
	"void",
	['H4'],
	"Set the squad that the firefight game engine is 'watching'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_get_squad_group",
	[],
	"ai",
	['H4'],
	"Gets the squad group that firefight is 'watching'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_objective",
	['short'],
	"short",
	['H4'],
	"Returns the table index for the current objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_objective",
	['long', 'short'],
	"short",
	['H4'],
	"Returns the table index for the specified objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_start_location_folder",
	[],
	"short",
	['H4'],
	"Returns the table index for the current start location folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_start_location_folder",
	['long'],
	"short",
	['H4'],
	"Returns the table index for the specified start location folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_squad_to_place",
	['short'],
	"short",
	['H4'],
	"Returns the table index for the current squad to be placed at the specified index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_squad_to_place",
	['long-1', 'long-2', 'short'],
	"short",
	['H4'],
	"Returns the table index for the specified squad to be placed at the specified index in the specified wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_start_crate",
	['short'],
	"short",
	['H4'],
	"Returns the table index for the current crate folder to be placed at the specified index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_wave_type",
	[],
	"short",
	['H4'],
	"Returns the type of the current firefight wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_weapon_drop",
	[],
	"string_id",
	['H4'],
	"Returns the current weapon to be dropped in the weapon drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_vehicle_drop",
	[],
	"string_id",
	['H4'],
	"Returns the current weapon to be dropped in the vehicle drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_weapon_drop",
	['long-1', 'long-2'],
	"string_id",
	['H4'],
	"Returns the specified wave's weapon to be dropped in the weapon drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_vehicle_drop",
	['long-1', 'long-2'],
	"string_id",
	['H4'],
	"Returns the specified wave's weapon to be dropped in the vehicle drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_user_data",
	[],
	"long",
	['H4'],
	"Get the user data for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_user_data",
	['long'],
	"long",
	['H4'],
	"Get the user data for a specified goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_objective_name_at",
	['short'],
	"object_name",
	['H4'],
	"Gets the objective name at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_objective_name_at",
	['object_name', 'short'],
	"void",
	['H4'],
	"Sets the objective name at the specified index to the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_crate_folder_at",
	['short'],
	"folder",
	['H4'],
	"Gets the crate folder at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_is_crate_folder_valid",
	['short'],
	"boolean",
	['H4'],
	"Checks if the folder is valid at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_crate_folder_at",
	['folder', 'short'],
	"void",
	['H4'],
	"Sets the crate folder at the specified index to the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_squad_at",
	['short'],
	"ai",
	['H4'],
	"Gets the squad at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_squad_at",
	['ai', 'short'],
	"void",
	['H4'],
	"Sets the squad at the specified index to the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_apply_player_traits",
	['player'],
	"void",
	['H4'],
	"Applies the player traits for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_goal_time_limit",
	[],
	"short",
	['H4'],
	"Gets the time limit (in minutes) for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_player_spawn_suppressed",
	['boolean'],
	"void",
	['H4'],
	"Sets the flag to suppress player spawn (or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_player_spawn_suppressed",
	[],
	"boolean",
	['H4'],
	"Gets the flag to see if player spawn is suppressed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_clear_progression",
	['controller'],
	"void",
	['H4'],
	"Resets the current progression for a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_mark_mission_attempted",
	['controller', 'long', 'game_difficulty'],
	"void",
	['H4'],
	"Marks a mission in-progress",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_mark_mission_complete",
	['controller', 'long', 'game_difficulty'],
	"void",
	['H4'],
	"Marks a mission complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_set_timeline_length",
	['long'],
	"void",
	['H4'],
	"Shortens the timeline for ui debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_gpu_capture",
	[],
	"void",
	['H4'],
	"Captures the next gpu frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_cpu_task_trace",
	['string'],
	"void",
	['H4'],
	"Captures a cpu trace of the named task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_cpu_trace",
	[],
	"void",
	['H4'],
	"Captures a cpu trace",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_cpu_timing",
	[],
	"void",
	['H4'],
	"Performs a system timing capture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CreateDynamicTask",
	['long-1', 'long-2', 'object', 'script', 'real'],
	"long",
	['H4'],
	"Create a dynamic task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CreateDynamicTeamTask",
	['long-1', 'long-2', 'object', 'script', 'real', 'team'],
	"long",
	['H4'],
	"Create a dynamic task with a team parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"DestroyDynamicTask",
	['long'],
	"void",
	['H4'],
	"Destroy dynamic task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetDynamicTaskFilterFlags",
	['ai', 'long'],
	"void",
	['H4'],
	"Set task filter flags on an actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetDynamicTaskTeamFilter",
	['long-1', 'long-2'],
	"void",
	['H4'],
	"Set task's allowed teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"IsDynamicTaskValid",
	['long'],
	"boolean",
	['H4'],
	"Verify dynamic task exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetObjectLongVariable",
	['object', 'long-1', 'long-2'],
	"void",
	['H4'],
	"Store a named variable in an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetObjectRealVariable",
	['object', 'long', 'real'],
	"void",
	['H4'],
	"Store a named variable in an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetObjectLongVariable",
	['object', 'long'],
	"long",
	['H4'],
	"Recall a named variable from an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetObjectRealVariable",
	['object', 'long'],
	"real",
	['H4'],
	"Recall a named variable from an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SendCommandEvent",
	['object', 'long-1', 'long-2', 'real'],
	"void",
	['H4'],
	"Send generic command event to specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"RegisterForObjectEvent",
	['object', 'long'],
	"void",
	['H4'],
	"Listen for specified internal event coming from selected object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"UnregisterForObjectEvent",
	['object', 'long'],
	"void",
	['H4'],
	"Stop listening for specified internal event coming from selected object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetObjectEventCallback",
	['object', 'script'],
	"void",
	['H4'],
	"Set the function called when selected object throws a registered event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_next_cinematic",
	['short-1', 'short-2', 'short-3'],
	"void",
	['H4'],
	"Record the next cinematic (<frame rate> <width> <height>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_next_cinematic_fml",
	['short-1', 'short-2', 'short-3'],
	"void",
	['H4'],
	"Record the next cinematic first, middle, last shot frames (<frame rate> <width> <height>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_next_cinematic_distributed",
	['short-1', 'short-2', 'short-3', 'short-4'],
	"void",
	['H4'],
	"Record the next cinematic distributed (<frame rate> <width> <height> <frame mod count>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real', 'long'],
	"boolean",
	['H4'],
	"Start or change ics camera (player, marker_name, user-control cone angle, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real-1', 'real-2', 'long'],
	"boolean",
	['H4'],
	"Start or change ics camera (player, marker_name, user-control cone angle, auto-centering strength, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'long'],
	"boolean",
	['H4'],
	"Start or change ics camera (player, marker_name, user-control cone angles (minh, maxh, minv, maxv), auto-centering strength, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real-1', 'real-2', 'real-3', 'real-4', 'real-5', 'real-6', 'real-7', 'long'],
	"boolean",
	['H4'],
	"Start or change ics camera (player, marker_name, user-control cone angles (minh, maxh, minv, maxv, softh, softv), auto-centering strength, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"FirstPersonSetBodyRegionVisibility",
	['player', 'string_id-1', 'string_id-2'],
	"boolean",
	['H4'],
	"Sets the visibility of a named region on the first-person body model. valid options are 'on', 'off' and 'default'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"killcam_debug",
	['boolean'],
	"void",
	['H4'],
	"Enable or disable kill cam debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_point",
	['player', 'point_reference', 'real-1', 'real-2', 'long'],
	"void",
	['H4'],
	"Force player to move towards a point until it is within a radius, or a timer expires. params are point, max_throttle, max_radius, max_ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_object",
	['player', 'object', 'real-1', 'real-2', 'long'],
	"void",
	['H4'],
	"Force player to move towards an object until it is within a radius, or a timer expires. params are point, max_throttle, max_radius, max_ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_marker",
	['player', 'object', 'string_id', 'real-1', 'real-2', 'long'],
	"void",
	['H4'],
	"Force player to move towards an object until it is within a radius, or a timer expires. params are point, max_throttle, max_radius, max_ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_stop_move_to",
	['player'],
	"void",
	['H4'],
	"Stop any move_to command that might be active on this player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_active",
	['player'],
	"boolean",
	['H4'],
	"Returns true if a move_to command is still active on this player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"io_set_imposter_distance",
	['long-1', 'long-2', 'real'],
	"void",
	['H4'],
	"Set imposter distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_saved_game",
	['string-1', 'string-2'],
	"boolean",
	['H4'],
	"Test parsing and validation functions for fuzzed single player saved game files for the active user. the header file is copied from <headerpath>, and the saved game file from <filepath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_saved_film",
	['string'],
	"boolean",
	['H4'],
	"Test parser and validator for fuzzed saved films and clips from <filmpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_map_variant",
	['string'],
	"boolean",
	['H4'],
	"Test parser and validator for fuzzed saved map variants from <mapvariantpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_game_variant",
	['string'],
	"boolean",
	['H4'],
	"Test parser and validator for fuzzed saved game variants from <gamevariantpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_screenshot",
	['string'],
	"boolean",
	['H4'],
	"Test parser and validator for fuzzed screenshot from <screenshotpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_and_copy_saved_content",
	['string'],
	"void",
	['H4'],
	"Lists and copies all the saved content available to <destination>. to skip copying set destination as '-'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"FilterZoneResourcesWithMapVariant",
	['boolean'],
	"void",
	['H4'],
	"Enable or disable map variant resource filtering",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_wireframe",
	[],
	"void",
	['H4'],
	"Toggle in and out of wireframe render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_wireframe_use_depth",
	[],
	"void",
	['H4'],
	"Toggle depth for ios in wireframe render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_wireframe_show_transparents",
	[],
	"void",
	['H4'],
	"Toggle transparents wireframe render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_activate",
	['object'],
	"void",
	['H4'],
	"Activate a sentry turret",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_deactivate",
	['object'],
	"void",
	['H4'],
	"Deactivate a sentry turret",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_activate_barrel",
	['object', 'long'],
	"void",
	['H4'],
	"Activate a sentry turret barrel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_deactivate_barrel",
	['object', 'long'],
	"void",
	['H4'],
	"Deactivate a sentry turret barrel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"IsNarrativeFlagSetOnAnyPlayer",
	['long'],
	"boolean",
	['H4'],
	"Is the specified narrative flag set on any player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlagOnLocalPlayers",
	['long', 'boolean'],
	"void",
	['H4'],
	"Set the specified narrative flag set on all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetNarrativeFlag",
	['player', 'long'],
	"boolean",
	['H4'],
	"Returns the current state of the narrative flag at the given index for the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlag",
	['player', 'long', 'boolean'],
	"void",
	['H4'],
	"Sets the state of the narrative terminal flag at the given index for the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_bad_collision_to_render_mesh_mappings",
	[],
	"void",
	['H4'],
	"Toggle display collision tris with capped render tri mapping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlagWithFanfareMessageForAllPlayers",
	['long', 'boolean'],
	"void",
	['H4'],
	"Sets a waypoint narrative flag for all players and loads a cui fanfare screen for everyone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_test",
	[],
	"void",
	['H4'],
	"Drop spartan objects to test pvp perf",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_test_reset",
	[],
	"void",
	['H4'],
	"Reset pvp drop test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_test_increment_team",
	[],
	"void",
	['H4'],
	"Cycle colors to next team for dropped bipeds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_elites",
	[],
	"void",
	['H4'],
	"Drop elite objects to test pvp perf",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streaming_video_queue",
	['string', 'controller'],
	"boolean",
	['H4'],
	"Queue a streaming video",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streaming_video_stop",
	[],
	"boolean",
	['H4'],
	"Exit the current streaming video",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_open_header_signature_failure",
	['string', 'boolean'],
	"void",
	['H4'],
	"Force signature failure check performed on cache file header on open <map name> <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_read_header_signature_failure",
	['string', 'boolean'],
	"void",
	['H4'],
	"Force signature failure check performed on cache file header before tag data read <map name> <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_read_content_signature_failure",
	['string', 'boolean'],
	"void",
	['H4'],
	"Force signature failure check performed on content hashes before tag data read <map name> <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_manifest_hash_failure",
	['boolean'],
	"void",
	['H4'],
	"Force failure check performed on map file manifest hashes in network banhammer <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"io_set_imposter_brightness",
	['long-1', 'long-2', 'real'],
	"void",
	['H4'],
	"Set imposter brightness",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_is_completed_on_legendary",
	['player'],
	"boolean",
	['H4'],
	"Are all campaign levels completed on legendary difficulty?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_load_pck",
	['string'],
	"void",
	['H4'],
	"Loads a pck for dev purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_ace_build",
	[],
	"boolean",
	['H4'],
	"Returns whether this is an ace build",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_special_action",
	[],
	"boolean",
	['H4'],
	"Returns true if any player has hit the special action button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_special_action",
	['player'],
	"boolean",
	['H4'],
	"Returns true if any player has hit the special action button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlagWithFanfareMessageForPlayer",
	['object', 'long', 'boolean'],
	"void",
	['H4'],
	"Sets a waypoint narrative flag for the player who pressed the button and loads a cui fanfare screen for him",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"adjust_camera_interpolation",
	[],
	"void",
	['H4'],
	"Adjust camera interpolation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position",
	['real-1', 'real-2', 'real-3', 'string_id-1', 'string_id-2', 'boolean'],
	"void",
	['H4'],
	"Turns on/off a navpoint tracking a position with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position_with_string",
	['real-1', 'real-2', 'real-3', 'string_id-1', 'string_id-2', 'string_id-3'],
	"void",
	['H4'],
	"Turns on a navpoint tracking a position with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position_for_player",
	['player', 'real-1', 'real-2', 'real-3', 'string_id-1', 'string_id-2', 'boolean'],
	"void",
	['H4'],
	"Turns on/off a navpoint tracking a position for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position_for_player_with_string",
	['player', 'real-1', 'real-2', 'real-3', 'string_id-1', 'string_id-2', 'string_id-3'],
	"void",
	['H4'],
	"Turns on a navpoint tracking a position with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_position_set_vertical_offset",
	['string_id', 'real'],
	"void",
	['H4'],
	"Set the vertical offset in world units for a tracked position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_position_set_on_radar",
	['string_id', 'boolean-1', 'boolean-2'],
	"void",
	['H4'],
	"Set the position on the radar for a tracked position: first bool is for enable/disable, second is to show extended range in radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_position",
	['string_id'],
	"boolean",
	['H4'],
	"Checks if tracking is on for an position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_position_for_player",
	['player', 'string_id'],
	"boolean",
	['H4'],
	"Checks if tracking is on for a position for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_set_next_improved",
	['boolean'],
	"void",
	['H4'],
	"Tell the navpoint system the next navpoint is an improved navpoint",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_set_improved_for_player",
	['player', 'boolean'],
	"void",
	['H4'],
	"Tell the navpoint system the next navpoint is an improved navpoint for a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_using_improved_navpoints",
	[],
	"boolean",
	['H4'],
	"Checks if level was started with improved nav points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"disable_interpolation_for_one_shot",
	[],
	"void",
	['H4'],
	"Disable s3d interpolation for one cinematic shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_play_sound",
	['ai', 'boolean', 'sound', 'real-1?', 'real-2?'],
	"boolean",
	['H3', 'HO'],
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length, at the given volume (0..1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_cast",
	['ai', 'boolean', 'short', 'string_id-1', 'string_id-2?', 'string_id-3?', 'string_id-4?', 'string_id-5?', 'string_id-6?', 'string_id-7?'],
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
	"Cast up to 7 actors for a vignette (at the given priority, higher = more important)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_scene",
	['string_id', 'ai_command_script', 'ai-1', 'ai-2?', 'ai-3?'],
	"boolean",
	['H2'],
	"Start the named scene, with the named command script on the named set of squads (max 3 squads)",
);
hsFunctions.push(newFunc);