(function(document, window) {

  var words = Buscapalabras.dic.words;


  function getRegex(rawFilters) {
    var filters = rawFilters.split(/[\s,]+/);
    return new RegExp(filters.join('|'), 'i');
  }


  var find = function(rawFilters) {
    var regex = getRegex(rawFilters);
    return words.filter(function(e) {
      return !/[\s-]/.test(e) && regex.test(e);
    }).sort(function(a, b) {
      return b.length - a.length;
    }).join('\n');
  }


  window.Buscapalabras = {
    find: find
  }
})(document, window)