$(document).ready(function(){
  // your code here!
  // debugger
showComment()
filterCom()
})


let commentList = new CommentList()

function showComment() {
    $('#note-form').on('submit', function(x) {
    x.preventDefault()
// debugger
    let text = $('#text').val()
    $('#text').val('') 

    const newCom = new Comment(text)

    commentList.addComment(newCom)
// debugger
    $('#comments-list').append(newCom.render())

    })
}

function filterCom() {
  $('#search-form').on("submit", function (x) {
     x.preventDefault()
     let input = $('#search-text').val()
     $('#search-text').val('')
     // commentList.addComment(input)
     commentList.search(input)
     commentList.renderSearch()

   })
}