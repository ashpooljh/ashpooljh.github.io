function pad(num) {
    var s = "0" + num;
    return s.substr(s.length-2);
}

function now()
{
  date = new Date();
  return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear() +
  " " + pad(date.getHours()) + ":" + pad(date.getMinutes()) + "." + pad(date.getSeconds());
}
