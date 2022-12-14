const { gql } = require('apollo-server')

const typeDefs = gql `
    type Book {
        title: String!
        published: Int!
        author: Author!
        genres: [String!]
        id: ID!
    }
    type Author {
        name: String!
        born: Int!
        id: ID!
    }

    type Query {
        bookCount: Int!
        authorCount: Int!
        allBooks(author: String, genres: String): [Book!]!
        allAuthors: [Author!]!
    },

    type Mutation {
        addBook(title: String!, published: Int!, author: String!, genres: [String!]): Book!
        addAuthor(name: String!, born: Int!): Author!
    }
`
module.exports = typeDefs