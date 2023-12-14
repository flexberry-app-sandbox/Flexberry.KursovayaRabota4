import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  спрСтуд: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', { inverse: null, async: false }),
  метМат: DS.hasMany('i-i-s-kursovaya-rabota-4-мет-мат', { inverse: 'просмотр', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-просмотр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрСтуд: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-просмотр.validations.спрСтуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  метМат: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-просмотр.validations.метМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПросмотрE', 'i-i-s-kursovaya-rabota-4-просмотр', {
    спрСтуд: belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', 'Фио студента', {
      фио: attr('Фио студента', { index: 1 }),
      спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
        назв: attr('Группа', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио студента' }),
    метМат: hasMany('i-i-s-kursovaya-rabota-4-мет-мат', 'Просмотр прикрепленных книг студентом', {
      спрМатериалы: belongsTo('i-i-s-kursovaya-rabota-4-спр-материалы', 'Материал', {
        наименование: attr('Материал', { index: 1 }),
        вид: attr('Вид материала', { index: 2 }),
        спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
          наименование: attr('Дисциплина', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'материал' })
    })
  });

  modelClass.defineProjection('ПросмотрL', 'i-i-s-kursovaya-rabota-4-просмотр', {
    спрСтуд: belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', 'Фио студента', {
      фио: attr('Фио студента', { index: 0 }),
      спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
        назв: attr('Группа', { index: 1 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
