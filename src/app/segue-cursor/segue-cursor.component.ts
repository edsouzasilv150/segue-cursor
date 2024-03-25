import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, map, filter } from 'rxjs/operators'
export interface ICoordinates {
    x: number,
    y: number,
}

@Component({
  selector: 'segue-cursor',
  templateUrl: './segue-cursor.component.html',
  styleUrls: ['./segue-cursor.component.css']
})
export class SegueCursorComponent implements OnInit, AfterViewInit {
  circle!: HTMLElement

  coordinates = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    map((event) => ({ x: event.clientX, y: event.clientY })),
    filter((value) => value.x > 325 && value.x < 1022),
    delay(800)
  );


  onNext(value: ICoordinates) {
    if(this.circle) {
      this.circle.style.left = `${value.x}px`
      this.circle.style.top = `${value.y}px`
    }
  }

  constructor() {}

  ngOnInit() {
    this.coordinates.subscribe({
      next: (value: ICoordinates) => this.onNext(value),
      error: (e: Error) => console.log(e),
      complete: () =>console.log(),
    })
  }

  ngAfterViewInit() {
    this.circle = document.getElementById('circle') as HTMLElement
  }
}
