$(".scrape").on("click", function() {
  $.getJSON("/scrape", function(res) {
    console.log(res);
    location.reload();
  });
});

$(".save").on("click", function() {
  thisId = $(this).attr("data-id");
  console.log(typeof thisId);
  $.get("/articles/" + thisId, function(res) {
    console.log("after the get", res);
    $.post("/save", res, function(res) {
      console.log(res);
    });
  });
});
// $.post("/articles", id, function(response) {
//   console.log(response);
// });

$(".delete").on("click", function() {
  console.log("I'm running delete");
  $.get("/delete/articles", function(res) {
    console.log(res);
    location.reload();
  });
});
