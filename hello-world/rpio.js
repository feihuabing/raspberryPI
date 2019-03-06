var Gpio = require("rpio2");
var led = new Gpio(40);  //创建 P36 引脚

led.open(Gpio.OUTPUT, Gpio.LOW); //设置为 OUTPUT、默认低电平

for(var i = 0; i < 10; i++){
    led.toggle();  //切换 led 的电平状态
    led.sleep(500);  //等待 500ms
}

led.close();
