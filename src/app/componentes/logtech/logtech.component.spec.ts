/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogtechComponent } from './logtech.component';

describe('LogtechComponent', () => {
  let component: LogtechComponent;
  let fixture: ComponentFixture<LogtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
