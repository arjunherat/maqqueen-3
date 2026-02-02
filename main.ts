for (let index = 0; index < 4; index++) {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 78)
    basic.pause(500)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 85)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 85)
    basic.pause(500)
}
Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
