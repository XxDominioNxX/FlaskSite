from flask import Flask, render_template, url_for, request
import os
import requests
from bs4 import BeautifulSoup as bs
import datetime


app = Flask(__name__)


@app.route("/")
def index():
    legend = 'Week Data'
    labels = []
    values = []

    for i in range(7, 0, -1):
        date = datetime.date.today() - datetime.timedelta(days=i)
        labels.append(date.strftime("%d-%b-%Y"))
        URL_ADRES = "https://www.anekdot.ru/release/anekdot/day/" + date.strftime("%Y-%m-%d")
        r = requests.get(URL_ADRES)
        soup = bs(r.text, "html.parser")
        anekdotes = soup.find_all("div", {"class": "text"})
        values.append(len(anekdotes))
    return render_template('index.html', legend=legend, labels=labels, values=values)

@app.route("/info")
def about():
    return render_template('about.html')

picFolder = os.path.join('static', 'pics')
app.config['UPLOAD_FOLDER'] = picFolder


@app.route("/equation", methods=["POST"])
def contact():
    date = request.form['date_value']
    URL_ADRES = "https://www.anekdot.ru/release/anekdot/day/" + date
    r = requests.get(URL_ADRES)
    soup = bs(r.text, "html.parser")
    anekdotes = soup.find_all("div", {"class":"text"})
    data_list=[]
    for item in anekdotes:
        data_list.append(item.text)
    return render_template('result.html', data=data_list)



def GetCountAnekdot(date):
    URL_ADRES = "https://www.anekdot.ru/release/anekdot/day/" + date
    r = requests.get(URL_ADRES)
    soup = bs(r.text, "html.parser")
    anekdotes = soup.find_all("div", {"class": "text"})
    return len(anekdotes)

@app.route("/result")
def result():
    pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'square_equation.png')
    return render_template("index.html", user_image=pic1)


if __name__ == "__main__":
    app.run(debug=True)