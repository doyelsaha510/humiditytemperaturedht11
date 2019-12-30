import RPi.GPIO as GPIO
import dht11
import time
from firebase import firebase
# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
#GPIO.cleanup()
firebase=firebase.FirebaseApplication("firebasedburl",None)
# read data using Pin GPIO21 
instance = dht11.DHT11(pin=21)

while True:
    result = instance.read()
    if result.is_valid():
        print("Temp: %d C" % result.temperature +' '+"Humid: %d %%" % result.humidity)
        resultt=firebase.put("","temp",result.temperature)
        resultt=firebase.put("","humidity",result.humidity)
    time.sleep(1)
