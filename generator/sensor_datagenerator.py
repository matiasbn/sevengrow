import paho.mqtt.client as mqtt
import time,random

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("/sevengrow/#")
        
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

def random_data():
    clientID = "%d" % random.uniform(1,10)
    co2 = "%f,%f"%(random.normalvariate(1300, 100),time.time())
    humidity = "%f,%f"%(random.normalvariate(55, 5),time.time())
    power = "%f,%f"%(random.normalvariate(700, 10),time.time())
    temperature = "%f,%f"%(random.normalvariate(25, 3),time.time())
    timestamp = time.time()
    co2_topic = "sevengrow/%s/sensor/co2/"%(clientID)
    humidity_topic = "sevengrow/%s/sensor/humidity/"%(clientID)
    power_topic = "sevengrow/%s/sensor/power/"%(clientID)
    temperature_topic = "sevengrow/%s/sensor/temperature/"%(clientID)
    client.publish(co2_topic,co2) 
    client.publish(humidity_topic,humidity) 
    client.publish(power_topic,power) 
    client.publish(temperature_topic,temperature) 
    print("clientID: %s, co2: %s, humidity: %s, power: %s, temperature: %s, timestamp: %s" % (clientID, co2, humidity, power, temperature, timestamp))
    
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("localhost", 1883, 60)
while (1):
        random_data()
        time.sleep(2)
client.loop_forever()