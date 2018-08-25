function speak (message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  msg.pitch = 2
  msg.rate = 1
  window.speechSynthesis.speak(msg)
}
