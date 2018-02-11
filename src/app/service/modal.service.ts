import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { CategoryInfo } from '../models/category';
@Injectable()
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  category(dataEdit?: CategoryInfo): NgbModalRef {
    const modal = this.ngbModal.open(AddCategoryComponent);
    modal.componentInstance.dataEdit = dataEdit;
    return modal;
  }
}
