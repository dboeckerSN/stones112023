import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { map } from 'rxjs';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
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

  nameReversed = '';
  nameLength = 0;
  id = '';
  private productService = inject(ProductService);
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id') ?? '-1';
    });
    this.productForm.controls.name.valueChanges
      .pipe(map((name) => name?.split('').reverse().join('')))
      .subscribe((nameReversed) => (this.nameReversed = nameReversed ?? ''));

    this.productForm.controls.name.valueChanges.subscribe((value) => {
      this.nameLength = value ? value.length : 0;
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

      this.productService.addProduct(product);
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
