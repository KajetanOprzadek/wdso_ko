document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var resultDiv = document.getElementById('result');
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; 
  
    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
      var bmi = weight / (height * height);
      var bmiRounded = bmi.toFixed(2);
  
      var interpretation;
      if (bmi < 18.5) {
        interpretation = 'Niedowaga';
      } else if (bmi >= 18.5 && bmi < 25) {
        interpretation = 'Waga prawidłowa';
      } else if (bmi >= 25 && bmi < 30) {
        interpretation = 'Nadwaga';
      } else {
        interpretation = 'Otyłość';
      }
  
      resultDiv.innerHTML = 'Twoje BMI wynosi: ' + bmiRounded + '.<br>Interpretacja: ' + interpretation;
    } else {
      resultDiv.textContent = 'Wprowadź poprawne wartości wagi i wzrostu.';
    }
});
