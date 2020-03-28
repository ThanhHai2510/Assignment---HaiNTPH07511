import { Component, OnInit } from "@angular/core";
import { Book } from "../Book";
import { BookService } from "../book.service";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
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
}
