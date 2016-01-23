"use strict";

$(document).ready(init);

function init(){
  var currentDate = moment().format('YYYY-MM-DD');
  $("#convert").click(parseMarkdown);
  $('textarea').keyup(function(){
    if (this.timeoutId){
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(parseMarkdown, 300);
  })
}

function parseMarkdown(){
  var markdown = $("#markdownContent").val();

  $.post('./parse', {"markdown": markdown}, function(data){
    var $html = $.parseHTML(data);
    $('#htmlOutput').html($html);
    $('#htmlOutput').addClass("animated fadeInUp");
  });
}
