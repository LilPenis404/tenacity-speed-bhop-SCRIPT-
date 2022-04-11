var script = initScript({
    name: "Spike Flight",
    description: "vanilla bhop module",
    author: "Module"
})

var timerUtil = client.createTimer()




script.onMotion(function (event) {
	if (player.onGround()) {
		player.jump()
				
	
	}
})					
		



script.onTick(function (event) {
	if (!player.onGround()) {
		player.setSpeed(2.0)
		player.setMotionY(0.2)
		world.setTimer(1.5)
		} else{
			player.setSpeed(0.3)
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")
client.printClientMsg("longjump go brrrrr")


					}
			
})



//on disable
script.onDisable(function () {
	world.setTimer(1)
	player.setSpeed(0.3)
	
})
//on enable
script.onEnable(function () {
	notification.post(notification.success, "a", "ss")
	player.setSpeed(-50)
	world.setTimer(0.05)
})

