// Here is a solution to insert dashes

function insertDash(num) {
  num = num.toString();
  var newArray = [];
  for (var i = 0; i < num.length; i++) {
    newArray.push(num[i]);
    if (num[i] % 2 && num[i + 1] % 2) {
      newArray.push('-');
    }
  }
  return newArray.join('');
}
insertDash(454793)


// Here is a regex solution
function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

// Here is another regex solution
function insertDash(num) {
  var str = num.toString();
  var regex = /([13579])([13579])/g;
  while (str.match(regex)) {
    str = str.replace(regex, '$1-$2');
  }
  return str;
}