# Memory Game Deluxe

## Overview

This is the second projects of Udacity's Front End Nanodegree. Below are are some of the instructions I was given from Udacity. In this project, I learned about and worked with flex, css animations via transforms, and some fun javascript logic!

## Dependencies

The project has no dependencies. I do use a link to font awesome for the icons used for the cards!

## How The Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
* The game ends once all cards have been correctly matched.

## Game Functionality

The real-life game, players flip over cards to locate the pairs that match The goal is to recreate this effect in your project. There are a couple of interactions that you'll need to handle:

* Flipping cards
* What happens when cards match
* What happens when cards do not match
* When the game finishes
* Below are some examples of how we implemented these interactions.
