(function(document, window) {

  var iFilter = document.getElementById('filter');
  var taOutput = document.getElementById('output');
  var bFind = document.getElementById('find');

  var find = function() {
    var filter = iFilter.value;
    var output = '';

    if (filter.length < 1) {
      output = 'Introduce al menos un carácter';
    } else {
      output = Buscapalabras.find(filter);
      if (output.length < 1) {
        output = 'No existen palabras con estos filtros';
      }
    }

    taOutput.value = output;
  }

  bFind.addEventListener("click", find);


})(document, window)