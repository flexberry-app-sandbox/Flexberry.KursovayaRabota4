import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  спрГруппа: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', { inverse: null, async: false }),
  спрДисциплина: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-студ.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрГруппа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-студ.validations.спрГруппа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрДисциплина: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-студ.validations.спрДисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСтудE', 'i-i-s-kursovaya-rabota-4-спр-студ', {
    фио: attr('Фио студента', { index: 0 }),
    спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', 'Группа', {
      назв: attr('Группа', { index: 2 })
    }, { index: 1 }),
    спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', 'Дисциплина', {
      наименование: attr('Дисциплина', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('СпрСтудL', 'i-i-s-kursovaya-rabota-4-спр-студ', {
    фио: attr('Фио студента', { index: 0 })
  });
};
