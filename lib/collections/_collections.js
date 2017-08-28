import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

SimpleSchema.debug = true; //uncomment to help when developing, comment when deploying

Schemas = {};
Collections = {};

export { Collections, Schemas }
