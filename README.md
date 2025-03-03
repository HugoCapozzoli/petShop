# Sistema para pets

## Dependencias

```json
"dependencies": {
    "body-parser": "^1.20.3",
    "express": "^4.21.2",
    "express-graphql": "^0.12.0",
    "graphql": "^15.10.1",
    "mongoose": "^8.11.0"
},
"devDependencies": {
    "nodemon": "^3.1.9"
}
```

## Diagrama

```mermaid
classDiagram
    class Cliente {
		+String nome
        +String local
    }

    class Agendamento {
        +DateTime data
        +String preferencia
        +Pet[] pets
    }

    class Pet {
        +String nome
        +String porte
        +String alergias
        +String observacao
    }

    class Servico {
        +String nome
        +float valor
        +int duracaoMaxMinutos
    }

    Agendamento "1" -- "1" Cliente : possui
    Agendamento "1" -- "*" Pet : possui
    Agendamento "1" -- "1" Servico : possui
```