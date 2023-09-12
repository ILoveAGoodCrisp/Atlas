class HSKeyword {
	constructor(
		public name: string,
		public desc: string
	) {}
}

export var hsKeywords = new Array<HSKeyword>();

var newFunc = new HSKeyword(
	"if",
	"Evaluates a boolean, if true, continues to the keyword 'then', otherwise continues to the next 'elseif' or 'else'. Must conlude with an 'end' keyword",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"then",
	"Executes the code following it. Only executed if preceeded by an 'if' or 'elseif' statement that evaluated to true",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"else",
	"Executes the code following it, only hit if the previous 'if' or 'elseif' statement has evaluated to false",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"elseif",
	"Evaluates a boolean, if true, continues to the keyword 'then', otherwise continues to the next 'elseif' or 'else'. Only hit if the previous 'if' or 'elseif' statement has evaluated to false",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"repeat",
	"Runs the code below it in a loop until the specified boolean evaluates to true. You must use the 'until' keyword to evaluate the boolean",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"until",
	"Must be used at the end of a 'repeat' loop. Evaluates the given boolean given as the first argument, if false, continues the loop, otherwise ends the loop. By default this is evaluated once every 30 ticks (one second), but the number of ticks can be specified if a second argument is provided with the nubmer of ticks to wait (if ticks are specified, the boolean and tick count must be surrounded in parenthesis).",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"end",
	"Used to declare the end of a sequence of expressions. Must always be used at the end of a script",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"begin",
	"Returns the last expression in a sequence after evaluating the sequence in order. Must conclude with an 'end' keyword",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"begin_random",
	"Evaluates the sequence of expressions in random order and returns the last value evaluated. Must conclude with an 'end' keyword",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"begin_count",
	"Evaluates the specified number of expressions in a sequence in random order and returns the last value evaluated. The number of expressions to evaluate must be the sole argument of this function. Must conclude with an 'end' keyword",
);
hsKeywords.push(newFunc);

var newFunc = new HSKeyword(
	"begin_random_count",
	"Evaluates the specified number of expressions in a sequence in random order and returns the last value evaluated. The number of expressions to evaluate must be the sole argument of this function. Must conclude with an 'end' keyword",
);
hsKeywords.push(newFunc);