import {
  defineNamespace,
  defineProjections,
  Model as БазДанMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-4-баз-дан';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БазДанMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
