import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/shared/Department.model';
import { DepartmentService } from 'src/app/shared/department.service';

@Component({
  selector: 'app-department-detail-form',
  templateUrl: './department-detail-form.component.html',
  styles: [
  ]
})
export class DepartmentDetailFormComponent implements OnInit {

  constructor(public service: DepartmentService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    debugger
   if(this.service.formData.id ==0)
   this.insert(form);
   else
   this.update(form);
  }

  insert(form : NgForm){
    this.service.postDepartment().subscribe(
      res=>{
        this.reset(form);
        this.service.refreshList();
        this.toastr.success('submitted successfully','departments');
      },
      err=>{console.log(err);}
    );
  }
  update(form : NgForm){
    this.service.putDepartment().subscribe(
      res=>{
        this.reset(form);
        this.service.refreshList();
        this.toastr.info('updated','department');
      },
      err=>{console.log(err);}
    );
  }
  reset(form : NgForm){
    form.form.reset();
    this.service.formData = new Department();
  }
}

