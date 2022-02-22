
const yargs = require("yargs")
const { client, connection } = require("./db/connection")
const Movie = require("./utils");

const app = async (yargsObj) => {
//setting async as going externally
    const collection = await connection();
// again must await as does things outside of app
    try {
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            //take movie info, add it to the mongodb database & console.log a success message
            console.log(await movie.add(collection));
        } else if (yargsObj.list) {
            //list all movies in database
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.list(collection));
        } else {
            console.log("incorrect command")
        }
        await client.close();
    }
    catch (error) {
        console.log(error)
    }
}

app(yargs.argv);
