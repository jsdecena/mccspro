# MCCSPro - Municipalities, Cities, Countries, States and Provinces

A NodeJS version of the [MCPro](https://github.com/jsdecena/mcpro) app.
This app is so small and lightweight since the data being served is in `json` file

## Development Installation

- Clone this app

- Change to the app directory `cd mcpro-ws`

- Install packages `npm install`

- Serve the app `npm start`

## API ENDPOINTS

By default, this app run on port `3333`. You can change this in `.env` file.

```json
# Countries
- http://127.0.0.1:3333/countries

# Output
[
    {
        "id": 1,
        "name": "AFGHANISTAN",
        "iso": "AF",
        "iso3": "AFG",
        "numcode": 4,
        "phonecode": 93,
        "status": 1,
        "created_at": "2018-11-16 15:20:34",
        "updated_at": "2018-11-16 15:20:34"
    },
    {
        "id": 2,
        "name": "ALBANIA",
        "iso": "AL",
        "iso3": "ALB",
        "numcode": 8,
        "phonecode": 355,
        "status": 1,
        "created_at": "2018-11-16 15:20:34",
        "updated_at": "2018-11-16 15:20:34"
    }
    ...
]
```

```json
# Country
- http://127.0.0.1:3333/countries/226
- http://127.0.0.1:3333/countries/usa

# Output
{
    "id": 226,
    "name": "UNITED STATES OF AMERICA",
    "iso": "US",
    "iso3": "USA",
    "numcode": 840,
    "phonecode": 1,
    "status": 1,
    "created_at": "2018-11-16 15:20:34",
    "updated_at": "2018-11-16 15:20:34"
}
```

```json
# States
- http://127.0.0.1:3333/countries/:id/states

# Output
[
    {
        "state": "Alaska",
        "state_code": "AK",
        "country_id": 226
    },
    {
        "state": "Alabama",
        "state_code": "AL",
        "country_id": 226
    }
    ...
]
```

```json
# State
- http://127.0.0.1:3333/countries/:id/states/AK

# Output
    {
        "state": "Alaska",
        "state_code": "AK",
        "country_id": 226
    }
```

```json
# States
- http://127.0.0.1:3333/states/:code/cities

# Output
[
    {
        "name": "Adak",
        "state_code": "AK",
        "province_id": 0
    },
    {
        "name": "Akiachak",
        "state_code": "AK",
        "province_id": 0
    }
    ...
]
```

```json
# Country provinces (Philippines)
- http://127.0.0.1:3333/countries/:id/provinces

# Output
[
    {
        "id": 1,
        "name": "Abra",
        "country_id": 169,
        "status": 1,
        "created_at": "2018-11-16 15:20:34",
        "updated_at": "2018-11-16 15:20:34"
    },
    {
        "id": 2,
        "name": "Agusan del Norte",
        "country_id": 169,
        "status": 1,
        "created_at": "2018-11-16 15:20:34",
        "updated_at": "2018-11-16 15:20:34"
    }
    ...
]
```

```json
# Country province (Philippines)
- http://127.0.0.1:3333/countries/:id/provinces/:id

# Output
{
    "id": 1,
    "name": "Abra",
    "country_id": 169,
    "status": 1,
    "created_at": "2018-11-16 15:20:34",
    "updated_at": "2018-11-16 15:20:34"
},
```

```json
# Provinces (Philippines)
- http://127.0.0.1:3333/provinces

# Output
[
    {
        "id": 1,
        "name": "Abra",
        "country_id": 169,
        "status": 1,
        "created_at": "2018-11-16 15:20:34",
        "updated_at": "2018-11-16 15:20:34"
    },
    {
        "id": 2,
        "name": "Agusan del Norte",
        "country_id": 169,
        "status": 1,
        "created_at": "2018-11-16 15:20:34",
        "updated_at": "2018-11-16 15:20:34"
    }
    ...
]
```

```json
# Province (Philippines)
- http://127.0.0.1:3333/provinces/:id

# Output
{
    "id": 1,
    "name": "Abra",
    "country_id": 169,
    "status": 1,
    "created_at": "2018-11-16 15:20:34",
    "updated_at": "2018-11-16 15:20:34"
}
```

```json
# Cities
- http://127.0.0.1:3333/provinces/:id/cities

# Output
[
    {
        "name": "Bangued",
        "state_code": "",
        "province_id": 1
    },
    {
        "name": "Boliney",
        "state_code": "",
        "province_id": 1
    }
    ...
]
```