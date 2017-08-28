import SimpleSchema from 'simpl-schema';
import './ubicacion.js'
import { Collections, Schemas } from '/lib/collections/_collections.js'

Establecimientos = Collections.Establecimientos = new Mongo.Collection('establecimiento');

Schemas.EstablecimientoSchema = new SimpleSchema({
id_establecimiento      :{type: Number},
cue                     :{type: Number, max: 8, optional: true},
nombre_establecimiento  :{type: String, max: 255, optional: true},
id_localizacion         :{type: Number, optional: true},
anexo                   :{type: String, max: 255, optional: true},
ambito                  :{type: String, max: 255, optional: true},
nombre_localizacion     :{type: String, max: 255, optional: true},
email                   :{type: String, max: 255, optional: true},
sitio_web               :{type: String, max: 255, optional: true},
ubicacion               : Schemas.UbicacionSchema
}, { tracker: Tracker });

Collections.Establecimientos.attachSchema(Schemas.EstablecimientoSchema);


if (Meteor.isServer) {
  Establecimientos.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
}
