import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрМатериалыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-спр-материалы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрМатериалыMixin, Validations, {
});

defineProjections(Model);

export default Model;
