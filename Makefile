COMPOSE = docker compose --env-file .env -f infra/docker-compose.yml

.PHONY: up down logs ps

.env:
	cp .env.example .env

up: .env
	$(COMPOSE) up -d

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f

ps:
	$(COMPOSE) ps