import React from 'react'
import jQuery from 'jquery';
import $ from "jquery";

function Login() {
    

  return(
    <div id="popup" data-popup="popup-1">
      <div class ="verify-window">
        <h3> Age Verificacation</h3>
        <p>Are you at least 19 years old?</p>

        <div class="button-yes" data-popup-close="popup-1">
          Yes
        </div>

        <div class="button-no">
          No
        </div>
      </div>
    </div>
  );
}

$(function() {

  //Check it the user has been accpeted the agreement
  if (!(document.cookie && document.cookie === "accepted")) {
    $("#popup").show();
  }

  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    //Set a cookie to remember the state
    document.cookie = "accepted";

    e.preventDefault();
  });

});

export default Login;
