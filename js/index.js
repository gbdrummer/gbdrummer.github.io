NGN.DOM.ready(function () {
  NGN.DOM.svg.update()

  var copyright = document.getElementById('copyright_year')
  copyright.innerHTML = (new Date()).getFullYear()
})
