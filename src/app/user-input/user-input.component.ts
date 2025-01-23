import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInputModel} from "./user-input.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  constructor() {}
  private service = inject(InvestmentService)

  computeNewResults() {
    if (this.initialInvestment && this.annualInvestment && this.expectedReturn && this.duration) {
      const userInput = {
        initialInvestment: +this.initialInvestment,
        annualInvestment: +this.annualInvestment,
        expectedReturn: +this.expectedReturn,
        duration: +this.duration
      }
      this.service.computeAnnualResults(userInput)
    }
  }

  hasMissingFields() {
    return !this.initialInvestment || !this.annualInvestment || !this.expectedReturn || !this.duration;
  }
}
