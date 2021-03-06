function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (this.read) {
      return `${this.title} by ${author}, ${pages} pages, already read`;
    }
    return `${this.title} by ${author}, ${pages} pages, not read yet`;
  }
}

theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());