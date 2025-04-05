import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderObjectBy',
  standalone: true,
})
export class OrderObjectByPipe implements PipeTransform {
  transform(array: any[], field: string, descending: boolean = false): any[] {
    if (!Array.isArray(array) || !field) {
      return array;
    }

    return array.sort((a, b) => {
      const aValue = a.value[field]; // Access the value for the sorting field
      const bValue = b.value[field];

      if (aValue < bValue) {
        return descending ? 1 : -1; // Sort descending
      }
      if (aValue > bValue) {
        return descending ? -1 : 1; // Sort ascending
      }
      return 0;
    });
  }
}
