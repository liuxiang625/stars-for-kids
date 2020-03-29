var starClicked = false;

$(function() {
  for (var i = 0; i < 8; i++) {
    var ratingEl = $('.rating').attr('id', 'rating' + i);
    $('body').append(ratingEl[0].outerHTML);
    //you can add other logic here, like you want diferent id or class to add in new box
  }
  //   console.log($('.rating').outerHTML);

  $('.star').click(function() {
    $(this)
      .children('.selected')
      .addClass('is-animated');
    $(this)
      .children('.selected')
      .addClass('pulse');

    var target = this;

    setTimeout(function() {
      $(target)
        .children('.selected')
        .removeClass('is-animated');
      $(target)
        .children('.selected')
        .removeClass('pulse');
    }, 1000);

    starClicked = true;
  });

  //   $('.half').click(function() {
  //     if (starClicked == true) {
  //       setHalfStarState(this);
  //     }
  //     $(this)
  //       .closest('.rating')
  //       .find('.js-score')
  //       .text($(this).data('value'));

  //     $(this)
  //       .closest('.rating')
  //       .data('vote', $(this).data('value'));
  //     calculateAverage();
  //     console.log(parseInt($(this).data('value')));
  //   });

  $('.full').click(function() {
    if (starClicked == true) {
      setFullStarState(this);
    }
    $(this)
      .closest('.rating')
      .find('.js-score')
      .text($(this).data('value'));

    $(this)
      .find('js-average')
      .text(parseInt($(this).data('value')));

    $(this)
      .closest('.rating')
      .data('vote', $(this).data('value'));
    // calculateAverage();

    console.log(parseInt($(this).data('value')));
  });

  //   $('.half').hover(function() {
  //     if (starClicked == false) {
  //       setHalfStarState(this);
  //     }
  //   });

  $('.full').hover(function() {
    if (starClicked == false) {
      setFullStarState(this);
    }
  });
});

function updateStarState(target) {
  $(target)
    .parent()
    .prevAll()
    .addClass('animate');
  $(target)
    .parent()
    .prevAll()
    .children()
    .addClass('star-colour');

  $(target)
    .parent()
    .nextAll()
    .removeClass('animate');
  $(target)
    .parent()
    .nextAll()
    .children()
    .removeClass('star-colour');
}

// function setHalfStarState(target) {
//   $(target).addClass('star-colour');
//   $(target)
//     .siblings('.full')
//     .removeClass('star-colour');
//   updateStarState(target);
// }

function setFullStarState(target) {
  $(target).addClass('star-colour');
  $(target)
    .parent()
    .addClass('animate');
  $(target)
    .siblings('.half')
    .addClass('star-colour');

  updateStarState(target);
}

// function calculateAverage() {
//   var average = 0;

//   $('.rating').each(function() {
//     average += $(this).data('vote');
//   });

//   $('.js-average').text((average / $('.rating').length).toFixed(1));
// }
