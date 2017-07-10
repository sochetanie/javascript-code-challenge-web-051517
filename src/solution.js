$(document).ready(function(){
  // your code here!
  // debugger
showComment()
filterCom()
})

function showComment() {
    $('#note-form').on('submit', function(x) {
    x.preventDefault()
// debugger
    let text = $('#text').val()
    $('#text').val('') 

    const newCom = new Comment(text)
// debugger
    $('#comments-list').append(newCom.render())

    })
}

function filterCom() {
  $('#search-form').on("submit", function (x) {
     x.preventDefault()
     let input = $('#search-text').val()
     $('#search-text').val('')

     let commentList = new CommentList()
     commentList.addComment(input)
     $('#comments-list').append(input.renderCom())
   })
}