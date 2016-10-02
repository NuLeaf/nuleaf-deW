import { Injectable } from '@angular/core';

import { Steminar }   from '../models/steminar';
import { STEMINARS }  from './mock-steminars';


@Injectable()
export class SteminarService {
  getSteminars(): Promise<Steminar[]> {
    return Promise.resolve(STEMINARS);
  }
}