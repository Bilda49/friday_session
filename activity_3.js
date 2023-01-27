let curBalance = 500;
const pinNumb = 5432;
const cashMachine = (cashWithdrawals, inpPin) => {
  if (inpPin == pinNumb) {
    console.log("PIN is correct");
    if (cashWithdrawals < curBalance) {
      curBalance -= cashWithdrawals;
      console.log(`You withdrew ${cashWithdrawals} dollars`);
      console.log(`Your balance: ${curBalance}`);
    } else if (inpPin === pinNumb && cashWithdrawals > curBalance) {
      console.log("Not enough money in the account");
    }
  } else {
    console.log("PIN is not correct");
  }
};

cashMachine(600, 5432);
console.log("----------------");
cashMachine(300, 5432);
console.log("----------------");
cashMachine(200, 12412341212);
