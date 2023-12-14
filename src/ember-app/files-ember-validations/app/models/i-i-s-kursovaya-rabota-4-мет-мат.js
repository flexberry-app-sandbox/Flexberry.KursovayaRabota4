import {
  defineNamespace,
  defineProjections,
  Model as МетМатMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-мет-мат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МетМатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
