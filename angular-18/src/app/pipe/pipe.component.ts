import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../pipes/na.pipe';
import { CommonService } from '../components/service/common.service';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = "this is a demo session";
  currentDate: Date = new Date();
  currentRole: string = ''
  student: any = {
    name: 'Ravina',
    city: 'Pune',
    empId: 123,
    gender: ''
  }
  currentTime: Observable<any> = new Observable<any>;

  constructor(private common: CommonService) {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.common.onRoleChange$.subscribe((role: string) => {
      debugger;
      this.currentRole = role
    })
    this.common.role$.subscribe((res: string) => {

    })
  }
}
