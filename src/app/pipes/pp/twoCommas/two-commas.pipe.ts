import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoCommas',
  standalone: true,
})
export class TwoCommasPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value == null) return '';

    // Convert to string if it's a number
    let numberString = value.toString().replace(/,/g, ''); // Remove existing commas

    // Check if the number is negative
    const isNegative = numberString.startsWith('-');
    if (isNegative) {
      // Remove the minus sign for further processing
      numberString = numberString.slice(1);
    }

    // Split into integer and decimal parts
    let [integerPart, decimalPart] = numberString.split('.');

    // Handle the Indian numbering system
    let integerPartWithCommas = this.formatIndianNumbering(integerPart);

    // Reattach the minus sign if the number was negative
    if (isNegative) {
      integerPartWithCommas = `-${integerPartWithCommas}`;
    }

    // Format decimal part if it exists
    if (decimalPart) {
      return `${integerPartWithCommas}.${decimalPart}`;
    } else {
      return integerPartWithCommas;
    }
  }

  private formatIndianNumbering(integerPart: string): string {
    // If the integer part is less than 4 digits, just return it
    if (integerPart.length <= 3) return integerPart;

    // Start with the last 3 digits
    let lastThreeDigits = integerPart.slice(-3);
    // Get the remaining digits
    let remainingDigits = integerPart.slice(0, -3);

    // Insert commas into the remaining part of the integer part
    let formattedRemainingDigits = remainingDigits.replace(
      /\B(?=(\d{2})+(?!\d))/g,
      ','
    ); // Correct pattern for Indian numbering system

    // Combine the formatted part and the last three digits
    return `${formattedRemainingDigits},${lastThreeDigits}`;
  }
}
