let 聲音 = input.soundLevel()
servos.P0.setAngle(90)
basic.forever(function () {
    basic.showNumber(聲音)
    if (聲音 > 30) {
        servos.P0.setAngle(75)
        basic.pause(1000)
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(90)
    }
})
