import {
  defineNamespace,
  defineProjections,
  Model as СпрМатериалыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-спр-материалы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрМатериалыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
