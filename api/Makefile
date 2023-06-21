dev:
	podman-compose up -d

dev-down:
	podman-compose down

dev-down-volume:
	podman-compose down

migrate:
	rm -rf build && npm run build && npm run typeorm migration:generate ./src/migration/added-active -- -d ./src/data-source.ts
	
db-push:
	npm run build && npm run typeorm migration:run -- -d ./src/data-source.ts