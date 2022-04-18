import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalculoComponent } from "./calculo/calculo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, CalculoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
