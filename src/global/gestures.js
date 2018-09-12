module.exports = (gc_global, gc_module={}) => [
	{
		BTTTouchBarButtonName: 'Gestures',
		BTTTriggerType: 630,
		BTTTriggerClass: 'BTTTriggerTypeTouchBar',
		BTTPredefinedActionType: -1,
		BTTPredefinedActionName: 'No Action',
		BTTEnabled2: 0,
		BTTUUID: '4ACEC97F-F16A-4ECD-BE49-9760C0EFE60F',
		BTTEnabled: 1,
		BTTOrder: gc_global.index.touchbar++,
		BTTAdditionalActions: [
			{
				BTTTriggerType: 644,
				BTTTriggerTypeDescription: 'Two Finger Swipe Left',
				BTTTriggerClass: 'BTTTriggerTypeTouchBar',
				BTTPredefinedActionType: 199,
				BTTPredefinedActionName: 'Volume Down (Small Step)',
				BTTEnabled2: 1,
				BTTRepeatRate: 1,
				BTTRepeatDelay: 0,
				BTTUUID: '4BEC1FC8-79C9-4744-97D9-C1102F4981F8',
				BTTEnabled: 1,
				BTTOrder: 0,
			},
			{
				BTTTriggerType: 645,
				BTTTriggerTypeDescription: 'Two Finger Swipe Right',
				BTTTriggerClass: 'BTTTriggerTypeTouchBar',
				BTTPredefinedActionType: 198,
				BTTPredefinedActionName: 'Volume Up (Small Step)',
				BTTEnabled2: 1,
				BTTRepeatRate: 1,
				BTTRepeatDelay: 0,
				BTTUUID: 'E6BBAFB8-0AFB-4D58-B10D-79860FC5CD58',
				BTTEnabled: 1,
				BTTOrder: 1,
			},
			{
				BTTTriggerType: 646,
				BTTTriggerTypeDescription: 'Three Finger Swipe Left',
				BTTTriggerClass: 'BTTTriggerTypeTouchBar',
				BTTPredefinedActionType: 29,
				BTTPredefinedActionName: 'Brightness Down',
				BTTEnabled2: 1,
				BTTRepeatRate: 1,
				BTTRepeatDelay: 0,
				BTTUUID: '9EBB0FFC-9A82-49C3-9FA8-1D053F5649F2',
				BTTEnabled: 1,
				BTTOrder: 2,
			},
			{
				BTTTriggerType: 647,
				BTTTriggerTypeDescription: 'Three Finger Swipe Right',
				BTTTriggerClass: 'BTTTriggerTypeTouchBar',
				BTTPredefinedActionType: 28,
				BTTPredefinedActionName: 'Brightness Up',
				BTTEnabled2: 1,
				BTTRepeatRate: 1,
				BTTRepeatDelay: 0,
				BTTUUID: 'D255D2CE-1398-4E31-992E-637E098A8383',
				BTTEnabled: 1,
				BTTOrder: 3,
			},
			{
				BTTTriggerType: 648,
				BTTTriggerTypeDescription: 'Four Finger Swipe Left',
				BTTTriggerClass: 'BTTTriggerTypeTouchBar',
				BTTPredefinedActionType: 32,
				BTTPredefinedActionName: 'Keyboard Illumination Down',
				BTTEnabled2: 1,
				BTTRepeatRate: 1,
				BTTRepeatDelay: 0,
				BTTUUID: '0106D8FA-6990-4157-994F-B4C375C227BE',
				BTTEnabled: 1,
				BTTOrder: 4,
			},
			{
				BTTTriggerType: 649,
				BTTTriggerTypeDescription: 'Four Finger Swipe Right',
				BTTTriggerClass: 'BTTTriggerTypeTouchBar',
				BTTPredefinedActionType: 31,
				BTTPredefinedActionName: 'Keyboard Illumination Up',
				BTTEnabled2: 1,
				BTTRepeatRate: 1,
				BTTRepeatDelay: 0,
				BTTUUID: '21CBCB98-BA0F-44A1-B20E-CDEF48210E31',
				BTTEnabled: 1,
				BTTOrder: 5,
			},
		],
	},
];