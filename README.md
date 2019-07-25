# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
2. [CRUD API](#development)
3. [Installing Dependencies](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

## CRUD API

##### POST '/api/menu/'

Creates new record from supplied array of JSON objects that contain menu item information for every single menu that item needs to be added to. Responds with JSON of newly created records

#####  GET '/api/menu'

Retrieves all the menu items available

##### GET '/api/menu/:menu'

Retrieves all the record with specified menu number

##### GET '/api/menu/:name

Retrieves all the record with specified name of menu item

##### PUT '/api/menu/:menu'

Updates menu item record with data supplied with req.body. Sends back JSON object with properties of updated menu item.

##### DELETE '/api/menu/:menu'

Deletes menu item records from all the menus that contain specified menu number.  Sends JSON object back with deleted info



## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

