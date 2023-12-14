import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вид: DS.attr('i-i-s-kursovaya-rabota-4-вид'),
  наименование: DS.attr('string'),
  спрДисциплина: DS.belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', { inverse: null, async: false })
});

export let ValidationRules = {
  вид: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-материалы.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-материалы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрДисциплина: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-материалы.validations.спрДисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрМатериалыE', 'i-i-s-kursovaya-rabota-4-спр-материалы', {
    наименование: attr('Название материала', { index: 0 }),
    вид: attr('Вид материала', { index: 1 }),
    спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', 'Дисциплина', {
      наименование: attr('Дисциплина', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('СпрМатериалыL', 'i-i-s-kursovaya-rabota-4-спр-материалы', {
    наименование: attr('Название материала', { index: 0 }),
    вид: attr('Вид материала', { index: 1 }),
    спрДисциплина: belongsTo('i-i-s-kursovaya-rabota-4-спр-дисциплина', 'Дисциплина', {
      наименование: attr('Дисциплина', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
