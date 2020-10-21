import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyBackendService {
  private subject1$ = new BehaviorSubject([49, 59]);
  public businessMetrics1$: Observable<number[]> = this.subject1$.asObservable();

  private subject2$ = new BehaviorSubject(49);
  public businessMetrics2$: Observable<number> = this.subject2$.asObservable();

  private subject3$ = new BehaviorSubject([34, 12 ,47, 84]);
  public businessMetrics3$: Observable<number[]> = this.subject3$.asObservable();

  private subject4$ = new BehaviorSubject(49);
  public businessMetrics4$: Observable<number> = this.subject4$.asObservable();

  constructor() {
    interval(500).pipe(
      tap(() => this.subject1$.next([this.randomIntFromInterval(0, 100), this.randomIntFromInterval(0, 100)])),
      tap(() => this.subject2$.next(this.randomIntFromInterval(1000000, 10000000))),
      tap(() => this.subject3$.next([this.randomIntFromInterval(0, 50), this.randomIntFromInterval(0, 50), this.randomIntFromInterval(0, 50), this.randomIntFromInterval(0, 50)])),
      tap(() => this.subject4$.next(this.randomIntFromInterval(0, 10))),
    ).subscribe();
  }

  private  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
