from flask import Flask
from flask_restful import Api, Resource, abort
import random
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)


def returnRandomRowByRating(rating):
    filename = f'filtered_puzzles_by_number/filtered_puzzles_{rating}.csv'
    with open(filename, 'r') as f:
        # Get the total number of lines in the file
        total_lines = sum(1 for line in f)
        # Generate a random line number between 1 and the total number of lines
        random_line_number = random.randint(1, total_lines)
        # Seek to the random line in the file
        f.seek(0)
        for i in range(random_line_number - 1):
            f.readline()
        # Read the random line and split it by commas
        random_line = f.readline()
        random_line_values = random_line.strip().split(',')
        # Do something with the random line values
        return random_line_values

def find_row_by_id(target_id):
    ratings = range(400, 3200, 100)
    for rating in ratings:
        filename = f'filtered_puzzles_by_number/filtered_puzzles_{rating}.csv'
        try:
            df = pd.read_csv(filename, index_col=0, header=None)
        except FileNotFoundError:
            continue
        if target_id in df.index:
            row = df.loc[target_id].values.tolist()
            return row
    return 404, 404


class SearchPuzzle(Resource):
    def get(self, id):
        print(id)
        game = find_row_by_id(id)
        if(game == 404):
            abort(404)
        print(game)
        return {
            "id": id,
            "fen": game[0],
            "moves": game[1],
            "rating": f"{game[2]}",
            "ratingDeviation": f"{game[3]}",
            "games": game[4]
        }

class SearchByRating(Resource):
    def get(self, rating):
        game = returnRandomRowByRating(rating)
        return {
            "id": game[0],
            "fen": game[1],
            "moves": game[2],
            "rating": game[3],
            "ratingDeviation": game[4],
            "games": game[5]
        }


api.add_resource(SearchPuzzle, "/searchpuzzle/<string:id>")
api.add_resource(SearchByRating, "/searchbyrating/<int:rating>")

if __name__ == "__main__":
    app.run(debug=True)



