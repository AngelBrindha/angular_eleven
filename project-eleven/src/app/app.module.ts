import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CountdisplayComponent } from './countdisplay/countdisplay.component';
import { CountAppComponent } from './count-app/count-app.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { HomeComponent } from './home/home.component';
import { BookformComponent } from './bookform/bookform.component';


const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'books', component: BookCatlogComponent},
  {path: 'addbook', component: BookformComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BoxaComponent,
    CountdisplayComponent,
    CountAppComponent,
    HitButtonComponent,
    CustomerFormComponent,
    EmployeeFormComponent,
    BookListComponent,
    PriceDiscountPipe,
    BookComponent,
    TabComponent,
    MenuComponent,
    NewsComponent,
    BookCatlogComponent,
    HomeComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
