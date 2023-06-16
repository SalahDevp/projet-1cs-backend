from rest_framework import serializers
from django.utils import timezone
from .models import *
from datetime import datetime


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "nom", "email", "picture"]
        read_only_fields = ["email", "picture"]


class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = "__all__"


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = "__all__"


class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = "__all__"


class EvenementSerializer(serializers.ModelSerializer):
    class PIField(serializers.RelatedField):
        def to_representation(self, value):
            # model to json
            return value.id

        def to_internal_value(self, data):
            # json to model
            return PointInteret.objects.get(pk=data)

    point_interet = PIField(queryset=PointInteret.objects.all())

    class Meta:
        model = Evenement
        fields = "__all__"


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"


class PointInteretSerializer(serializers.ModelSerializer):
    class CategorieField(serializers.RelatedField):
        def to_representation(self, value):
            # model to json
            return CategorieSerializer(value).data

        def to_internal_value(self, data):
            # json to model
            try:
                return Categorie.objects.get(pk=data["nom"])
            except Categorie.DoesNotExist:
                return Categorie.objects.create(pk=data["nom"])

    class ThemeField(serializers.RelatedField):
        def to_representation(self, value):
            # model to json
            return ThemeSerializer(value, many=True).data

        def to_internal_value(self, data):
            # json to model
            result = []
            for theme in data:
                try:
                    result.append(Theme.objects.get(pk=theme["nom"]))
                except Theme.DoesNotExist:
                    result.append(Theme.objects.create(pk=theme["nom"]))

            return result

    class TransportField(serializers.RelatedField):
        def to_representation(self, value):
            # model to json
            return TransportSerializer(value, many=True).data

        def to_internal_value(self, data):
            # json to model
            result = []
            for transport in data:
                try:
                    result.append(Transport.objects.get(pk=transport["nom"]))
                except Transport.DoesNotExist:
                    result.append(Transport.objects.create(pk=transport["nom"]))

            return result

    categorie = CategorieField(queryset=User.objects.all())
    theme = ThemeField(queryset=User.objects.all())
    transport = TransportField(queryset=User.objects.all())
    photos = PhotoSerializer(many=True, read_only=True)
    evenements = EvenementSerializer(many=True, read_only=True)
    commentaires = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PointInteret
        fields = "__all__"

    def get_commentaires(self, obj):
        commentaires = Commentaire.objects.filter(point_interet=obj)
        serializer = CommentaireSerializer(commentaires, many=True)
        return serializer.data


class PointInteretSerializer_All(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True)
    categorie = CategorieSerializer()

    class Meta:
        model = PointInteret
        fields = ["id", "nom", "photos", "categorie", "latitude", "longitude"]


class CommentaireSerializer(serializers.ModelSerializer):
    class UserField(serializers.RelatedField):
        def to_representation(self, value):
            # model to json
            return UserSerializer(value).data

        def to_internal_value(self, data):
            # json to model
            return User.objects.get(pk=data)

    class PIField(serializers.RelatedField):
        def to_representation(self, value):
            # model to json
            return value.id

        def to_internal_value(self, data):
            # json to model
            return PointInteret.objects.get(pk=data)

    user = UserField(queryset=User.objects.all())
    point_interet = PIField(queryset=PointInteret.objects.all())

    class Meta:
        model = Commentaire
        fields = "__all__"
