import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundOff',
  standalone: true,
})
export class RoundOffPipe implements PipeTransform {

  transform(value: number | string | undefined, decimalPlaces: number = 2): string {
    if (value == null) return '';

    // Convert value to a number if it's a string
    const numberValue = typeof value === 'string' ? parseFloat(value) : value;

    // Check if the number is valid
    if (isNaN(numberValue)) return '';

    // Round the number to the specified decimal places
    const roundedValue = numberValue.toFixed(decimalPlaces);

    // Return the rounded number as a string
    return roundedValue;
  }

}
