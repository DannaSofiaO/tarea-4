input.onButtonPressed(Button.A, function () {
    basic.showString("v.temp")
    basic.pause(200)
    if (input.temperature() < 26) {
        basic.showString("T.baja")
        basic.pause(200)
        basic.showIcon(IconNames.Sad)
    }
    if (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showString("T.normal")
        basic.pause(200)
        basic.showIcon(IconNames.Happy)
    }
    if (input.temperature() > 34) {
        basic.showString("T.alta")
        basic.pause(200)
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
	
})
