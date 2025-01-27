import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Ravina");
  lastName = signal("Ghidode");
  fullName = computed(() => this.firstName() + " " + this.lastName());
  rollNo = signal<number>(123);
  courseName: string = "Java";
  cityList = signal(["Pune", "Mumbai"]);
  studentObj = signal({
    name: "Namnesh",
    city: "Indore"
  })
  constructor() {
    const fName = this.firstName();
    setTimeout(() => {
      // this.firstName.set("SQL");
      this.courseName = "HTML"
    }, 5000);
  }
  changeName() {
    this.firstName.set("React");
  }
  changeFirstName() {
    this.firstName.set("Sachin");
  }
  changeLastName() {
    this.firstName.set("Mehra");
  }
  addCity() {
    this.cityList.set([...this.cityList(), "Nagpur"]);
  }
  changeCity() {
    this.studentObj.set({ ...this.studentObj(), city: 'Bhopal' })
  }
}
