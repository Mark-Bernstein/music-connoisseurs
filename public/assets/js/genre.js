// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".addCommentsBtn").on("click", function(event) {
      var id = $(this).data("id");
  
      var newShowGenre = {
        show_genre: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/genre/" + id, {
        type: "PUT",
        data: newShowGenre
      }).then(
        function() {
          console.log("Genre description!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".hideGenre").on("click", function(event) {
      var id = $(this).data("id");
  
      var newShowGenre = {
        show_genre: 0
      };
  
      // Send the PUT request.
      $.ajax("/api/genre/" + id, {
        type: "PUT",
        data: newShowGenre
      }).then(
        function() {
          console.log("Genre description!");
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
        description: $("#genreDescription").val().trim(),
        comment: $("#genreComment").val().trim(),
        show_genre: 0
      };
  
      // Send the POST request.
      $.ajax("/api/genre", {
        type: "POST",
        data: newGenre
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
    //       console.log("deleted genre", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  