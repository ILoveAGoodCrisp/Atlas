class HSScriptType {
	constructor(
		public name: string,
		public desc: string
	) {}
}

export var hsScriptTypes = new Array<HSScriptType>();

var newScript = new HSScriptType(
	"startup",
	"Runs a script at map load (or if game_scripts are disabled, only once they are enabled). Startup scripts are exhausted once they have executed their expressions. Runs in its own thread",
);
hsScriptTypes.push(newScript);

var newScript = new HSScriptType(
	"dormant",
	"Initializes a script thread at map load, and then sets it to sleep until woken. Dormant scripts can be woken when invoked with the wake() function (Cannot be woken if game_scripts are disabled). Dormant scripts are exhausted once they have executed their expressions. Runs in its own thread",
);
hsScriptTypes.push(newScript);

var newScript = new HSScriptType(
	"continuous",
	"Runs a script at map load (or if game_scripts are disabled, only once they are enabled). Continuous scripts will repeat themselves after executing their expressions. Runs in its own thread",
);
hsScriptTypes.push(newScript);

var newScript = new HSScriptType(
	"static",
	"Only runs when directly called and returns the last value evaluated. Will run inside the thread that calls it (unless invoked with the thread() function - Halo 4 only). Script must declare a return type (following the script type declaration). Static scripts support parameters which are declared inside the parenthesis following the script name",
);
hsScriptTypes.push(newScript);

var newScript = new HSScriptType(
	"stub",
	"Works exactly like a static script, except that it will be overridden if a static script with the same name exists.",
);
hsScriptTypes.push(newScript);

var newScript = new HSScriptType(
	"command_script",
	"Script that is executed by the AI it is called on.These functions implicity take the AI in the command script as the actor that they operate on. The keyword ai_current_actor can be used to return the AI actor running this script. ai_current_squad will return the squad of the AI actor.",
);
hsScriptTypes.push(newScript);