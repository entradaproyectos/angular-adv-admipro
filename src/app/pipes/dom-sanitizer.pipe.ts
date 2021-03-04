import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  transform(value: string): string {
    return value + ' ole';
  }

}
