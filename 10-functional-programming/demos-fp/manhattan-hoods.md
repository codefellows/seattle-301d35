# Steps for the Manhattan Zip Codes Demo

## Grab the geoJSON
1. Copy the contents in [RAW](https://gist.githubusercontent.com/patci/821109b7c578c3f1f676/raw/f84730d2fbd14967367299ff38117ab821185f81/manhattanGeo.JSON) (Original gist found [here](https://gist.github.com/patci/821109b7c578c3f1f676)).
2. In the dev console, save the copied geoJSON into a `manhattan` var.

## Grab the array and transform it!  
1. Set `manhattan = manhattan.features` which is an array.  
2. `map` over the array to grab all the neighborhoods:  

  ``` javascript
  var neighborhoods = manhattan.map(function(obj) {
    return obj.properties.neighborhood;
  });  
  ```  

### Uh-oh, we have missing data. Let's filter this out:
  ``` javascript
  var neighborhoods = neighborhoods.filter(function(neighborhood) {
    return neighborhood !== '';
  });
  ```  

### Let's create a function to help us remove duplicates
  ``` javascript
  function removeDuplicates(value, index, array) {
    return array.indexOf(value) === index;
  };
  ```  
### We can chain together map and filter  
  ``` javascript  
  var neighborhoods = manhattan.map(function(obj) {
    return obj.properties.neighborhood;
  })
  .filter(removeDuplicates);
  ```  
### Similar functionality, except with reduce!
  ``` javascript  
  neighborhoods.reduce(function(names, name) {
    if(names.indexOf(name) === -1) {
      names.push(name);
    }
    return names;
  }, []);
  ``` 
