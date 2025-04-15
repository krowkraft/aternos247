const mineflayer = require('mineflayer');

// Create the bot instance in offline mode with a timeout setting
const bot = mineflayer.createBot({
  host: 'Fremds-KQcg.aternos.me',  // Replace with your server IP (e.g., 'localhost' or '192.168.1.1')
  port: 24158,             // Default Minecraft port, change if necessary
  username: 'Rehanrajusamson',     // Replace with the bot's username (this does NOT need authentication)
  version: false,          // Auto-detect the Minecraft version
  offline: true,           // Enable offline mode (no Mojang/Microsoft account required)
  connectTimeout: 60000,    // Give it longer to connect
  keepAlive: true,
  checkTimeoutInterval: 60000  // ⬅️ Custom: server wait time (60 sec instead of 30)
});

// When the bot spawns (enters the game world)
bot.on('spawn', () => {
  console.log('Im the bot and i hate robin samuel');
  
  // Move randomly every 5 seconds
  setInterval(() => {
    const randomDirection = Math.floor(Math.random() * 4);
    
    // Randomly choose a direction for the bot to move
    switch (randomDirection) {
      case 0:
        bot.setControlState('forward', true);  // Move forward
        bot.setControlState('back', false);    // Stop moving backward
        bot.setControlState('left', false);    // Stop moving left
        bot.setControlState('right', false);   // Stop moving right
        break;
      case 1:
        bot.setControlState('back', true);     // Move backward
        bot.setControlState('forward', false); // Stop moving forward
        bot.setControlState('left', false);    // Stop moving left
        bot.setControlState('right', false);   // Stop moving right
        break;
      case 2:
        bot.setControlState('left', true);     // Move left
        bot.setControlState('right', false);   // Stop moving right
        bot.setControlState('forward', false); // Stop moving forward
        bot.setControlState('back', false);    // Stop moving backward
        break;
      case 3:
        bot.setControlState('right', true);    // Move right
        bot.setControlState('left', false);    // Stop moving left
        bot.setControlState('forward', false); // Stop moving forward
        bot.setControlState('back', false);    // Stop moving backward
        break;
    }

    // Stop moving after 1 second
    setTimeout(() => {
      bot.setControlState('forward', false);
      bot.setControlState('back', false);
      bot.setControlState('left', false);
      bot.setControlState('right', false);
    }, 1000);  // Stop moving after 1 second
    
  }, 5000);  // Moves every 5 seconds
  
  // Send a message every 60 seconds to avoid being kicked for inactivity
  setInterval(() => {
    bot.chat('/shuuygu');  // Keeps the bot active on the server
  }, 60000);  // Sends message every 60 seconds
});

// Handle any errors
bot.on('error', (err) => {
  console.log('Error:', err);
});

// Handle bot disconnection
bot.on('end', () => {
  console.log('gay sex');
});
