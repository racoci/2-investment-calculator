import {Component, Input} from '@angular/core';
import {AnnualResults} from "./annual.results";
import {UserInputData} from "../user-input/user-input.data";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) userInput!: UserInputData;

  computeAnnualResults(): AnnualResults[] {
    const annualData = [];
    let investmentValue = this.userInput.initialInvestment;

    for (let i = 0; i < this.userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.userInput.annualInvestment;
      const totalInterest =
        investmentValue - this.userInput.annualInvestment * year - this.userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.userInput.initialInvestment + this.userInput.annualInvestment * year,
      });
    }

    return annualData;
  }
}
