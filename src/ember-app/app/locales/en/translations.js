import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya_Rabota_4СпрГруппаLForm from './forms/i-i-s-kursovaya-rabota-4-спр-группа-l';
import IISKursovaya_Rabota_4СпрДисциплинаLForm from './forms/i-i-s-kursovaya-rabota-4-спр-дисциплина-l';
import IISKursovaya_Rabota_4СпрДолжностьLForm from './forms/i-i-s-kursovaya-rabota-4-спр-должность-l';
import IISKursovaya_Rabota_4СпрПреподLForm from './forms/i-i-s-kursovaya-rabota-4-спр-препод-l';
import IISKursovaya_Rabota_4СпрСтудLForm from './forms/i-i-s-kursovaya-rabota-4-спр-студ-l';
import IISKursovaya_Rabota_4СпрГруппаEForm from './forms/i-i-s-kursovaya-rabota-4-спр-группа-e';
import IISKursovaya_Rabota_4СпрДисциплинаEForm from './forms/i-i-s-kursovaya-rabota-4-спр-дисциплина-e';
import IISKursovaya_Rabota_4СпрДолжностьEForm from './forms/i-i-s-kursovaya-rabota-4-спр-должность-e';
import IISKursovaya_Rabota_4СпрПреподEForm from './forms/i-i-s-kursovaya-rabota-4-спр-препод-e';
import IISKursovaya_Rabota_4СпрСтудEForm from './forms/i-i-s-kursovaya-rabota-4-спр-студ-e';
import IISKursovaya_Rabota_4СпрГруппаModel from './models/i-i-s-kursovaya-rabota-4-спр-группа';
import IISKursovaya_Rabota_4СпрДисциплинаModel from './models/i-i-s-kursovaya-rabota-4-спр-дисциплина';
import IISKursovaya_Rabota_4СпрДолжностьModel from './models/i-i-s-kursovaya-rabota-4-спр-должность';
import IISKursovaya_Rabota_4СпрПреподModel from './models/i-i-s-kursovaya-rabota-4-спр-препод';
import IISKursovaya_Rabota_4СпрСтудModel from './models/i-i-s-kursovaya-rabota-4-спр-студ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-4-спр-группа': IISKursovaya_Rabota_4СпрГруппаModel,
    'i-i-s-kursovaya-rabota-4-спр-дисциплина': IISKursovaya_Rabota_4СпрДисциплинаModel,
    'i-i-s-kursovaya-rabota-4-спр-должность': IISKursovaya_Rabota_4СпрДолжностьModel,
    'i-i-s-kursovaya-rabota-4-спр-препод': IISKursovaya_Rabota_4СпрПреподModel,
    'i-i-s-kursovaya-rabota-4-спр-студ': IISKursovaya_Rabota_4СпрСтудModel
  },

  'application-name': 'Kursovaya_ rabota_4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ rabota_4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ rabota_4',
          title: 'Kursovaya_ rabota_4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'kursovaya-rabota-4': {
          caption: 'Kursovaya_Rabota_4',
          title: 'Kursovaya_Rabota_4',
          'i-i-s-kursovaya-rabota-4-спр-студ-l': {
            caption: 'Справочник студенты',
            title: ''
          },
          'i-i-s-kursovaya-rabota-4-спр-препод-l': {
            caption: 'Справочник преподаватели',
            title: ''
          },
          'i-i-s-kursovaya-rabota-4-спр-дисциплина-l': {
            caption: 'Справочник дисциплины',
            title: ''
          },
          'i-i-s-kursovaya-rabota-4-спр-должность-l': {
            caption: 'Справочник должности',
            title: ''
          },
          'i-i-s-kursovaya-rabota-4-спр-группа-l': {
            caption: 'Справочник группы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-4-спр-группа-l': IISKursovaya_Rabota_4СпрГруппаLForm,
    'i-i-s-kursovaya-rabota-4-спр-дисциплина-l': IISKursovaya_Rabota_4СпрДисциплинаLForm,
    'i-i-s-kursovaya-rabota-4-спр-должность-l': IISKursovaya_Rabota_4СпрДолжностьLForm,
    'i-i-s-kursovaya-rabota-4-спр-препод-l': IISKursovaya_Rabota_4СпрПреподLForm,
    'i-i-s-kursovaya-rabota-4-спр-студ-l': IISKursovaya_Rabota_4СпрСтудLForm,
    'i-i-s-kursovaya-rabota-4-спр-группа-e': IISKursovaya_Rabota_4СпрГруппаEForm,
    'i-i-s-kursovaya-rabota-4-спр-дисциплина-e': IISKursovaya_Rabota_4СпрДисциплинаEForm,
    'i-i-s-kursovaya-rabota-4-спр-должность-e': IISKursovaya_Rabota_4СпрДолжностьEForm,
    'i-i-s-kursovaya-rabota-4-спр-препод-e': IISKursovaya_Rabota_4СпрПреподEForm,
    'i-i-s-kursovaya-rabota-4-спр-студ-e': IISKursovaya_Rabota_4СпрСтудEForm
  },

});

export default translations;