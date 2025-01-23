import {Component, Input} from '@angular/core';
import {AnnualResults} from "./annual.results";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) annualResults!: AnnualResults[];
}
