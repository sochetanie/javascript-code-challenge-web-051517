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
       return x.includes(input)
     })
    }

    renderSearch() {
    this.filterCom.map(x => {
       $('#comments-list').append(x.render())
     })
    }

    addComment (text) {
        const newCom = new Comment(text)
        this.comments.push(newCom)
    }

}