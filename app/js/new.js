fromform = '';
$(function() {
  var sliderFn = function(name, time) {
    var slide = $('.slider-item', $('.' + name)),
      container = $('.slider-container', $('.' + name)),
      ln = slide.length - 1,
      n = true,
      sliderTime,
      index = 0,
      sliderWidth,
      dots = $('.slider-dots', $('.' + name));
    sliderWidth = $('.slider-content', $('.' + name)).width();
    $(window).resize(function() {
      sliderWidth = $('.slider-content', $('.' + name)).width();
    });
    for (var i = 0; i <= ln; i++) {
      dots.append('<button></button>');
    }
    var dot = dots.children('button');
    dot.eq(0).addClass('active');
    $('.slider-dots', $('.' + name)).on('click', 'button', function() {
      dot.removeClass('active');
      $(this).addClass('active');
      index = $(this).index();
      rotate();
    });
    var rotate = function() {
      dot.removeClass('active');
      dot.eq(index).addClass('active');
      container.animate({
        marginLeft: -*index
      }, 500, function() {
        n = true;
      });
    };
  };
  sliderFn('reviews-slider', 4000);
});
$(function() {
  var tabItem = $('.tab-item', $('.tabs'));
  var contentItem = $('.content-item', $('.content'));
  var index;
  tabItem.click(function() {
    index = $(this).index();
    tabItem.removeClass('active').eq(index).addClass('active');
    contentItem.removeClass('active').eq(index).addClass('active');
  });
});
$(function() {
  var popup = $('.popup'),
    hiddenText;
  window.onkeydown = function(e) {
    if (e.keyCode === 27) {
      popup.fadeOut('fast');
    }
  };
  $('body').click(function(e) {
    if (e.target.className === 'popup-shadow') {
      popup.fadeOut('fast');
    }
  });
  $('.close').click(function() {
    popup.fadeOut('fast');
  });
  $('.callback-btn').click(function() {
    $('.popup-callback').fadeIn('fast').find('.popup-content').css('top', parseInt($(window).scrollTop()) - 20 + 'px');
  });
  $('.callback1-btn').click(function() {
    if ($(this).parent().find('.femail').val().length > 0) {
      $('.popup-callback1').fadeIn('fast').find('.popup-content').css('top', parseInt($(window).scrollTop()) + 70 + 'px');
      fromform = $(this).parent().attr('id');
    } else {
      $(this).parent().find('.femail').css('border-bottom', '2px red solid')
    }
  });
  $('.policy', $('.footer')).click(function() {
    $('.popup-policy').fadeIn('fast').find('.popup-content').css('top', parseInt($(window).scrollTop()) - 20 + 'px');
  });
});
$(function() {
  $('[name="phone"]').mask('0(000)000-00-00');
});
$(function() {
  $(document).ready(function() {
    function validate(formId) {
      $(formId).ajaxForm({beforeSubmit: showRequest, success: showResponse});
      function showRequest() {
        var text = $('input.required', $(formId)),
          x = 0,
          ln = text.length,
          x,
          i,
          inp;
        text.removeClass('error');
        for (i = 0; i < ln; i++) {
          inp = text.eq(i);
          if (inp.val() === '') {
            inp.addClass('error');
            x++;
          }
        }
        if (x === 0) {
          return true;
        }
        return false;
      }
      function showResponse() {
        $('input.required', $(formId)).val('');
        $('.popup').fadeOut('fast');
        setTimeout(function() {
          $('.popup-success').fadeIn('fast')
        }, 800);
      }
    }
    validate('#order-form-1');
    validate('#order-form-2');
    validate('#order-form-3');
  });
});
$(function() {
  var expand = $('#expand-btn');
  var menu = $('.h-nav');
  expand.click(function() {
    menu.slideToggle(300);
  });
});
$(document).ready(function() {
  var lastId,
    topMenu = $("#header-nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#"
        ? 0
        : $(href).offset().top - topMenuHeight + 30;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });
  $(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
      }
    );
    cur = cur[cur.length - 1];
    var id = cur && cur.length
      ? cur[0].id
      : "";
    if (lastId !== id) {
      lastId = id;
      menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
});
$(function() {
  $(document).scroll(function() {
    if ($(this).scrollTop() >= 100) {
      $('.header').addClass('min');
      $('.h-push').show();
    } else {
      $('.header').removeClass('min');
      $('.h-push').hide();
    }
  });
});
$(document).ready(function() {
  $(".order-button a").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
  $('.fsub').on('click', function() {
    fromform = $(this).parent().attr('id');
    console.log(fromform);
    zapch = $('#' + fromform + ' #fzap').val();
    send = true;
    if (zapch.length == 0) {
      $('#' + fromform + ' #fzap').css("border-bottom", "2px solid red");
      send = false;
    }
    if ($('#' + fromform + ' .fname').val().length == 0) {
      $('#' + fromform + ' .fname').css("border-bottom", "2px solid red");
      send = false;
    }
    if ($('#' + fromform + ' .fphone').val().length == 0) {
      $('#' + fromform + ' .fphone').css("border-bottom", "2px solid red");
      send = false;
    }
    if ($('#' + fromform + ' .femail').val().length == 0) {
      $('#' + fromform + ' .femail').css("border-bottom", "2px solid red");
      send = false;
    }
    if ($('#' + fromform + ' #fmark').val().length == 0) {
      $('#' + fromform + ' #fmark').css("border-bottom", "2px solid red");
      send = false;
    }
    if ($('#' + fromform + ' #mnum').val().length == 0) {
      $('#' + fromform + ' #mnum').css("border-bottom", "2px solid red");
      send = false;
    }
    if (send) {
      $.post('send.php', {
        mail: 'send',
        name: $('#' + fromform + ' .fname').val(),
        phone: $('#' + fromform + ' .fphone').val(),
        email: $('#' + fromform + ' .femail').val(),
        mark: $('#' + fromform + ' #fmark').val(),
        mnum: $('#' + fromform + ' #mnum').val(),
        zap: $('#' + fromform + ' #fzap').val()
      }).done(function(data) {
        $('.popup').fadeOut('fast');
        location = '/thanks.html';
      })
    }
  })
});
