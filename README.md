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


> Otevřít tuto stránku v aplikaci [https://martin-cerny-montepol.github.io/clicker-game-2/](https://martin-cerny-montepol.github.io/clicker-game-2/)

## Použít jako rozšíření

Tento repozitář lze přidat jako **rozšíření** v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Nový projekt**
* klikněte na možnost **Rozšíření** v nabídce s ozubeným kolem
* vyhledat **https://github.com/martin-cerny-montepol/clicker-game-2** a importovat

## Upravit tento projekt

Slouží k úpravě tohoto úložiště v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Import** a poté na **Import adresy URL**
* vložte **https://github.com/martin-cerny-montepol/clicker-game-2** a klikněte na možnost import

#### Metadata (slouží k vyhledávání, vykreslování)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
