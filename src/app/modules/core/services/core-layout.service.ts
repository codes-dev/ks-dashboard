import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreLayoutService {

  private readonly loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly showProgressBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getLoaderState(): BehaviorSubject<boolean> {  return this.loading; }

  getProgressBarState(): BehaviorSubject<boolean> {  return this.showProgressBar; }
  
  setLoaderState(state: boolean): void { this.loading.next(state); }

  setProgressBarState(state: boolean): void { this.showProgressBar.next(state); }
}
