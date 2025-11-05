# PlantPal 

## Overview

PlantPal is a simple web app that helps users keep track of their houseplants.
Users can log in, add plants, and record how often they need watering.
Each plant entry includes a name, species, and watering schedule.
Users can also search for plant care information using an external API.


## Data Model

The app will store Users and Plants.

* Each User can have multiple Plants.
* Each Plant belongs to one User.

An Example User:

```javascript
{
  "username": "plantfan",
  "hash": "// password hash",
  "plants": [ObjectId(...), ObjectId(...)]
}
```

An Example Plant:

```javascript
{
  "user": ObjectId(...),
  "name": "Apple tree",
  "species": "Malus domestica",
  "waterIntervalDays": 10,
  "lastWatered": "2025-10-29"
}
```


## [Link to Commented First Draft Schema]

/src/db.mjs

## Wireframes

/register – register form

/login – login form

/plants – list of user’s plants, with “Add Plant” button

/plants/add – form to add a new plant

/plants/:id – view/edit a single plant

## Site map

 ├── Register
 ├── Login
 └── Plants
      ├── Add Plant
      ├── View Plant
      ├── Edit Plant
      ├── Delete Plant
      └── Search

## User Stories or Use Cases

As a new user, I can register an account.

As a user, I can log in and see my plants.

As a user, I can add, edit and delete a plant.

As a user, I can update plant info.

As a user, I can search plant info using an external API.

## Research Topics

(3 pts) Unit testing: Vitest (test ES6 class methods)

(3 pts) Build tool: Vite (auto build + dev server)

(2 pts) CSS framework: Tailwind CSS

(2 pts) External API: Trefle API for plant info

## [Link to Initial Main Project File]

/app.mjs

## Annotations / References Used

Mongoose Docs – https://mongoosejs.com/

Vite Docs – https://vitejs.dev/

Tailwind CSS – https://tailwindcss.com/

Vitest – https://vitest.dev/

Trefle API – https://docs.trefle.io/
