"""create example items

Revision ID: 803be51228ab
Revises:
Create Date: 2026-11-23 18:28:08.064626

"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "803be51228ab"
down_revision: str | Sequence[str] | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        "example_items",
        sa.Column("id", sa.Integer, primary_key=True),
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table("example_items")
