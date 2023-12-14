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
    descriptionKey: 'models.i-i-s-kursovaya-rabota-4-спр-должность.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрДолжностьE', 'i-i-s-kursovaya-rabota-4-спр-должность', {
    наименование: attr('Должность', { index: 0 })
  });

  modelClass.defineProjection('СпрДолжностьL', 'i-i-s-kursovaya-rabota-4-спр-должность', {
    наименование: attr('Должность', { index: 0 })
  });
};
