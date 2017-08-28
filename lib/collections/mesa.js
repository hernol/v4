import SimpleSchema from 'simpl-schema';
import './establecimientos.js'
import { Collections, Schemas } from '/lib/collections/_collections.js'

Mesa = Collections.Mesa = new Mongo.Collection('mesa');

Schemas.MesaSchema = new SimpleSchema({
  numero                :{type: String, max: 255, optional: false},
  presidente            :{type: String, max: 255, optional: true},
  presidente_suplente   :{type: String, max: 255, optional: true},
  fiscal                :{type: String, max: 255, optional: true},
  fiscal2               :{type: String, max: 255, optional: true},
  fiscal3               :{type: String, max: 255, optional: true},
  observaciones         :{type: String, max: 255, optional: true},
  establecimiento       :Schemas.EstablecimientoSchema,
}, { tracker: Tracker });

Collections.Mesa.attachSchema(Schemas.MesaSchema);


if (Meteor.isServer) {
  Mesa.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
}
