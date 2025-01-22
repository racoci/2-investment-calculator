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
  initialInvestment?: number;
  annualInvestment?: number;
  expectedReturn?: number;
  duration?: bigint;
  @Output() userInputChange = new EventEmitter<UserInputData>()

  onUpdate(event: MouseEvent) {
    if (this.initialInvestment && this.annualInvestment && this.expectedReturn && this.duration) {
      this.userInputChange.emit({
        initialInvestment: this.initialInvestment,
        annualInvestment: this.annualInvestment,
        expectedReturn: this.expectedReturn,
        duration: this.duration
      })
    }
  }

  hasMissingFields() {
    return !this.initialInvestment || !this.annualInvestment || !this.expectedReturn || !this.duration;
  }
}
