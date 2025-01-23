import {Component} from '@angular/core';
import {InvestmentResult} from "./investment-results.model";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private service: InvestmentService) {}

  get annualResults(): undefined | InvestmentResult[] {
    return this.service.lastResult;
  }
}
