from django.urls import path, include
from . import views

urlpatterns = [
    # auth
    path("login/", include("rest_social_auth.urls_token")),
    path("point-interet", views.point_interet),
    path("point-interet/<int:pk>", views.point_interet),
]
"""
    path('image/<int:id>', views.image_id),
    path('users/<int:id>', views.users_id),"""
