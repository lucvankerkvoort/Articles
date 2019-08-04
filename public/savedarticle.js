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

$("button[type=submit]").on("click", function() {
  event.preventDefault();
  let thisId = $(this).attr("data-id");
  const note = {
    title: $(`input[placeholder=Title]`)
      .val()
      .trim(),
    text: $(`textarea[data-id=${thisId}]`)
      .val()
      .trim()
  };
  $("input[placeholder=Title]").empty();
  $(`textarea[data-id=${thisId}]`).empty();

  console.log(note);
  $.post("/articlesnote/" + thisId, note, function(res) {
    $.get("/articles/" + res._id, function(res) {
      console.log(res);
      const button = $("<button>");
      button.addClass("remove btn-primary btn");
      button.attr("data-id", res.note._id);
      button.text(res.note.title);
      $("#note").append(button);
    });
  });
});

$(document).on("click", ".remove", function() {
  let thisId = $(this).attr("data-id");
  $.get("/delete/note/" + thisId, function(res) {
    console.log(res);
    location.reload();
  });
});
