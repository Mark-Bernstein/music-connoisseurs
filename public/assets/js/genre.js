// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newDevourState = {
        description: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/genre/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("Burger description!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newGenre = {
        genre_name: $("#genreName").val().trim(),
        description: "enter music description here" //GRAB DESCRIPTION HERE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!!!!!!!!!!!!!!
      };
  
      // Send the POST request.
      $.ajax("/api/genre", {
        type: "POST",
        data: newDescription
      }).then(
        function() {
          console.log("created new genre");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-genre").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/genre/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  