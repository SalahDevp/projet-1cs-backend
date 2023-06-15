from rest_framework import serializers
from django.utils import timezone
from .models import *
from datetime import datetime


class UserSerializer(serializers.ModelSerializer):
    # NOTE: we didn't serialize 'favoris' to avoid infinite serialization   (favoris has AIs and AI has user and user has favoris .....)

    class Meta:
        model = User
        fields = ["id", "nom", "email", "adresse", "telephone", "picture"]
        read_only_fields = ["email", "picture"]


class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = "__all__"


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = "__all__"


class HoraireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horaire
        fields = "__all__"


class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = "__all__"


class CommentaireSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Commentaire
        fields = "__all__"


class EvenementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evenement
        fields = "__all__"


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"


class PointInteretSerializer(serializers.ModelSerializer):
    categorie = CategorieSerializer()
    horaires = HoraireSerializer(many=True)
    theme = ThemeSerializer(many=True)
    transport = TransportSerializer(many=True)
    photos = PhotoSerializer(many=True)
    evenements = EvenementSerializer(many=True)

    class Meta:
        model = PointInteret
        fields = "__all__"


class PointInteretSerializer_All(serializers.ModelSerializer):
    class Meta:
        model = PointInteret
        fields = ["id", "nom", "adresse", "latitude", "longitude"]
