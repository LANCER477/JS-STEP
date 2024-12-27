$(document).ready(function () {
  const cards = ['🫵', '🫵', '😎', '😎', '🤙', '🤙', '🔥', '🔥', '🤭', '🤭', '🤯', '🤯', '✌', '✌', '🧏‍♂️', '🧏‍♂️', '🤫', '🤫'];

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let shuffledCards = shuffle([...cards]);
  let firstCard = null;
  let secondCard = null;
  let isFlipping = false;

  function createBoard() {
    const gameBoard = $('#game-board');
    gameBoard.empty();
    shuffledCards.forEach((card, index) => {
      gameBoard.append(`
        <div class="card" data-card="${card}">
          <div class="front"></div>
          <div class="back">${card}</div>
        </div>
      `);
    });
  }

  function resetGame() {
    shuffledCards = shuffle([...cards]);
    firstCard = null;
    secondCard = null;
    isFlipping = false;
    createBoard();
    $('#start-btn').text('Start').removeClass('finish');
    $('.card').removeClass('flipped matched');
  }

  function flipCard() {
    if (isFlipping || $(this).hasClass('flipped') || $(this).hasClass('matched')) {
      return;
    }

    $(this).addClass('flipped');

    if (!firstCard) {
      firstCard = $(this);
    } else {
      secondCard = $(this);
      isFlipping = true;
  
      if (firstCard.data('card') === secondCard.data('card')) {
        firstCard.addClass('matched');
        secondCard.addClass('matched');
        firstCard = null;
        secondCard = null;
        isFlipping = false;

        if ($('.card.matched').length === cards.length) {
          alert('Respect');
        }
      } else {
        setTimeout(() => {
          firstCard.removeClass('flipped');
          secondCard.removeClass('flipped');
          firstCard = null;
          secondCard = null;
          isFlipping = false;
        }, 1000);
      }
    }
  }

  $('#start-btn').on('click', function () {
    if ($(this).hasClass('finish')) {
      $('.card').addClass('flipped');
      isFlipping = true;
      $(this).text('Start').removeClass('finish');
    } else {
      resetGame();
      $(this).text('Finish').addClass('finish');
    }
  });

  createBoard();
  $(document).on('click', '.card', flipCard);
});
