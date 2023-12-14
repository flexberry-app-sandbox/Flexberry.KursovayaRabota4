import {
  defineNamespace,
  defineProjections,
  Model as СтатMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-стат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
