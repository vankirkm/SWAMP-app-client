#!/usr/bin/env python3
import serial
import time
from typing import Optional
import json

class plantStatus(object):
	def __init__(self, 
	currentMoistureLevel: Optional[int] = None, 
	currentMoisturePercent: Optional[str] = None, 
	currentLightLevel: Optional[int] = None, 
	lastDayWatered: Optional[int] = None, 
	currentWaterStatus: Optional[int] = None):
		self.currentMoisturelevel = currentMoistureLevel
		self.currentMoisturePercent = currentMoisturePercent
		self.currentLightLevel = currentLightLevel
		self.currentWaterStatus = currentWaterStatus
	
	def parseAndPopulate(self, string):
		parts = string.split(' = ')
		key = parts[0]
		value = parts[1].strip()
		# Handle specific keys differently
		if key == 'waterLevelStatus':
			self.currentWaterStatus = int(value)
		elif key == 'soilMoistureStatus':
			self.currentMoisturelevel = int(value)
		elif key == 'soilMoisturePercent':
			self.currentMoisturePercent = value
		elif key == 'Lux':
			self.currentLightLevel = int(value)

	def populated(self):
		return self.currentMoisturelevel != None and self.currentMoisturePercent != None and self.currentLightLevel != None and self.currentWaterStatus != None

	def writeJson(self):
		with open('~/assests/data/plantStatus.json', 'w') as outfile:
			json.dump(self.__dict__, outfile)

	def __str__(self):
		return json.dumps(self.__dict__)

def isCalibrationMessage(line: str) -> bool:
		return line.count(' = ') != 1
if __name__ == '__main__':
	ser = serial.Serial('/dev/ttyACM0', 115200, timeout=1)
	ser.reset_input_buffer()
	plantData = plantStatus()
	while True:
		if ser.in_waiting > 0:
			line = ser.readline().decode('utf-8').rstrip()
			print(line)
			# TODO: parse line here
			if isCalibrationMessage(line):
				continue
			else:
				plantData.parseAndPopulate(line)
				if plantData.populated():
					plantData.writeJson()
					print(plantData)
				else:
					print('Not populated\n', plantData)
		time.sleep(1)


