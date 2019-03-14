# MongoDB and Mongoose
MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need
- MongoDB stores all data in documents
- MongoDB stores documents on disk in the BSON serialization forma
- MongoDB documents are composed of field-and-value pairs and have the following structure
- The value of a field can be any of the BSON data types, including other documents, arrays, and arrays of documents

[Examples](https://docs.mongodb.com/manual/crud/)

During this semester we're going to use MongoDB via Mongoose

## What is  Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 

Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes, out of the box:
- Schemas
- Built-in type casting
- Validation (also included with plain -
MongoDB as of v. 3.2)
- Query building
- Business logic hooks (Middleware)

### Why Mongoose
Why use a tool like mongoose on a database where one of its featured forces is - it's schema less. i.e. we can have all sort of fields in a document in a collection:

```javascript
{ name : “Joe”, age : 30, interests : ‘football’ }
{ name : “Kate”, age : 25 }
```
- Real life data *often* has structure
- Real life data *often* has types
- We want to do more with less work
- Basically, same arguments as why we use a ORM with a relational database 

## Getting Started
Normally you'll want to work with a local databse - However for this semester we're working with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas?jmp=docs), which is a fully-managed cloud database.

To setup an MongoDB Atlas account follow this [Getting Started](https://docs.atlas.mongodb.com/getting-started/?_ga=2.174146016.338595222.1552207628-1043058831.1552053789) guide.

Then, in *all* your projects:
```javascript
var mongoDB = "YourConnectionString"
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
    .then((con) => console.log("Connected to Mongo"))
    .catch(err => console.log("Error:", err))
```
## Schemas
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

[Schemas Documentation](https://mongoosejs.com/docs/guide.html)

```javascript
var userSchema = new mongoose.Schema({
  userName: String,
  email: {type: String, unique:true},
  created: { type: Date, default: Date.now },
  modified: Date,
  lastLogin: Date
});
```
[SchemaTypes](https://mongoosejs.com/docs/schematypes.html) handle definition of defaults, validation, getters, setters, field selection defaults for queries

Valid Schema Types
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- Objectid
- Array

Example
```javascript
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ...,
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
})
```
## Models

A [Model](http://mongoosejs.com/docs/models.html) is a compiled version of the schema.

Models are fancy constructors compiled from our Schema definitions. Instances of these models represent documents which can be saved and retrieved from our database. All document creation and retrieval from the database is handled by these models

```javascript
var mongoose = require( 'mongoose' ),
....
var userSchema = new mongoose.Schema({
  userName: String,
  email: {type: String, unique:true},
  modified : {type: Date, default: Date.now}
});
// Build the User model
var User = mongoose.model( 'User', userSchema );
```

Using the model *somewhere*

```javascript
var mongoose = require( 'mongoose' );
var User = mongoose.model("User");
```

## Validation
Basic mongoose validation rules
- Validation is defined in the SchemaType
- Validation is an internal piece of middleware
- Validation occurs when a document attempts to be saved, after defaults have been applied
- Validators are not run on undefined values (except for the required validator)
- Validation is asynchronously recursive; when you call Model#save, sub-document - validation is executed as well
- Validation supports complete customization

[Validation Documentation](https://mongoosejs.com/docs/validation.html)

### Built in Validators
- All SchemaTypes have the built in required validator
- Numbers have min and max validators
- Strings have enum, match, maxlength and minlength validators

```javascript
var UserSchema = new Schema(
 {
   user: {type: String, required: true, minLength: 3},
   role: {type: String, enum: ['Admin', 'Owner', 'User']}
 }
);
```

### Custom Validators

If the built-in validators aren't enough, validation can be completely tailored to suit your needs

```javascript
var userSchema = new Schema({
  phone: {
    type: String,validate: {
        validator: function(v) {
           return /d{3}-d{3}-d{4}/.test(v);
        },
      message: '{VALUE} is not a valid phone number!'
    }
  }
});
```
## Middelware
Doing *things* before or after a mongoose function

Middleware (pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins. Mongoose 4.0 has 2 types of middleware: document middleware and query middleware.

### Document Middleware is supported for the following document functions 
- init
- validate
- save
- remove

### Query Middleware is supported for the following Model and Query functions.
- count
- find
- findOne
- findOneAndRemove
- findOneAndUpdate
- update

Example (pre-save)
```javascript
var userSchema = new mongoose.Schema({
  userName: String,
  modified : {type: Date, default: Date.now}
});

userSchema.pre('save', function(next) {
  this.modified = new Date();
  next();
});
```
### Comparison Query Operators
MongoDB has several comparison operators for querying. 
| Operator  | Definition  |
|---|---|
|`$eq` | Matches values that are equal to a given value.|
|`$ne` | Matches all values that are not equal to a given value.|
|`$gt` | Matches values that are greater than a given value.|
|`$gte` | Matches values that are greater than or equal to a given value.|
|`$lt` | Matches values that are less than a given value.|
|`$lte` | Matches values that are less than or equal to a given value.|
|`$in` | Matches any of the values contained in an array.|
|`$nin` | Matches none of the values contained in an array.|


## Mongoose and Promises
Almost all examples in the mongoose documentation uses callback to demonstrate behavior

This however is kind off old-fashioned, since all async operations and queries returns `thenables`

This means that you can do things like:

`MyModel.findOne({}).then()` and 

`await MyModel.findOne({}).exec()` if you're using async/await

I suggest, to use async-await whenever you have to deal with async behavior

## CRUD with Mongoose
**READ THIS BEFORE YOU START**: This [tutorial](https://vegibit.com/mongoose-crud-tutorial/) assumes you have installed MongoDB locally, but use the [Start Code](https://github.com/fullstackjavascriptcode/crudMongooseStartCode) provided here to get a quick start - using your account on *MongoDB Atlas* 

The tutorial assumes you have installed a local Mongo Client *Compass* (similar to Workbench for MySQL)- However, just use the UI-environment provided in the cloud by Atlas.

However you can also follow this [tutorial](http://slides.mydemos.dk/noSQL/mongo_mongoose.html#24) made by educator Lars M. - Go from slide 24 to the end.

Finished example [here](https://github.com/sem4-fullstackjs/Period-2/tree/master/MongoCrudExercises)