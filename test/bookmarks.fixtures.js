function makeBookmarksArray() {
    return [
        {
            id: 1,
            url: 'https://www.google.com',
            title: 'First test post!',
            description: 'How-to',
            rating: 5
          },
          {
            id: 2,
            url: 'https://www.google.com',
            title: 'Second test post!',
            description: 'News',
            rating: 2
          },
          {
            id: 3,
            url: 'https://www.google.com',
            title: 'Third test post!',
            description: 'Listicle',
            rating: 3
          },
          {
            id: 4,
            url: 'https://www.google.com',
            title: 'Fourth test post!',
            description: 'Story',
            rating: 4
          },
        ];
      }
      
  module.exports = {
    makeBookmarksArray,
  }