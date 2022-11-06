import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreToolbarComponent } from './core-toolbar.component';

describe('CoreToolbarComponent', () => {
  let component: CoreToolbarComponent;
  let fixture: ComponentFixture<CoreToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
