function leapYear(input) {
    if ((input % 4 == 0 && input % 100 != 0) || input % 400 == 0) {
      return "yes";
    } else {
      return  "no";
    }
    
}
let year = leapYear(2000);
document.write(year);

