import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../shared/investment-results.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment  = signal(0.0);
  enteredAnnualInvestment = signal(0.0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);
  constructor(private investmentResultsService: InvestmentResultsService) {}
  onSubmit() {
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration()
    });
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
} 