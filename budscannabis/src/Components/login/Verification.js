import React from 'react'
import jQuery from 'jquery';
import $ from "jquery";

function Verification() {
    

  return(
    <div className="Verification">
      <div id="popup" data-popup="popup-1">
        <div className ="verify-window">
          <h3> Age Verification</h3>
          <p>Are you at least 19 years old?</p>

          <div className="button-yes" data-popup-close="popup-1">
            Yes
          </div>

          <div className="button-no">
            No
          </div>
        </div>
      </div>
    </div>
  );
}

$(function() {

  //Check it the user has verified their age, if not, displays age verification pop-up
  if (!(document.cookie && document.cookie === "accepted")) {
    $("#popup").show();
  }
  //Hide age verification pop-up for those that have the cookie
  else {
    $("#popup").hide();
  }

  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    //Set a cookie to remember the state
    document.cookie = "accepted";

    e.preventDefault();
  });

});

export default Verification;