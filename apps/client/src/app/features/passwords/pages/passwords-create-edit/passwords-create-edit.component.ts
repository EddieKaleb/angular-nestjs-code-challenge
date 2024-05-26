import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Password } from '../../domain/password.model';
import { PasswordsService } from '../../services/passwords.service';
import { showErrorMessages } from 'apps/client/src/app/core/helpers/functions';

@Component({
  selector: 'app-passwords-create-edit',
  templateUrl: './passwords-create-edit.component.html',
  styleUrl: './passwords-create-edit.component.scss',
})
export class PasswordsCreateEditComponent {
  @Input() public editMode!: boolean;

  @Input() public password!: Password;

  @Output() public submit = new EventEmitter<void>();

  public passwordForm: FormGroup = this._getForm();
  public showModal: boolean = false;

  constructor(
    protected passwordsService: PasswordsService,
    protected fb: FormBuilder
  ) {}

  public ngOnDestroy(): void {
    this.passwordForm.reset();
  }

  public open(): void {
    this.showModal = true;
    this.init();
  }

  public close(): void {
    this.showModal = false;
    this.passwordForm.reset();
  }

  public getFormControl(name: string): FormControl {
    return this.passwordForm.get(name) as FormControl;
  }

  public confirmPasswordValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    return control.value.password === control.value.confirmPassword
      ? null
      : { PasswordNoMatch: true };
  }

  public onSubmit(): void {
    if (!this.passwordForm.valid) return;

    const data = this.passwordForm.getRawValue();

    this.password?.id
      ? this._updateOne(this.password.id, data)
      : this._createNew(data);
  }

  public init(): void {
    if (this.editMode) this._updateForm();
  }

  private _createNew(data: Password): void {
    this.passwordsService.createNew(data).subscribe({
      next: () => {
        this._onExit();
      },
      error: (res) => {
        showErrorMessages(res.error.message);
        throw 'Error trying to create password';
      },
    });
  }

  private _updateOne(id: number, data: Password): void {
    this.passwordsService.updateOne(id, data).subscribe({
      next: () => {
        this._onExit();
      },
      error: (res) => {
        showErrorMessages(res.error.message);
        throw 'Error trying to update password';
      },
    });
  }

  private _onExit(): void {
    this.submit.emit();
    this.close();
  }

  private _getForm(): FormGroup {
    return this.fb.group(
      {
        name: this.fb.control('', [Validators.required]),
        username: this.fb.control('', [Validators.required]),
        url: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required]),
        confirmPassword: this.fb.control('', [Validators.required]),
        imgUrl: this.fb.control(''),
      },
      { validators: this.confirmPasswordValidator }
    );
  }

  private _updateForm(): void {
    this.passwordForm.patchValue({
      name: this.password?.name,
      username: this.password?.username,
      url: this.password?.url,
      password: this.password?.password,
      confirmPassword: this.password?.password,
      imgUrl: this.password?.imgUrl,
    });
  }
}
