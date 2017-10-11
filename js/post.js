// test jquery
// $('.page p img').css('border', '5px solid #000');

// first wrap
// $('.page p img').wrap('<a data-fancybox="gallery" href="' + $(this).attr('src') + '")></a>')
$('.page p img').each(function() {
  var src = $(this).attr('src');
  var content = '<a data-fancybox="image" href="' + src + '")></a>';
  $(this).wrap('' + content + ')></a>')
})
