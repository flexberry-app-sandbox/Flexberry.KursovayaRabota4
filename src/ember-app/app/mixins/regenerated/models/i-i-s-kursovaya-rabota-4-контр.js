import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  просмотр: DS.attr('boolean'),
  статус: DS.attr('i-i-s-kursovaya-rabota-4-статус'),
  спрСтуд: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', { inverse: null, async: false }),
  стат: DS.belongsTo('i-i-s-kursovaya-rabota-4-стат', { inverse: 'контр', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-контр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  просмотр: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-контр.validations.просмотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-контр.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрСтуд: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-контр.validations.спрСтуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  стат: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-контр.validations.стат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрE', 'i-i-s-kursovaya-rabota-4-контр', {
    спрСтуд: belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', 'Фио студента', {
      фио: attr('Фио студента', { index: 1 }),
      спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
        назв: attr('Группа', { index: 2 })
      }, { index: -1, hidden: true }),
      спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
        наименование: attr('Дисциплина', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио студента' }),
    статус: attr('Статус прикрепления', { index: 4 }),
    просмотр: attr('Статус просмотра', { index: 5 })
  });
};
