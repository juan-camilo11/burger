$(function() {
  $(".change-state").on("click", function(event) {
    event.preventDefault();
    let id = $(this).data("id");

    let newState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("changed state to", newState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg")
        .val()
        .trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log(id);


    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("Deleted burger", id);
      location.reload();
    });
  });
});
