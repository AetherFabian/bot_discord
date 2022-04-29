const fs = require('fs');
const allEvents =[];
module.exports = async (client) => {
    try{
        try{
            console.log("Loading Events...".yellow);
        } catch(e){}
        let count = 0;
            const load_dir = (dir) => {
                const events_files = fs.readdirSync(`./events/${dir}`).filter((file)=>file.endsWith(".js"));
                for (let file of events_files){
                    try{
                        const event = require(`../events/${dir}/${file}`);
                        const event_name = file.split(".")[0];
                        allEvents.push(event_name);
                        client.on(event_name, event.bind(null, client));
                        count++;
                    }
                    catch(e){
                        console.log(e);
                    }
                }
        }
        await ["client", "guild"].forEach(e => load_dir(e));
        console.log(`${count} Events Loaded`.brightGreen);
        try{console.log(`Loging in...`.yellow);} catch(e){console.log(e);}
    } catch(e){
        console.log(e.bgRed);
    }
}