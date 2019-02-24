# SevenGrow

## Modules:

### [M1]Measure:

_The Measure module is the one that is on charge of measuring the next parameters with the use of a ESP8266:_

* Humidity and Temperature:

  * Ideal parameters: 50% - 70% in growth phase, 50% in vegetative phase.

  * Device: [DHT-11](https://www.mouser.com/ds/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf)

* CO2:

  * Ideal parameters: 1200-1500 ppm 

  * Device: [MQ-135](https://www.olimex.com/Products/Components/Sensors/SNS-MQ135/resources/SNS-MQ135.pdf)

* Power:
  This corresponds to the power used by the complete system.



### [M2]Control

_The Control module is the one that is on charge of controlling the devices to achieve the ideal parameters mentioned on the previous section:_

* [Seeed Grove Relay](http://wiki.seeedstudio.com/Grove-Relay/): is used to turn on and offcontrol the light, the extractors, the humidifier and the CO2 emitter.

### [M3]Transmission

_The Transmission module is the one that is on charge of transmitting the data sensed by the ESP8266 to the server:_

* [MQTT](http://mqtt.org/) (Message Queue Telemetry Transport):

  * Measure devices topic format: 
  ````
  /sevengrow/clientid/measure/
  ````
  * Payload format: 
  
  co2,humidity,power,temperature,timestamp

  * Control devices topic format:
  ````
  /sevengrow/clientid/control/lights/
  /sevengrow/clientid/control/extractors/
  /sevengrow/clientid/control/humidifier/
  /sevengrow/clientid/control/co2emiiter/
  ````
  
### [M4](https://github.com/matiasbn/sevengrow/tree/master/reception)Reception
_The Reception module is the one that is on charge of receiving the data sent by the Transmission module and stored on the Storage module:_

There would be an *incoming service* on a remote server to storage the data in the Storage module.

### [M5]Storage

_The Storage module is the one that is on charge of storing the data received by the reception module:_

#### MongoDB

There would be 4 collections:
* Systems: Data related to the user.
* Control: Collection dedicated to store data about events that triggers the action of the Control module.
* Measure: Collection dedicated to store data about the parameters shown on the Measure module.

#### Blockchain
**SOON**

#TODO
- [ ] State timestamps on sensor
- [ ] State timestamps on control
