start:
	docker-compose up

build:
	docker-compose up --build

migrate:
	docker-compose exec backend python manage.py migrate

createsuperuser:
	docker-compose exec backend python manage.py createsuperuser