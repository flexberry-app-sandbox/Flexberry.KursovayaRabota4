import { Serializer as СтатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-4-стат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
