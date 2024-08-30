// filter the verdict report

import { Pipe, PipeTransform } from '@angular/core';
import { IGetVerdictReportsData } from '../../models/interfaces';

@Pipe({
  name: 'filterReport',
  standalone: true,
})
export class FilterReportPipe implements PipeTransform {
  transform(items: IGetVerdictReportsData[], searchText: string): IGetVerdictReportsData[] {
    //case
    if (!items) return [];
    if (!searchText) return items;

    console.log('Items passed to filterReport pipe:', items);
    console.log('searach text is : ', searchText)

    searchText = searchText.toLowerCase();

    //filtering as per search text
    let getReport: IGetVerdictReportsData[] = items.filter((item) => {
      return item.data.stock_details.sname.toLowerCase().includes(searchText);
      // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
    });

    return getReport;
  }
}
