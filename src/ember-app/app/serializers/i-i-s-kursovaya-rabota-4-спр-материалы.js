import { Serializer as СпрМатериалыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-4-спр-материалы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрМатериалыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
