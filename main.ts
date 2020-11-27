radio.onReceivedNumber(function (receivedNumber) {
    受け取った数 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(数)
    basic.pause(2000)
    数 = 0
    受け取った数 = 0
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    数 += 1
    radio.sendNumber(数)
})
input.onButtonPressed(Button.B, function () {
    勝負 = 数 + 受け取った数
    if (数 == 受け取った数) {
        basic.showString("Draw")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else if (数 > 受け取った数) {
        basic.showString("You Win!")
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else {
        basic.showString("You Lose")
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
let 勝負 = 0
let 受け取った数 = 0
let 数 = 0
radio.setGroup(1)
数 = 0
