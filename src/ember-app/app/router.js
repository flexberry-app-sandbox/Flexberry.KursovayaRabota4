import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-4-прикреп-кн-l');
  this.route('i-i-s-kursovaya-rabota-4-прикреп-кн-e',
  { path: 'i-i-s-kursovaya-rabota-4-прикреп-кн-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-прикреп-кн-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-прикреп-кн-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-просмотр-l');
  this.route('i-i-s-kursovaya-rabota-4-просмотр-e',
  { path: 'i-i-s-kursovaya-rabota-4-просмотр-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-просмотр-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-просмотр-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-спр-группа-l');
  this.route('i-i-s-kursovaya-rabota-4-спр-группа-e',
  { path: 'i-i-s-kursovaya-rabota-4-спр-группа-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-спр-группа-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-спр-группа-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-спр-дисциплина-l');
  this.route('i-i-s-kursovaya-rabota-4-спр-дисциплина-e',
  { path: 'i-i-s-kursovaya-rabota-4-спр-дисциплина-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-спр-дисциплина-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-спр-дисциплина-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-спр-должность-l');
  this.route('i-i-s-kursovaya-rabota-4-спр-должность-e',
  { path: 'i-i-s-kursovaya-rabota-4-спр-должность-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-спр-должность-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-спр-должность-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-спр-материалы-l');
  this.route('i-i-s-kursovaya-rabota-4-спр-материалы-e',
  { path: 'i-i-s-kursovaya-rabota-4-спр-материалы-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-спр-материалы-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-спр-материалы-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-спр-препод-l');
  this.route('i-i-s-kursovaya-rabota-4-спр-препод-e',
  { path: 'i-i-s-kursovaya-rabota-4-спр-препод-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-спр-препод-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-спр-препод-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-спр-студ-l');
  this.route('i-i-s-kursovaya-rabota-4-спр-студ-e',
  { path: 'i-i-s-kursovaya-rabota-4-спр-студ-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-спр-студ-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-спр-студ-e/new' });
  this.route('i-i-s-kursovaya-rabota-4-стат-l');
  this.route('i-i-s-kursovaya-rabota-4-стат-e',
  { path: 'i-i-s-kursovaya-rabota-4-стат-e/:id' });
  this.route('i-i-s-kursovaya-rabota-4-стат-e.new',
  { path: 'i-i-s-kursovaya-rabota-4-стат-e/new' });
});

export default Router;
