const applescript = require('./applescript.js');
const uuid = require('./uuid.js');

module.exports = (s_uuid, a_actions) => a_actions.map((g_action, i_action) => {
	let g_block = {
		BTTTriggerType: -1,
		BTTTriggerClass: 'BTTTriggerTypeTouchBar',
		BTTEnabled2: 1,
		BTTUUID: uuid(`${s_uuid}#actions.${i_action}`),
		BTTEnabled: 1,
		BTTOrder: i_action,
	};

	if(g_action.script) {
		g_block = {...g_block,
			BTTPredefinedActionType: 172,
			BTTPredefinedActionName: 'Run Apple Script (blocking)',
			BTTInlineAppleScript: applescript(g_action.script),
		};
	}
	else if(g_action.delay) {
		g_block = {...g_block,
			BTTPredefinedActionType: 129,
			BTTPredefinedActionName: 'Delay Next Action',
			BTTDelayNextActionBy: ''+g_action.delay,
			BTTTriggerConfig: {
				BTTTouchBarAlternateBackgroundColor: '0.000000, 0.000000, 0.000000, 0.000000',
				BTTTouchBarItemIconHeight: 22,
				BTTTouchBarButtonCornerRadius: 6,
				BTTTouchBarItemPlacement: 0,
				BTTTouchBarButtonColor: '75.323769, 75.323769, 75.323769, 255.000000',
				BTTTouchBarItemIconWidth: 22,
				BTTTouchBarFreeSpaceAfterButton: 5,
				BTTTouchBarItemPadding: 0,
			},
		};
	}
	else if(g_action.type && g_action.name) {
		g_block = {...g_block,
			BTTPredefinedActionType: g_action.type,
			BTTPredefinedActionName: g_action.name,
		};
	}

	return g_block;
});
