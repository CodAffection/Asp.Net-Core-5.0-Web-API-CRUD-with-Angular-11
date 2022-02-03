import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Department } from '../shared/Department.model';
import { DepartmentService } from '../shared/department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  constructor(
    public service: DepartmentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Department) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteDepartment(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.error('deleted', 'deleted');
        },
        (error) => console.log(error)
      );
    }
  }
}
