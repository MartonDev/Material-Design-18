var navOpened = false;

$(document).ready(function() {

  Waves.init();
  Waves.attach('.waves-effect', ['waves-button', 'waves-float']);

  $("#menuTrigger").click(function() {

    if(navOpened) {

      $("#sidenav").css("width", "0");
      $("#main").css("margin-left", "0");

      $("#menuTrigger .close").fadeOut();
      $("#menuTrigger .menu").fadeIn();

      navOpened = false;

    }else {

      $("#sidenav").css("width", "250px");
      $("#main").css("margin-left", "250px");

      $("#menuTrigger .menu").fadeOut();
      $("#menuTrigger .close").fadeIn();

      navOpened = true;

    }

  });

});
