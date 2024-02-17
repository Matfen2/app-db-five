import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  successRegister: boolean = false;
  errorRegister: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      pseudo: ['', [Validators.required]],
      adress: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pass: ['', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]
    });
  }

  register() {
      const { pseudo, adress, phone, pass } = this.registerForm.value;
      this.authService.registerMember(pseudo, adress, phone, pass).subscribe(() => {

        this.successRegister = true;
        this.registerForm.reset();
      }, (error) => {
        this.successRegister = false;
        this.errorRegister = true;
      }
    );
  }

  ngOnInit(): void {
  }
}
