const {UserInputError} = require('@apollo/server')

const Authors = require('./models/Authors')
const Books = require('./models/Books')

const resolvers = {
    Query: {
        bookCount: async () => Books.collection.countDocuments(),
        authorCount: async () => Authors.collection.countDocuments(),
        allAuthors: async (root, args) => {
            const author = await Authors.find({})
            return author
        }
    }
   
}
module.exports = resolvers
