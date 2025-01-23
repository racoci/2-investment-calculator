import { Injectable } from '@angular/core';
import {UserInputModel} from "./user-input/user-input.model";
import {InvestmentResult} from "./investment-results/investment-results.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor() { }

  lastResult?: InvestmentResult[]

  computeAnnualResults(userInput: UserInputModel): InvestmentResult[] {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = userInput
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.lastResult = annualData;
    return annualData;
  }
}
