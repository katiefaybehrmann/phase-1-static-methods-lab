class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(str) {
    let lilWords = new Set();
    let wordArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    wordArray.forEach(word => lilWords.add(word))

    let newStr = str.split(" ")
    let sentence = [newStr[0].charAt(0).toUpperCase() + newStr[0].slice(1)];
    for (let i = 1; i < newStr.length; i++) {
      let capStr;
      if (lilWords.has(newStr[i])) {
        capStr = newStr[i]
      }
      else {
        capStr = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1)
      }

      sentence.push(capStr)
    }
    return sentence.join(" ");
  }
}
