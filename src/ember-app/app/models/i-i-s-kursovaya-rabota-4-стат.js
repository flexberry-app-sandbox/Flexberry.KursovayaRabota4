import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтатMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-стат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтатMixin, Validations, {
});

defineProjections(Model);

export default Model;
