import paho.mqtt.client as mqtt
import time,random

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("sevengrow/#")
    while (1):
        clientID, data = random_data()
        print(data)
        time.sleep(2)
        

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

def random_data():
    clientID = str(random.randint(1, 10))
    co2 = str(random.normalvariate(1300, 100))
    humidity = str(random.normalvariate(55, 5))
    power = str(random.normalvariate(700, 10))
    temperature = str(random.normalvariate(25, 3))
    timestamp = str(time.time())
    print("clientID: %s, co2: %s, humidity: %s, power: %s, temperature: %s, timestamp: %s" % (clientID, co2, humidity, power, temperature, timestamp))
    return clientID,co2+humidity+power+temperature+timestamp

def random_control():
    clientID = random.randint(1, 10)
    co2 = random.normalvariate(1300, 100)
    humidity = random.normalvariate(55, 5)
    power = random.normalvariate(700, 10)
    temperature = random.normalvariate(25, 3)
    timestamp = time.time()
    print("clientID: %s, co2: %s, humidity: %s, power: %s, temperature: %s, timestamp: %s"%(clientID,co2,humidity,power,temperature,timestamp))
    
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("localhost", 1883, 60)

# Blocking call that processes network traffic, dispatches callbacks and
# handles reconnecting.
# Other loop*() functions are available that give a threaded interface and a
# manual interface.
client.loop_forever()