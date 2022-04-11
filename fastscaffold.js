var script = initScript({
    name: "Exhi Speed",
    description: "Bind at the same key as scaffold",
    author: ""
})
notification.post(notification.success, "", "")

script.onMotion(function (ev) {
    if (ev.isPre() && player.onGround()) {
        moduleManager.toggleSilent("speed")
    player.setMotionY(0.3)
    player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
		player.setSpeed(1.0)
		player.setMotionY(0.1)
		world.setTimer(1.2)
world.setTimer(1)
		} 
 else{
			player.setSpeed(0.3)
    player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
player.sendPacket(packet.C03PacketPlayer.C06PacketPlayerPosLook, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
    player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
    player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
    player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
   player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 3.5, player.z(), false)
player.sendPacket(packet.C04PacketPlayerPosition, player.x(), player.y() + 1.5, player.z(), true)
    }
})
script.onDisable(function () {
    moduleManager.setState("speed", false)
  moduleManager.setState("timer", false)
})