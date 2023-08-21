import { Key } from '@zenithal/shared';
import { ModelDefinition } from 'nestjs-dynamoose/dist/interfaces';

export interface LoneFiddlerModelDefinition extends ModelDefinition {
  type: Key;
}
