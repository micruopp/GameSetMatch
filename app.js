//const http = require('http')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))

const title = "ruopp2: GameSetMatch"


app.get('/', (req, res) => {
	res.render('index', { title: title })
})

app.post('/gameFormHandler', (req, res) => {
	query = req.body.query
	searchResults = getSearchResults(query)

	res.render('results', { title: title, query: query, results: searchResults })
})

app.listen(port, (err) => {
	if (err) {
		return console.log('Uh oh, there was an error', err)
	}

	console.log(`Listening on port ${port}...`)
})

var getSearchResults = function(query){
	results = []
	queryFound = false

	qGenre = ''
	qScore = 0
	qYear = ''

	scoreThreshold = 1
	yearThreshold = 3

	var data = fs.readFileSync('./json/game_data.json')
	var jsonData = JSON.parse(data)

	for (var game in jsonData){
		if (game == query){
			queryFound = true

			qGenre = jsonData[game].genre
			qScore = parseFloat(jsonData[game].score)
			qYear = jsonData[game].year
		}
	}

	if (queryFound == false) {
		// do nothing
	} else {
		for (var game in jsonData){
			if (game != query){
				if (jsonData[game].genre.includes(qGenre) 
					&& (Math.abs(jsonData[game].score - qScore) <= scoreThreshold)
					&& (Math.abs(jsonData[game].year - qYear) <= yearThreshold)){
					results.push(jsonData[game])
				}
			}
		}

		results.sort(function(a, b){
			var platformA = a.platform.toLowerCase()
			var platformB = b.platform.toLowerCase()

			if (platformA < platformB){
				return -1
			}
			if (platformA > platformB){
				return 1
			}
			return 0
		})
	}

	return results
}

