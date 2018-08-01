import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: String, limit?: number){
        if(!value)
            return null;
        let actuaLimit = (limit) ? limit : 50;
        return value.substring(0, actuaLimit) + '...';
    }
}