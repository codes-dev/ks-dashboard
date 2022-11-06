import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsWigdetComponent } from './notifications-wigdet.component';

describe('NotificationsWigdetComponent', () => {
  let component: NotificationsWigdetComponent;
  let fixture: ComponentFixture<NotificationsWigdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsWigdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsWigdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
