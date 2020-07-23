function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let vowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (vowel) {
              count++;
              vowel = false;
            } else {
              vowel = true;
            }
            break;
          }
        default:
          vowel = false
      }
    }
  
    return count
  }
  document.write(findOccurrences());  