var searchInputEl = document.querySelector('#search-input');
var searchChooseEl = document.querySelector('#search-choose');
var searchBtn = document.querySelector('#search-button')

var getSearchResult = function (search) {
    var apiUrl = 'https://www.loc.gov/search/' + search + 'fo=json';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Library of Congress');
      });
  };