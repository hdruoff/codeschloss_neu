input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    bearbeite_spalte += 1
    spaltenwert += 1
    if (bearbeite_spalte > 4) {
        spaltenwert = 0
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    spaltenwert = 0
    bearbeite_spalte += 1
    if (bearbeite_spalte > 4) {
        bearbeite_spalte = 0
    }
    led.plot(bearbeite_spalte, spaltenwert)
})
let loesung_der_spalte = 0
let code_richtig = 0
let spaltenwert = 0
let bearbeite_spalte = 0
let loesung = 12043
led.plot(0, 0)
basic.setLedColor(0xff0000)
music.setTempo(200)
basic.forever(function () {
    code_richtig = 0
    for (let spalte = 0; spalte <= 4; spalte++) {
        loesung_der_spalte = parseFloat("123")
        for (let zeile = 0; zeile <= 4; zeile++) {
        	
        }
    }
})
