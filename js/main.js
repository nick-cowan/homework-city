$(function(){
  //on click or enter get the relevant photo
  $('#entry').on('submit', changeBackground);

  //match input to keyword
  function changeBackground(e){

    e.preventDefault();
    //store user input in var city
    //create variable to for city input
    var city = $('#city-type').val();
    city = city.trim();

    //use if, else to fetch photo that matches the keyword
    //if user input === "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if (city === "New York" || city === "NYC" || city ===  "New York City") {
    $('body').addClass('nyc');
    }
    // "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
    $('body').addClass('sf');}
    // "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
    $('body').addClass('la');}
    // "Austin" or "ATX" make the background of the page austin.jpg
    else if (city === "Austin" || city === "ATX") {
    $('body').addClass('austin');}
    // "Sydney" or "SYD" make the background of the page sydney.jpg
    else if (city === "Sydney" || city === "SYD") {
    $('body').addClass('sydney');}

    $('#city-type').val('');
  }
});
