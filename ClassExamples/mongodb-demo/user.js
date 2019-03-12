var mongoose = require('mongoose')
var mongoDB = "mongodb+srv://Admin:Passw0rd@gonnerscluster-g61w7.mongodb.net/classdemo?retryWrites=true"
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
    .then((con) => console.log("Connected to Mongo"))
    .catch(err => console.log("Error:", err))

setTimeout(() => mongoose.disconnect(() => console.log("Disconnected")), 3000)

var userSchema = new mongoose.Schema({
    userName: String,
    email: { type: String, unique: true },
    created: { type: Date, default: Date.now }
});
// Build the User model
var User = mongoose.model('User', userSchema);

async function addUser(userName, email) {
    var user = new User({ userName, email })
    await user.save()
}

async function testAddUser() {
    try {
        await User.deleteMany({})
        await addUser("Michael Lundsgaard", "ml@testmail.dk")
        await addUser("Henrik Lundsgaard", "hl@testmail.dk")
        await addUser("Søren Lundsgaard", "sl@testmail.dk")
        await addUser("Kirsten Lundsgaard", "kl@testmail.dk")
        await addUser("Morten Mortensen", "mm@testmail.dk")
        await addUser("Lars Mortensen", "lm@testmail.dk")
        await addUser("Mille Bakkedal", "mb@testmail.dk")
        await addUser("Michael Bakkedal", "mib@testmail.dk")
        console.log("Users Added")
    } catch (err) {
        console.log("Error in testAddUsers:", err)
    }
}



async function findUser(fields, projection) {
    return await User.find({ userName: /Lundsgaard/i }, { userName: 1, _id: 0 })
        .sort({ userName: 1 }) // -1 to sort otherway
        .collation({ locale: "da" })
        .limit(4)
    //return User.find(fields, projection)
}

async function testFindUser() {
    var users = await findUser()
    console.log(users)
}

async function editUser() {
    var user = await User.findOneAndUpdate(
        {userName: "Mille Bakkedal"},
        {email: "mille.bakkedal@testmail.dk"},
        {new:true} // If False, it will return the old user
    )
    console.log(user)
}

async function deleteUser() {
    await User.findOneAndDelete({userName: "Michael Bakkedal"})
    var user = await User.findOne({userName: "Michael Bakkedal"})
    console.log("Status", user === null)
}

//testAddUser()
//testFindUser()
//editUser()
deleteUser()

