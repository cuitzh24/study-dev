import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserInputComponent } from './components/user-input/user-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DirectiveComponent } from './components/directive/directive.component';
import { HighlightDirective } from './components/directive/class/highlight.directive';
import { Activity2Directive } from './components/directive/class/activity2.directive';
import { Activity3Directive } from './components/directive/class/activity3.directive';
import { Activity4Directive } from './components/directive/class/activity4.directive';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { HomeComponent } from './components/home/home.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTableModule } from 'ng-zorro-antd/table';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    DirectiveComponent,
    HighlightDirective,
    Activity2Directive,
    Activity3Directive,
    Activity4Directive,
    HomeComponent,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzRadioModule,
    NzCarouselModule,
    NzTableModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
