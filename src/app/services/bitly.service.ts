import { Injectable } from '@angular/core';
import { BitlyClient } from 'bitly';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  public bitly = new BitlyClient('a5f7e0198e2a6d7f7f7528d8184dfd53b18871fd', {});

  constructor( ) { }

  async init(url:string) {
    let result;
    try {
      result = await this.bitly.shorten(url);
    } catch (e) {
      throw e;
    }
    return result;
  }
   
}
