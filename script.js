document.addEventListener('DOMContentLoaded', function() {
    var muscleCards = document.getElementsByClassName('muscle-card');
    for (var i = 0; i < muscleCards.length; i++) {
      muscleCards[i].addEventListener('click', showExercises);
    }
  
    function showExercises() {
      var exercises = this.getElementsByClassName('exercises')[0];
      exercises.style.display = 'block';
    }
  });
  