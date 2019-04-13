const express = require('express');
const helmet = require('helmet');

const Dishes = require('./dishes/dishes-model')
const Recipes = require('./recipes/recipes-model')
const server = express();

server.use(helmet());
server.use(express.json());

// Dishes Routes
server.get('/api/dishes', (req, res) => {
    Dishes
    .getDishes()
    .then(dishes => {
        res.status(200).json(dishes);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

server.get('/api/dishes/:id', (req, res) => {
    const { id } = req.params
    Dishes
    .getDish(id)
    .then(dishes => {
        res.status(200).json(dishes);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

server.post('/api/dishes', (req, res) => {
    const { name } = req.body
    !name
    ? res.status(400).json({ error: 'Please Provide a Name'})
    : 
    Dishes
        .addDish(req.body)
        .then(dish => {
            res.status(201).json(dish)
        })
        .catch(err => {
            res.status(505).json({error:'error'})
        })
})

// Recipes Routes
server.get('/api/recipes', (req, res) => {
    Recipes
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

server.post('/api/recipes', (req, res) => {
    const { name } = req.body
    !name || !req.body.dish_id
    ? res.status(400).json({ error: 'Please Provide a Name'})
    : 
    Recipes
        .addRecipe(req.body)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(err => {
            res.status(505).json({error:'error'})
        })
})

server.listen(2100, () => {
    console.log('\n **Jungle is Running on http://localhost:2100 ** \n')
})