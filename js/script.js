//ACTIVATION DU BOUTON SLIDER
function sliderDotActive($dot) {

  if( $dot == 1 ) {
    document.getElementsByClassName("slider-items__textbox").style = "display: none;";
  }
  else {
    document.getElementsByClassName("slider-items__textbox").style = "display: none;";    
  }
  // document.getElementById("slider-active-img").id = 'dot-'+$i;
  console.log($dot);
  for( $i = 1; $i <= 6; $i++ ) {
    if( $dot == $i ) {
      document.getElementById('dot-'+$i).style = "background-image: url(../assets/red-dot.png); background-position-x: center; background-size: cover; background-color: none;";
      document.getElementById('dot-'+$i).classList.add("slider-active-img");
    }
    else {
      document.getElementById('dot-'+$i).classList.remove("slider-active-img");
      document.getElementById('dot-'+$i).id = 'dot-'+$i;
      document.getElementById('dot-'+$i).style = "";
    }
  }
}

//Arrow Left and Right
function arrow($var) {
  $str = document.getElementsByClassName("slider-active-img")[0].id;
  $nbr = $str.substr(-1);

  if ($var == 'left') {
    $nbr = $nbr - 1;
    if ( $nbr == 0 ) {
      $nbr = 6;
    }
    document.getElementById('dot-'+$nbr).click();
  }
  if ($var == 'right') {
    $nbr = parseInt($nbr, 10);
    $nbr = $nbr + 1;
    console.log($nbr);
    if ( $nbr == 7 ) {
      $nbr = 1;
    }
    document.getElementById('dot-'+$nbr).click();
  }
}