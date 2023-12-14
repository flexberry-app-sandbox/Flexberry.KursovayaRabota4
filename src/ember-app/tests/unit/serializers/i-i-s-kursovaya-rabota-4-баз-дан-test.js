import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-4-баз-дан', 'Unit | Serializer | i-i-s-kursovaya-rabota-4-баз-дан', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-4-баз-дан',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-4-вид',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
