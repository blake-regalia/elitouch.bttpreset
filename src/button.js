
const H_PLACEMENTS = {
	scroll: 0,
	left: 1,
	right: 2,
};

const opt = (...a_args) => {
	for(let z_opt of a_args) {
		if('undefined' !== typeof z_opt) return z_opt;
	}
};

class button_spawner {
	constructor(gc_global) {
		this.global = gc_global;
	}

	button(gc_button) {
		let gc_global = this.global.button;

		return {
			BTTTouchBarButtonName: gc_button.name,
			BTTTouchBarItemPlacement: gc_button.placement? H_PLACEMENTS[gc_button.placement]: 0,

			BTTTouchBarButtonColor: opt(gc_button.color, gc_global.color, '75.323769, 75.323769, 75.323769, 255.000000'),
			BTTTouchBarAlternateBackgroundColor: '0.000000, 0.000000, 0.000000, 0.000000',
			BTTTouchBarButtonCornerRadius: opt(gc_button.radius, gc_global.radius, 6),
			BTTTouchBarAlwaysShowButton: true,

			BTTTouchBarItemIconWidth: opt(gc_button.width, gc_global.width, 22),
			BTTTouchBarItemIconHeight: opt(gc_button.height, gc_global.height, 22),

			BTTTouchBarItemPadding: opt(gc_button.padding, gc_global.padding, 0),
			BTTTouchBarFreeSpaceAfterButton: opt(gc_button.margin, gc_global.margin, 0),

			...(gc_button.transient? {BTTKeepGroupOpenWhileSwitchingApps:false}: {}),
			...(gc_button.long_press? {BTTTouchBarLongPressActionName:gc_button.long_press}: {}),
		};
	}

	label(gc_label) {
		return {
			...this.button(gc_label),
		};
	}

	icon(gc_icon) {
		let gc_global = this.global.button.icon || {};

		return {
			...this.button(gc_icon),

			...(opt(gc_icon.padding, gc_global.padding)
				? {BTTTouchBarItemPadding:opt(gc_icon.padding, gc_global.padding)}
				: {}
			),
			BTTTouchBarOnlyShowIcon: true,
		};
	}

	close(gc_close={}) {
		return this.icon({
			name: 'Close Group',
			margin: 0,
			padding: 0,
			color: '0.000000, 0.000000, 0.000000, 255.000000',
			width: 16,
			placement: 'right',
			...gc_close,
		});
	}
}

module.exports = {
	defaults: gc_global => new button_spawner(gc_global),
};
