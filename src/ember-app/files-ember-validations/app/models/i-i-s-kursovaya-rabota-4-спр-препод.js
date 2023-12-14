import {
  defineNamespace,
  defineProjections,
  Model as СпрПреподMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-спр-препод';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрПреподMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
