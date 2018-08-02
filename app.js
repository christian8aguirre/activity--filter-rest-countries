var request = superagent;

var API_URL_ALL = 'https://restcountries.eu/rest/v2/all';
var API_URL_LENG = 'https://restcountries.eu/rest/v2/lang/'
var btns = document.querySelectorAll('.grid button');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.target.textContent === 'ALL') {
      requestURL(API_URL_ALL);
    } else if (e.target.textContent.toLowerCase() === 'en') {
      requestURL(API_URL_LENG + 'en');
    } else if (e.target.textContent.toLowerCase() === 'es') {
      requestURL(API_URL_LENG + 'es');
    } else if (e.target.textContent.toLowerCase() === 'fr') {
      requestURL(API_URL_LENG + 'fr');
    } else if (e.target.textContent.toLowerCase() === 'pt') {
      requestURL(API_URL_LENG + 'pt');
    }
  });
})

function desplerCountries(countries) {
  var tbody = document.querySelector('tbody');
  tbody.textContent='';
  countries.forEach(function (country) {
    var counter = document.querySelector('.grid div small');
    counter.innerHTML = '# <strong>' +countries.length + '</strong>';
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent= country.name;
    tr.appendChild(td);
    var td = document.createElement('td');
    td.textContent= country.latlng[0];
    tr.appendChild(td);
    var td = document.createElement('td');
    td.textContent= country.latlng[1];
    tr.appendChild(td);
    var td = document.createElement('td');
    var img = document.createElement('img');
    img.setAttribute('src', country.flag);
    img.className = 'flag';
    td.appendChild(img);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
}


function requestURL(API_URL) {
  request
    .get(API_URL)
    .then(function (response) {
      var countries = response.body 
      desplerCountries(countries)
    })
}