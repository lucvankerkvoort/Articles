$(".delete").on("click", function() {
  let thisId = $(this)
    .attr("data-id")
    .trim();
  $.get("/deleteone/savedarticles/" + thisId, function(res) {
    console.log(res);
    location.reload();
  });
});

$(".deleteAll").on("click", function() {
  $.get("/delete/savedarticles", function(res) {
    location.reload();
  });
});

$(".note").on("click", function() {
  let id = "." + $(this).attr("data-id");
  let element = $(id).attr("class");
  if (element.includes("d-none")) {
    $(id).removeClass("d-none");
  } else {
    $(id).addClass("d-none");
  }
});

$("#submit").on("click", function() {});
