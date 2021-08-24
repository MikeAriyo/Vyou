function incrementButton() {
  var span = document.querySelector(".likes");
  var value = span.innerHTML;
  ++value;
  document.querySelector(".likes").innerHTML = value;
}
