import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import the FormsModule:
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import { GreetingComponent } from './greeting/greeting.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent,
    GreetingComponent,
    MessageFormComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [SkillsService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
