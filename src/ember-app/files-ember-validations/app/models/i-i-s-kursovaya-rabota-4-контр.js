import {
  defineNamespace,
  defineProjections,
  Model as КонтрMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-контр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
