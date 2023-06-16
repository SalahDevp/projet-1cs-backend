from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
from django.core.exceptions import ValidationError


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **other_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **other_fields):
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)
        return self.create_user(email, password, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):
    nom = models.CharField(max_length=100, blank=True)
    email = models.EmailField(unique=True)
    picture = models.CharField(max_length=200, blank=True, null=True)

    # if the user can login -false only if user is created by web scraping-
    is_active = models.BooleanField(default=True)
    # if user can access admin site
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    objects = UserManager()


class Categorie(models.Model):
    CATEGORIE_CHOIX = [
        ("musé", "musé"),
        ("plage", "plage"),
        ("forét", "forét"),
        ("ville", "ville"),
        ("montagne", "montagne"),
        ("campagne", "campagne"),
        ("lac", "lac"),
        ("rivière", "rivière"),
        ("désert", "désert"),
        ("grotte", "grotte"),
        ("falaise", "falaise"),
        ("chute d'eau", "chute d'eau"),
    ]
    nom = models.CharField(max_length=50, choices=CATEGORIE_CHOIX, primary_key=True)

    def __str__(self):
        return self.nom


class Theme(models.Model):
    nom = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return self.nom


class Transport(models.Model):
    transport_CHOIX = [
        ("Car", "Car"),
        ("Train", "Train"),
        ("Bus", "Bus"),
        ("Metro", "Metro"),
        ("Trame", "Trame"),
        ("CableCar", "CableCar"),
    ]
    nom = models.CharField(max_length=50, choices=transport_CHOIX, primary_key=True)

    def __str__(self):
        return self.nom


class PointInteret(models.Model):
    nom = models.CharField(max_length=50)
    description = models.CharField(max_length=200, blank=True)
    wilaya = models.CharField(max_length=50)
    adresse = models.CharField(max_length=50)
    latitude = models.FloatField()
    longitude = models.FloatField()
    categorie = models.ForeignKey(
        Categorie, related_name="points_interets", on_delete=models.CASCADE
    )
    theme = models.ManyToManyField(Theme, related_name="points_interets")
    transport = models.ManyToManyField(
        Transport, related_name="points_interets", blank=True
    )
    heur_ouverture = models.TimeField(auto_now=False, auto_now_add=False)
    heur_fermeture = models.TimeField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.nom


class Photo(models.Model):
    point_interet = models.ForeignKey(
        PointInteret, on_delete=models.CASCADE, related_name="photos", null=True
    )
    photo = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.point_interet.nom


class Commentaire(models.Model):
    commentaire = models.CharField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="commentairs")
    point_interet = models.ForeignKey(
        PointInteret, on_delete=models.CASCADE, related_name="commentaires"
    )
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.nom + " : " + self.commentaire


class Evenement(models.Model):
    nom = models.CharField(max_length=50)
    date_debut = models.DateTimeField(auto_now=False, auto_now_add=False)
    date_fin = models.DateTimeField(auto_now=False, auto_now_add=False)
    description = models.CharField(max_length=200)
    point_interet = models.ForeignKey(
        PointInteret, on_delete=models.CASCADE, related_name="evenements"
    )

    def __str__(self):
        return self.nom

    def clean(self):
        if self.date_debut > self.date_fin:
            raise ValidationError(
                "La date de début doit être inférieure à la date de fin."
            )
