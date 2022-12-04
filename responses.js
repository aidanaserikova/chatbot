function getBotResponse(input) {
  if (input == "hello") {
    return "Hello there! Do you have any questions?";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "how i can connact with hr manager?") {
    return "You can write to our mailing address: abc@gmail.com";
  } else {
    return "Try asking something else!";
  }
}
