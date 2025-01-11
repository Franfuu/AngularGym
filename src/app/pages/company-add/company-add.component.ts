import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-company-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NotificationComponent],
  templateUrl: './company-add.component.html',
  styleUrl: './company-add.component.css',
})
export class CompanyAddComponent {
  showAlert: boolean = false;
  alertMessage: string = "";
  alertClass: string = "";
  companyForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    genero: new FormControl(''),
    altura: new FormControl(''),
    peso: new FormControl(''),
    telefono: new FormControl(''),
    tipo_membresia: new FormControl(''),
  });
  constructor(private companyService: CompanyService) {}

  submitCompany() {
    let newCompany: {
      tipo_membresia: string;
      altura: number;
      peso: number;
      apellido: string;
      genero: string;
      telefono: string;
      nombre: string
    } = {
      nombre: this.companyForm.value.nombre ?? "",
      apellido: this.companyForm.value.apellido ?? "",
      genero: this.companyForm.value.genero ?? "",
      altura: Number(this.companyForm.value.altura) ?? 0,
      peso: Number(this.companyForm.value.peso) ?? 0,
      telefono: this.companyForm.value.telefono ?? "",
      tipo_membresia: this.companyForm.value.tipo_membresia ?? ""
    }
    this.companyService.addCompany(newCompany).then(()=>{
      this.alertMessage = `Añadido cliente ${this.companyForm.value.nombre}`;
      this.alertClass = "success";
      this.showAlert = true;
      this.companyForm.reset();
    }).catch((error) => {
      this.alertMessage = `Error al añadir cliente ${this.companyForm.value.nombre}: ${error}`;
      this.alertClass = "danger";
      this.showAlert = true;
    });
  }
}
