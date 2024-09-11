import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class PpFunctionsService {
  constructor(private sanitizer: DomSanitizer) {}

  // Method to sanitize and trust HTML content
  getSanitizedHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getClassbyClr(str: string): string {
    if (str == 'green') return 'green-mojo';
    if (str == 'red') return 'red-mojo';
    if (str == 'orange') return 'orange-mojo';
    else return 'gray-mojo';
  }
}
