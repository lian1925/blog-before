// var client = algoliasearch("AOLTC933W8", "••••••••••••••••••••••••••••••••");
// var index = client.initIndex('your_index_name');
// index.setSettings({
//   searchableAttributes: [
//     'brand',
//     'name',
//     'categories',
//     'unordered(description)',
//   ],
//   customRanking: ['desc(popularity)'],
// });

// applicationID: 'AOLTC933W8'
// apiKey: 'd4ab4bc3491373067dd37d219690b993'
// adminApiKey: '078e587b1f8c532b11c3f9a8b98a6887'
// indexName: 'blog'
var search = instantsearch({
  // Replace with your own values
  appId: 'AOLTC933W8',
  apiKey: 'd4ab4bc3491373067dd37d219690b993', // search only API key, no ADMIN key
  indexName: 'blog',
  urlSync: true
});
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'search...'
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      // item: document.getElementById('hit-template').innerHTML,
      item: '<a href="http://blog.liangyl.com/{{path}}">{{title}}</a>',
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);
search.start();
