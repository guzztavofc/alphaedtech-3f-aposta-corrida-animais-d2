input.onButtonPressed(Button.A, function () {
    animalhumano = randint(1, 3)
    basic.showNumber(animalhumano)
    basic.showIcon(IconNames.SmallDiamond)
    animalmaquina = randint(1, 3)
    basic.showNumber(animalmaquina)
    basic.showIcon(IconNames.SmallDiamond)
    while (animalmaquina == animalhumano) {
        animalmaquina = randint(1, 3)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showNumber(animalmaquina)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    escolha = randint(1, 3)
    basic.showNumber(escolha)
    basic.pause(1000)
    if (animalhumano == escolha) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . . # .
            . # . # .
            . . # . .
            `)
    } else if (animalmaquina == escolha) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let escolha = 0
let animalmaquina = 0
let animalhumano = 0
animalhumano = 0
animalmaquina = 0
escolha = 0
let i = 1
