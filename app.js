var starClicked = true;

$(function() {
  for (var i = 0; i < 11; i++) {
    var ratingEl = $('.rating').attr('id', 'rating' + i);
    $('body').append(ratingEl[0].outerHTML);
    //you can add other logic here, like you want diferent id or class to add in new box
  }
  //   console.log($('.rating').outerHTML);

  $('.star').click(function() {
    $(this)
      .children('.full')
      .addClass('is-animated');
    $(this)
      .children('.full')
      .addClass('pulse');

    var target = this;

    setTimeout(function() {
      $(target)
        .children('.full')
        .removeClass('is-animated');
      $(target)
        .children('.full')
        .removeClass('pulse');
    }, 1000);

    starClicked = !starClicked;
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
    } else {
      unselectStarState(this);
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

  //   $('.full').hover(function() {
  //     if (starClicked == false) {
  //       setFullStarState(this);
  //     }
  //   });
});

function unselectStarState(target) {
  $(target)
    .parent()
    .removeClass('animate');
  $(target)
    .parent()
    .children()
    .removeClass('star-colour');

  $(target).removeClass('star-colour');
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

  //   updateStarState(target);
}

// function calculateAverage() {
//   var average = 0;

//   $('.rating').each(function() {
//     average += $(this).data('vote');
//   });

//   $('.js-average').text((average / $('.rating').length).toFixed(1));
// }
