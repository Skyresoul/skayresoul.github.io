$(function(){
	$('#mouse').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 10000);
		return false;
	});
});

$(function(){
  $('#FastTop').click(function(){
    $('html, body').animate({scrollTop: 0}, 9000);
    return false;
  });
});


jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};
jQuery.event.special.touchmove = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchmove", handle, { passive: false });
    } else {
      this.addEventListener("touchmove", handle, { passive: true });
    }
  }
};
jQuery.event.special.touchend = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchend", handle, { passive: false });
    } else {
      this.addEventListener("touchend", handle, { passive: true });
    }
  }
};
jQuery.event.special.touchcancel = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchcancel", handle, { passive: false });
    } else {
      this.addEventListener("touchcancel", handle, { passive: true });
    }
  }
};

// Останавливаем анимацию при ручном скролле
$('html, body').on('wheel',function(e){
  $('html, body').stop();
  document.documentElement.scrollTop-=e.originalEvent.wheelDeltaY/20;
});
let touches = [];
$('body')
  .on('touchstart',function(e){
    const newTouches = [...e.originalEvent.changedTouches];
    for(let touch of newTouches) {
      touches.push(copyTouch(touch));
    }
    return false;
  })
  .on('touchmove',function(e){
    const curTouches=[...e.originalEvent.changedTouches];
    let touchOffset=0;
    for(let touch of curTouches) {
      const prevTouchIdx = 
       touches.findIndex(prevTouch => 
         prevTouch.identifier==touch.identifier);
      const prevPageY = touches[prevTouchIdx].pageY;
      Object.assign(touches[prevTouchIdx],
        copyTouch(touch));
      touchOffset += touch.pageY - prevPageY;
    }
    document.documentElement.scrollTop+=-touchOffset/2;
    return false;
  })
  .on('touchend',function(e){
    const endTouches = [...e.originalEvent.changedTouches];
    for(let touch of endTouches){
      touches.splice(touches.findIndex(prevTouch=> 
        prevTouch.identifier==touch.identifier),1);
    }
    return false;
  })
  .on('touchcancel',function(e){
    const cancelTouches=[...e.originalEvent.changedTouches];
    for(let touch of cancelTouches){
      touches.splice(touches.findIndex(prevTouch => prevTouch.identifier == touch.identifier),1);
     }
    return false;
  });

function copyTouch({identifier,pageX,pageY}){
  return {identifier,pageX,pageY};
}


