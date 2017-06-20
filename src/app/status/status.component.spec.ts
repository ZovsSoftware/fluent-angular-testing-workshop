import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';

// Step 1: import Component and By classes
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


// Step 2: declare test host component
@Component({
  template: '<app-status [status]="appStatus" (newStatus)="updateStatus($event)"></app-status>'
})
class TestHostComponent {
  appStatus: string;
  updateStatus = jasmine.createSpy('updateStatusSpy');
}

describe('StatusComponent', () => {
  // Step 3: replace the following with TestHostComponent
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  // let component: StatusComponent;
  // let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // Step 4: include the TestHostComponent in the declarations
      declarations: [ StatusComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Step 5: Create instance of TestHostComponent
    fixture = TestBed.createComponent(TestHostComponent);

    // Step 6: Grab the test component's instance from the fixture
    testHost = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(testHost).toBeTruthy();
  });

  it('should set pulse color to green when input is "safe"', () => {
    // Arrange
    testHost.appStatus = 'green';

    // Act
    fixture.detectChanges();

    // Assert
    const pulseElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseElement.classList).toContain('green');
  });

  it('should set pulse color to yellow when input is "warning"', () => {
    // Arrange
    testHost.appStatus = 'warning';

    // Act
    fixture.detectChanges();

    // Assert
    const pulseElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseElement.classList).toContain('yellow');
  });

  it('should set pulse color to red when input is "danger"', () => {
   // Arrange
    testHost.appStatus = 'danger';

    // Act
    fixture.detectChanges();

    // Assert
    const pulseElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseElement.classList).toContain('red');
  });

  it('should set pulse color to green when input is undefined', () => {
   // Arrange
    testHost.appStatus = undefined;

    // Act
    fixture.detectChanges();

    // Assert
    const pulseElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseElement.classList).toContain('green');
  });

  it('should output a new message when clicked', () => {
    // Arrange
    const statusContainer = fixture.debugElement.query(By.css('.status-pulse'));

    // Act - trigger a click
    statusContainer.nativeElement.click();

    // Assert
    const status = testHost.updateStatus.calls.first().args[0];
    expect(status).toBeDefined();
    // expect(testHost.updateStatus).toHaveBeenCalled();
  });
});
