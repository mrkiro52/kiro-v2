from starlette.testclient import TestClient


def test_health(monkeypatch):
    monkeypatch.setenv("DATABASE_URL", "postgresql+psycopg://127.0.0.1:1/kiro_test")

    from kiro.main import app

    client = TestClient(app)

    r = client.get("/health")

    assert r.status_code == 200
    assert r.json() == {"status": "OK"}
