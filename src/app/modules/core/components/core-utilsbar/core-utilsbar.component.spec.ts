import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreUtilsbarComponent } from './core-utilsbar.component';

describe('CoreUtilsbarComponent', () => {
  let component: CoreUtilsbarComponent;
  let fixture: ComponentFixture<CoreUtilsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreUtilsbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreUtilsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
