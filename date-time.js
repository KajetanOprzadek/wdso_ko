function displayDateTime() {
    var currentDate = new Date();
  
    var day = currentDate.toLocaleDateString('pl-PL', { weekday: 'long' });
    var date = currentDate.getDate();
    var month = currentDate.toLocaleDateString('pl-PL', { month: 'long' });
    var year = currentDate.getFullYear();
  
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
  
    var formattedDateTime = day + ', ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + minute + ':' + second;
  
    document.getElementById('date-time').textContent = formattedDateTime;
  }
  
  displayDateTime();
  