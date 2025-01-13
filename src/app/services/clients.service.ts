import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc, docData, deleteDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Clients } from '../models/clients';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  companyCollection: CollectionReference;


  constructor(private firestore: Firestore) {
    this.companyCollection = collection(this.firestore, 'clients');
  }

  // Obtener todas las companys
  getCompanies(): Observable<Clients[]> {
    return collectionData(this.companyCollection, { idField: 'id' }) as Observable<Clients[]>;
  }

  // Obtener una company por ID
  getCompany(id: string): Observable<Clients | undefined> {
    const companyDocRef = doc(this.firestore, `clients/${id}`);
    return docData(companyDocRef) as Observable<Clients | undefined>;
  }

  // Agregar un nuevo cliente
  addCompany(company: {
    tipo_membresia: string;
    altura: number;
    peso: number;
    apellido: string;
    genero: string;
    telefono: string;
    nombre: string
  }): Promise<void> {
    return addDoc(this.companyCollection, company) as unknown as Promise<void>;
  }

  // Actualizar un cliente existente
  updateCompany(id: string, clients: Partial<Clients>): Promise<void> {
    const companyDocRef = doc(this.firestore, `clients/${id}`);
    return updateDoc(companyDocRef, clients) as Promise<void>;
  }

  // Eliminar una company
  deleteCompany(id: string | undefined): Promise<void> {
    const companyDocRef = doc(this.firestore, `clients/${id}`);
    return deleteDoc(companyDocRef) as Promise<void>;
  }
}
