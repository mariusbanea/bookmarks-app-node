const BookmarksService = require('../src/bookmarks-service')
const knex = require('knex')

describe(`Bookmarks service object`, function () {
    let db

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })
    describe(`getAllBookmarks()`, () => {
        it(`resolves all bookmarks from bookmarks table`, () => {
            console.log('test')
        })
    })
})