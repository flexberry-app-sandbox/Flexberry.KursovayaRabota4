import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  спрПрепод: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-препод', { inverse: null, async: false }),
  спрСтуд: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-стат.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрПрепод: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-стат.validations.спрПрепод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрСтуд: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-стат.validations.спрСтуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтатE', 'i-i-s-kursovaya-rabota-4-стат', {
    спрПрепод: belongsTo('i-i-s-kursovaya-rabota-4-спр-препод', 'Фио преподавателя', {
      фио: attr('Фио преподавателя', { index: 1 }),
      спрДолжность: belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', '', {
        наименование: attr('Должность', { index: 2 })
      }, { index: -1, hidden: true }),
      спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
        наименование: attr('Дисциплина', { index: 3 })
      }, { index: -1, hidden: true }),
      спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
        назв: attr('Группа', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио преподавателя' })
  });

  modelClass.defineProjection('СтатL', 'i-i-s-kursovaya-rabota-4-стат', {
    спрПрепод: belongsTo('i-i-s-kursovaya-rabota-4-спр-препод', 'Фио преподавателя', {
      фио: attr('Фио преподавателя', { index: 0 }),
      спрДолжность: belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', '', {
        наименование: attr('Должность', { index: 1 })
      }, { index: -1, hidden: true }),
      спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
        наименование: attr('Дисциплина', { index: 2 })
      }, { index: -1, hidden: true }),
      спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
        назв: attr('Группа', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
