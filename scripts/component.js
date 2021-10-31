$(function () {
  var component = $('[data-component]')
  $.each(component, function () {
    var file = 'https://joshua-afk.github.io/components/' + $(this).data('component') + '.html'
    $(this).load(file)
  })
})
