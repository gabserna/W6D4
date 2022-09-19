$("#firstComm").append(`
        <div id="normalTxt">WhySoSerious45</div>
        <div id="biggerTxt">Trying to decide a career path? Programming is the move. Change my mind.</div><br>
`);

const btnsend = document.querySelector("#send")
btnsend.addEventListener("click", function(){
    let name=$("#username");
    let comment=$("#comment");
  $(".replies").prepend("<div data-name='"+name.val()+"' data-comment='"+comment.val()+"'><img src='avatar.png'>"+name.val()+"<br><h2>"+comment.val()+"</h2><button class='deleteMe' type='button'>Delete</button><button class='editMe' type='button'>Edit</button></div>");
  
  $(".replies div").attr('class', 'theReply');
    name.val("");
    comment.val("");
    name.focus();
})

$("body").on('click','.deleteMe',function() {
  $(this).parents('.theReply').remove();
});

$("body").on('click','.editMe',function() {
  let name = $(this).parents('.theReply').attr('data-name');
  let comment = $(this).parents('.theReply').attr('data-comment');
  let images=$(this).parents('.theReply').find("img").attr('src');
$(this).parents('.theReply').append("<br><input id='updateComm' name='edit_comment' value='"+comment+"'>");
$(this).parents('.theReply').prepend("<button type='button' class='updateMe'>Submit</button>");
$(this).hide()
});

  $("body").on('click','.updateMe',function() {
    let name = $(this).parents('.theReply').attr('data-name');
    let comment = $('#updateComm').val();
    let actualiza = $(this).parents('div');
    actualiza.attr('data-comment', comment);
    $("#updateComm").hide();
  $(this).parents('.theReply').html("<img src='avatar.png'>"+name+"<br><h2>"+comment+"</h2><button class='deleteMe' type='button'>Delete</button><button class='editMe' type='button'>Edit</button>"); 
  })