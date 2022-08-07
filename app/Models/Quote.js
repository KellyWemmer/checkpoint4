export class Quotes {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
        this.tags = data.tags
    }

    get QuotesTemplate() {
        return `
        <div class="bg-light col-12 d-flex" >
          <h5 class="quote">${this.content}</h5> 
          <h6 class="author">${this.author}</h6>        
        </div>
        
        `

    }

}