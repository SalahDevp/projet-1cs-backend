from .models import User


def get_picture(backend, user, response, is_new=False, *args, **kwargs):
    url = None

    if backend.name == 'google-oauth2':
        url = response['picture']
    if url:
        user.picture = url
        user.save()
