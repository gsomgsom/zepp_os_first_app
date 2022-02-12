const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

const HELLO_TEXT = {
	text: 'Hello, Habr!',
	x: px(42),
	y: px(200),
	w: DEVICE_WIDTH - px(42) * 2,
	h: px(100),
	color: 0xffff00,
	text_size: px(36),
	align_h: hmUI.align.CENTER_H,
	text_style: hmUI.text_style.WRAP,
}

const logger = DeviceRuntimeCore.HmLogger.getLogger('firstapp')

Page({
	build() {
		logger.debug('page build invoked')
		hmUI.createWidget(hmUI.widget.TEXT, {
			...HELLO_TEXT,
		})
	},
	onInit() {
		logger.debug('page onInit invoked')
	},

	onDestroy() {
		logger.debug('page onDestroy invoked')
	},
})
