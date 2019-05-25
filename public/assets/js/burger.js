$(function() {
    $(".change-dev").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
      var newDev = 1;
      console.log(newDev);
  
      var newDevState = {
        devoured: newDev
      };
      console.log(newDevState);

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
      }).then(
        function() {
          console.log("changed devoured to", newDev);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bg").val().trim()
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });  