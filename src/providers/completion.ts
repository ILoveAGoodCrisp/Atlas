import * as vscode from 'vscode';

import {hsFunctions} from '../definitions/functions'
import {hsGlobals} from '../definitions/globals'
import {hsKeywords} from '../definitions/keywords'
import {hsScriptTypes} from '../definitions/scriptTypes'
import {hsValueTypes} from '../definitions/valueTypes'

const path = require('path');

const FUNC_REGEX_CLASSIC = /(?<=\(\bscript\b\s\b(startup|continuous|dormant|command_script)\b\s)\w+|(?<=\(\bscript\b\s\b(static|stub)\b\s\b(mp_team|cinematic_scene_definition|object_list|delivery_method|unit_name|object_name|scenery|function_name|ai_behavior|bitmap|render_model|currency_type|event|object_definition|string_id|damage|weapon|unit_seat_mapping|ai_line|animation_budget_reference|controller|firefight_wave_type|ai_default_state|sound_budget_reference|ai|effect_scenery|model_state|passthrough|cutscene_flag|hud_corner|hud_message|wave_difficulty|lightmap_definition|script|text_justification|text_drop_shadow_type|network_event|point_reference|real|shader|object|secondary_skull|actor_variant|firefight_goal|ai_command_script|voice_mask|cinematic_lightprobe|structure_definition|effect|cutscene_recording|vehicle_name|subtitle_setting|string|device|actor_type|any_tag_not_resolving|device_group|effect_scenery_name|voice_output_setting|cinematic_definition|navpoint|bink_definition|player_character_type|cutscene_title|looping_sound_budget_reference|unit|character_physics|player|ai_command_list|animation_graph|style|vehicle|player_color|zone_set|boolean|any_tag|havok_group|trigger_volume|text_alignment|designer_zone|cutscene_camera_point|team|font|cinematic_transition_definition|conversation|starting_profile|long|skull|sound|button_preset|cinematic_scene_data_definition|damage_region|primary_skull|void|structure_bsp|looping_sound|device_name|short|damage_effect|firing_point_evaluator|weapon_name|scenery_name|folder|joystick_preset|ai_orders|game_difficulty|point_set_reference|player_model_choice|cui_screen_definition|sound_event)\b\s)\(*\w+/gi;
const FUNC_REGEX_NEW = /(?<=\bscript\b\s\b(startup|continuous|dormant|command_script)\b\s)\w+|(?<=\bscript\b\s\b(static|stub)\b\s\b(mp_team|cinematic_scene_definition|object_list|delivery_method|unit_name|object_name|scenery|function_name|ai_behavior|bitmap|render_model|currency_type|event|object_definition|string_id|damage|weapon|unit_seat_mapping|ai_line|animation_budget_reference|controller|firefight_wave_type|ai_default_state|sound_budget_reference|ai|effect_scenery|model_state|passthrough|cutscene_flag|hud_corner|hud_message|wave_difficulty|lightmap_definition|script|text_justification|text_drop_shadow_type|network_event|point_reference|real|shader|object|secondary_skull|actor_variant|firefight_goal|ai_command_script|voice_mask|cinematic_lightprobe|structure_definition|effect|cutscene_recording|vehicle_name|subtitle_setting|string|device|actor_type|any_tag_not_resolving|device_group|effect_scenery_name|voice_output_setting|cinematic_definition|navpoint|bink_definition|player_character_type|cutscene_title|looping_sound_budget_reference|unit|character_physics|player|ai_command_list|animation_graph|style|vehicle|player_color|zone_set|boolean|any_tag|havok_group|trigger_volume|text_alignment|designer_zone|cutscene_camera_point|team|font|cinematic_transition_definition|conversation|starting_profile|long|skull|sound|button_preset|cinematic_scene_data_definition|damage_region|primary_skull|void|structure_bsp|looping_sound|device_name|short|damage_effect|firing_point_evaluator|weapon_name|scenery_name|folder|joystick_preset|ai_orders|game_difficulty|point_set_reference|player_model_choice|cui_screen_definition|sound_event)\b\s)\w+/gi;
const VAR_REGEX = /(?<=\b(global|local|instanced|static)\b\s\b(mp_team|cinematic_scene_definition|object_list|delivery_method|unit_name|object_name|scenery|function_name|ai_behavior|bitmap|render_model|currency_type|event|object_definition|string_id|damage|weapon|unit_seat_mapping|ai_line|animation_budget_reference|controller|firefight_wave_type|ai_default_state|sound_budget_reference|ai|effect_scenery|model_state|passthrough|cutscene_flag|hud_corner|hud_message|wave_difficulty|lightmap_definition|script|text_justification|text_drop_shadow_type|network_event|point_reference|real|shader|object|secondary_skull|actor_variant|firefight_goal|ai_command_script|voice_mask|cinematic_lightprobe|structure_definition|effect|cutscene_recording|vehicle_name|subtitle_setting|string|device|actor_type|any_tag_not_resolving|device_group|effect_scenery_name|voice_output_setting|cinematic_definition|navpoint|bink_definition|player_character_type|cutscene_title|looping_sound_budget_reference|unit|character_physics|player|ai_command_list|animation_graph|style|vehicle|player_color|zone_set|boolean|any_tag|havok_group|trigger_volume|text_alignment|designer_zone|cutscene_camera_point|team|font|cinematic_transition_definition|conversation|starting_profile|long|skull|sound|button_preset|cinematic_scene_data_definition|damage_region|primary_skull|void|structure_bsp|looping_sound|device_name|short|damage_effect|firing_point_evaluator|weapon_name|scenery_name|folder|joystick_preset|ai_orders|game_difficulty|point_set_reference|player_model_choice|cui_screen_definition|sound_event)\b\s)\w+/gi;

// Provides function completion
export class hsProvider {
	itemsHS1: vscode.CompletionItem[];
	itemsHS2: vscode.CompletionItem[];
	itemsHS3: vscode.CompletionItem[];
	itemsHSO: vscode.CompletionItem[];
	itemsHSR: vscode.CompletionItem[];
	itemsHS4: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.itemsHS1 = new Array<vscode.CompletionItem>();
		this.itemsHS2 = new Array<vscode.CompletionItem>();
		this.itemsHS3 = new Array<vscode.CompletionItem>();
		this.itemsHSO = new Array<vscode.CompletionItem>();
		this.itemsHSR = new Array<vscode.CompletionItem>();
		this.itemsHS4 = new Array<vscode.CompletionItem>();
		for (var i in hsFunctions) {

			var func = hsFunctions[i];
			var itemNew = new vscode.CompletionItem(func.name);
			var itemClassic = new vscode.CompletionItem(func.name);
			let joinedArgs = func.args.join(', ');
			if (func.args.length <= 0)
				joinedArgs = "";
			itemNew.detail = func.r_type + " " + func.name + "(" + joinedArgs + ")";
			itemNew.kind = vscode.CompletionItemKind.Function;
			itemClassic.kind = vscode.CompletionItemKind.Function;

			itemNew.documentation = func.desc;
			itemClassic.documentation = func.desc;

			itemNew.command = {command: 'atlas.triggerSignatureHelp', title: 'Trigger Signature Help',};
			itemClassic.command = {command: 'atlas.triggerSignatureHelp', title: 'Trigger Signature Help',};
			if (func.args.length > 0)
			{
				itemClassic.insertText = func.name + ' '
			}
			else
			{
				itemClassic.insertText = func.name
			}
			
			// itemNew.insertText = new vscode.SnippetString(func.name + '(${1})');

			joinedArgs = " " + func.args.join(' ');
			// let snip = ' ${1}'
			// if (func.args.length <= 0)
			// {
			// 	joinedArgs = "";
			// 	snip = '${1}'
			// }

			itemClassic.detail = func.r_type + " " + "(" + func.name + joinedArgs + ")";
			// itemClassic.insertText = new vscode.SnippetString(func.name + snip);
			
			
			if (func.games.includes('H1')) 
			{
				this.itemsHS1.push(itemClassic);
			}
			if (func.games.includes('H2')) 
			{
				this.itemsHS2.push(itemClassic);
			}
			if (func.games.includes('H3')) 
			{
				this.itemsHS3.push(itemClassic);
			}
			if (func.games.includes('HO')) 
			{
				this.itemsHSO.push(itemClassic);
			}
			if (func.games.includes('HR')) 
			{
				this.itemsHSR.push(itemClassic);
			}
			if (func.games.includes('H4')) 
			{
				this.itemsHS4.push(itemNew);
			}
		}
		for (var i in hsGlobals) {

			var glob = hsGlobals[i];
			var item = new vscode.CompletionItem(glob.name);
			
			item.kind = vscode.CompletionItemKind.Variable;

			item.detail = glob.r_type + " " + glob.name
			
			if (glob.games.includes('H1')) 
			{
				this.itemsHS1.push(item);
			}
			if (glob.games.includes('H2')) 
			{
				this.itemsHS2.push(item);
			}
			if (glob.games.includes('H3')) 
			{
				this.itemsHS3.push(item);
			}
			if (glob.games.includes('HO')) 
			{
				this.itemsHSO.push(item);
			}
			if (glob.games.includes('HR')) 
			{
				this.itemsHSR.push(item);
			}
			if (glob.games.includes('H4')) 
			{
				this.itemsHS4.push(item);
			}
		}
		for (var i in hsKeywords) {
			var keyword = hsKeywords[i];

			var item = new vscode.CompletionItem(keyword.name);
			if (keyword.name == 'begin_count' || keyword.name == 'begin_random_count')
			{
				item.detail = keyword.name + "(long)";
				item.insertText = new vscode.SnippetString(keyword.name + '(${1})');
			}
			else
			{
				item.detail = keyword.name;
			}

			item.documentation = keyword.desc;
			
			item.kind = vscode.CompletionItemKind.Keyword;
			this.itemsHS4.push(item);
		}
		for (var i in hsScriptTypes) {
			var scriptType = hsScriptTypes[i];

			var item = new vscode.CompletionItem(scriptType.name);
			item.detail = "Script Type: " + scriptType.name
			item.documentation = scriptType.desc;
			item.kind = vscode.CompletionItemKind.Class;
			this.itemsHS1.push(item);
			this.itemsHS2.push(item);
			this.itemsHS3.push(item);
			this.itemsHSO.push(item);
			this.itemsHSR.push(item);
			this.itemsHS4.push(item);
		}
		for (var i in hsValueTypes) {
			var returnType = hsValueTypes[i];

			var item = new vscode.CompletionItem(returnType.name);
			item.detail = returnType.name
			item.documentation = returnType.desc;
			item.kind = vscode.CompletionItemKind.Property;

			if (returnType.games.includes('H1')) 
			{
				this.itemsHS1.push(item);
			}
			if (returnType.games.includes('H2')) 
			{
				this.itemsHS2.push(item);
			}
			if (returnType.games.includes('H3')) 
			{
				this.itemsHS3.push(item);
			}
			if (returnType.games.includes('HO')) 
			{
				this.itemsHSO.push(item);
			}
			if (returnType.games.includes('HR')) 
			{
				this.itemsHSR.push(item);
			}
			if (returnType.games.includes('H4')) 
			{
				this.itemsHS4.push(item);
			}
		}
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext
		): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
			return new Promise<vscode.CompletionItem[]>(async (resolve, reject) => {
				let funcItems: vscode.CompletionItem[] = [];
				const newStyle = document.languageId == "hsc4";
				// Get the folder of the current document
				const folderPath = path.dirname(document.uri.fsPath);
				const folderUri = vscode.Uri.file(folderPath);
				// Find .hsc files in the same folder as the current document
				const fs = vscode.workspace.fs;
				const files = await fs.readDirectory(folderUri);
				const hscFiles = files.filter(([_, type]) => type === vscode.FileType.File && _.endsWith('.hsc')).map(([name]) => vscode.Uri.joinPath(folderUri, name));
				const suggestedUserFuncs = [];
				const suggestedUserVars = [];
				let funcRegex = FUNC_REGEX_CLASSIC;
				if (newStyle)
					funcRegex = FUNC_REGEX_NEW;

				if (document.languageId == "hsc1")
				{
					funcItems = this.itemsHS1.concat(funcItems);
				}
				else if (document.languageId == "hsc2")
				{
					funcItems = this.itemsHS2.concat(funcItems);
				}
				else if (document.languageId == "hsc3")
				{
					funcItems = this.itemsHS3.concat(funcItems);
				}
				else if (document.languageId == "hsco")
				{
					funcItems = this.itemsHSO.concat(funcItems);
				}
				else if (document.languageId == "hscr")
				{
					funcItems = this.itemsHSR.concat(funcItems);
				}
				else if (document.languageId == "hsc4")
				{
					funcItems = this.itemsHS4.concat(funcItems);
				}

				for (const file of hscFiles) {
					const fileContent = (await vscode.workspace.fs.readFile(file)).toString();
					const fileName = path.basename(file.fsPath);
					const userFuncs = fileContent.match(funcRegex);
					if (userFuncs) {
						for (const word of userFuncs) {
							if (funcItems.some((item) => item.label === word))
								continue;
							const suggestion = new vscode.CompletionItem(word);
							if (newStyle)
								suggestion.detail = word + '()' + ' [User Defined]'
							else
								suggestion.detail = '(' + word + ')' + ' [User Defined Function]';
							suggestion.kind = vscode.CompletionItemKind.Function;
							suggestion.documentation = "Source: " + fileName
							suggestion.command = {command: 'atlas.triggerSignatureHelp', title: 'Trigger Signature Help',};
							funcItems.push(suggestion);
						}
					}
					const userVars = fileContent.match(VAR_REGEX);
					if (userVars) {
						for (const word of userVars) {
							if (funcItems.some((item) => item.label === word))
								continue;
							const suggestion = new vscode.CompletionItem(word);
							suggestion.detail = word + ' [User Defined Variable]';
							suggestion.documentation = "Source: " + fileName
							suggestion.kind = vscode.CompletionItemKind.Variable;
							funcItems.push(suggestion);
						}
					}
				}
				resolve(funcItems);
			});
		}
	}		
