import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Activity2Pipe' })
export class Activity2Pipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
