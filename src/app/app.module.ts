import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

//import todo Component
import { todoComponent } from "./todo.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, todoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
