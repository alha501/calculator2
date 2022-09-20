input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showNumber(num1 + num2)
})
input.onGesture(Gesture.TiltLeft, function () {
    num2 += 1
    basic.showNumber(num2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(sum)
})
input.onButtonPressed(Button.B, function () {
    num1 += -1
    basic.showNumber(num1)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    num2 += -1
    basic.showNumber(num2)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showNumber(num1 - num2)
})
let sum = 0
let num1 = 0
let num2 = 0
basic.showLeds(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `)
num2 = num1
sum = 0
