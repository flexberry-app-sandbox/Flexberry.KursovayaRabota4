import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  спрГруппа: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', { inverse: null, async: false }),
  спрДисциплина: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', { inverse: null, async: false }),
  спрДолжность: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-препод.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрГруппа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-препод.validations.спрГруппа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрДисциплина: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-препод.validations.спрДисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрДолжность: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-препод.validations.спрДолжность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрПреподE', 'i-i-s-kursovaya-rabota-4-спр-препод', {
    фио: attr('Фио преподавателя', { index: 0 }),
    спрДолжность: belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', 'Должность', {
      наименование: attr('Должность', { index: 2 })
    }, { index: 1 }),
    спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', 'Группа', {
      назв: attr('Группа', { index: 4 })
    }, { index: 3 }),
    спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', 'Дисциплина', {
      наименование: attr('Дисциплина', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('СпрПреподL', 'i-i-s-kursovaya-rabota-4-спр-препод', {
    фио: attr('Фио преподавателя', { index: 0 }),
    спрДолжность: belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', 'Должность', {
      наименование: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true }),
    спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', 'Группа', {
      назв: attr('Группа', { index: 2 })
    }, { index: -1, hidden: true }),
    спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', 'Дисциплина', {
      наименование: attr('Дисциплина', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
