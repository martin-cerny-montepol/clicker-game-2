input.onButtonPressed(Button.A, function () {
    bodyA += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let i = 0; i <= 3; i++) {
        basic.showNumber(3 - i)
    }
    bodyA = 0
    bodyB = 0
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.pause(5000)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    if (bodyA > bodyB) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.B, function () {
    bodyB += 1
})
let bodyB = 0
let bodyA = 0
bodyA = 0
bodyB = 0
