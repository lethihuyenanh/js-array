'use strict';

var inputKeyword = document.querySelector('#textKeyword');
var storeWrapper = document.querySelector('#storeWrapper');
// var groupedWrapper = document.querySelector('#groupedWrapper');

const check = item => {
  for (var property in item) {
    return item[property] == textKeyword;
  }
}

//some() => ok
$('.js-some').on('click', () => {
  let textKeyword = inputKeyword.value;
  const checkSome = demoArray.flat().some(element => element.name == textKeyword);
  !checkSome ? writeNodata() : writeHaveData();
})

//test => ok
// Accepts the array and key
const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};


$('.js-reduce').on('click', () => {
  // Group by color as key to the person array
  const demoArrayGroupedByName = groupBy(demoArray.flat(), 'category');

  var groupedTemplate = '';
  for (var property in demoArrayGroupedByName) {
    groupedTemplate += createReducedItem(property, demoArrayGroupedByName[property]);
  }
  storeWrapper.innerHTML = groupedTemplate;
})

$('.js-every').on('click', () => {
  let testArray = demoArray.some(element => {element});
  console.log(testArray);
  $('#myStore').innerHTML = testArray;
})

//map() => ok
$('.js-map').on('click', () => {
  const storeItems = demoArray.map(element => element);
  writeStoreItems(storeItems);
})

//flat() => ok
$('.js-flat').on('click', () => {
  const storeItems = demoArray.flat();
  writeStoreItems(storeItems);
})
// test => ok
$('.js-filter').on('click', () => {
  let textKeyword = inputKeyword.value.toLowerCase();
  function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  const storeItems = filterItems(demoArray.flat(), textKeyword);
  writeStoreItems(storeItems);
})
$('.js-forEach').on('click', () => {
  let testArray = demoArray.some(element => {element});
  console.log(testArray);
  $('#myStore').innerHTML = testArray;
})
$('.js-findIndex').on('click', () => {
  let testArray = demoArray.some(element => {element});
  console.log(testArray);
  $('#myStore').innerHTML = testArray;
})
// test => ok
$('.js-find').on('click', () => {
  let textKeyword = inputKeyword.value;
  var storeItems = [];
  demoArray.flat().find(element => {
    if (element.name == textKeyword) {
      storeItems.push(element);
    }
  });
  if (storeItems.length) {
    writeStoreItems(storeItems);
  } else {
    console.log(storeItems);
    writeNodata();
  }
})

// test - revert (a-z) => ok
$('.js-sort').on('click', () => {
  const sortedItems = demoArray.flat().sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  // console.log(sortedItems);
  writeStoreItems(sortedItems);
})

// test - revert (z-a) => ok
$('.js-sort-za').on('click', () => {
  const sortedItemsRevert = demoArray.flat().sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  writeStoreItems(sortedItemsRevert);
})
$('.js-concat').on('click', () => {
  let testArray = demoArray.some(element => {element});
  console.log(testArray);
  $('#myStore').innerHTML = testArray;
})
$('.js-fill').on('click', () => {
  let testArray = demoArray.some(element => {element});
  console.log(testArray);
  $('#myStore').innerHTML = testArray;
})
// test => ok
$('.js-includes').on('click', () => {
  let textKeyword = inputKeyword.value.toLowerCase();
  let nameValueArray = demoArray.flat().map(element => element.name.toLowerCase());
  let checkIncludes = nameValueArray.includes(textKeyword);
  !checkIncludes ? writeNodata() : writeHaveData();
})
// test => ok
$('.js-reverse').on('click', () => {
  const storeItems = demoArray.flat().reverse();
  writeStoreItems(storeItems);
})
// flatMap => ok
$('.js-flatMap').on('click', () => {
  const storeItems = demoArray.flatMap(element => element);
  writeStoreItems(storeItems);
})
