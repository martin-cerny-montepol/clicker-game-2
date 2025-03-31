# Clicker Game (Klikací hra)

Už umíme pracovat s jednou proměnnou. A co dvě? Dva můžou závodit. 
Třeba v tom, kdo bude rychleji klikat na tlačítko!

## Máme dva hráče a dvě proměnné

Abychom mohli dvěma hráčům počítat každému jejich počet kliků,
musíme mít pro každého jeho vlastní proměnnou. Pro jednoduchost budeme
hráče označovat **hráč A** a **hráč B**, takže proměnné s jejich body označíme
*bodyA* a *bodyB*

```blocks
let bodyB = 0
let bodyA = 0
bodyA = 0
bodyB = 0
```

## Každý klik se počítá!

**Hráč A** sbírá body klikáním na tlačítko **A**,
**Hráč B** sbírá body klikáním na tlačítko **B**.

```blocks
input.onButtonPressed(Button.A, function () {
    bodyA += 1
})
input.onButtonPressed(Button.B, function () {
    bodyB += 1
})
```

## Ale kdo vyhrál?

Potřebujeme hru ještě odstartovat a určit vítěze. Využijeme "logo tlačítka"
a začneme nejprve odpočítáváním 3, 2, 1, 0, start! Potom počkáme 5 vteřin, 
během kterých budou hráči klikat jako o život. 

Potom použijeme **podmínku KDYŽ**, abychom zjistili, 
kdo kliknul vícekrát.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    bodyA = 0
    bodyB = 0
    basic.pause(5000)
    if (bodyA > bodyB) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
```

## Ještě to chce muziku!

Zkus umístit do kódu přehrání tónu tak, aby označoval začátek a konec hry.

```blocks
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
```