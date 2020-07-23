function currencyDenomination() {
    var cash = +prompt("Enter amount to withdraw!!")
    var hundred = parseInt(cash / 100);
    var fifty = parseInt((cash % 100) / 50);
    var ten = parseInt(((cash % 100) % 50) / 10);
    document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

}
currencyDenomination();