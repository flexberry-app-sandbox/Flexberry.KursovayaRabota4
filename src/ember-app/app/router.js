import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
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
});

export default Router;
