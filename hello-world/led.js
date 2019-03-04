const Gpio = require('onoff').Gpio;
const led = new Gpio(21,'out');
const light_control_on = ()=>{
    led.writeSync(1);
}
const light_control_off = ()=>{
    led.writeSync(0);
}
modules.exports.on=light_control_on;
modules.exports.off=light_control_off;