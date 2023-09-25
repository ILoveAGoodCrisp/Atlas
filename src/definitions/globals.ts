export class HSGlobal {
	constructor(
		public name: string,
		public r_type: string,
		public games: string[]
	) {}
}

export var hsGlobals = new Array<HSGlobal>();

var newGlobal = new HSGlobal(
	"render_effects",
	"void",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_skip_start_internal",
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_skip_stop_internal",
	"void",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_is_authoritative",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mcc_mission_segment",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_teleport_player",
	"void",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"reload_shader_transparent_chicago",
	"void",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_model_ambient_reflection_tint",
	"void",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lights_reset_for_new_map",
	"void",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_set_near_clip_distance",
	"void",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sv_map",
	"void",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_never_timeout",
	"void",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_near_clip_distance",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_far_clip_distance",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_first_person_weapon_near_clip_distance",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_first_person_weapon_far_clip_distance",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_floating_point_zbuffer",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_framerate_throttle",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_framerate_stabilization",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_refresh_rate",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_frame_bounds_left",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_frame_bounds_right",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_frame_bounds_top",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_frame_bounds_bottom",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_stats",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_mode",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_wireframe",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_smart",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_model_vertices",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_model_lod",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_transparents",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_meter_shader",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_models",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_model_transparents",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_draw_first_person_weapon_first",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_stencil_mask",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_lightmaps",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_shadows",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_diffuse_lights",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_diffuse_textures",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_decals",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_specular_lights",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_specular_lightmaps",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_reflection_lightmap_mask",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_reflection_mirrors",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_reflections",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_transparents",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_fog",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_fog_screen",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_water",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lens_flares",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_unlit_geometry",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_lit_geometry",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_screen_geometry",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_hud_motion_sensor",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_detail_objects",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_geometry",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_geometry_multipass",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_fog_atmosphere",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_fog_plane",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_bump_mapping",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lightmap_ambient",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lightmap_mode",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lightmaps_incident_radiosity",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lightmaps_filtering",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_model_lighting_ambient",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_alpha_testing",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_environment_specular_mask",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadows_convolution",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadows_debug",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_shader_transparent_generic",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_active_camouflage",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_active_camouflage_multipass",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_plasma_energy",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lens_flares_occlusion",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lens_flares_occlusion_debug",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_ray_of_buddha",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_screen_flashes",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_screen_effects",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_log",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_detail_objects_offset_multiplier",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_zbias",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_zoffset",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_all_player_views_to_default_player",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_safe_frame_bounds",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"freeze_flying_camera",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_zsprites",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_filthy_decal_fog_hack",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pad3",
	"short",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pad3_scale",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"f0",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"f1",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"f2",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"f3",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"f4",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"f5",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_effects_level",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_fps",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_no_frustum_clip",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_frustum",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"screenshot_size",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"screenshot_count",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"terminal_render",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_spawn_count",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_object_garbage_collection",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_render_freeze",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"temporary_hud",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"breadcrumbs_navpoints_enabled_override",
	"boolean",
	['H1', 'H2', 'H3', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_leaf_index",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_leaf_portal_index",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_leaf_portals",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_animations",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_taken",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_deathless_player",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_jetpack",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_infinite_ammo",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_bottomless_clip",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_bump_possession",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_super_jump",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_reflexive_damage_effects",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_medusa",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_omnipotent",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_controller",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"effects_corpse_nonviolent",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_cache",
	"boolean",
	['H1', 'H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_cache_graph",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_obstruction_ratio",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_looping_sound",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_detail",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_hardware",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"loud_dialog_hack",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_gain_under_dialog",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_ambient_base",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_ambient_scale",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_secondary_scale",
	"real",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_interpolate",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_compression",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_data_compressed_size",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_data_uncompressed_size",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_data_compression_savings_in_bytes",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_data_compression_savings_in_bytes_at_import",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_data_compression_savings_in_percent",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_bullshit0",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_bullshit1",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_bullshit2",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"model_animation_bullshit3",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rider_ejection",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"stun_enable",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sprites",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_portals",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_inactive_objects",
	"boolean",
	['H1', 'H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_position_velocity",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_root_node",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_bounding_spheres",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_collision_models",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_physics",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_names",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_pathfinding_spheres",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_vectors",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_seats",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_mouth_apeture",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_biped_physics_pills",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_biped_autoaim_pills",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_vehicle_powered_mass_points",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_devices",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_nodes",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_vertex_counts",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_index_counts",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_markers",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_no_geometry",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadows",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_scripting",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"hs_verbose",
	"boolean",
	['H1', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"breakpoints_enabled",
	"boolean",
	['H1', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_trigger_volumes",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_point_physics",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_physics_disable_penetration_freeze",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_motion_sensor_draw_all_units",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_spray",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_features",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_repeat",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_front_facing_surfaces",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_back_facing_surfaces",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_two_sided_surfaces",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_invisible_surfaces",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_breakable_surfaces",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_structure",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_media",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_bipeds",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_vehicles",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_weapons",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_equipment",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_projectiles",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_scenery",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_machines",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_controls",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_light_fixtures",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_placeholders",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_try_to_keep_location_valid",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_skip_passthrough_bipeds",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_use_vehicle_physics",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_point_x",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_point_y",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_point_z",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_vector_i",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_vector_j",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_vector_k",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_length",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_width",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_height",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_phantom_bsp",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_on_failure",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_start_point_x",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_start_point_y",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_start_surface_index",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_goal_point_x",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_goal_point_y",
	"real",
	['H1', 'H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_goal_surface_index",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_camera",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_automatic",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_bsp",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_input",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_permanent_decals",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_fog_planes",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decals",
	"boolean",
	['H1', 'H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_decals",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_object_lights",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_lights",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_physics",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_skip_update",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_skip_collision",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_limp_body_disable",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_collision_skip_objects",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_collision_skip_vectors",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_material_effects",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"weather",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"breakable_surfaces",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"recover_saved_games_hack",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"radiosity_quality",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"radiosity_step_count",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"radiosity_lines",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"radiosity_normals",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"structures_use_pvs_for_vs",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_detail_objects",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"controls_enable_crouch",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"controls_swapped",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"controls_enable_doubled_spin",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"controls_swap_doubled_spin_state",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_autoaim",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_magnetism",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_teleport",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"director_camera_switch_fast",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"director_camera_switching",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_framerate",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_framerate",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"framerate_throttle",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"framerate_lock",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_game_save",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_out_of_sync",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"global_connection_dont_timeout",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"slow_server_startup_safety_zone_in_seconds",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"find_all_fucked_up_shit",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_suppress_all",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"run_game_scripts",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_score",
	"long",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_prediction",
	"boolean",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"developer_mode",
	"short",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mouse_acceleration",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_grunt_birthday_party",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_assassins",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_famine",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_i_would_have_been_your_daddy",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_blind",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_ghost",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_black_eye",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_catch",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_sputnik",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_mythic",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_anger",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_thunderstorm",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_iron",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_thats_just_wrong",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_bandanna",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_boom",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_eye_patch",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_fog",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_foreign",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_grunt_funeral",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_pinata",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_recession",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_malfunction",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_streaking",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_styx",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_feather",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_bonded_pair",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_masterblaster",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_force_coop",
	"boolean",
	['H1', 'H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_speed_value",
	"real",
	['H1'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_paused",
	"boolean",
	['H1', 'H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_report",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_report_summary",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_report_verbose",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_mode_control",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_mode",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_mode_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_atmospheric_fog",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_atmospheric_fog_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_secondary_fog",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_secondary_fog_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_sky_fog",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_sky_fog_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_fog",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_fog_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_fog_plane",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_fog_plane_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_max_atmospheric_depth",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_max_atmospheric_depth_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_planar_eye_density",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_planar_planar_eye_density_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_atmospheric_secondary_blend",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_atmospheric_secondary_blend_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_atmospheric_planar_blend",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fog_override_atmospheric_planar_blend_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"font_cache_flush",
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_environment_parameter",
	"void",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_include",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_include_all",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_include_all_except",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_exclude",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_exclude_all",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_exclude_all_except",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lens_flares_clear_for_frame",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_test_screen",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_test_screen_supablur",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_test_screen_off",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_f2",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_f3",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_f4",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_f5",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_f6",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_model_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_structure_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_structure_instanced_geometry_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_sky_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_decorator_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_decorator_model_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_decorator_decal_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_decorator_sprite_color",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decorator_rebuild_all",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_set_far_clip_distance",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"interpolator_stop_all",
	"void",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"interpolator_restart_all",
	"void",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"interpolator_flip",
	"void",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"vehicle_enable_ghost_effects",
	"void",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ice_cream_flavor_stock",
	"void",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ice_cream_flavor_available",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_no_drawing",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_force_all_player_views_to_default_player",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_render_horizontal_splitscreen",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_load_panic_to_main_menu",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_frame_deltas",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"console_status_string_render",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"console_pauses_game",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"framerate_infinite",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"framerate_debug",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"framerate_use_system_time",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"framerate_stabilization",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"console_dump_to_file",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"console_dump_to_debug_display",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_fov_scale",
	"real",
	['H2', 'H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_far_clip_nudge",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_wbuffer_clip_enable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_vblank_interval",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_flicker_filter",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_soft_display_filter",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_gamma_power",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shaders",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shader_submit_unified",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shader_submit_unified_safe",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shader_submit_unified_super_safe",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shader_submit_force_extern_refresh",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_sort",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_sort_force_layer",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_sort_force_order",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_karma_events",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_karma_events_detailed",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decals",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lens_flares_dof_region",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_water_mipmapping",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lens_flares_occluded_by_active_camo",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_DXTC_noise",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_flush_on_create",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_z_bias",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_z_offset_slopescale_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_z_offset",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_z_slopescale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_z_geometry_offset",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decal_debug_draw_grid",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_splitscreen_VB_optimization",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_counters_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_markers_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_print_locks",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profile_objectlock_time",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_tiny",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_busywork",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_use_offsets",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_z_offset",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_z_slope",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_env_z_offset",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_env_z_slope",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_blur",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_cinematic_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_lod_resolution_area_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_lod_resolution_light_bias_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_lod_resolution_minimum",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_lod_samples_area_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_shadow_buffer_lod_samples_light_bias_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_artist_profile",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_mode",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_bias",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_dark_clamp",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_light_clamp",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_dark_adjust_dt",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_light_adjust_dt",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_contrast_adjust_dt",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_dark_threshold",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_light_threshold",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_bloom_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_dynamic_gamma_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_vision_distance",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_vision_jitter_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_vision_noise_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_vision_scan_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_vision_scan_speed",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_bloom_default_threshold",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_selfibloomination_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_selfibloomination_to_bloom_amount",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_selfibloomination_is_fogged",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_depth_of_field_near_filter_box_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_depth_of_field_near_filter_max_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_depth_of_field_far_filter_box_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_depth_of_field_far_filter_max_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"colorbars",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_LMO_ambient",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_LMO_direct",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_LMO_indirect",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_LMO_specular",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lightmap_shadow_falloff_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_lightmap_shadow_cutoff_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_new_submission_interface",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_line_width",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_linear_gradients",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_fog_atmospheric_auto_blend",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_solid_color_mode",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decorator_accuracy_min",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_decorator_accuracy_max",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_first_person_w_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_tessellation_scale",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_patchy_fog_alpha_modulate",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_patchy_fog_force_100_percent",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_fog_planar_separate_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_force_specular",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_fog_planar_care",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_light_volume_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_light_volume_perspective_midpoints",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_light_offset",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_debug_fog_geometry",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_debug_lights",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_debug_lights_gel",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_debug_text_mode",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_debug_hulls",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_debug_edges",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_viewport_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_lightmaps",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_lightmap_control",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_lightmap_shadow_darkening",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_lightmap_shadow_extrusion",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_lightmap_shadow_carmack_optimization",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_lightmap_force_non_bumped",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_scissor_enable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_force_legacy",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_multisample_enable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shadow",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shadow_view",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shadow_mode",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shadow_debug_cluster",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shadow_multi_region",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shadow_cyborg",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_carmack_optimization",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_carmack_reverse",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_back_projection",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_single_pass_vol",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_dsq",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_dsq_vis",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_isq",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_isq_sse",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_isq_point_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_subcluster_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_subcluster_freeze",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_subcluster_optimization",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_subcluster_all_visible",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_overbright",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_ambient_diffuse",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_ambient_diffuse_bump",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_ambient_diffuse_radiosity",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_ambient_envmap",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_gel",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_n_dot_e_mask",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_diffuse",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_diffuse_shadow",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_diffuse_mask_flags",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_diffuse_n_dot_l",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_specular",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_specular_shadow",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_specular_mask_flags",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_light_specular_enable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_texture_diffuse",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_texture_specular",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_texture_mode",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_stencil_mode",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_bump_mode",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_bump_aniso",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_bump_mode_debug",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_env_zge",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_env_brev",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_env_voltex",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_env_malice",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_pop_fix",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_pop_fix_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_radiosity_hack",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_radiosity_hack_shadow",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shader_profile_mode",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_shader_profile_layer",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_objects_env_map_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_environment_env_map_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_view",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pad4",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pad_thai",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"taco_salad",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"anisotropic_binormal",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g0",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g1",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g2",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g3",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g4",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g5",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g6",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g7",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g8",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g9",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g10",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g11",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_frame_dump",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_transparent_pixel_counter",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ssc_e3_clip_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"async_display_statistics",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"async_record_statistics",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"suppress_upload_debug",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmap_pointsample",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_camera_projection",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_speed",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_time_lock",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_time_statistics",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_sampling",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_precache_progress",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"log_precache_progress",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_object_dump_log",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_all_sounds_on_player",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_player_rotation",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_rotation_scale",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_hud",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_all_animations",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_illumination",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_active_camo_frequency_modulator",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_active_camo_frequency_modulator_bias",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_melee_attack",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_boarding_force_enemy",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_model_groups_merge_nothing",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_model_groups_merge_everything",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_analog_movement",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_eye_tracking",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_animation_influenced_flight",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_flight_noise",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_player_transitions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_valhalla",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_chevy",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_simulate_gamepad",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effects_nonviolent",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effects_locations",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effects_allocation",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effects_play_distances",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_global_room_gain",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_pc_sound",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_reverb",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_cache_graph",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_speaker_output_peak",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_speaker_output_rms",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_listeners",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_reference_counts",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"background_sound_meter_display",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_environment_parameters",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channel_overflow",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_impulse_time",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_impulse_spam",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_dynamic_object_obstruction",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_stabbed",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_environment",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_secondary_direction_lerp",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_accuracy_lower_bound",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_accuracy_upper_bound",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_accuracy_exponent",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_new",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_ambient_brightness",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_primary_brightness",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_secondary_brightness",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_primary_exclusion_cone_lower_bound",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_primary_exclusion_cone_upper_bound",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_secondary_exclusion_cone_lower_bound",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_secondary_exclusion_cone_upper_bound",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"object_light_secondary_rotation",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"light_local_basis",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_log_render",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_log_detailed",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_log_extended",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_log_totals_only",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_log_time",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_collision_tolerance",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_mode",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_environment_type",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_shape_radius",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_jumping_beans",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_weld_environment",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_enable_back_stepping",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_enable_sweep_shapes",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_display_stats",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_back_step_penetration_depth",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"impacts_debug",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_damage_debug",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_play_impact_effects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_play_biped_impact_effects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"physics_debug",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_cleanup_inactive_agents",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_memory_always_system",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_environment",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_objects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_instanced_geometry",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_sky",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_fog",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_patchy_fog",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_lens_flares",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decals",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_colonies",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_contrails",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_particles",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_psystems",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_wsystems",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorators",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_old_dof",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_particles_use_visibility",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_particles_render_bounding_sphere",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_submit_opaque",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_submit_transparent",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_decorator_visibility",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_decorator_octree",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_decorator_group_visibility",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_decorators",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_force_self_shadow",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_lightmap_shadows",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_disable_screen_effects_not_first_person",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_cloth",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_lighting",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_lighting_refresh",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_fake_lightprobes",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_infinite_framerate",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_no_sapien_textures",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_set_pix_profile_mode",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_toggle_default_lightmaps_texaccum",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_single_shader",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_simple_shader",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shader_submit_record_globals_active",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shader_submit_record_globals_active_verbose",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_shader_and_mipmap_lod_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_emitters",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_locations",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_particles",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_submit_profile",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_dyanmic_objects_sh",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_light_probes",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water_enable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_weather_enable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_camera_view",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_camera_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_pvs",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_pvs_render_all",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_pvs_activation",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_use_sorted_cache",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_traversal",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_default_lighting",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_default_lighting_at_console",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_default_lighting_automatic",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_restrict_by_light_index",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_lights_specular_fade_disable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_suppressor_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_light_suppressor",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_region_projections",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_working_portals",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_region_volumes",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_volume_intersections",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_region_volumes_by_cluster_index",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_region_volumes_cluster_index",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_portals",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_portals_cluster_index",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_subcluster_lighting",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_subcluster_cycle",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_subcluster_lighting_text_list",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_light_cluster_intersections",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_light_cluster_intersections_mode",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_dof",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_allow_part_mopp",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_dont_use_precomputed_lights",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_perform_final_checks",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_merge_working_portals",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_origin",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_dynamic_render_bounding_spheres",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_render_models",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_early_movers",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_contact_points",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_constraints",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_vehicle_physics",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_mass",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_physics_models",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_full_names",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_indices",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_functions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_model_targets",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_pathfinding",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_profile_times",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_node_bounds",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_firing",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_state",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_lipsync",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_lipsync_verbose",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_emotion",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_acceleration",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_camera",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_physics_control_node",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_ground_plane",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_movement_mode",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_pathfinding_surface",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_machines",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_garbage",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_type_mask",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_sound_spheres",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_active_nodes",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_animation_times",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_freeze_ragdolls",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_disable_relaxation",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_sentinel_physics_ignore_lag",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_ignore_node_masks",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_force_awake",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_force_render_time_node_processing",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_disable_node_animation",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_object",
	"object",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_player_only",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_point_counts",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_names",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_triangle_counts",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_collision_vertex_counts",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_collision_surface_counts",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_texture_usage",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_geometry_usage",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_cost",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_skinning_disable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_damage",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_verbose",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_radius",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flags",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_instanced_geometry",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_garbage",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_sound_scenery",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_crates",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_creatures",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_child_objects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_nonpathfindable_objects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_cinematic_objects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_dead_bipeds",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_ignore_passthrough_bipeds",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_allow_early_out",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_ignore_object_index",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_start_sector_index",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obstacle_path_goal_sector_index",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"suppress_pathfinding_generation",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_tangent_space",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_bounding_spheres",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_names",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_vertex_counts",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_collision_geometry",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_surface_references",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_vector_palette",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_leaf0_index",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_leaf1_index",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_leaf_connection_index",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cluster_index",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_weapons",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_models",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"colonies",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"colonies_time_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies_cells",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies_spores",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies_spore_pods",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies_spore_desires",
	"long",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies_spread",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_colonies_change",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_light_passes",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_lightmap_sampling",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_landing",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_throttle",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_collision_skip_instanced_geometry",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_collision_object_payload_collision",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_material_default_effects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_training_debug",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_training_disable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_engine_debug_statborg",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_profile_disable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_profile_random",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_stats",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_actors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_swarms",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_paths",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_line_of_sight",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_prop_types",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_show_sound_distance",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_all_actors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_inactive_actors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_lineoffire_crouching",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_lineoffire",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_lineofsight",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_ballistic_lineoffire",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_encounter_activeregion",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vision_cones",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_current_state",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_detailed_state",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_web",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_no_friends",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_unreachable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_unopposable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_target_weight",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_idle_look",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_support_surfaces",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_recent_damage",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_current_damage",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_threats",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_emotions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_audibility",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_aiming_vectors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_secondary_looking",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_targets",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_targets_last_visible",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_states",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vitality",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_active_cover_seeking",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_evaluations",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_pursuit",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_shooting",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_trigger",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_projectile_aiming",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_aiming_validity",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_speech",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue_triggers",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue_queue",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue_queue_team",
	"short",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue_player_weights",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_dialogue_test_mode",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_teams",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_player_ratings",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_spatial_effects",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_positions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_gun_positions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_burst_geometry",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicle_avoidance",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicles_enterable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_melee_check",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue_variants",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_grenades",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_danger_zones",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_charge_decisions",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_control",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_activation",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_selected_only",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_destination",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_raw",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_current",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_failed",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_smoothed",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_avoided",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_error_thresholds",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_avoidance_segment",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_avoidance_obstacles",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_avoidance_search",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_nodes",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_nodes_all",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_nodes_polygons",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_nodes_costs",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_nodes_closest",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_player_aiming_blocked",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_rays",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_sense_t",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_avoid_t",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_clear_time",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_weights",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_objects",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vector_avoidance_intermediate",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_postcombat",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dynamic_firing_positions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_clumps",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_clump_props",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_clump_props_all",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_sectors",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_sector_bsps",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_sector_link_errors",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_intersection_links",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_non_walkable_sectors",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_threshold_links",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_sector_geometry_errors",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_pathfinding_generation_verbose",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_sectors_range_max",
	"long",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_sectors_range_min",
	"long",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_link_specific",
	"long",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_links",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_user_hints",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_hints",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_object_hints",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_object_hints_all",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_object_properties",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_hints_movement",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_orders_print_entries",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_orders_print_entries_verbose",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_orders",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_suppress_combat",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_behavior_stack",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_behavior_stack_all",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_combat_status",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_decisions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_command_scripts",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_scenes",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_scene_failures",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_hide_actor_errors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_tracking_data",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_perception_data",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_combat_status",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_tracked_props",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_joint_behaviors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_swarm",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flocks",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicle_interest",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_prop_refresh",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_all_disposable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_current_squad",
	"ai",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_current_actor",
	"ai",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicle_turns",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_discarded_firing_positions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_positions_all",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_position_info",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_inspect_avoidance_failure",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_action_selection_failure",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_asleep",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_idle",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_alert",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_active",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_uninspected",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_definite",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_certain",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_visible",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_clear_los",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_combat_status_dangerous",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_patrol",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_asleep",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_combat",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_flee",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_flaming",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_stunned",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_movement_berserk",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_pursuit_checks",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_rules",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_rule_values",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_major_upgrade",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_respawn",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_evaluation_statistics",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_communication",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_communication_player",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_vocalizations",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_placement",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_speech",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_speech_timers",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_allegiance",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_lost_speech",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_migration",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_automatic_migration",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_scripting",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_disposal",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_surprise",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_command_lists",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_damage_modifiers",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_secondary_looking",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_oversteer",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_conversations",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_killing_sprees",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_acknowledgement",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_unfinished_paths",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_bsp_transition",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_print_uncovering",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_naimad_spew",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_fast_los",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_oversteer_disable",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_evaluate_all_positions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_start_freeze",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_end_freeze",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_flood",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_maximum_radius",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_attractor",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_attractor_radius",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_attractor_weight",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_accept_radius",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_destructible",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_ballistic_lineoffire_freeze",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_blind",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_deaf",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_invisible_player",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_ignore_player",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_flee_always",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_force_all_active",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_disable_wounded_sounds",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_force_vocalizations",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_force_crouch",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_disable_smoothing",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_disable_obstacle_avoidance",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_fix_defending_guard_firing_positions",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_fix_actor_variants",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_halt_on_critical_events",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_bitstream_debug",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_bitstream_display_errors",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_bitstream_capture_structure",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_never_timeout",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_use_local_time",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_traffic_warnings",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_traffic_print",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_messages_print",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_replication_requests_print",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_packet_print_mask",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_experimental",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_rate_unlimited",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_rate_server",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_rate_client",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_window_unlimited",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_window_size",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_bandwidth_unlimited",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_bandwidth_per_channel",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_skip_countdown",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_host_delegation_disable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_streams_disable",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_disable_flooding",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_ignore_version",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_ignore_join_checking",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_ignore_migration_checking",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_maximum_machine_count",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_maximum_player_count",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_debug_random_seeds",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_debug_object_logs",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_allow_out_of_sync",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_distributed_always",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_distributed_never",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_no_gather",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_no_search",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_observer_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_fail_arbitration",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_4_box_testing_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_connectivity_model_enabled",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_nat_check_enabled",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_prerelease_settings",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_event",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_event_display",
	"network_event",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_event_log",
	"network_event",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_event_log_remote",
	"network_event",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_memory",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_link",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_sim",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_channels",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_connections",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_message_queues",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_observer",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_sessions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_leaderboard",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_leaderboard_mask",
	"long",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_latency",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_latency_wander",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_latency_period",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_latency_random",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_spike_chance",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_spike_amount",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_spike_duration",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_drop",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_dropspike_chance",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_dropspike_amount",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_dropspike_duration",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_bandwidth_down_rate",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_bandwidth_up_rate",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_bandwidth_down_buffer",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_sim_bandwidth_up_buffer",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test_rate",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test_update_server",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test_update_client",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test_replication_scheduler",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test_debug_spheres",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_test_matchmaking_playlist_index",
	"long",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_voice_diagnostics",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sim_status_world",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sim_status_views",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sim_entity_validate",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sim_disable_aim_assist",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sim_bandwidth_eater",
	"long",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_players",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_vibration_status_lines",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_show_mipmap_bias",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_graph",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_list",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_force_low_detail",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_force_medium_detail",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_force_high_detail",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_status",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_usage",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_block_warning",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_lod_bias",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_dynamic_low_detail_texture",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_resource_predition",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"generate_prediction_scripts",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geometry_cache_graph",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geometry_cache_list",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geometry_cache_status",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geometry_cache_block_warning",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geometry_cache_never_block",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geometry_cache_debug_display",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_recording",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_recording_newlines",
	"short",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_letterbox_style",
	"long",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"vehicle_status_display",
	"boolean",
	['H2', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_meter_display",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_menu_enabled",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"catch_exceptions",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_base",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_movement",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_jitter",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_overlay",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_pitch_turn",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_ammo",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"global_playtest_mode",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_comment_flags",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_comment_flags_text",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_comment_flags_look_at",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_controller_flag_drop",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"override_player_character_type",
	"long",
	['H2', 'H3', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"e3",
	"boolean",
	['H2', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_maximum_trick_frequency",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_loop_trick_duration",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_roll_trick_duration",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_zero_gravity_speed",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_full_gravity_speed",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_strafe_boost_scale_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_finger_off_stick_deceleration_factor",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"banshee_cruising_throttle",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_tag_dependencies",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_network_configuration_download",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_message_of_the_day_download",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"check_system_heap",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"always_dirty_structure_objects",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_time_scale",
	"real",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_display_memory",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"editor_strip_dialogue_sounds",
	"boolean",
	['H2', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_player_walking",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"unit_animation_report_missing_animations",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"font_cache_status",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_force_long_save_progress",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_multiplayer_maps_unlocked",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_campaign_maps_unlocked",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_bandwidth_profiler",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"coop_speed_up",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lruv_lirp_enabled",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_sound_cache_file_editing",
	"boolean",
	['H2', 'H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"halt_on_stack_overflow",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_progress_screen",
	"boolean",
	['H2', 'H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_crash_uploads",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"log_cinematic_times",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"smooth_anim_enabled",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_transmission",
	"boolean",
	['H2', 'H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effect_names",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effect_names_distance",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_filters",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_type",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_sound_class",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_short_names",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_tag_id",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_position",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_levels",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_stereo_weapon_fire_force_3d",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_stereo_weapon_fire_left_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_stereo_weapon_fire_right_scale",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_arbiter_envy",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_jacked",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_scarab",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_so_angry",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_prophet_birthday_party",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ice_cream_flavor_status_they_come_back",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_sound_use_remastered",
	"boolean",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_sound_global_gain_db",
	"real",
	['H2'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"scenario_load_fast",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"scenario_load_fast_and_playable",
	"boolean",
	['H2', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_migrate_form",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"animation_cache_stats_reset",
	"void",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"test_sapien_crash",
	"void",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_safe_to_respawn",
	"void",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_pulse_rates",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_throttle_rates",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_lag_times",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_controller_latency",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"events_debug_spam_render",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_yaw_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_pitch_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_forward_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_side_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_up_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"flying_camera_maximum_boost_speed",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"flying_camera_movement_delay",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"flying_camera_has_collision",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"flying_camera_use_old_controls",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"editor_director_mouse_wheel_speed_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_bink",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_state_verify_on_write",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_state_verify_on_read",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_global_use_empty",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_material_effects",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_lightmaps",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_global_dialog_sounds",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_global",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_global_keep_playable",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_error_geometry",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_respawn",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_synchronous_client_maximum_catchup_chunk_size",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_editor_maximum_edited_object_speed",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_editor_edited_object_spring_constant",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_editor_maximum_rotation_speed",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_enabled",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_grid",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_messages",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_cortana_debug",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_crosshair",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_metagame",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_node_interpolation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_analog_movement",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_transition_animations",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"effects_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_effects_lightprobe_sampling",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_effects_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_direct_path_gain",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_cache_status",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_manager_channels",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_manager_channels_status",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_display_levels_data",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_display_preformance_data",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_display_sources_data_state",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_display_sources_data",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_display_mix_data",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_final_mix",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_sub_mix",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_occlusion",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_obstruction",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_radio",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_reverb_first",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_effect_reverb_second",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_music",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_dialog",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_ambient",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_vehicles",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_weapons",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_mix_dry",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_mix_dry_obstruction",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_mix_wet",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_mix_wet_occlusion",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_mute_mix_radio",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_timing",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_duckers",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_force_first_person_listener",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_music_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_dialog_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_cinematic_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_ambiant_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_vehicle_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_weapon_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_other_channel",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_thread_count",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_disable_deactivation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_batch_add_entities_disabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_shape_cache",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_shape_cache_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_initialize_profiling",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"proxies_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_expensive_physics_rebuilding",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"minimum_havok_object_acceleration",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"minimum_havok_biped_object_acceleration",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_object_scheduler",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_cache_state",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_use_old_sphere_test",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_lightmap_shadows",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_lightmap_shadows_apply",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_lights",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water_tessellated",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water_wireframe",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water_interaction",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_first_person",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_mode",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_safe_frame_bounds",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_colorbars",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_aspect_ratio_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_force_4x3_aspect_ratio",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_transparents",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_slow_transparents",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_transparents",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_transparent_cull",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_transparent_cull_flip",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_transparent_sort_method",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_lens_flares",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"light_decorators",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorator_bounds",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorator_spheres",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_muffins",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_muffins",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_force_cinematic_lights",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_pix_events",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_atmosphere_cluster_blend_data",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_pc_specular",
	"boolean",
	['H3', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_pc_albedo_lighting",
	"boolean",
	['H3', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_save_surface",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_screen_flashes",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_camera_near_plane",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_camera_exposure",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_camera_illum_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_near_clip_distance",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_far_clip_distance",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_exposure_stops",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_exposure",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_HDR_target_stops",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_surface_LDR_mode",
	"long",
	['H3', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_surface_HDR_mode",
	"long",
	['H3', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_first_person_fov_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_bounds",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_bounds_solid",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_opaque",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_screenspace",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_histencil",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_hires",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_objectspace_stencil_clip",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_force_fancy",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_force_old",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_accum",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_bloom_source",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_persist",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_bloom",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_bling",
	"long",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_downsample",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_show_alpha",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess_exposure",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_accum_filter",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tone_curve",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tone_curve_white",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_exposure_lock",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess_hue",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess_saturation",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess_red_filter",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess_green_filter",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_postprocess_blue_filter",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_screenspace_center",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_bounce_light_intensity",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_bounce_light_only",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_disable_prt",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"screenshot_anisotropic_level",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"screenshot_gamma",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_intensity",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_clip_planes",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_opaque",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cubemap_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_antennas",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_leaf_systems",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_use_cholocate_mountain",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_lighting_use_scenery_probe",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_lighting_use_device_probe",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_lighting_use_air_probe",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_show_air_probes",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_toggle_default_static_lighting",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_toggle_default_dynamic_lighting",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_toggle_default_sfx",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_depth_render",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_depth_render_scale_r",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_depth_render_scale_g",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_depth_render_scale_b",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_show_4x3_bounds",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_weather_bounds",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_cinematic_clip",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_buffer_gamma",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_screen_gamma",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_buffer_gamma_curve",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_color_balance_red",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_color_balance_green",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_color_balance_blue",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_black_level_red",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_black_level_green",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_black_level_blue",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_volume_samples",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_create",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_frame_advance",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_render",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_disable",
	"boolean",
	['H3', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_render_latest_debug",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_cull",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_fade",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_dump",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_z_bias",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_slope_z_bias",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_create",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_frame_advance",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_render",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_render_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_render_debug_spheres",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_cull",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_dump",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_force_cpu",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_force_gpu",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"effect_priority_cutoff",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"weather_occlusion_max_height",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_method_debug",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_viewport_resolution_scale_x",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_viewport_resolution_scale_y",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_viewport_top_left_shift_x",
	"long",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_viewport_top_left_shift_y",
	"long",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_light_probes",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"effect_property_culling",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"contrail_create",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"contrail_pulse",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"contrail_frame_advance",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"contrail_submit",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"contrail_dump",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"light_volume_create",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"light_volume_frame_advance",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"light_volume_submit",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"light_volume_dump",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"beam_create",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"beam_frame_advance",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"beam_submit",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"beam_dump",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_pvs_editor_mode",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_audio_clusters",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_visible_clusters",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_portals_structure_bsp_index",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_draw_names",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_tangent_space",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_lightmap_lights",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_attached_bounding_spheres",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_expensive_physics",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_water_physics",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"water_physics_velocity_minimum",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"water_physics_velocity_maximum",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_names_full",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_functions_all",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_biped_melee_in_range",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_animation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_spawn_timers",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_dump_memory_stats",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_by_index",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_vehicle_suspension",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_skeletons",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"water_physics_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_water_proxy",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_lightmaps",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_geometry_sampling",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_water",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_giants",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_effect_scenery",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_objects_terminals",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_generate_flood_sector_wrl",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_pathfinding_generate_stats",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_zone_set_critical_portals",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_control_autoaim_always_active",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_complexity",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_water",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_invisible",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_cluster_skies",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_slip_surfaces",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_ceilings",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_ceilings_biped",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_ceilings_vehicle",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_ceilings_huge_vehicle",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_ceilings_camera",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_ceilings_test_observer",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"soft_ceilings_disable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_soft_kill",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_seam_edges",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_seams",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_seam_triangles",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_unique_colors",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_markers",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_plane_index",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_surface_index",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"jaime_control_hack",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"bertone_control_hack",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motor_system_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_stimulus",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_dialogue",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_salience",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_update",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_targets_all",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_evaluations_detailed",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_evaluations_text",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_evaluations_shading",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_evaluations_shading_type",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_leadership",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_status_flags",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_goal_state",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_behavior_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_active_camo",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicle_attachment",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicle_reservations",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_actor_blinddeaf",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_morphing",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_look_orders",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_character_names",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_behavior_failure",
	"ai_behavior",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_dialogue_records",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_dialogue_datamine_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_position_statistics",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_position_obstacles",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_mission_critical",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_aiming_positions",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_text",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_paths_distance",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_deceleration_obstacles",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_recent_obstacles",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_combat_range",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_clump_dialogue",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_giant_sector_bsps",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_area_flight_hints",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_hints_detailed",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_objectives",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_strength",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_ai_iterator",
	"ai",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_child_stack",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_stimuli",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_decisions_all",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_script_data",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_tracked_props_all",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_vignettes",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_player_battle_vector",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_player_needs_vehicle",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_task_status_never",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_task_status_occupied",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_task_status_empty",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_task_status_inactive",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_task_status_exhausted",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_preference",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_avoidance",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_sum",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pathfinding",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_preferred_group",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_walkdistance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_targetdistance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_targethint",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_visible",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_examined_us",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_examined_total",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_available",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_panic_walkdistance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_panic_targetdistance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_panic_closetotarget",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_guard_walkdistance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_attack_weaponrange",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_attack_idealrange",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_attack_visible",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_attack_dangerousenemy",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_combatmove_walkdistance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_combatmove_lineoffire",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_hide_cover",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_hide_exposed",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_uncover_pre_evaluate",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_uncover_visible",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_uncover_blocked",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_previously_discarded",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_danger_zone",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_move_into_danger_zone",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_3d_path_available",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_point_avoidance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_point_preference",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_directional_driving",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_favor_former_firing_position",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_hide_pre_evaluation",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_pursuit_area_discarded",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_flag_preferences",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_perch_preferences",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_combatmove_lineoffire_occluded",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_attack_same_frame_of_reference",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_wall_leanable",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_cover_near_friends",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_combat_move_near_follow_unit",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_goal_preferences",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_hint_plane",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_postsearch_prefer_original",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_leadership",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_flee_to_leader",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_goal_points_only",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_attack_leader_distance",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_too_far_from_leader",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_guard_preference",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_guard_wall_preference",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_obstacle",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_facing",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_berserk",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_surprise_front",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_surprise_back",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_evade_left",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_evade_right",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_dive_forward",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_dive_back",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_dive_left",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_dive_right",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_advance",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_cheer",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_fallback",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_hold",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_point",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_posing",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_shakefist",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_signal_attack",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_signal_move",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_taunt",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_warn",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_action_wave",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_none",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_patrol",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_stand",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_crouch",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_stand_drawn",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_crouch_drawn",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_corner",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_corner_open",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_bunker",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_bunker_open",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_combat",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_backup",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_guard",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_guard_crouch",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_guard_wall",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_typing",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_kneel",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_gaze",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_poke",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_sniff",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_track",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_watch",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_examine",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_sleep",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_at_ease",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_cower",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_tai_chi",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_pee",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_doze",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_eat",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_medic",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_work",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_cheering",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_injured",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_activity_captured",
	"short",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_disallowed",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_time_ranged_tank",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_time_ranged_stealth",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_time_tank_ranged",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_time_tank_stealth",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_time_stealth_ranged",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_time_stealth_tank",
	"real",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_form_ranged",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_form_tank",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"morph_form_stealth",
	"short",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_maxd_spew",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_radius",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_giant",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_naive_estimate",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_speculative_host_migration_disable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_nat_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_enable_host_migration_loop",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_simulation_set_stream_bandwidth",
	"long",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_set_channel_disconnect_interval",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_enable_block_detection",
	"long",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_http_failure_ratio",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_show_network_quality",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_fake_network_quality",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_input",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_rumble_status_lines",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_pc_joystick",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"director_camera_switch_disable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"director_camera_speed_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"director_disable_first_person",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"director_use_dt",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"observer_collision_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"observer_collision_anticipation_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"observer_collision_water_flags",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_observer_wave_height",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"vehicle_disable_suspension_animations",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"vehicle_disable_acceleration_screens",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"default_scenario_ai_type",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_hide_ik",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_memory_verify",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"xov_display_memory",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_text_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_bitmap_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_model_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_list_item_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_list_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_group_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_debug_screen_bounds_global",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sapien_keyboard_toggle_for_camera_movement",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_projectiles",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_effects",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_effect_obstacles",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_player_crouching",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"font_cache_debug_texture",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"font_cache_debug_graph",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"font_cache_debug_list",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_thread_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"character_force_physics",
	"character_physics",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_new_ik_method",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"animation_throttle_dampening_scale",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"animation_blend_change_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_fitting_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_fitting_root_offset_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_pivot_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_pivot_allow_player",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_hunt_player",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_hunting_min_radius",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_hunting_max_radius",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_hunting_throttle_scale",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_weapon_wait_time",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_weapon_trigger_time",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_ik",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_foot_ik",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_ankle_ik",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_elevation_control",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_force_buckle",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_force_crouch",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_force_death",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_buckle_rotation",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_giant_feet",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_giant_buckle",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"xsync_restricted_tag_groups",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_cache_build_resources",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"xma_compression_level_default",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_console_window",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_colors_in_banded_gamma",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_tool_command_legacy",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"maximum_tool_command_history",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_unit_aim_screens",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_unit_look_screens",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_unit_eye_tracking",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_tag_resource_xsync",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dont_recompile_shaders",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_temp_directory_for_files",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"scenario_load_all_tags",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"synchronization_debug",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_scenery",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_switch_zone_sets",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"facial_animation_testing_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"profiler_datamine_uploads_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_object_recycling",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_sound_over_network",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_manager_debug_suppression",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"serialize_update_and_render",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"scenario_use_non_bsp_zones",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_restricted_active_zone_reloads",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_controls_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_campaign_metagame",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"campaign_metagame_datamine",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"aiming_interpolation_stop_delta",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"aiming_interpolation_start_delta",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"aiming_interpolation_rate",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"airborne_arc_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"airborne_descent_test_duration",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"airborne_descent_test_count",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_tag_resource_prediction",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_entire_pvs_prediction",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_cluster_objects_prediction",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_main_loop_throttle",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_unit_walking",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_force_start_rotation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_force_end_rotation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_force_flight_start_rotation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_force_flight_end_rotation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_flight_path_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_departure_power",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_departure_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_arrival_power",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_arrival_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_twist_power",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_cannonball_power",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_cannonball_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_idle_power",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_idle_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_overlay_power",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_overlay_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leap_interpolation_limit",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_fake_soft_landing",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_fake_hard_landing",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_soft_landing_recovery_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_hard_landing_recovery_scale",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_landing_absorbtion",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_network_aiming",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"aim_assist_disable_target_lead_vector",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_tag_edit_sync",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cache_file_builder_allow_sharing",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"instance_default_fade_start_pixels",
	"long",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"instance_default_fade_end_pixels",
	"long",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_pendulum",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_client_badness_rating_threshold_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_disable_bad_client_anticheating_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_disable_bad_connectivity_anticheating_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_disable_bad_bandwidth_anticheating_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_maximum_multiplayer_split_screen_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_crash_handling_minidump_type_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_crash_handling_ui_display_override",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_trace_main_events",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"bitmaps_trim_unused_pixels",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"bitmaps_interleave_compressed_bitmaps",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ignore_predefined_performance_throttles",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_first_person_prediction",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_structure_prediction",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_structure_audibility",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cache_file_builder_dump_tag_sections",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"giant_custom_anim_recovery_time",
	"real",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"facial_animation_enable_lipsync",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"facial_animation_enable_gestures",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"facial_animation_enable_noise",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_alpha_to_coverage",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_sound_transmission",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_audibility_generation",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_taps",
	"long",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_expected_dt",
	"real",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_max_x",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_max_y",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_scale_x",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_scale_y",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_center_falloff",
	"real",
	['H3'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"unicode_warn_on_truncation",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_determinism_version",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_determinism_compatible_version",
	"long",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_environment_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_lightmap_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_seam_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_instance_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"error_geometry_object_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_melee",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_render_state_cache_optimization",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_root_node_print",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_better_cpu_gpu_sync",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"require_secure_cache_files",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_aim_assist_targets_enabled",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_max_viewport_count",
	"long",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_prediction_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_cortana_ticks",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"skies_delete_on_zone_set_switch_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"reduce_widescreen_fov_during_cinematics",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_debugging_enable",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"import_sound_write_diagnostic_files",
	"boolean",
	['H3', 'HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_state_allow_insecure",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dump_cache_builder_determinism_log",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dump_cache_builder_determinism_log_full",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_insecure_resources",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"show_ddode",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_new_dialogue_stripping",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_hdr_bloom_scaling",
	"boolean",
	['H3', 'HO', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"hdr_bloom_intensity",
	"real",
	['H3', 'HO', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_memory_mirror_events",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sleep_for_vblank",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decorator_res_scaled",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"page_cache_enable_status_lines",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"superforge",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"superforge_budget",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_aim_assist_targets_names",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_aim_assist_vectors",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons_triggers",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons_barrels",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons_magazines",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons_primary",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons_secondary",
	"boolean",
	['H3', 'HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_480p_resolutions",
	"boolean",
	['H3', 'HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"camera_fov",
	"real",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"output_bad_pda_model_info",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_add_single_bsp_zones",
	"boolean",
	['HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_force_single_bsp_zone_set",
	"boolean",
	['HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_force_solo_mode",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing_keep_cinematics",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_use_gray_shader",
	"boolean",
	['HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_statistic_accumulator_enabled",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_game_sound",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_channels_fadeout",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_platform_sound_channels",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_looping_channels",
	"boolean",
	['HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_disable_nonlooping_channels",
	"boolean",
	['HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water_ripple_cutoff_distance",
	"real",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorator_bsp_test_offset_scale_parameter",
	"real",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_display_command_buffer_data",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_screen_shaders",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_screen_effects",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_screen_effects",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_render_lightmap_mesh",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_render_debug",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_render_debug_emitters",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_viewport_scale",
	"real",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvs_building_disabled",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_cluster_counts",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_cluster_count_threshold",
	"long",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_networking",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_trigger_volume_triangulation",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_relaxation_pose",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_node_velocities",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_squad_patrol_state",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_squad_patrol",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_formations",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_squad_fronts",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_squad_fronts_detailed",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_evaluator_hide_equipment",
	"short",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_survival_mode",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"override_player_representation_index",
	"long",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_skulls",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_campaign_metagame_verbose",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_amortized_prediction",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"amortized_prediction_object_batch_size",
	"long",
	['HO', 'HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_disable_vsync",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"scale_ui_to_maintain_aspect_ratio",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"maximum_aspect_ratio_scale_percentage",
	"long",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_anisotropic",
	"long",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_max",
	"real",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_scale",
	"real",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_center_falloff_x",
	"real",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_center_falloff_y",
	"real",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_debugging_verbose_enable",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_visualize",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_disable_all_position_interpolation",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_disable_all_rotation_interpolation",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_force_all_interpolation_to_use_velocity_bumps",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_force_all_interpolation_to_use_blending",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_use_override_position_config",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_use_override_rotation_config",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_force_all_interpolation_to_use_warps",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_disable_velocity_bumps",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"simulation_interpolation_disable_blends",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_totals",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_class_totals",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pda_debugging_enable",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"survival_performance_mode",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_survival_mode_infinite_lives",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_survival_mode_respawn_if_iron",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_enable_debug_animation_solving",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_prefetch_progress",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"flying_camera_connected_to_sapien",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cache_file_builder_unshare_unique_map_locations",
	"boolean",
	['HO', 'HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"vision_mode_automatic_overbrightness_adaptation",
	"boolean",
	['HO'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"texture_cache_test_malloc",
	"void",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_safe_to_respawn",
	"void",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_melee_action",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_force_player_view_count",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_render_player_freeze",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_debug_rendering_on",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_debug_view_type_selected",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_debug_current_target",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"CameraObserverAllowNonrecorderFirstPerson",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"map_info_debug",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_verify_game_variant_settings",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_globals_empty",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dont_load_material_effects",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_global_material_effects",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_finishing",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_pathfinding",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing_keep_scenery",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_facial_animation_data",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pruning_keep_scripts",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"variant_culling_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"material_culling_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fake_precache_percentage",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_aligned_utility_drive",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_reticle_radius",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_highlight_object",
	"object",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_highlight_object_color_red",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_highlight_object_color_green",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_highlight_object_color_blue",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_highlight_object_color_alpha",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_debug_animation_speed",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_override_blend_channel_input",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_blend_test_parent_relative",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_blend_test_horizontal",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_blend_test_vertical",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_snap_nearest_pose_blend",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_object_space_offset_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_fik_correction_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_fik_subframe_precision_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_object_space_offset_draw",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_ik_chains_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_locking_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_precomputed_velocity_boundaries_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_ik_sets_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_gait_preserve_frame_ratio",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_move_preserve_frame_ratio",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_root_offset_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_camera_offset_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_unsafe_debug_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_maximum_channels_displayed",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_raw",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_turned",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_fitted",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_turn_sampling",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_grid_sampling",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_raycast",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_contact",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_displacement",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_turn_radius_draw",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_assassination_selection",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_phonebooth_test_draw",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_phonebooth_draw_time",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_pose_overlay_force_interpolation_across_sphere",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_enable_press_to_assassinate",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_enable_same_team_assassinate",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_enable_force_phonebooth_assassinate",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_animation_decompression_cache",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_pain_screen_aim_fixup",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_animated_source_interpolation",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_enable_easy_weapon_down_claw",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_vehicle_animated_trick_animation_name",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_vehicle_animated_trick_camera_name",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_orbiting_camera_maximum_distance_override",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_porcupine",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_infinite_equipment_energy",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_reverb_path_gain",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_reverb_wet_dry_mix",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_spatialized",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_spatialized_fadeout",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_cache_list",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_display_reverb_data",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_enable_expensive_obstruction",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_enable_new_obstruction_collision",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_enable_multithreaded",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_acoustics",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_deactivation_reference_distance",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_render_environment_queries",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_pause_time_on_find_initial_contact_points",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_turn_on_cache_state",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_use_black_for_missing_instances",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_structure",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_per_vertex_lit_environment",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_per_pixel_lit_enviroment",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_single_probe_lit_environment",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_cluster_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_rain",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_rain_particles",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_volume_rain_particles",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_light_volume_rain_sheets",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_rain_from_design_tag",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_rain_occluder_as_normal_object",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_first_person_squish",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tessellated_mesh",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_water_refraction",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_occlusion_bsp_index",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_occlusion_instance_index",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tessellated_wireframe",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_low_res_transparents",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_shield_instrumentation",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"neuticle_render",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"neuticle_update",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"neuticle_spawn",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_infinite_decorators",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorators_lod_mask",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorators_decimation_test",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_decorator_descriptions",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_cloud_texture",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_z_prepass",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_occlusion",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_acoustic_sectors",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_weather_dumplings",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_atmosphere_dumplings",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_min_single_pass_rendering_distance",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_triliner_threshold",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_present_immediate_threshold",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tiling",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_screen_res",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tiling_resolve_fragment_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tiling_viewport_offset_x",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_tiling_viewport_offset_y",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_alpha_test_reference",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_true_gamma",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fxaa_mode",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_use_single_pass_rendering",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_force_single_pass_rendering",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_foliage_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_pc_transparents",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_use_contrast_adjustment",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_use_min_luminance",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_use_bounce_to_ambient",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_lighting_interpolation_difference_factor",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_imposter",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_imposter_always",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_object_imposter_never",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_always",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_never",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_hide_rainbows",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_imposter_alpha_blend",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"build_instance_imposters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_render_preplaced",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_render_debug_info",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_collision_debug",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"particle_collision_debug_priority",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_text",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_distance_from_camera",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_name",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_active_emitter_counts",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_particle_counts",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_light_volume_counts",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_contrail_counts",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_beam_counts",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_bounding_speres",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_emitter_shape",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_toggle_particle_mode",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_toggle_light_mode",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_toggle_contrail_mode",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_toggle_beam_mode",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_full_bsp",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_analytical_lightmap_light_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_vmf_lightmap_light_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_bounce_light_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_portals_2d",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_portals_2d_verbose",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_portals_3d",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_visible_cluster_portals_3d",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_all_portals_3d",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_disable_conditional_portals",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_select_bsp_instance_visible",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_select_bsp_instance_bsp_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_debug_select_bsp_instance_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_enable_occlusion",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_enable_multithreading",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_attached_aabbs",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_light_overlaps",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_cookie_cutters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_vehicle_effects",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_vehicle_engines",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_jetwash",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_size",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_speed",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_havok_group",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_collision_hierarchy",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_indices_decimal",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_boost",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_soft_ping_damage_regions",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objects_move_multithreading_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objects_compute_node_orientation_multithreading_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objects_assert_on_job_inconsistancy",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_animation_pose_channel",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_transfer",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_acceleration",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_response",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_aoe",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_armor",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_material",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_networking",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_filter_output",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_large_font",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_player_inflicted_recent",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_player_inflicted_duration",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_attached",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_objects_in_sphere",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_objects_in_sphere_attached",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_print_position",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_kd_tree_exhaustive_debugging_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_kd_tree_debug",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_kd_tree_minimum_radius",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_kd_tree_maximum_depth",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_fill_face",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_pathfinding_use_exclusion",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_pathfinding_no_outlines_on_poopie_cutters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_occlude",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_cookie_cutters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_seam_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_seam_triangles_status",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_structure_seam_identical_instances",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_cookie_cutters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_physics",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_physics_memory",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_physics_memory_threshold",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_kd",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmap_light_preview_mode",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_preplaced_lights",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cheap_lights",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_physics_nodes",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_death_program_selector",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_proximity_feelers",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_collision_test_line_attached_disabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_in_sphere_attached_disabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_props_search",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_target_groups",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_vehicle_anchor",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flying_vehicle_movement_vectors",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flying_target_tail_cone",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_character_definition",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_bunkering",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_pathfinding_influence_map",
	"short",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_dialogue_verbose_pattern_errors",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_dialogue_datamine_failed_patterns_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_dialogue_log_failed_pattern_errors",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_dialogue_debug_specific_vocalization",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_actor_types",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_position_bunkering",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_inertia",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_throttle_control",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_stopping_distance",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_destination_tolerance",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_max_path_traverse_iterations",
	"short",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_path_attractor_bounds",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_pathfinding_performance",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_pathfinding_performance_threshold",
	"short",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_pathfinding_performance_cell_size",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_timeslices",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_link_detailed",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_movement_mapping",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_persistent_movement_override",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_behavior_movement_type",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_stimuli_all",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flock_boid_destination",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flock_danger",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flock_boid_properties",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_disable_high_priority_timeslices",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_current_performance",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_firing_position_index",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_debug_pathfinding",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_debug_pathfinding_wall_height",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_debug_pathfinding_wall_opacity",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_cuts",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_volumes",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_step_choices",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_step",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_tolerance",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_start_object_name",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_volume_avoidance_render_end_object_name",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flying_cover",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_flying_area",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_melee_sync_scoring",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_level_of_detail",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_flocks_disable_timeslicing",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_force_gather",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_force_search",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_hopper_id_adjustment",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_jackpot_override",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_channel_manager_tear_down_secure_connection_early",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_allow_early_start",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_skip_host_migration",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_force_disband",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_enable_matchmaking_latency",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_fake_progress",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_force_no_joining",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_matchmaking_allow_idle_controllers",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_force_matchmaking_sync_halt_config",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_disable_detatched_controller_check",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_always_upload_matchmade_films",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_never_block_for_film_uploading",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_disable_active_roster_presence_hack",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_disable_synchronous_halt_boots",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_disable_lsp_leaderboards",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_idle_detection",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_show_latency_and_framerate_metrics_on_chud",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_fake_latency_and_framerate_metrics_on_chud",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_drop_fraction_incoming",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_disable_out_of_order_packet_handling",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_input_stick_throws",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rumble_enable_in_playback",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_low_res_textures",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_camera_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"observer_collision_debug",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_network_force_warning_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_network_force_error_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"data_mine_player_update_interval",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"data_mine_mp_player_update_interval",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"data_mine_debug_menu_interval",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"data_mine_spam_enabled",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"webstats_file_zip_writes_per_frame",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_projectiles_network",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_projectiles_duration_post_death",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_projectiles_disable_authoritative_sticks",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_force_subframe_on_loop",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_fp_jump_land_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_fp_weapon_ik_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_fp_sprint_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"animation_turn_speed_blend_scale",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ik_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ik_chain_fixup_disable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_xsync_timings",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"insepcting_xenon_shader",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lsp_allow_lsp_connections",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lsp_allow_raw_connections",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lsp_service_id_override",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shared_files_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"minidump_use_retail_provider",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_scenario_content_status",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_partial_cache_flush",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_hierarchy_objects_in_cone_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_dont_flash_low_res_textures",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_alpha",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_alpha_lockdown",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_alpha_eula_accepted",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_alpha_custom_games_enabled",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_new_user_experience_suppress",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"online_files_slowdown",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_xsync_memory_buyback",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"minidump_force_regular_minidump_with_ui",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_audibility_generation",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"motion_blur_fps_threshold",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"antialias_blur_compare",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"antialias_fps_threshold",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_fire_teams",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_can_issue_fireteam_directive",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_fireteam_target_selection_preference_bonus",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_fireteam_hold_distance",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_fireteam_protect_leader",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"force_buffer_2_frames",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"require_secure_variants",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"import_sound_cut_samples_simple",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"import_sound_cut_samples_search_count",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"import_sound_cut_samples_slope_count",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_no_hdd_turn_on_the_juice",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_no_hdd_caching_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ragdoll_immediately_on_death",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"xsync_all_language_for_sound",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_multiplayer_object_properties",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_debug_initial_camera_distance",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_debug_initial_target_vertical_offset",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_player_can_buy_while_dead",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_auto_switch_to_dead_cam_delay",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_respawning_delay_before_voluntary_control_of_spawn",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_respawn_suppression",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_respawn_time_resets_when_switching_targets",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_extermination_allows_push_to_respawn",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_enable_push_to_respawn",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_respawning_respawn_time_on_player_seconds",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_respawning_respawn_time_at_base_seconds",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_dead_cam_respawning_respawn_time_at_base_after_extermination_seconds",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_allow_laser_designation_selection_of_objectives",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"objective_buy_menu_screen_button_override_dpad_up",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"requisition_auto_enter_drivers_seat_of_purchased_vehicles",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"requisition_enable_budget_limits",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"laser_designation_control_enable",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"laser_designation_control_as_toggle",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"laser_designation_allow_firing_at_own_laser",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"laser_designation_requires_equipment",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"laser_designation_laser_point_fade_out_seconds",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_show_simulation_quality_machine_index",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instance_imposters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instance_groups",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instance_group_decorator_type",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instance_group_non_decorator_type",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instance_group_members",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instance_group_bounds",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_big_battle_squads",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"megalo_debug",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"megalo_debug_filter_lists",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_physics_models_render_polyhedron_points",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_pretend_latency",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_force_voice_transmission_frequency",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cache_file_builder_allow_invalid_map_sizes",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"weapon_barrel_create_projectiles_log",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"damage_response_ignore_seat_ejection",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawning_unseen_spawning_cone_distance",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawning_unseen_spawning_cone_angle",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"respawn_players_into_friendly_vehicle",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"aim_assist_log",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_old_object_node_matrix_computation_method",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_profile_read_minimum_duration_milliseconds",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_profile_write_minimum_duration_milliseconds",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_profile_bypass_hash_check",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_main_time_throttle_when_matching_remote_time",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_performances",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_performance_name",
	"string_id",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"megalo_profiling_mode",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"megalo_filter_iteration_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_force_sync_turbo_channel",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_force_sync_turbo_all",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_force_sync_turbo_none",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_fade_to_black_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapon_tracking",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_tracking",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_melee_dash",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_use_halo3_and_atlas_shipping_leftover_ticks_approach",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_debug_draw_observer",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_use_old_player_control_timing_algorithm",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_disable_input_adjustment",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_main_debug_fake_game_ticks",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_main_debug_fake_game_ticks_duration_milliseconds",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_wait_for_previous_frame_swap",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_force_main_time_update_seconds_elapsed",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_main_always_publish_on_game_tick",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_client_synchronous_input_lag",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_use_omaha_synchronous_game_time_matching",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"assert_on_weak_damage_owner_code",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"watermark_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"watermark_compass_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_cache_render_data",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_debug_channel_to_graph",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_dump_network_statistics_on_upload",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_host_selection_logging_verbose",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"clients_always_respect_action_priority_for_weapon_switch",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_visibility_bounding_sphere_scale",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_engine_events_show_even_with_unparsed_tokens",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_button_action_mapping_active",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"randomize_player_appearance_on_spawn",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_pause_aging",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"main_disable_pix_counters",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_always_record_bandwidth",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_playtest_rasterizer_throttle",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_game_grief",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_players_probability_of_winning",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"chud_state_debug_flag",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_invisible_models",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"main_block_simulate_ms",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_block_simulate_ms",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_message_queue_stress_test_pct",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"convex_decomposition_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"transport_force_shutdown",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_globals_for_gametype",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_saved_film_history",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_vehicle_to_vehicle_boarding",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_query_plane_count",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"jumperjumper_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_banhammer_lsp_sync_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"supply_depot_notification_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"nag_messages_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_log_all_message_queue_state",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_havok_memory",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_transparents_bucket_low_res",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"observer_collision_speed_scale",
	"real",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"leave_bonobo_init_in_place",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_pre_placed_lights",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"allow_spawning_with_no_spawn_points",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cui_service_record_test_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_aim_assist_lead_vectors_disabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"first_person_motion_blur_speed_mapping_scale",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"first_person_motion_blur_speed_mapping_offset",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"special_object_motion_blur_speed_mapping_scale",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"special_object_motion_blur_speed_mapping_offset",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_suppress_crosshair_player_names",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_suppress_all_game_engine_player_names",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mirror_context_tracking_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_airstrike",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cui_debug_window_index",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cui_render_debug_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"guardian_kills_awarded_to_most_damage",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_coop_spawn_safety_status_tests",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"network_friends_leaderboard_test_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_bias_coeff_d",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_bias_coeff_e",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dump_game_options_on_establish_fail",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_apply_depth_bias",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_apply_slope_depth_bias",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"campaign_save_tracker_test_content_item_exists",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"override_file_transfer_upstream_quota_bytes_per_second",
	"long",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_prefetch_resource_defragmentation",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_respawn_check_airborne",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_command_buffer_shadow_generate",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rasterizer_profiler_single_callback_enabled",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_generate_dynamic_lights_depth_bias",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_generate_dynamic_lights_slope_depth_bias",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_generate_depth_bias",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_generate_slope_depth_bias",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"imposter_cache_build",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mvar_files_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mglo_files_enabled",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"imposter_capturing",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_snap_to_map_variant",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_initial_bink_reclaim",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"map_variant_debug",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"map_variant_debug_objects",
	"boolean",
	['HR', 'H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_max_z_prepass_splitscreen_count",
	"long",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_low_res_transparency_debug",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_immediate",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_fmod",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_shadow_depth_bias_tweak",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_depth_bias_tweak",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"shadow_slope_depth_bias_tweak",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rain_drop_alpha_scale",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"show_dynamic_buffer_stats",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_quality_shadows",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_quality_shadow_filter",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_alpha_scale_override",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_alpha_scale",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_distance_scale_override",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_instance_imposter_distance_scale",
	"real",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"saved_film_tool_data_enable",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"NetBandwidthReportFromFilm",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"NetSavedFilmBypassSimulation",
	"boolean",
	['HR'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_weapons_state_trace",
	"void",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"game_force_respawn_for_player",
	"void",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"storytelling_mode_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"kill_volumes_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_basic_counters",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"display_trigger_checks",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gpu_throttle_max_allowed_value",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gpu_throttle_forced_value",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gpu_throttle_full_threshold_msec",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gpu_throttle_min_threshold_msec",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gpu_throttle_min_value",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gpu_throttle_spring_constant",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_debug_current_target",
	"object",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmap_enable_sharpened_falloff",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"LightmapDisableRefinement",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapUseErrorTextures",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"LightmapUVVisualization",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"LightmapUVPolicyVisualization",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapSharpeningFactor",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapDebugDefaultLighting",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapDirectScalar",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapIndirectScalar",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapAnalyticScalar",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapStaticShadowSharpeningFactor",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"lightmapDisplayAnalyticCollisions",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"extraSamplingRadius",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"extraSamplingDirectionDiffThreshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"extraSamplingIntensityDiffThreshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"extraSamplingAnalyticalMaskDiffThreshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"forgelightmapShadowDepthBias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"forgelightmapSlopeScaledShadowDepthBias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"forgelightmapEnableUpscaling",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"useForgeLightmaps",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enableSpinnerRendering",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"forgelightmapBlurThreshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"forgeIndoorLightingIntensity",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"forgeSHScaler",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugForgeSunBoundingBox",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"displayLightmapSpaceRemaining",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_forgeUseReachEraManipulationControl",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_forgeManipulationForceGrabPointToMassCenter",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_forgeManipulationFreezeObjectWhenFocalPointLeavesEnvironment",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_forgeEnableSandboxMagnetDebugRendering",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_forgeEnableSandboxLightMapping",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_override_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_show_frustum",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_half_width",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_offset",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_length",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_poisson_filter_width",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_num_frustums",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_2_scale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_3_scale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_4_scale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_1_bias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_2_bias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_3_bias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugoverride_floating_shadow_frustum_4_bias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_globals_use_empty",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_all_material_effects",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_all_lightmaps",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_models_enable_alternate_render_models",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing_keep_creatures",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing_keep_crates",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing_keep_decals",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environment_editing_keep_pathfinding",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_all_materials_use_gray_shader",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_all_materials_use_default_textures",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_all_materials_use_default_textures_keep_fx_textures",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_all_dialog_sounds",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_all_error_geometry",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_keep_scriptable_objects",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_scenario_for_environmnet_editing_keep_new_decorator_block",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_cinematic_effects",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_globals",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_globals_keep_playable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_globals_remove_progression_drop_pod",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dump_fragment_scripts",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugPlayerGraphs",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_spawn_points",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_object_cinematic_lod",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mpintro_screens_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mpintro_screens_force_loop",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"hud_debug_messages",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_use_debug_menu_settings",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_disable_dynamic_contrast",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_dynamic_contrast_minimum_threshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_dynamic_contrast_maximum_threshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_dynamic_contrast_clamp_threshold",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_double_draw_darken_factor",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"high_contrast_hud_double_draw_brighten_factor",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"scoreboard_back_button_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_allow_ballroll",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_allow_climbing",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_composite_draw_graph",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_footlock_draw_snap_marker",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_unit_seat_enter_obstruction",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_animation_influenced_death",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_composite_jumps",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_composite_locomotion",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_composite_locomotion_on_player",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_ammopack",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_grenadier",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_explode_on_death",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_resourceful",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_infinite_money",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cheat_super_shield",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"effects_distortion_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"effects_perf_armageddon",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shield_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_animation_playcount_tracking_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_wwise_stream_info",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_wwise_banks_info",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_wwise_memory_output",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_wwise_active_objects",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_emitters_active",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_enable_calculate_obstruction_collision",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_force_emitters_to_nonplayer",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_debug_emitters",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_rear_speaker_trim",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_enable_external_sources",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_enable_acoustic_sector_obstruction",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_use_soundbank_packed_file",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_use_fallbacks_only",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_radio_inner_radius",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_radio_outer_radius",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_sound_disable_playback",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_music_current_track",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sound_music_current_state",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"phantoms_debug",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"geo_debug",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_render_object_collision_mesh",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_render_object_physics_mesh",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"mapping_debug",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_profile_raycasts",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_bubble_env_default",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_bubble_play",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_bubble_bullet",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_bubble_inv_wall",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_bubble_fill",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_vdb_show_default",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_vdb_show_play",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_vdb_show_bullet",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_vdb_show_inv_wall",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_vdb_show_old_format",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_debug_vdb_update_before_havok_step",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_auto_turrets",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ObjectLightingSunEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ObjectLightingSHEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ObjectLightingAuthoredLightProbeEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ObjectLightingSurfaceProbeDirectEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ObjectLightingSurfaceProbeIndirectEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ObjectLightingUpperHemisphereRemoveEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_first_person_squish",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"renderForceIOSort",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_hologram_transparent_mode",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_hologram_screen_bound_scale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_hologram_screen_bound_expand",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_model_dissolve",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_first_person_dof",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_first_person_z_prepass",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_atmosphere_fog_only",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_transparent_depth_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_shadow_debug_accurate_shadow_boundaries",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"screenshot_pix_capture",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"trigger_midmission_load_screen",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_show_air_probe_names",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_extra_sampling",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_enable_extra_sampling_debug_rays",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_debug_fill",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_bias_override",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_render_latest_debug",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cutscene_flag_dump",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_tracer_counts",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"decal_select",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_toggle_tracer_mode",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_effect_locations",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tracer_create",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tracer_pulse",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tracer_frame_advance",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tracer_submit",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tracer_dump",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_fast_durango_occlusion",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"visibility_merge_fudge_factor",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"early_network_send_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_update_enable_multithreading",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"killcam_update_enable_multithreading",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_center_of_mass",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugObjectsLocalizedPhysics",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_names",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_teams",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_errors",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_camera_tracks",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_disable_ragdolls",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_debugObjectCountEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_markers",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_model_blendshape_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"use_default_blue_clear",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_lock_to_player",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_font_scale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_time_to_death",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"hs_display_expressions",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_damage_radius_persist_time_seconds",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"collision_debug_flag_query_for_source_surface",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_detailed_pix_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"aim_assist_inset",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_geometry_groups",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_instanced_distance",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_obb_volumes",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugRenderRenderType",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debugEnvironmentMemoryEstimate",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DebugDynamicLightShadowsEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DynamicLightShadowBias",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DynamicLightShadowFilterSize",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"streamingPriorityDebugVis",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DynamicLightShadowOptimizeVisualization",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"streamingEnableSecondaryPriority",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"streamingClampToMedium",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"streamingDebugEnableCameraBeamVis",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DebugPVSEnable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DebugPVSShowInfo",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dumpResourceCache",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"setTextureNames",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_first_person_skeleton",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_debug_toggle_default_color_grading",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_color_grading_fade_time",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_self_illumination",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_footlock_draw_summary",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_pivot_point",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_movement_lean",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"jump_use_custom_settings",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_knockback_resist_deceleration",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"biped_knockback_base_deceleration",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_damage_acceleration_gain",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_damage_gain",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_damage_velocity_gain",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_velocity_dash_collision",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_velocity_dash_melee",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_velocity_throw",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_max_small_mass",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_min_large_mass",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"knockback_test",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_datamine_behaviors_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_refine_paths",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_havok_steering",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_new_havok_steering",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_havok_steering_actors",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_ls_input_filter",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_ls_output_filter",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_ls_composite_input",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_ls_composite_with_previous_throttle",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_vehicle_anti_roll",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_use_floodfill",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_lod_timeslice",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_skip_lod_timeslice",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_range_marker_max",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_range_marker_steps",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_navmesh",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_navmesh_edge_normals",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_navmesh_edge_user_data",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_navvolumes",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_user_edges",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_edge_characterization_all",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_edge_characterization",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_navmesh_obstacles",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_focus_fire",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_shielding",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_junk_collect",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_combotron",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_cover_fight",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_behavior_cover_fight_avoidance",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_behavior_cover_fight_los",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_behavior_cover_fight_firing_positions",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_path_width",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"render_all_ai_paths",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_havok_paths",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_bungie_paths",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_behavior_protect_allies",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_havok_steering",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_havok_steering_character_radius",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_havok_steering_player_radius",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_render_stopping",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_path_from_player",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ai_debug_behavior_bishop_old",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"netDisableDoubleMigration",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"netFakeDoubleMigration",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"netFakeNoEthernetLink",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_stop_voting_countdown",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_clearPlayerGameResultsOnLeave",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_simulationShouldFillStream",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_displayBandwidthStats",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_status_matchmaking",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_equiment",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_custom_apps",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_damage_history",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"killcam_force_switch_on",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"killcam_render_aim_vectors",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_allow_insertion_point_select",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_display_cui_load_errors",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gui_force_dlc_error",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"data_mine_perf_min_distance",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"data_mine_perf_update_interval",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_projectiles_history",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_projectiles_history_clear",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"animation_report_missing_animations",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_animation_fp_first_time_pickup",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"is_compiler_debug_level",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"hacked_default_storage_device",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_turn_off_text_override",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_object_creation_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_controls_render_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_objects_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_object_functions_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_depth_of_field_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"cinematic_stream_verification_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_lightmap_scalars_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_atmosphere_fog_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_camera_settings_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_cubemap_enable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_screen_effects_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_light_probes_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_effects_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_structure_lights",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_linked_lights_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_linked_lights",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_cinematic_disable_lightmap_shadows",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"record_cinematic_simple",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_cinematic_header_footer_scripts",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_streamer_pinned_tags",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_alpha_bypass_eula",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ui_allow_game_engine_search",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_config_allow_custom_search",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sparse_event_serialization_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"most_extreme_elimination_challenge",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dump_resource_demand_order",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"dump_page_cache",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_suppress_ordnance",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_ordnance",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_ordnance",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_player_ordnance_points",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_ordnance_enabled_override",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_coop_spawning",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_multiplayer_sound",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"sprint_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_static_lighting",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_dynamic_lighting",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_midnight_lights",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"player_profile_wipe",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_player_reward_persistence_dump_lsp_upload_blf",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"reward_persistence_lsp_sync_minimum_duration_seconds",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rewards_disable_lsp_synchronization",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rewards_disable_cookie_daily_caps",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rewardsDisableCurrencyDailyCaps",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rewards_commendations_allow_for_offline_rewards_users",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"rewards_disable_automatic_purchase_sanitization",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_facial_animations",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_low_quality_animations",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_first_person_animations",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"prune_use_imposters",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_saved_film_history_multiplayer",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_saved_film_history_campaign",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_saved_film_history_firefight",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"HaltOnDeterminismTickError",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_render_debug_immediate",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_total_height",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_collision_radius",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_spacing_radius",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_forward_distance",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_down_distance",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_drop_off_distance",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_test_floor_fudge",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_render_point_size",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_show_spawns_as_boxes",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"spawn_point_debugging_facing_tick_size",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"look_at_heading_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"look_at_heading_cooldown_max",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"look_at_heading_cooldown_min",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"look_at_heading_duration_max",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"look_at_heading_duration_min",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pcaUnitTestForceSearchForAllObjects",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pcaUnitTestForceStateChannelMatch",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pcaUnitTestForceAllChannelMatch",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"task_render",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"task_area_check",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_throttle",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"global_actor_throttle_scale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"procedural_nodes_disable",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"procedural_nodes_test_multiply",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"procedural_nodes_allow_clamping",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"disable_render_time_node_solving",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_function_name",
	"string_id",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"load_game_variants_from_files",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"load_map_variants_from_files",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"frame_tick_limit",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementAlignedFacingAllowed",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedHipOffsetEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementHipOffsetEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedGroundFittingHipOffsetEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedLeanIntoSlopeScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedLeanIntoMovementScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementHipOffsetDecayToIdleRate",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementHipOffsetDecayToMovementRate",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementHipOffsetSensitivity",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementHipOffsetVelocityDampeningRate",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedMovementHipVerticalDipScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedPushOnLedgesEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_aim_fixup",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedAimFixupEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedAimTestAngles",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedAimTestTimeScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedAimTestYawScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedAimTestPitchScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pup_current_puppet",
	"object",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pup_grief_counter",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"tap_button_timer",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FPCameraReticleOffsetMasterScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FPCameraAnimatedTranslationScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FPCameraAnimatedRotationScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FPCameraLagScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FPCameraCounterAnimationScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FPCameraCounterAnimationLerp",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DelaySimMS",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DelaySimFrames",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DelayRenderMS",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DelayRenderFrames",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DelayGpuMS",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"DelayGpuFrames",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"life_cycle_skip_game",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ignore_whitelist",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"show_watermark",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"override_watermark_value",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimAllowAllNodes",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimIgnoreNodeMasks",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimEnablePCA",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimForceTrack",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimForceTrackCycle",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimHeadGesturePower",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimHeadGestureScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimEyeGesturePower",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimEyeGestureScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"FacialAnimPhonemeAdvance",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedClimbMovementHintWeight",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedClimbDesiredPlaneWeight",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedClimbGroundNormalDebug",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"GlobalSkyIndexOverride",
	"short",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_objects_unit_assasination_cones",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"PCAAnimationEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"CompositeTransitionsEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"AllowCompositeThrottleEstimate",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ActorSmoothThrottleEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"ActorSmoothStoppingEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BipedFootlockEnabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"debug_biped_footlock",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"gForceProjectionOffsetZero",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"BoostEulerAimingRateWhileTurning",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_drop_count",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_formation_row_dist",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_formation_side_dist",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_helmet",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_chest",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_elitearmor",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_leftshoulder",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_rightshoulder",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_arms",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_legs",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_unused",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"pvp_drop_test_customize_nonmodel",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_BipedAirborneCameraScale",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_saved_film_history_render_wait",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"resource_defrag_enabled",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_campaign_and_firefight_films",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_overrideSynchronousClientUpdateLimitThreshold",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"net_overrideSynchronousClientUpdateLimit",
	"long",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"enable_fake_self_illum_bloom",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fake_self_illum_bloom_min",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"fake_self_illum_bloom_range",
	"real",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"g_breadcrumbsNavpointsEnabledOverride",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);

var newGlobal = new HSGlobal(
	"havok_error_handler_ignore_asserts_while_building_cache_file",
	"boolean",
	['H4'],
);
hsGlobals.push(newGlobal);