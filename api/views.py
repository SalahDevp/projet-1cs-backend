from .serializers import *
from .models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.db.models import Q


def check_authorized(user, nomWilaya):
    wilaya_exists = user.wilayas.filter(nom=nomWilaya).exists()
    if not nomWilaya:
        wilaya_exists = True
    return user.is_superuser or user.is_local_admin and wilaya_exists


@api_view(["GET", "POST"])
# @permission_classes([IsAuthenticated])
def point_interet_all(request):
    try:
        if request.method == "GET":
            filters = {
                "search": request.query_params.get("search"),
                "categorie": request.query_params.get("categorie"),
                "wilaya": request.query_params.get("wilaya"),
                "theme": request.query_params.get("theme"),
            }
            # apply filters
            filtered_query = PointInteret.objects
            query = Q()  # for text search
            if filters["search"]:
                # NOTE: search query is sent in the form "word1+word2+word3" but docoded automatically by django
                words = filters["search"].split(" ")
                for word in words:
                    query |= Q(nom__icontains=word)

                filtered_query = filtered_query.filter(query)
            if filters["categorie"]:
                filtered_query = filtered_query.filter(
                    categorie__iexact=filters["categorie"]
                )
            if filters["theme"]:
                filtered_query = filtered_query.filter(theme__iexact=filters["theme"])
            if filters["wilaya"]:
                filtered_query = filtered_query.filter(wilaya__iexact=filters["wilaya"])
            serializedPoints = PointInteretSerializer_All(
                instance=filtered_query, many=True
            )

            return Response(serializedPoints.data)

        elif request.method == "POST":
            # PERMISSIONS:
            if not check_authorized(request.user, request.data["wilaya"]["nom"]):
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            serializer = PointInteretSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        print(e)
        Response("erreur!", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET", "PUT", "DELETE"])
# @permission_classes([IsAuthenticated])
def point_interet(request, pk=None):
    try:
        point_interet = PointInteret.objects.get(pk=pk)
    except PointInteret.DoesNotExist:
        return Response(
            {"error": "PointInteret not found."}, status=status.HTTP_404_NOT_FOUND
        )

    if request.method == "GET":
        serializer = PointInteretSerializer(point_interet)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # TODO: Check permission
    elif request.method == "PUT":
        # PERMISSIONS:
        if not check_authorized(request.user, request.data["wilaya"]["nom"]):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = PointInteretSerializer(point_interet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        # PERMISSIONS:
        if not check_authorized(request.user):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        point_interet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_commentaire(request, pi_id):
    try:
        # data: {commentaire:"content"}
        data = request.data.copy()
        # TODO: change user id
        data["user"] = request.user.id
        data["point_interet"] = pi_id

        serializer = CommentaireSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise Exception(serializer.errors)
    except Exception as e:
        print(e)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_commentaire(request, id):
    try:
        commentaire = Commentaire.objects.get(pk=id)
        # PERMISSIONS:
        if not check_authorized(request.user) or commentaire.user.id != request.user.id:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        commentaire.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        print(e)
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_evenement(request, pi_id):
    try:
        # PERMISSIONS:
        if not check_authorized(request.user):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        data = request.data.copy()
        data["point_interet"] = pi_id

        serializer = EvenementSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise Exception(serializer.errors)
    except Exception as e:
        print(e)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_evenement(request, id):
    try:
        evenement = Evenement.objects.get(pk=id)
        # PERMISSIONS:
        if not check_authorized(request.user):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        evenement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        print(e)
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def image_id(request, id):
    try:
        point_interet = PointInteret.objects.get(id=id)
        serializer = PhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(point_interet=point_interet)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    except PointInteret.DoesNotExist:
        return Response(
            "point interet does not exist!", status=status.HTTP_404_NOT_FOUND
        )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user(request):
    try:
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    except User.DoesNotExist:
        return Response("user does not exist!", status=status.HTTP_404_NOT_FOUND)
