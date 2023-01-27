let alarm = {
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am",
};

let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log(alarm.weekendAlarm);
} else {
  console.log(alarm.weekdayAlarm);
}
