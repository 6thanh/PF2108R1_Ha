class FlashLamp {
    constructor() {
        // this.status = false;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return battery.getEnergy();
    }
    light() {
        if (this.status) {
            alert("Lighting")
        } else {
            alert("Not lighting")
        };
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}