import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { HowItWorksComponent } from './layout/how-it-works/how-it-works.component';
import { ThirdBlockComponent } from './layout/third-block/third-block.component';
import {ReviewsComponent} from "./layout/reviews/reviews.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { QuestionsComponent } from './layout/questions/questions.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CarouselModule} from "ngx-owl-carousel-o";
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { SixthBlockComponent } from './layout/sixth-block/sixth-block.component';
import { FormComponent } from './layout/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HowItWorksComponent,
    ThirdBlockComponent,
    ReviewsComponent,
    QuestionsComponent,
    AccordionItemComponent,
    SixthBlockComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
