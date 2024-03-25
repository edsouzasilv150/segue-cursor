import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable} from 'rxjs'

import { SegueCursorComponent } from './segue-cursor.component';

describe('SegueCursorComponent', () => {
  let component: SegueCursorComponent;
  let fixture: ComponentFixture<SegueCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegueCursorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegueCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update circle position on onNext', () =>{
    const mockCoordinates = { x: 100, y: 100 };
    const circleMock = {
      style: {
        left: '',
        top: ''
      }
    } as HTMLElement;
    component.circle = circleMock;

    component.onNext(mockCoordinates);

    expect(circleMock.style.left).toBe(`${mockCoordinates.x}px`);
    expect(circleMock.style.top).toBe(`${mockCoordinates.y}px`);
  });

  it('should subscribe to mousemove event on ngOnInit', () => {
    const fakeMouseEvent = new MouseEvent('mousemove', {
      clientX: 200,
      clientY: 200
    });
    spyOn(component.coordinates as Observable<MouseEvent>, 'subscribe').and.callThrough();
    spyOn(component, 'onNext');

    component.ngOnInit();
    component.coordinates.subscribe();

    component.coordinates.subscribe((coordinates: any) => {
      expect(component.onNext).toHaveBeenCalledWith({ x: fakeMouseEvent.clientX, y:fakeMouseEvent.clientY });
    });
  });

  it('should set circle element on ngAfterViewInit', () => {
    const circleElement = document.createElement('div');
    circleElement.id = 'circle';
    spyOn(document, 'getElementById').and.returnValue(circleElement);

    component.ngAfterViewInit();

    expect(component.circle).toBe(circleElement);
  });
});
