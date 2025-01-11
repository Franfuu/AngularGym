// company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies!: Observable<Company[]>;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
  }

  deleteCompany(id: string | undefined): void {
    this.companyService.deleteCompany(id);
  }
}
