import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {

  newAnimalForm!: FormGroup;
  file!: File;
  preview!: string;
  progress = 0;

  constructor(private animalsService: AnimalsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.newAnimalForm = this.formBuilder.group({
      file:['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    })
  }

  upload(){
    const allowComments = this.newAnimalForm.get('allowComments')?.value ?? false;
    const description = this.newAnimalForm.get('description')?.value ?? '';

    this.animalsService.upload(description, allowComments, this.file)
    .pipe(finalize(() => this.router.navigate(['animals'])))
    .subscribe((event: HttpEvent<any>) => {
      if(event.type === HttpEventType.UploadProgress){
        const total = event.total ?? 1;
        this.progress = Math.round(100*(event.loaded/total))
      }
    }, (error) => console.log(error)
    );
  }

  saveFile(file: any): void{
    const [imageFile] = file?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any)=>(this.preview = event.target.result);
    reader.readAsDataURL(file)
  }

}
