import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Drivers', link: '/dashboard/drivers' },
    { label: 'Edit Driver', link: '/dashboard/users/**' },
  ];

  constructor(private MasterService: MasterService, private Router: Router) { }

  data: any;
  params = this.Router.url.split('/')[4];
  form!: FormGroup;

  ngOnInit() {
    this.MasterService.showUser(this.params).subscribe((res: any) => {
      this.data = res;
      this.form = new FormGroup({
        name: new FormControl(this.data.name, Validators.required),
        email: new FormControl(this.data.email, Validators.required),
        telephone: new FormControl(this.data.telephone, Validators.required),
        gender: new FormControl(this.data.gender, Validators.required),
        role: new FormControl(this.data.role, Validators.required),
        isActive: new FormControl(this.data.isActive, Validators.required),
      })
    })
  }

  submit() {

    console.log(this.form.value);

    this.MasterService.updateUser(this.params, this.form.value).subscribe((res: any) => {
      this.Router.navigateByUrl('/dashboard/drivers');
    })
  }
}
