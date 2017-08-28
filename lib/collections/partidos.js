import SimpleSchema from 'simpl-schema';
import './ubicacion.js'
import { Collections, Schemas } from '/lib/collections/_collections.js'

Partidos = Collections.Partidos = new Mongo.Collection('partido');

Schemas.PartidoSchema = new SimpleSchema({
nombre            :{type: String, max: 255, optional: true},
partido_original  :{type: String, optional: true},
alianza           :{type: String, max: 255, optional: true},
telefono          :{type: String, max: 255, optional: true},
telefono_cod_area :{type: String, max: 255, optional: true},
email             :{type: String, max: 255, optional: true},
sitio_web         :{type: String, max: 255, optional: true},
ubicacion         : Schemas.UbicacionSchema
}, { tracker: Tracker });

Collections.Partidos.attachSchema(Schemas.PartidoSchema);


if (Meteor.isServer) {
  Partidos.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
}
