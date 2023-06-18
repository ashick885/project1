function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds(); 


      // convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
    meridiem = "PM";
  } else if (hours == 12) {
    meridiem = "PM";
  } else if (hours == 0) {
    hours = 12;
  }

  // add leading zeros to minutes and seconds
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
    


    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById("clock").innerHTML = timeString;
  }
  setInterval(updateTime, 1000);