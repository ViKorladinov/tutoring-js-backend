var schedule = require("node-schedule");

let jobScheduler = () => {
  schedule.scheduleJob({ dayOfWeek: [0,1,2,3,4,5,6] }, () => {
    console.log("Your scheduleJob!");
  });
};

module.exports = jobScheduler;
