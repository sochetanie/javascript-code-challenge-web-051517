class CommentList {
    constructor () {
        this.comments = []
        this.filterCom = []
    }

    renderCom () {
        return this.comments.map(x => `<ul>${x.render()}</ul>`).join('')
    }

    search(input) {
    this.filterCom = this.comments.filter(x => {
       return x.text.includes(input)
        // debugger
     })
    }
    renderSearch() {
// debugger
    this.filterCom.map(x => {
       $('#comments-list').html(x.render())
     })
    }

    addComment (newCom) {
        // const newCom = new Comment(text)
        this.comments.push(newCom)
    }

}