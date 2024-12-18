from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/solve', methods=['POST'])
def solve():
    data = request.json
    equation = data['equation']
    
    ### CHAT GPT SHIT GOES HERE ###
    
    latex_code = f"\\text{{Solving: }} {equation}"
    return jsonify({'latex': latex_code})

if __name__ == '__main__':
    app.run(debug=True)