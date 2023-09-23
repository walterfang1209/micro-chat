input.onButtonPressed(Button.A, function () {
    radio.sendString("1212")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
