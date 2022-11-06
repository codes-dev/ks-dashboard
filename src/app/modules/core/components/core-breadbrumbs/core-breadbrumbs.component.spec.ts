import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBreadbrumbsComponent } from './core-breadbrumbs.component';

describe('CoreBreadbrumbsComponent', () => {
  let component: CoreBreadbrumbsComponent;
  let fixture: ComponentFixture<CoreBreadbrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreBreadbrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreBreadbrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
