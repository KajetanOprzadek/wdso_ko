document.addEventListener('DOMContentLoaded', function() {
    const supplementContainer = document.getElementById('supplement-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const supplements = supplementContainer.children;
  
    let currentIndex = 0;
  
    function showSupplement(index) {
      for (let i = 0; i < supplements.length; i++) {
        supplements[i].style.display = 'none';
      }
      supplements[index].style.display = 'block';
    }
  
    function navigatePrev() {
      if (currentIndex === 0) {
        currentIndex = supplements.length - 1;
      } else {
        currentIndex--;
      }
      showSupplement(currentIndex);
    }
  
    function navigateNext() {
      if (currentIndex === supplements.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      showSupplement(currentIndex);
    }
  
    prevButton.addEventListener('click', navigatePrev);
    nextButton.addEventListener('click', navigateNext);
  
    showSupplement(currentIndex);
  });
  