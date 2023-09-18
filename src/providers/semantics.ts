import * as vscode from 'vscode';


export class hsProvider implements vscode.DocumentSemanticTokensProvider{
    legend: vscode.SemanticTokensLegend
    constructor(extensionPath: vscode.SemanticTokensLegend) {
		this.legend = extensionPath;
    }
	provideDocumentSemanticTokens(
		document: vscode.TextDocument): Promise<vscode.SemanticTokens> {
            return new Promise<vscode.SemanticTokens>((resolve, reject) => {
                // analyze the document and return semantic tokens
                const tokensBuilder = new vscode.SemanticTokensBuilder(this.legend);
                const text = document.getText();
                const regex = /\b(looping_sound|object_definition|cutscene_recording|string|cinematic_lightprobe|ai_command_list|text_alignment|device|starting_profile|delivery_method|conversation|long|scenery_name|unit|vehicle_name|point_reference|string_id|mp_team|ai_line|any_tag|skull|unit_seat_mapping|render_model|cinematic_scene_definition|text_drop_shadow_type|currency_type|zone_set|weapon_name|voice_mask|button_preset|effect|player_color|cinematic_scene_data_definition|hud_corner|ai_command_script|actor_variant|object_name|cinematic_transition_definition|player_model_choice|bink_definition|cutscene_camera_point|folder|looping_sound_budget_reference|text_justification|voice_output_setting|cui_screen_definition|character_physics|sound|navpoint|damage_region|controller|network_event|sound_budget_reference|device_name|short|subtitle_setting|object_list|ai_behavior|cutscene_flag|event|havok_group|designer_zone|ai|wave_difficulty|any_tag_not_resolving|damage|secondary_skull|sound_event|actor_type|firing_point_evaluator|model_state|device_group|effect_scenery|scenery|real|joystick_preset|cinematic_definition|damage_effect|ai_orders|object|animation_graph|hud_message|team|style|player_character_type|player|boolean|firefight_wave_type|primary_skull|structure_definition|font|trigger_volume|ai_default_state|weapon|bitmap|void|structure_bsp|unit_name|shader|function_name|firefight_goal|game_difficulty|point_set_reference|cutscene_title|lightmap_definition|passthrough|animation_budget_reference|effect_scenery_name|vehicle)\b\s+/g;
                let variables: string[] = []
                let match;
                while ((match = regex.exec(text))) {
                    const variableRange = document.getWordRangeAtPosition(document.positionAt(match.index + match[1].length + 1));
                    const varName = document.getText(variableRange)
                    const endRange = variableRange?.end
                    endRange?.character
                    if (variableRange == null)
                    {
                        continue;
                    }
                    variables.push(varName)
                    tokensBuilder.push(
                        variableRange,
                        'variable',
                        ['declaration'],
                        );
                }
                for (var v in variables)
                {
                    var currentVar = variables[v]
                    var re_var = "\\b" + currentVar + "\\b"
                    var re = new RegExp(re_var,"g");
                    let match;
                    while ((match = re.exec(text))) {
                        const startPosition = document.positionAt(match.index);
                        const endPosition = document.positionAt(match.index + match[0].length);
                        tokensBuilder.push(
                            new vscode.Range(startPosition, endPosition),
                            'variable',
                            ['declaration'],
                            );
                    }
                }
                // on line 1, characters 1-5 are a class declaration
                resolve(tokensBuilder.build());
            });

        }
        
}