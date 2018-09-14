const uuid = require('./uuid.js');

const H_RADIUS = {
	all: 0,
	left: 1,
	right: 2,
};

class Trigger {
	constructor(s_id) {
		Object.assign(this, {
			id: s_id,
		});
	}

	update(h_updates) {
		let s_json = JSON.stringify(h_updates).replace(/"/g, '\\"');
		return /* syntax: applescript */ `update_trigger "${uuid(this.id)}" json "${s_json}"`;
	}

	hide() {
		return this.update({
			BTTEnabled2: 0,
		});
	}

	show() {
		return this.update({
			BTTEnabled2: 1,
		});
	}

	icon(s_icon) {
		return this.update({
			BTTIconData: s_icon,
		});
	}

	set(s_key, s_value) {
		return /* syntax: applescript */ `update_trigger "${uuid(this.id)}" json "{\\"${s_key}\\":" & ${s_value} & "}"`;
	}

	margin(n_margin) {
		return this.update({
			BTTTriggerConfig: {
				BTTTouchBarFreeSpaceAfterButton: n_margin,
			},
		});
	}

	radius(s_which) {
		return this.update({
			BTTTriggerConfig: {
				BTTTouchBarApplyCornerRadiusTo: H_RADIUS[s_which],
			},
		});
	}

	delete() {
		return /* syntax: applescript */ `delete_trigger "${uuid(this.id)}"`;
	}
}

module.exports = (...a_args) => new Trigger(...a_args);
