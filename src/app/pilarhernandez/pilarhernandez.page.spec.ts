import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilarhernandezPage } from './pilarhernandez.page';

describe('PilarhernandezPage', () => {
  let component: PilarhernandezPage;
  let fixture: ComponentFixture<PilarhernandezPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilarhernandezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
