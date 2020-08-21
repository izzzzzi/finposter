# -*- coding: utf-8 -*-
from flask import render_template

from app import app


@app.route('/', methods=["GET"])
def index():
    return render_template('index.html', title='Главная')


@app.route('/privacy-policy', methods=["GET"])
def privacy_policy():
    return render_template('privacy-policy.html', title='Политика конфиденциальности')


@app.route('/terms-of-use', methods=["GET"])
def terms_of_use():
    return render_template('terms-of-use.html', title='Условия использования')


@app.route('/news', methods=["GET"])
def news():
    return render_template('news.html', title='Новости')


@app.route('/new', methods=["GET"])
def new():
    return render_template('new.html', title='Прогноз по валютам: как поведут себя доллар и евро после карантина')


@app.route('/comment', methods=["GET"])
def comment():
    return render_template('comment.html', title='Оставить отзыв')


@app.route('/currency-rates', methods=["GET"])
def currency_rates():
    return render_template('currency-rates.html', title='Курсы валют')


@app.route('/loans', methods=["GET"])
def loans():
    return render_template('loans.html', title='Займы в Украине')


@app.route('/credit-cards', methods=["GET"])
def credit_cards():
    return render_template('credit-cards.html', title='Займы в Украине')


@app.route('/credit', methods=["GET"])
def credit():
    return render_template('credit.html', title='Кредиты в Украине')


@app.route('/debit-cards', methods=["GET"])
def debit_cards():
    return render_template('debit-cards.html', title='Дебетовые карты Украины')
