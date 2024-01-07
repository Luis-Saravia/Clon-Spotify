import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from 'src/app/commons/components/control-error/error-message';

@Component({
  selector: 'app-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
  styleUrls: ['./select-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectAutocompleteComponent implements OnChanges {
  @Input() selectPlaceholder = 'search...';
  @Input() placeholder: string;
  @Input() options;
  @Input() disabled = false;
  @Input() display = 'display';
  @Input() value = 'value';
  @Input() formControl: FormControl = new FormControl();
  // @Input() errorMsg: string = "Field is required";
  // @Input() showErrorMsg = false;
  @Input() selectedOptions;
  @Input() multiple = true;

  @Input() error: any;

  // New Options
  @Input() labelCount = 1;
  @Input() appearance: 'standard' | 'fill' | 'outline' = 'standard';

  @Input() label = 'label';
  @Input() classForm = 'select-inline';

  @Output()
  selectionChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('selectElem') selectElem;

  filteredOptions: Array<any> = [];
  selectedValue: Array<any> = [];
  selectAllChecked = false;
  displayString = '';
  constructor() { }

  ngOnChanges() {
    if (this.disabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
    this.filteredOptions = this.options;
    if (this.selectedOptions) {
      this.selectedValue = this.selectedOptions;
    } else if (this.formControl.value) {
      this.selectedValue = this.formControl.value;
    }
    if (!this.selectedValue.length) {
      this.selectionChange.emit(this.selectedValue);
    }
  }

  toggleDropdown() {
    this.selectElem.toggle();
  }

  toggleSelectAll(val) {
    if (val.checked) {
      this.filteredOptions.forEach(option => {
        if (!this.selectedValue.includes(option[this.value])) {
          this.selectedValue = this.selectedValue.concat([option[this.value]]);
        }
      });
    } else {
      const filteredValues = this.getFilteredOptionsValues();
      this.selectedValue = this.selectedValue.filter(
        item => !filteredValues.includes(item)
      );
    }
    this.selectionChange.emit(this.selectedValue);
  }

  filterItem(value) {
    this.filteredOptions = this.options.filter(
      item => item[this.display].toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    this.selectAllChecked = true;
    this.filteredOptions.forEach(item => {
      if (!this.selectedValue.includes(item[this.value])) {
        this.selectAllChecked = false;
      }
    });
    if (!this.filteredOptions.length) {
      this.selectAllChecked = false;
    }
  }

  hideOption(option) {
    return !(this.filteredOptions.indexOf(option) > -1);
  }

  // Returns plain strings array of filtered values
  getFilteredOptionsValues() {
    const filteredValues = [];
    this.filteredOptions.forEach(option => {
      filteredValues.push(option[this.value]);
    });
    return filteredValues;
  }

  onDisplayString() {
    this.displayString = '';
    if (this.selectedValue && this.selectedValue.length) {
      let displayOption = [];
      if (this.multiple) {
        // Multi select display
        for (let i = 0; i < this.labelCount; i++) {
          displayOption[i] = this.options.filter(
            option => option[this.value] === this.selectedValue[i]
          )[0];
        }
        if (displayOption.length) {
          for (const option of displayOption) {
            if (option && option[this.display]) {
              this.displayString += option[this.display] + ',';
            }
          }
          this.displayString = this.displayString.slice(0, -1);
          if (
            this.selectedValue.length > 1 &&
            this.selectedValue.length > this.labelCount
          ) {
            this.displayString += ` (+${this.selectedValue.length -
              this.labelCount} others)`;
          }
        }
      } else {
        // Single select display
        displayOption = this.options.filter(
          option => option[this.value] === this.selectedValue
        );
        if (displayOption.length) {
          this.displayString = displayOption[0][this.display];
        }
      }
    }
    return this.displayString;
  }

  onSelectionChange(val) {
    const filteredValues = this.getFilteredOptionsValues();
    let count = 0;
    if (this.multiple) {
      this.selectedValue.filter(item => {
        if (filteredValues.includes(item)) {
          count++;
        }
      });
      this.selectAllChecked = count === this.filteredOptions.length;
    }
    this.selectedValue = val.value;
    this.selectionChange.emit(this.selectedValue);
  }

  public trackByFn(index, item) {
    return item.value;
  }

  getMessage() {
    for (const propertyName in this.error.errors) {
      if (this.error.errors.hasOwnProperty(propertyName) && this.error.dirty) {
        return ErrorMessage.getValitorMessage(
          propertyName,
          this.error.errors[propertyName]
        );
      }
    }
  }

}