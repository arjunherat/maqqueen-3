for (let index = 0; index < 4; index++) {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 80)
    basic.pause(1000)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 75)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 75)
    basic.pause(500)
}
Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
