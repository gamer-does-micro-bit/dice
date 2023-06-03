let nummer = 0
input.onButtonPressed(Button.AB, function () {
    nummer = randint(1, 6)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showString("" + (nummer))
})
