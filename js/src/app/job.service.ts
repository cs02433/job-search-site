import { Injectable } from '@angular/core';
import { Job }  from "./model/app.job.model";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJob(job_id: string): Job {
    let job = new Job("Barclays")
    job.description = "Govt Jobs in UP 2018: Get Free notification of all UP Government Jobs September 2018 and its Job vacancies across sectors in UP like Railways, Banking Employment in UP, Universities, College Govt Jobs, Teaching, Schools in UP Financial Institutions 2018, Defence, UPSC, SSC, Agriculture and many more UP Government Jobs";
    job.industry = "Financial Services";
    job.minimum_qualification = "BEd";
    job.location = "London";
    job.work_type = ["Engineering", "IT"];
    job.education_qualification = ["BEd", 
                                    "TET", 
                                    "People with 2-5 years of experience in quality assurance and automation.",
                                    "Automated and Manual web technologies, sharp eye for detail and critical thinking abilities",
                                    "Worked on Selenium Java Framework for Web based Automation",
                                    "Worked on Selenium Cucumber a plus"
                                  ];
    job.pay = "5000";
    job.procedure = ["Written test followed by interview", "Pay online", "Submit application online"];
    return job;
  }
}
