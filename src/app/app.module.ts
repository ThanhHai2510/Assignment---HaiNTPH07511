import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SliderComponent } from './slider/slider.component';
import { NewBooksComponent } from './new-books/new-books.component';
import { TopRateComponent } from './top-rate/top-rate.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { BookService } from './book.service';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ClientComponent } from './client/client.component';
import { BookManagerComponent } from './book-manager/book-manager.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, SliderComponent, NewBooksComponent, TopRateComponent, BlogComponent, HomeComponent, ProductDetailComponent, ProductComponent, AdminComponent, AddBookComponent, ClientComponent, BookManagerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookService]
})
export class AppModule { }
