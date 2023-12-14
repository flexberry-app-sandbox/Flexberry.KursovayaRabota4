import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  спрПрепод: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-препод', { inverse: null, async: false }),
  базДан: DS.hasMany('i-i-s-kursovaya-rabota-4-баз-дан', { inverse: 'прикрепКн', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-прикреп-кн.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрПрепод: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-прикреп-кн.validations.спрПрепод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  базДан: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-прикреп-кн.validations.базДан.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрикрепКнE', 'i-i-s-kursovaya-rabota-4-прикреп-кн', {
    спрПрепод: belongsTo('i-i-s-kursovaya-rabota-4-спр-препод', 'Фио Преподавателя', {
      фио: attr('Фио Преподавателя', { index: 1 }),
      спрДолжность: belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', '', {
        наименование: attr('Должность', { index: 2 })
      }, { index: -1, hidden: true }),
      спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
        наименование: attr('Дисциплина', { index: 3 })
      }, { index: -1, hidden: true }),
      спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
        назв: attr('Группа', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио Преподавателя' }),
    базДан: hasMany('i-i-s-kursovaya-rabota-4-баз-дан', 'База студентов с прикрепленными книгами', {
      спрСтуд: belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', 'Фио студента', {
        фио: attr('Фио студента', { index: 1 }),
        спрГруппа: belongsTo('i-i-s-kursovaya-rabota-4-спр-группа', '', {
          назв: attr('Группа', { index: 2 })
        }, { index: -1, hidden: true }),
        спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', '', {
          наименование: attr('Дисиплина', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фио студента' }),
      спрМатериалы: belongsTo('i-i-s-kursovaya-rabota-4-спр-материалы', 'Название материала', {
        наименование: attr('Название материала', { index: 5 }),
        вид: attr('Вид материала', { index: 6 })
      }, { index: 4, displayMemberPath: 'название материала' })
    })
  });

  modelClass.defineProjection('ПрикрепКнL', 'i-i-s-kursovaya-rabota-4-прикреп-кн', {
    спрПрепод: belongsTo('i-i-s-kursovaya-rabota-4-спр-препод', 'Фио преподавателя', {
      фио: attr('Фио преподавателя', { index: 0 }),
      спрДолжность: belongsTo('i-i-s-kursovaya-rabota-4-спр-должность', '', {
        наименование: attr('Дожность', { index: 1 })
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
