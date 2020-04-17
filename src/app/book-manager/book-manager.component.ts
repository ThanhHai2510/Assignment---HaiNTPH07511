import { Component, OnInit } from "@angular/core";
import { Book } from "../Book";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-manager",
  templateUrl: "./book-manager.component.html",
  styleUrls: ["./book-manager.component.css"]
})
export class BookManagerComponent implements OnInit {
  books;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService
      .getBooks()
      .subscribe(
        response => (this.books = response),
        error => console.log(error)
      );
  }
  
  page = 1;
  pageSize = 4;
}
