import {
  ValidatorsInterface,
  ValidationComposite,
  RequireParamValidation,
} from '../../../infra/validators'


export class UpdateUserValidatorFactory {
  private static instance: UpdateUserValidatorFactory

  public static getInstance(): UpdateUserValidatorFactory {
    if (!this.instance) {
      this.instance = new UpdateUserValidatorFactory()
    }

    return this.instance
  }

  public make(): ValidationComposite {
    const validations: ValidatorsInterface[] = []
    for (const field of ['uid', 'attrs']) {
      validations.push(new RequireParamValidation(field))
    }

    return new ValidationComposite(validations)
  }
}
