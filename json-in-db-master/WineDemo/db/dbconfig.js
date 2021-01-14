/* Copyright (c) 2015, 2017, Oracle and/or its affiliates. All rights reserved. */

module.exports = {
  dbname  : process.env.WINE_DB || "oracle",
  wines   : [
    {
      "id_wine": 1,
      "name": "Rouge Grosse",
      "type": "Cabernet Sauvignon",
      "price": 12.00,
      "Quantity":2.0,
      "notes":{
        "flavour": "Low acidity, full-body.",
        "rate":3.0
      },
      "region":{
        "country":"France",
        "city": "Val de Loire"
      } 
    },
    {
      "id_wine": 2,
      "name": "Carta Roja",
      "type": "Monastrell",
      "price": 6.00,
      "Quantity":5.0,
      "notes":{
        "flavour": "Oak, vanilla, tobacco",
        "rate": 4.1
      },
      "region":{
        "country":"Spain",
        "city": "Jumilla"
      } 
    },
    {
      "id_wine": 3,
      "name": "Pago de Carraovejas",
      "type": "Tempranillo",
      "price": 29.61,
      "Quantity":7.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.5
      },
      "region":{
        "country":"Spain",
        "city": "Ribera del Duero"
      } 
    },
    {
      "id_wine": 4,
      "name": "47 Anno Domini",
      "type": "Cabernet Sauvignon",
      "price": 29.95,
      "Quantity":3.0,
      "notes":{
        "flavour":"Plum, blackberry, dark",
        "rate":4.5
      },
      "region":{
        "country":"Italy",
        "city": "Veneto"
      } 
    },
    {
      "id_wine": 5,
      "name": "El enemigo",
      "type": "Cabernet Franc",
      "price": 20.95,
      "Quantity":1.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.4
      },
      "region":{
        "country":"Argentina",
        "city": "Mendoza"
      } 
    },
    {
      "id_wine": 6,
      "name": "Quinta do Crasto",
      "type": "Syrah",
      "price": 25.65,
      "Quantity":9.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.1
      },
      "region":{
        "country":"Portugal",
        "city": "Douro"
      } 
    },
    {
      "id_wine": 7,
      "name": "Tinto Pesquera",
      "type": "Tempranillo",
      "price": 29.80,
      "Quantity":2.0,
      "notes":{
        "flavour":"Oak, vanilla, tobacco",
        "rate":4.4
      },
      "region":{
        "country":"Spain",
        "city": "Ribera del Duero"
      } 
    },
    {
      "id_wine": 8,
      "name": "Matassa",
      "type": "Sumoll",
      "price": 27.81,
      "Quantity":1.0,
      "notes":{
        "flavour":"Cherry, cranberry",
        "rate":3.9
      },
      "region":{
        "country":"France",
        "city": "Vin de France"
      } 
    },
    {
      "id_wine": 9,
      "name": "Bodegas San Román",
      "type": "Tinta de toro",
      "price": 25.26,
      "Quantity":10.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.3
      },
      "region":{
        "country":"Spain",
        "city": "Toro"
      } 
    },
    {
      "id_wine": 10,
      "name": "Boekenhoutskloof",
      "type": "Syrah",
      "price": 28.76,
      "Quantity":6.0,
      "notes":{
        "flavour":"Oak, chocolate",
        "rate":4.3
      },
      "region":{
        "country":"South Africa",
        "city": "Franschhoek"
      } 
    },
    {
      "id_wine": 11,
      "name": "Quinta Sardonia",
      "type": "Tinto Fino",
      "price": 29.16,
      "Quantity":4.0,
      "notes":{
        "flavour":"Oak, vanilla, tobacco",
        "rate":4.3
      },
      "region":{
        "country":"Spain",
        "city": "Castilla y León"
      } 
    },
    {
      "id_wine": 12,
      "name": "San Marzano",
      "type": "Primitivo",
      "price": 21.90,
      "Quantity":9.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.1
      },
      "region":{
        "country":"Italy",
        "city": "Primitivo di Manduria"
      } 
    },
    {
      "id_wine": 13,
      "name": "Bodegas Aragonesaso",
      "type": " Garnacha",
      "price": 17.96,
      "Quantity":4.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.7
      },
      "region":{
        "country":"Spain",
        "city": "Aragón"
      } 
    },
    {
      "id_wine": 14,
      "name": "Mustiguillo",
      "type": "Bobal",
      "price": 21.90,
      "Quantity":6.0,
      "notes":{
        "flavour":"Blackberry, plum",
        "rate":4.2
      },
      "region":{
        "country":"Spain",
        "city": "El Terrerazo"
      } 
    },
    {
      "id_wine": 15,
      "name": "La Cepa Alta",
      "type": "Tempranillo",
      "price": 14.90,
      "Quantity":11.0,
      "notes":{
        "flavour":"Oak, vanilla, tobacco",
        "rate":4.6
      },
      "region":{
        "country":"Spain",
        "city": "Ribera del Duero"
      } 
    },
    {
      "id_wine": 16,
      "name": "Clos de Gat",
      "type": "Syrah",
      "price": 18.90,
      "Quantity":6.0,
      "notes":{
        "flavour":"Oak, vanilla, tobacco",
        "rate":4.1
      },
      "region":{
        "country":"Israel",
        "city": "Judean Hills"
      } 
    },
    {
      "id_wine": 17,
      "name": "Orben",
      "type": "Tempranillo",
      "price": 28.90,
      "Quantity":11.0,
      "notes":{
        "flavour":"Oak, vanilla, tobacco",
        "rate":4.5
      },
      "region":{
        "country":"Spain",
        "city": "Rioja"
      } 
    },
    {
      "id_wine": 18,
      "name": "Domaine Santa Duc",
      "type": "Syrah",
      "price": 25.88,
      "Quantity":5.0,
      "notes":{
        "flavour":"Strawberry, watermelo",
        "rate":3.3
      },
      "region":{
        "country":"France",
        "city": "Vin de France"
      } 
    },
    {
      "id_wine": 19,
      "name": "Dominio de Atauta",
      "type": "Tinto Fino",
      "price": 20.50,
      "Quantity":6.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":4.2
      },
      "region":{
        "country":"Spain",
        "city": "Ribera del Duero"
        
      } 
    },
    {
      "id_wine": 20,
      "name": "19 Crimes",
      "type": "Grenache",
      "price": 8.99,
      "Quantity":2.0,
      "notes":{
        "flavour":"Oak, vanilla, chocolate",
        "rate":3.8
      },
      "region":{
        "country":"Australia",
        "city": "South Eastern Australia"
        
      } 
    },
    {
      "id_wine": 21,
      "name": "Ponte Lungo",
      "type": "Cabernet Sauvignon",
      "price": 11.90,
      "Quantity":12.0,
      "notes":{
        "flavour":"Blackberry, dark fruit",
        "rate":4.1
      },
      "region":{
        "country":"Italy",
        "city": "Toscana"
        
      } 
    },
    {
      "id_wine": 22,
      "name": "Casal Branco",
      "type": "Syrah",
      "price": 7.90,
      "Quantity":5.0,
      "notes":{
        "flavour":"Vanilla, chocolate, oak",
        "rate":4.0
      },
      "region":{
        "country":"Portugal",
        "city": "Tejo"
        
      } 
    },
    {
      "id_wine": 23,
      "name": "Barista",
      "type": "Pinotage",
      "price": 9.90,
      "Quantity":5.0,
      "notes":{
        "flavour":"Coffee, chocolate, tobacco",
        "rate":4.3
      },
      "region":{
        "country":"South Africa",
        "city": "Western Cape"
        
      }} ,
      {
        "id_wine": 24,
        "name": "Abadía de San Quirce",
        "type": "Tempranillo",
        "price": 11.90,
        "Quantity":3.0,
        "notes":{
          "flavour":"Oak, tobacco, vanilla",
          "rate":4.0
        },
        "region":{
          "country":"Spain",
          "city": "Ribera del Duero"
          
        }
      },
        {
          "id_wine": 25,
          "name": "Viña Pomal",
          "type": "Tempranillo",
          "price": 11.50,
          "Quantity":8.0,
          "notes":{
            "flavour":"Oak, tobacco, vanilla",
            "rate":4.6
          },
          "region":{
            "country":"Spain",
            "city": "Rioja"
            
          }
         } ,
          {
            "id_wine": 26,
            "name": "Château des Annereaux",
            "type": "Merlot",
            "price": 9.50,
            "Quantity":4.0,
            "notes":{
              "flavour":"Leather, earthy",
              "rate":4.1
            },
            "region":{
              "country":"France",
              "city": "Bordeaux"
              
            }},
            {
              "id_wine": 27,
              "name": "Tenuta Ulisse",
              "type": "Montepulciano",
              "price": 26.90,
              "Quantity":4.0,
              "notes":{
                "flavour":"Vanilla, oak, chocolate",
                "rate":4.6
              },
              "region":{
                "country":"Italy",
                "city": "Montepulciano d'Abruzzo"
                
              }  
            },
            {
              "id_wine": 28,
              "name": "100 Hectares",
              "type": "	Souzao",
              "price": 18.90,
              "Quantity":7.0,
              "notes":{
                "flavour":"Oak, clove, nutmeg",
                "rate":4.7
              },
              "region":{
                "country":"Portugal",
                "city": "Douro"
                
              }},
              {
                "id_wine": 29,
                "name": "Pago de Carraovejas",
                "type": "Tinto Fino",
                "price": 31.30,
                "Quantity":10.0,
                "notes":{
                  "flavour":"Oak, vanilla, chocolate",
                  "rate":4.5
                },
                "region":{
                  "country":"Spain",
                  "city": "Ribera del Duero"
                  
                }},
                {
                  "id_wine": 30,
                  "name": "Gitana",
                  "type": "Saperavi",
                  "price": 15.42,
                  "Quantity":2.0,
                  "notes":{
                    "flavour":"Oak, vanilla, chocolate",
                    "rate":4.0
                  },
                  "region":{
                    "country":"Moldova",
                    "city": "Moldova"
                    
                  }},
                  {
                    "id_wine": 31,
                    "name": "Malhadinha Nova",
                    "type": "Tinta Miuda",
                    "price": 26.90,
                    "Quantity":4.0,
                    "notes":{
                      "flavour":"Oak, vanilla, chocolate",
                      "rate":4.2
                    },
                    "region":{
                      "country":"Portugal",
                      "city": "Alentejano"
                      
                    }},
                    {
                      "id_wine": 32,
                      "name": "Domaine Tempier",
                      "type": "Mourvedre",
                      "price": 28.95,
                      "Quantity":5.0,
                      "notes":{
                        "flavour":"Leather, earthy",
                        "rate":4.6
                      },
                      "region":{
                        "country":"France",
                        "city": "Bandol"
                        
                      }}
  ]
};
