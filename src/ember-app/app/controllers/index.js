import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-4-спр-студ-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-студ-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-студ-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-спр-препод-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-препод-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-препод-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-спр-дисциплина-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-дисциплина-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-дисциплина-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-спр-должность-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-должность-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-спр-группа-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-группа-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-группа-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-прикреп-кн-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-прикреп-кн-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-прикреп-кн-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-спр-материалы-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-спр-материалы-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-4-стат-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-стат-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-4.i-i-s-kursovaya-rabota-4-стат-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})