const mongoose = require("mongoose")

/*
  Insert your connection string to your Cloud based Mongo DB on Atlas below.
  Remember to insert you own userName, Password and name of DB (instead of the suggested /test)
*/

var mongoDB = "mongodb+srv://Admin:Passw0rd@gonnerscluster-g61w7.mongodb.net/crudExercise?retryWrites=true"
mongoose.connect(mongoDB, { useNewUrlParser: true })
    .then((con) => console.log("Connected to Mongo"))
    .catch(err => console.log("Error:", err))

const gameSchema = new mongoose.Schema({ // Defines the shape of game documents in MongoDB
    title: String,
    publisher: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    onSale: Boolean,
    price: Number
})

const Game = mongoose.model("Game", gameSchema) // Compiled down to a Model (Makes an isntance of the Schema)

async function getGames() {
    const games = await Game
        .find({ // Adding filters
            //publisher: 'Nintendo',
            //onSale: true,
            price: {
                //$lt: 25 //Less then 25
                //$in: [19.99, 35.99, 59.99] // Matches any of the specified values
                $gt: 10, $lt: 50 // Find games between 10 and 50 dollars
            }
        })
        /*
        .or([ // Logical Query - Find all games published by Nintendo OR is on sale
            {publisher: 'Nintendo'},
            {onSale: true}
        ])
        .and([ // Logical Query - Follows the above .or AND searches for prices less then 50 dollars
            { price: { $lt: 50 } }
        ])
        */
        .sort({ // Adding a sort | 1 - ascending, -1 - descending
            price: 1
        })
        .select({ // Adding a select - selects which property to display
            title: 1,
            price: 1
        })
    console.log(games)
}

async function updateGame(id) {
    //Updating Documents using Query First
    /*
    const game = await Game.findById(id)
    if (!game) return

    game.price = 10.99
    game.onSale = true

    const updGame = await game.save()
    console.log(updGame)
    */

    // Updating a Document using Update First
    /*
    const game = await Game.updateOne({ _id: id }, {
        $set: {
        price: 7.99,
        onSale: true
        }
    })
    console.log(game)
    */

    // If you want to see the document after update use this:
    const game = await Game.findOneAndUpdate({ _id: id }, {
        $set: {
            title: 'Stardew Valley - End of the World',
            price: 35,
            onSale: false
        }
    }, { new: true });
    console.log(game);
}

async function deleteGames(id) {
    const game = await Game.deleteOne({_id:id})
    console.log(game)
}

async function saveGames() {
    //Remove the Comment below, to start with a fresh database (deleteMany({}) deletes all)
    await Game.deleteMany({})
    var games =
        [{ tags: ['adventure', 'action'], title: 'The Legend of Zelda: Breath of the Wild', publisher: 'Nintendo', onSale: false, price: 59.99, date: "2018-06-04T18:43:28.423Z" },
        { tags: ['adventure', 'action'], title: 'Super Mario Odyssey', publisher: 'Nintendo', onSale: true, price: 45, date: "2018-06-04T20:47:29.661Z" },
        { tags: ['racing', 'sports'], title: 'Mario Kart 8 Deluxe', publisher: 'Nintendo', onSale: false, price: 59.99, date: "2018-06-04T20:49:10.180Z" },
        { tags: ['action', 'shooter'], title: 'Splatoon 2', publisher: 'Nintendo', onSale: true, price: 35.99, date: "2018-06-04T20:51:17.812Z" },
        { tags: ['side scroller', 'platformer'], title: 'Rayman Legends', publisher: 'Ubisoft', onSale: false, price: 49.99, date: "2018-06-04T20:52:08.460Z" },
        { tags: ['simulation', 'farming'], title: 'Stardew Valley', publisher: 'Chucklefish', onSale: false, price: 19.99, date: "2018-06-04T20:53:14.535Z" },
        { tags: ['adventure', 'platformer'], title: 'Shovel Knight: Treasure Trove', publisher: 'Yacht Club Games', onSale: true, price: 10.99, date: "2018-06-04T20:54:07.257Z" },
        ]
    var newGames = await Game.insertMany(games)
    console.log(newGames)
}

saveGames()
//getGames()
//updateGame('5c88dd1e323d203084012bc3');
//deleteGames('5c88dd1e323d203084012bc4')

