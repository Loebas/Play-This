import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'KapselStringIn'
})
export class KapselStringIn implements PipeTransform {

    transform(b: string): string {

        return "***" + b + "***";

    }
}
