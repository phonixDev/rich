// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "Custom bot form", url: "https://docs.google.com/forms/d/e/1FAIpQLSd6DPfFv4Pmk_ZpGRYYWT_jjd03BqDsN7axcEowiIMT9sROwg/viewform?usp=sf_link" }],
            details: "#BlackLivesMatter",
            largeImageKey: "rpc_icon",
            largeImageText: "Phonix"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();