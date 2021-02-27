import Realm from 'realm';

// Define your models and their properties
const AquariumSchema = {
    name: 'aquarium',
    properties: {
      idAquarium:  { type: 'int', default: 0 },
      nom: 'string',
      date: 'date',
      litres: 'int',
      hauteur: 'float',
      longueur: 'float',
      largeur: 'float',
      volume: 'float',
      commentaire: 'string',
      entretien: 'entretien[]'
    }
};

const EntretienSchema = {
    name: 'entretien',
    properties: {
      idEntretien:  { type: 'int', default: 0 },
      date: 'date',
      typeEntretien: 'entretien',
      idAquarium: 'string',
      bRappel: 'bool',
      commentaire: 'string',
    }
};

const MesureSchema = {
    name: 'mesure',
    properties: {
      idMesure:  { type: 'int', default: 0 },
      date: 'date',
      idElement: 'string',
      idAquarium: 'string',
      commentaire: 'string',
    }
};

const TypeEntretienSchema = {
    name: 'typeEntretien',
    properties: {
        idTypeEntretien: { type: 'int', default: 0 },
        nom:  'string',
        detail: 'string',
        periodicite: 'string',
        commentaire: 'string',
    }
};

const ElementSchema = {
    name: 'element',
    properties: {
        idElement: { type: 'int', default: 0 },
        nomElement:  'string',
        valeurMin: 'float',
        valeurMoy: 'float',
        valeurMax: 'float',
        textMin: 'string',
        textMoy: 'string',
        textMax: 'string',
        commentaire: 'string',
    }
};
  
/*export default AquariumSchema;
export default EntretienSchema;
export default MesureSchema;
export default TypeEntretienSchema;
export default ElementSchema;*/
/*Realm.open({schema: [AquariumSchema, EntretienSchema, MesureSchema, TypeEntretienSchema, ElementSchema]})
    .then(realm => {
      // Create Realm objects and write to local storage
      realm.write(() => {
        const myCar = realm.create('Car', {
          make: 'Honda',
          model: 'Civic',
          miles: 1000,
        });
        myCar.miles += 20; // Update a property value
      });
  
      // Query Realm for all cars with a high mileage
      const cars = realm.objects('Car').filtered('miles > 1000');
  
      // Will return a Results object with our 1 car
      cars.length // => 1
  
      // Add another car
      realm.write(() => {
        const myCar = realm.create('Car', {
          make: 'Ford',
          model: 'Focus',
          miles: 2000,
        });
      });
  
      // Query results are updated in realtime
      cars.length // => 2
    })
    .catch(error => {
      console.log(error);
    });*/