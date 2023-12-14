import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-4-спр-материалы', 'Unit | Model | i-i-s-kursovaya-rabota-4-спр-материалы', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-4-баз-дан',
    'model:i-i-s-kursovaya-rabota-4-прикреп-кн',
    'model:i-i-s-kursovaya-rabota-4-спр-группа',
    'model:i-i-s-kursovaya-rabota-4-спр-дисциплина',
    'model:i-i-s-kursovaya-rabota-4-спр-должность',
    'model:i-i-s-kursovaya-rabota-4-спр-материалы',
    'model:i-i-s-kursovaya-rabota-4-спр-препод',
    'model:i-i-s-kursovaya-rabota-4-спр-студ',
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
