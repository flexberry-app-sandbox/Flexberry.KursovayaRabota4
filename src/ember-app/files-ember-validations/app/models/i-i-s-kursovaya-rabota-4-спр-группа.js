import {
  defineNamespace,
  defineProjections,
  Model as СпрГруппаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-спр-группа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрГруппаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
