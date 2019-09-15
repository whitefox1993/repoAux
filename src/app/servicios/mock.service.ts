import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { CPM } from './data/cpm';
import { p387 } from './data/387';
import { p388 } from './data/388';
import { p389 } from './data/389';

@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService {

  constructor() { }

  createDb(): any {
    return {
        turtwig: p387.info,
        grotle: p388.info,
        torterra: p389.info,
    };
  }
}
