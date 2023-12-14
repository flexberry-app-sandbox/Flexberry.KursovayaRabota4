import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-4-спр-должность', 'Unit | Model | i-i-s-kursovaya-rabota-4-спр-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-4-баз-дан',
    'model:i-i-s-kursovaya-rabota-4-контр',
    'model:i-i-s-kursovaya-rabota-4-мет-мат',
    'model:i-i-s-kursovaya-rabota-4-прикреп-кн',
    'model:i-i-s-kursovaya-rabota-4-просмотр',
    'model:i-i-s-kursovaya-rabota-4-спр-группа',
    'model:i-i-s-kursovaya-rabota-4-спр-дисциплина',
    'model:i-i-s-kursovaya-rabota-4-спр-должность',
    'model:i-i-s-kursovaya-rabota-4-спр-материалы',
    'model:i-i-s-kursovaya-rabota-4-спр-препод',
    'model:i-i-s-kursovaya-rabota-4-спр-студ',
    'model:i-i-s-kursovaya-rabota-4-стат',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
