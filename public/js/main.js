'use strict';

$(document).ready(init);

function init(){
  var currentDate = moment().format('YYYY-MM-DD');
  parseMarkdown();
  clickHandler();
}


function clickHandler(){
  $("#convert").click(parseMarkdown);
}

function populateHTML(){
  $.get('./', function(data){
    console.log("data", data);
  })
}

function parseMarkdown(){
  var markdown = $("#markdownContent").val();

  $.post('./parse', {"markdown": markdown}, function(data){
    var $html = $.parseHTML(data);
    $('#htmlOutput').empty();
    $('#htmlOutput').append($html);
  });
    //$taskRow.addClass("animated flash");
}

//
// function createDomElements(data){
//   return data.map(function(task){
//     var $taskRow = $("#template").clone();
//     $taskRow.removeAttr("id");
//     $taskRow.children(".taskName").text(task.name);
//     $taskRow.children(".dueDate").text(task.date);
//     if (task.complete === "true"){
//       $taskRow.find(".done").prop('checked', true);
//     }
//     return $taskRow;
//   });
// }
