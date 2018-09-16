import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './model/app.job.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'js';
  job: Job

  constructor(private job_service: JobService) {}

  ngOnInit(): void {
    this.job = this.job_service.getJob("");
    this.title = this.job.title;
    console.log(this.job.industry)
  }

  apply() {
    alert("You application is successfully submitted");
  }
}
