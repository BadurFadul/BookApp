const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const resolvers = require('./resolvers')
const typeDefs  = require('./schema')

const MONGODB_URI = 'mongodb+srv://fullstack:dkq9uYXYFMeo8r2j@cluster0.7psyaot.mongodb.net/BookApp?retryWrites=true&w=majority'

console.log('connecting to', MONGODB_URI)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

    const server = new ApolloServer({
    typeDefs,
    resolvers,
    })

    server.listen().then(({ url }) => {
        console.log(`Server ready at ${url}`)
      })