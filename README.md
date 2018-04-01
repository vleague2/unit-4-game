# Pusheen Collector
This repo contains a Pusheen-themed game coded with JQuery. It was created as part of UCF's Coding Bootcamp program.

How to play:
1. Click on the Pusheens to increase your total score
2. Try to match the random number exactly with your total score

How the game works:
1. The game generates a random number, and random values for each Pusheen
2. The game listens for clicks on each of the Pusheens, and adds their value to your total score
3. If your score equals the random value, the win counter increases and the game resets the values for the total score, random number, and random Pusheen values
4. If your score becomes greater than the random value, the loss counter increases and the game resets the values for the total score, random number, and random Pusheen values

Limitations:
1. To make the .click functions DRYer, I had tried to assign values to the IMGs, but for some reason JQuery could not pull any values. This is why the .click functions are a bit repetitive.

