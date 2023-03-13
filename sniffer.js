const { SerialPort } = require('serialport')

const serialPort1 = new SerialPort({
		path: '/dev/ttyUSB0',
		baudRate: 9600  
})
const serialPort2 = new SerialPort({
		path: '/dev/ttyUSB1',
		baudRate: 9600 
})

serialPort1.on('data', function (data) {
  serialPort2.write(data)
  console.log('\n%cDados recebidos na porta: '+serialPort1.path.split("/")[2]+'\n', "color: blue")
  console.log(data)	
})

serialPort2.on('data', function (data) {
  serialPort1.write(data)
  console.log('\n%cDados recebidos na porta: '+serialPort2.path.split("/")[2]+'\n', "color: red")
  console.log(data)
})
