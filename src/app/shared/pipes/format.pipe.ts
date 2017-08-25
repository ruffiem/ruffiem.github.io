import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})

export class FormatPipe implements PipeTransform {
  transform(value: any, action: string): any {
    switch (action) {
      case 'trim':
        return value.replace(/\s/g, '');
    }
  }
}
