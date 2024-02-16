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
      adress: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      const { pseudo, adress, phone, pass } = this.registerForm.value;
      this.authService.registerMember(pseudo, adress, phone, pass).subscribe(() => {
        if (this.registerForm.valid) {
        this.successRegister = true;
        this.registerForm.reset();
      } else {
        this.successRegister = false;
        this.errorRegister = true;
      }
      });
    }
  }

  ngOnInit(): void {
  }
}
