const mc = require('minecraft-protocol');
const crypto = require('crypto');

function run () {
  const bot = mc.createClient({
  "host": 'dev.antplayz.ml',
  "port": 25607,
  "username": crypto.randomBytes(10).toString('ascii').substr(0,15),
  "version": '1.16.5'
});
bot.queue = [];

bot.on('login', () => {
  console.log(`Logged in as ${bot.username}`)
})

  

}

run()

  setInterval(function() {
run()

  }, 5000);

  
