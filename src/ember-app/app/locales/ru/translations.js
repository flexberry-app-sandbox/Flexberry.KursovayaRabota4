import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ rabota_4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ rabota_4',
          title: 'Kursovaya_ rabota_4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
