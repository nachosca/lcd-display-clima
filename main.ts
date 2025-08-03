basic.showIcon(IconNames.Happy)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
I2C_LCD1602.on()

// First welcome message (split across two lines)
I2C_LCD1602.ShowString("Hola Bienvenidos", 0, 0)
I2C_LCD1602.ShowString("a clima Mateo", 0, 1)
basic.pause(5000)

I2C_LCD1602.BacklightOff()
basic.pause(2000)
I2C_LCD1602.BacklightOn()

// Second welcome message (split across two lines)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Aca vas a ver", 0, 0)
I2C_LCD1602.ShowString("el clima", 0, 1)
basic.pause(2000)

basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.clear()
    let temp = input.temperature() // Gets temperature in °C
    I2C_LCD1602.ShowString("Temp: " + temp + "C", 0, 0)
    // You can display additional info on the second line if desired
    I2C_LCD1602.ShowString("Disfruta el dia!", 0, 1)
    basic.pause(1000)
})