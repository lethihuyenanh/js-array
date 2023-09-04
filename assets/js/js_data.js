const demoArray = [
{id: '01', category: 'Apple', name: 'Iphone 11', amount: 10},
{id: '02', category: 'Apple', name: 'Macbook Air M1', amount: 1},
{id: '03', category: 'Apple', name: 'Ipad 2020', amount: 5},
{id: '04', category: 'Apple', name: 'IWatch 6', amount: 100},
{id: '05', category: 'Samsung', name: 'Samsung Note 20', amount: 10},
{id: '06', category: 'Samsung', name: 'Samsung A8', amount: 0},
{id: '07', category: 'Samsung', name: 'Samsung S11', amount: 10},
{id: '08', category: 'Samsung', name: 'Samsung Tablet 12', amount: 10},
{id: '09', category: 'LG', name: 'Tivi 32inch android', amount: 100},
{id: '10', category: 'LG', name: 'Tu lanh LG 265l Inverter', amount: 100},
{id: '11', category: 'Shape', name: 'Tivi 90inch new model', amount: 30},
{id: '12', category: 'Shape', name: 'May giat long dung size nho 10kg', amount: 0},
{id: '13', category: 'Shape', name: 'May giat long dung 50kg', amount: 9},
{id: '14', category: 'Other', name: 'Mouse logitech', amount: 2},
// {id: '15', category: 'Other', name: 'Vot muoi Nakagami Corporation', amount: 2}
  [
  {id: '15', category: 'Other', name: 'Vot muoi Nakagami Corporation', amount: 2},
  {id: '16', category: 'Other', name: 'Cup BEAR CARTOON', amount: 99},
  {id: '17', category: 'Other', name: 'Dầu khuynh diệp OPC 25ml', amount: 1000}
  ]
];
const storeTemplate = elm => {
  let str = '\
  <div class="col-xl-3 col-md-4 col-sm-6 col-6 mb-3"><div class="card h-100" id="' + elm.id + '">\
    <div class="card-header"><div class="name"><strong>' + elm.name + '</strong></div></div>\
    <div class="card-body"><div class="category card-subtitle mb-2 text-muted">' + elm.category + '</div>\
    <div class="amount card-text">Stock: <strong>' + elm.amount + '</strong></div>\
  </div></div></div>\
  ';
  return str;
}
const titleTemplate = text => '<h3 class="mt-3 text-success">' + text + '</h3>';

const writeStoreItems = arr => {
  storeWrapper.innerHTML = '<div class="row">' + arr.map(element => storeTemplate(element)).join().replace(/,/g,'') + '</div>';
}
const writeNodata = () => storeWrapper.innerHTML = '<div class="col"><p class="text-center blockquote mark p-2 m-2 border border-danger text-danger">Sorry, there are no items matching with Keyword.</p></div>';
const writeHaveData = () => storeWrapper.innerHTML = '<div class="col"><p class="text-center blockquote mark p-2 m-2 border border-info text-info">There are some items matching with Keyword.</p></div>';

const createReducedItem = (title, arr) => {
  let createTitle = titleTemplate(title);
  let createItems = arr.map(element => storeTemplate(element)).join().replace(/,/g,'');
  return createTitle + '<div class="row">' + createItems + '</div>';
}
