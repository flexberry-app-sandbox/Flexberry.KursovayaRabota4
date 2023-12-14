import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-4-стат', 'Unit | Serializer | i-i-s-kursovaya-rabota-4-стат', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-4-стат',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-4-вид',
    'transform:i-i-s-kursovaya-rabota-4-статус',

    'model:i-i-s-kursovaya-rabota-4-баз-дан',
    'model:i-i-s-kursovaya-rabota-4-контр',
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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
