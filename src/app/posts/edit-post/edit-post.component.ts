import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}
  updateForm = this.fb?.group({
    title: [''],
    body: [''],
  });
  get formControls(): any {
    return this.updateForm?.controls;
  }
  ngOnInit(): void {
    this.updateForm.patchValue({
      title: this.config?.data?.title,
      body: this.config?.data?.body,
    });
  }

  submit() {
    let data: any = { ...this.updateForm.value };
    data.id = this.config?.data?.id;
    this.ref.close(data);
  }
}
