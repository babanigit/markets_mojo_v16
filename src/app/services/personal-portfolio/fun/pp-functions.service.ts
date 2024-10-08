import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class PpFunctionsService {
  constructor(private sanitizer: DomSanitizer) { }

  // Method to sanitize and trust HTML content
  getSanitizedHtml(html: string): SafeHtml {
    console.log("fun getSanitizedHtml called ")

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getClassbyClr(str: string): string {
    // console.log(" yeee ")
    console.log("fun getClassbyClr called ")


    if (str == 'green') return 'green-mojo';
    if (str == 'red') return 'red-mojo';
    if (str == 'orange') return 'orange-mojo';
    else return 'gray-mojo';
  }

  getDirClrDefault(value: string | number, def: string): string {
    console.log("fun getDirClrDefault called ")
    // Convert value to a number if it is a string
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    // Determine the color based on the numeric value
    if (numericValue === 0) {
      return def; // Use the default value if provided and value is zero
    } else if (numericValue < 0) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
