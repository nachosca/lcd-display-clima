basic.showIcon(IconNames.Happy)
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.clear()
I2C_LCD1602.on()
I2C_LCD1602.ShowString("Hola Bienvenidos a clima Mateo", 0, 0)
I2C_LCD1602.BacklightOff()
basic.pause(5000)
I2C_LCD1602.ShowString("Aca vas a ver el clima", 0, 0)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    I2C_LCD1602.BacklightOn()
    while (true) {
        I2C_LCD1602.ShowString("La Temperatura es: " + input.temperature(), 0, 0)
    }
})
