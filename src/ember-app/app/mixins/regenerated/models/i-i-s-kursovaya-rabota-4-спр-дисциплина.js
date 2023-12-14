import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-дисциплина.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрДисциплинаE', 'i-i-s-kursovaya-rabota-4-спр-дисциплина', {
    наименование: attr('Наименование Дисциплины', { index: 0 })
  });

  modelClass.defineProjection('СпрДисциплинаL', 'i-i-s-kursovaya-rabota-4-спр-дисциплина', {
    наименование: attr('Наименование Дисциплины', { index: 0 })
  });
};
