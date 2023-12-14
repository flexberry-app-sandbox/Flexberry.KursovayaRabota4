import { Serializer as МетМатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-4-мет-мат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МетМатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
