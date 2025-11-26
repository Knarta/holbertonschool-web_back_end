#!/usr/bin/env python3
"""Flask app demonstrating Babel translations with gettext."""

from flask import Flask, render_template, request
from flask_babel import Babel, gettext as babel_gettext, get_locale as babel_get_locale


class Config:
    """Application configuration for Babel."""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel()


def get_locale():
    """Return the best matching locale based on the request headers."""
    return request.accept_languages.best_match(app.config["LANGUAGES"])


babel.init_app(app, locale_selector=get_locale)


def gettext(message_id: str) -> str:
    """Return the localized string for the given message identifier."""
    return babel_gettext(message_id)


@app.route("/", strict_slashes=False)
def index():
    """Render localized landing page."""
    return render_template(
        "3-index.html",
        locale=babel_get_locale(),
        gettext=gettext,
    )


if __name__ == "__main__":
    app.run()
