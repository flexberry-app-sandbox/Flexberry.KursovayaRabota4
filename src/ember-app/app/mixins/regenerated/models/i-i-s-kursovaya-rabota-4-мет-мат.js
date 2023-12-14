import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  спрМатериалы: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-материалы', { inverse: null, async: false }),
  просмотр: DS.belongsTo('i-i-s-kursovaya-rabota-4-просмотр', { inverse: 'метМат', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-мет-мат.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрМатериалы: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-мет-мат.validations.спрМатериалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  просмотр: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-мет-мат.validations.просмотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МетМатE', 'i-i-s-kursovaya-rabota-4-мет-мат', {
    спрМатериалы: belongsTo('i-i-s-kursovaya-rabota-4-спр-материалы', 'Материал', {
      наименование: attr('Материал', { index: 1 }),
      вид: attr('Вид материала', { index: 2 }),
      спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
        наименование: attr('Дисциплина', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'материал' })
  });
};
