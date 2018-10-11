import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { from } from 'rxjs';
import { ServersComponent } from './servers/servers.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ManualComponent } from './manualComponent/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MyComponentComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
