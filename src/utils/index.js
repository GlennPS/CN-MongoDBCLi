
class Movie {
    constructor (title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    async add (collection) {
        await collection.insertOne(this);
//adding a method ()    - add this to database
        return "Success";
    }

    async list (collection) {
        return await collection.find().toArray();
    //list all movies in db
    }
}

module.exports = Movie;
