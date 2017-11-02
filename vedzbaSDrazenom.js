var library = (function() {
    var data = {
        books: [],
        members: []
    }

    function Book() {
        this.title = null;
        this.author = null;

        this.setTitle = function(title) {
            this.title = title;
        }
        this.setAuthor = function(author) {
            this.author = author;
        }
    }

    function Member() {
        this.name = null;

        this.setName = function(name) {
            this.name = name;
        }
    }

    function addBook(title, author) {
        
    }



    return {
        Book: Book,
        Member: Member
    }
})();
 
(function() {
    var b = new library.Book();
    b.setTitle('Harry Potter');
    b.author = 'Tasha';


}) ();