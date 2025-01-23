import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInputData} from "./user-input.data";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';
  @Output() userInputChange = new EventEmitter<UserInputData>()

  emitInputChange() {
    if (this.initialInvestment && this.annualInvestment && this.expectedReturn && this.duration) {
      this.userInputChange.emit({
        initialInvestment: +this.initialInvestment,
        annualInvestment: +this.annualInvestment,
        expectedReturn: +this.expectedReturn,
        duration: +this.duration
      })
    }
  }

  hasMissingFields() {
    return !this.initialInvestment || !this.annualInvestment || !this.expectedReturn || !this.duration;
  }
}
