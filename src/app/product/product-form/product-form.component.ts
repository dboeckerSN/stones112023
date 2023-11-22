import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  @Output() addProduct = new EventEmitter<Product>();

  // productForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   weight: new FormControl(0),
  // });
  productForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });

  id = '';

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id') ?? '-1';
    });
  }

  saveProduct() {
    const formValue = this.productForm.value;
    if (
      this.productForm.valid &&
      formValue.name &&
      formValue.price &&
      formValue.weight
    ) {
      const product = new Product(
        +this.id,
        formValue.name,
        formValue.price,
        formValue.weight
      );

      this.addProduct.emit(product);
      this.productForm.reset();
    }
  }

  hasSaved(): boolean {
    const formValue = this.productForm.value;
    if (!formValue.name && !formValue.price && !formValue.weight) {
      return true;
    } else {
      return confirm(
        'Du hast ungespeicherte Eingaben, möchtest du wirklich wegnavigieren?'
      );
    }
  }
}
