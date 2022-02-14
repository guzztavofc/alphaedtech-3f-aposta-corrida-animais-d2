input.onButtonPressed(Button.A, function () {
    animalhumano = randint(0, 2)
    basic.showNumber(animalhumano)
    basic.showIcon(IconNames.SmallDiamond)
    animalmaquina = randint(0, 2)
    basic.showNumber(animalmaquina)
    basic.showIcon(IconNames.SmallDiamond)
    while (animalmaquina == animalhumano) {
        animalmaquina = randint(0, 2)
        basic.showNumber(animalmaquina)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (i <= 3) {
        animalhumano = animalhumano + 1
        basic.showNumber(animalhumano)
        i = i + 1
    }
    if (i > 3) {
        i = 1
        animalhumano = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    escolha = randint(1, 3)
    basic.showNumber(escolha)
    basic.pause(1000)
    if (animalhumano == escolha || animalhumano + 3 == escolha) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . . # .
            . # . # .
            . . # . .
            `)
    } else if (animalmaquina == escolha || animalmaquina + 3 == escolha) {
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
let i = 0
let escolha = 0
let animalmaquina = 0
let animalhumano = 0
animalhumano = 0
animalmaquina = 0
escolha = 0
i = 1
