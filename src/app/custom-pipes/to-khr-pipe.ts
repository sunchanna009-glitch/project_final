import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class toKHRPipe implements PipeTransform {

   transform(amount: number, rate: number, type: 'out' | 'in' | 'floor' = 'out'): string {
    const res = amount * rate;

    if (type === 'floor') {
      
      const rounded = Math.floor(res / 100) * 100;
      return rounded.toLocaleString() + ' ៛';
    } else if (type === 'in') {
      
      const rounded = Math.round(res / 100) * 100;
      return rounded.toLocaleString() + ' ៛';
    }

    
    return res.toLocaleString() + ' ៛';
  }
}


// transform(price:number): unknown {
//     let res:number = price*4100;
//     let local_res:string = res.toLocaleString() +  ("៛");
//     return local_res;
//   }