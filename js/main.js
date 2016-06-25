---
layout: null
---
$$('.trigger').addEvent('click', function(event) {
  var intro = $$('.intro')[0];
  var trigger = $$('.trigger')[0];

  if ('500px' > intro.getStyle('width')) {
    intro.tween('width', '500px');
  } else {
    intro.tween('width', '400px');
  }

  var body = $$('body')[0];
  body.setStyle('overflow-y', "auto");

  event.preventDefault();
});
