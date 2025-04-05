import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { LazyLoadDirective } from './directives/lazy-load.directive';
import { LazyLoadDirective } from './lazy-load.directive';
import { HighestObjPipe } from './pipes/pp/highest-obj.pipe';
import { DirClrDefaultPipe } from './pipes/dir-clr-default.pipe';

@NgModule({
  declarations: [AppComponent, LazyLoadDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
