from .auth import auth_bp

def create_api(app):
    # /api/login
    app.register_blueprint(auth_bp, url_prefix='/api')