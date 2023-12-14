import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтрMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-контр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонтрMixin, Validations, {
});

defineProjections(Model);

export default Model;
