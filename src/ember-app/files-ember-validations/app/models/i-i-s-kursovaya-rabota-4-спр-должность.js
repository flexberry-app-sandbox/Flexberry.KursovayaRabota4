import {
  defineNamespace,
  defineProjections,
  Model as СпрДолжностьMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-спр-должность';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрДолжностьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
