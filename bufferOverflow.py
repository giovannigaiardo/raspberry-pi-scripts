import serial
import random

ser = serial.Serial('/dev/ttyUSB0', 9600)

while (1):
    ser.write(random.randbytes(256))