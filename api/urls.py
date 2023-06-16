from django.urls import path, include
from . import views

urlpatterns = [
    # auth
    path("login/", include("rest_social_auth.urls_token")),
    path("point-interet", views.point_interet_all),
    path("point-interet/<int:pk>", views.point_interet),
    path("add-commentaire/<int:pi_id>", views.add_commentaire),
    path("delete-commentaire/<int:id>", views.delete_commentaire),
    path("add-evenement/<int:pi_id>", views.add_evenement),
    path("delete-evenement/<int:id>", views.delete_evenement),
]
"""
    path("image/<int:id>", views.image_id),
    path('users/<int:id>', views.users_id),"""
