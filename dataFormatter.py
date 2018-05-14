import json
import csv


data_src = "./data/ign.csv"

data_titles   = []
game_data     = []

game_titles   = []
game_urls     = []
platforms     = []
review_scores = []
genres        = []
release_years = []
release_mnths = []
release_days  = []

'''
Index Mapping

0  -> count
1  -> score phrase
2  -> title
3  -> url
4  -> platform
5  -> score
6  -> genre
7  -> editors choice
8  -> release year
9  -> release month
10 -> release day
'''

with open(data_src) as data_cvs:
	data_raw = csv.reader(data_cvs)

	game_data   = list(data_raw)
	data_titles = game_data[0]
	game_data = game_data[1:]


for game in game_data:
	game_titles.append(game[2])
	game_urls.append(game[3])
	platforms.append(game[4])
	review_scores.append(game[5])
	genres.append(game[6])
	release_years.append(game[8])
	release_mnths.append(game[9])
	release_days.append(game[10])

json_data = {}
for game in game_data:
	g = {}
	g['count'] = game[0]
	g['score_phrase'] = game[1]
	g['title'] = game[2]
	g['url'] = game[3]
	g['platform'] = game[4]
	g['score'] = game[5]
	g['genre'] = game[6]
	g['editors_choice'] = game[7]
	g['year'] = game[8]
	g['month'] = game[9]
	g['day'] = game[10]
	json_data[game[2]] = g

with open('./json/game_data.json', 'wb') as outfile:
	json.dump(json_data, outfile)

with open('./json/game_titles.json', 'wb') as outfile:
	json.dump(game_titles, outfile)

platforms_uniq = list(set(platforms))
with open('./json/platforms.json', 'wb') as outfile:
	json.dump(platforms_uniq, outfile)

genres_uniq = list(set(genres))[1:]
with open('./json/genres.json', 'wb') as outfile:
	json.dump(genres_uniq, outfile)	
