import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  спрМатериалы: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-материалы', { inverse: null, async: false }),
  спрСтуд: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-студ', { inverse: null, async: false }),
  прикрепКн: DS.belongsTo('i-i-s-kursovaya-rabota-4-прикреп-кн', { inverse: 'базДан', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-баз-дан.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрМатериалы: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-баз-дан.validations.спрМатериалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрСтуд: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-баз-дан.validations.спрСтуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  прикрепКн: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-баз-дан.validations.прикрепКн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазДанE', 'i-i-s-kursovaya-rabota-4-баз-дан', {
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
  });
};
