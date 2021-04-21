  // Date object
  var today = new Date();
  // Current Date
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // Current Time
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // Current Date and Time
    var dateTime = date+'  '+time;
    document.getElementById("current_dateandtime").value = dateTime;

