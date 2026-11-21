COMPOSE = docker compose --env-file .env -f infra/docker-compose.yml

.PHONY: up down logs ps

.env:
	cp .env.example .env

up: .env
	$(COMPOSE) up -d

down: .env
	$(COMPOSE) down

logs: .env
	$(COMPOSE) logs -f

ps: .env
	$(COMPOSE) ps