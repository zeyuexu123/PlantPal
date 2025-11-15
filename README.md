# PlantPal 

## Overview

PlantPal is a simple web app that helps users keep track of their houseplants.
Users can log in, add plants, and record how often they need watering.
Each plant entry includes a name, species, and watering schedule.
Users can also search for plant care information using an external API.

## Deployment
https://plantpal-inq8.onrender.com

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


## Wireframes

/auth/register – register form

/auth/login – login form

/plants – list of user’s plants, with “Add a New Plant”, “Edit”, “Delete” buttons

/plants/add – form to add a new plant

/plants/edit/:id – edit a single plant

## Site map
```
 ├── Register
 ├── Login
 ├── Search Plant
 └── Plants
      ├── Add Plant
      ├── View Plant
      ├── Edit Plant
      └── Delete Plant
```
## User Stories or Use Cases

As a new user, I can register an account.

As a user, I can log in and see my plants.

As a user, I can add and delete a plant.

As a user, I can update plant info.

As a user, I can search plant info using an external API.

## Research Topics

Unit testing: Vitest (test ES6 class methods)

Build tool: Vite (auto build + dev server)

CSS framework: Tailwind CSS

External API: Trefle API for plant info

## Annotations / References Used

Mongoose Docs – https://mongoosejs.com/

Vite Docs – https://vitejs.dev/

Tailwind CSS – https://tailwindcss.com/

Vitest – https://vitest.dev/

Trefle API – https://docs.trefle.io/