Michal Ruopp
ruopp2
CS410 sp18


#GameSetMatch


##Objective

Please open in Firefox or Chrome! It is not developed for IE / Edge. 

Sometimes it seems like you just can't find any fun new games to play.
The big market games all feel the same and it's difficult to find a new, unique game to play.


##Setup

Setting up and running GameSetMatch is quite easy:

1. Download or clone the repo.
2. Unzip the file if you chose to download it.
3. Navigate to the folder in terminal or command prompt.
4. Run the command
```
node app.js
```
5. Open Firefox or Chrome
6. Direct your browser to ```localhost:3000```
7. You're done!

##Contents

The bulk of the application is in ```app.js```. This creates and runs the Node.js server. Pug templates are stored in the 'views' folder, and 'public' holds the CSS. 

The 'data' folder contains the raw CSV data file downloaded from [Kaggle](https://www.kaggle.com/egrinstein/20-years-of-games/data).

The file ```dataFormatter.py``` does NOT need to be run. It is a one-time use file to convert the CSV data to JSON data, stored in the 'json' folder. If you wish to run this, or add more data from the same format, it is run in the project directory with ```python dataFormatter.py```.

