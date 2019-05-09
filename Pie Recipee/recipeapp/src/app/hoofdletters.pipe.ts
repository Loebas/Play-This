import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoofdletters'
})
export class HoofdlettersPipe implements PipeTransform {

  transform(value: string, aantal: number): string {
    return value.substr(0, aantal).toUpperCase() + value.substr(aantal);
  }

}
