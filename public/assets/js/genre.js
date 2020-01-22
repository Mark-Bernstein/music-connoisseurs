// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".showGenreBtn").on("click", function (event) {
    var id = $(this).data("id");

    var newShowGenre = {
      show_genre: true
    };

    // Send the PUT request.
    $.ajax("/api/genre/" + id, {
      type: "PUT",
      data: newShowGenre
    }).then(
      function () {
        console.log("*******Genre description!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".hideGenreBtn").on("click", function (event) {
    var id = $(this).data("id");

    var newShowGenre = {
      show_genre: false
    };

    // Send the PUT request.
    $.ajax("/api/genre/hide/" + id, {
      type: "PUT",
      data: newShowGenre
    }).then(
      function () {
        console.log("*******Genre description!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".addCommentBtn").on("click", function (event) {
    var id = $(this).data("id");

    var addNewComment = {
      comment: $("#newComment").val().trim(),
    };

    // Send the PUT request.
    $.ajax("/api/genre/comments/" + id, {
      type: "PUT",
      data: addNewComment
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
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
      function () {
        console.log("created new genre");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#button-addon2").on("click", function (event) {
    console.log("**** it's working");
    var getGenre = $("#get-genre");
    var genre = getGenre.val().trim();
    console.log(genre);

    // if (genre.toLowerCase() == genre_name.toLowerCase()) {
    //   var newShowGenre = {
    //     show_genre: true
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/genre/" + id, {
    //     type: "PUT",
    //     data: newShowGenre
    //   }).then(
    //     function () {
    //       console.log("*******Genre description!");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // }


    var message = document.querySelector(".invalid-message");
    if (genre === null || genre === "") {
      message.innerHTML = "Invalid input. Please try again!";
    }

  });

});
