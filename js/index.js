var pub_img_current_image;

function backgroundImage() {
  var pub_img_path = 'http://www.ruanyifeng.com/images_pub/';
  var pub_img_num = 355;
  var pub_img_current_no = function() {
    return Math.floor(Math.random() * pub_img_num + 1);
  };

  var pub_img_url = function() {
    return pub_img_path + 'pub_' + pub_img_current_no() + '.jpg';
  };

  if (pub_img_current_image === undefined) pub_img_current_image = pub_img_url();
  pub_img_current_image = pub_img_url();
  var index_bg = document.getElementById('index-bg').style;
  index_bg.backgroundSize = 'cover';
  index_bg.backgroundRepeat = 'no-repeat';
  index_bg.backgroundImage = 'url(' + pub_img_current_image + ')';
  // alert(pub_img_current_image)

  // index_bg.transition = ' all 2s ease-out';
};
var index_bg = document.getElementById('index-bg');
if (index_bg != null) {
  backgroundImage();
}
