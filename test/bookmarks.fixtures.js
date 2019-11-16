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

function makeMaliciousBookmark() {
  const maliciousBookmark = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    rating: 1,
  }
  const expectedBookmark = {
    ...maliciousBookmark,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousBookmark,
    expectedBookmark,
  }
}

module.exports = {
  makeBookmarksArray,
  makeMaliciousBookmark,
}