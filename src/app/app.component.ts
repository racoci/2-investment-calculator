import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {UserInputData} from "./user-input/user-input.data";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    FormsModule,
    NgIf
  ]
})
export class AppComponent {
  userInput?: UserInputData;
}
