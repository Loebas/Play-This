import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'convertToSpaces'
})
export class KapselStringIn implements PipeTransform {

    transform(): string {
        return "a";
    }
}
