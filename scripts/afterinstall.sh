pip3 install -r requirements.tx
python manage.py loaddata db.json
python manage.py collectstatic
python manage.py runserver