import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { ActivatedRoute } from "@angular/router";
import { Book } from "./Book"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
book;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBook();
  }
  getBook(){
    this.activatedRoute.params.subscribe(param => {
      // console.log(param.name);
      // this.product = this.productService.getProduct(param.name);
      this.bookService.getBook(param.id).subscribe(data => 
      {
        this.book=data
      }
      )
    });
  }
}