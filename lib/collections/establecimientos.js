import SimpleSchema from 'simpl-schema';
import { Collections, Schemas } from '/lib/collections/_collections.js'

Establecimientos = Collections.Establecimientos = new Mongo.Collection('establecimiento');

Schemas.EstablecimientoSchema = new SimpleSchema({
id_establecimiento:{type: Number},
cue:{type: Number, max: 8, optional: true},
nombre_establecimiento :{type: String, max: 255, optional: true},
id_localizacion :{type: Number, optional: true},
anexo  :{type: String, max: 255, optional: true},
ambito:{type: String, max: 255, optional: true},
nombre_localizacion  :{type: String, max: 255, optional: true},
telefono :{type: String, max: 255, optional: true},
telefono_cod_area :{type: String, max: 255, optional: true},
email :{type: String, max: 255, optional: true},
sitio_web :{type: String, max: 255, optional: true},
sede :{type: String, max: 255, optional: true},
codigo_jurisdiccional :{type: String, max: 255, optional: true},
id_domicilio :{type: Number, optional: true},
calle :{type: String, max: 255, optional: true},
nro :{type: String, max: 255, optional: true},
barrio :{type: String, max: 255, optional: true},
cod_postal :{type: String, max: 255, optional: true},
cui :{type: String, max: 255, optional: true},
c_localidad :{type: Number, optional: true},
x_longitud :{type: String, max: 255, optional: true},
y_latitud :{type: String, max: 255, optional: true},
c_codgis :{type: String, max: 255, optional: true},
localidad :{type: String, max: 255, optional: true},
cod_loc_indec :{type: String, max: 255, optional: true},
c_departamento :{type: Number, optional: true},
departamento :{type: String, max: 255, optional: true},
c_provincia :{type: Number, optional: true},
cod_provincia :{type: String, max: 255, optional: true},
provincia :{type: String, max: 255, optional: true}
}, { tracker: Tracker });

Collections.Establecimientos.attachSchema(Schemas.EstablecimientoSchema);


if (Meteor.isServer) {
  Establecimientos.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
}
