import { Serializer as ПросмотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-4-просмотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПросмотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
