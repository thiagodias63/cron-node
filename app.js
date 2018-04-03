const CronJob = require('cron').CronJob
let j = 1;
new CronJob('* * * * * *', () => {
  texto('You will see this message every',sum(j))
}, null, true, 'America/Los_Angeles')

function texto(t,i){
    console.log(t + ' ' + i)
}

function sum(i){
    return i + i
}