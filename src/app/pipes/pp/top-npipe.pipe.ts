import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topNPipe',
  standalone: true,
})
export class TopNPipePipe implements PipeTransform {
  transform(years: string[], n: number = 3): string[] {
    // Sort years in descending order (assuming more recent years are "top")
    const sortedYears = years.sort((a, b) => parseInt(b) - parseInt(a));

    // Return the top N years
    return sortedYears.slice(0, n);
  }
}
