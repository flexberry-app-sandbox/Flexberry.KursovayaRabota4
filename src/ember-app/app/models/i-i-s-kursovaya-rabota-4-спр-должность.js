import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрДолжностьMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-спр-должность';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрДолжностьMixin, Validations, {
});

defineProjections(Model);

export default Model;
