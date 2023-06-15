from .serializers import *
from .models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status


@api_view(["GET", "POST"])
# @permission_classes([IsAuthenticated])
def point_interet_all(request):
    if request.method == "GET":
        try:
            # gives all the intrest points inside a range of coords
            # query params: lat1, long1, lat2, long2
            lat1 = float(request.query_params.get("lat1", 0.0))
            long1 = float(request.query_params.get("long1", 0.0))
            lat2 = float(request.query_params.get("lat2", 100.0))
            long2 = float(request.query_params.get("long2", 100.0))

            points = PointInteret.objects.filter(
                latitude__range=(lat1, lat2), longitude__range=(long1, long2)
            )
            serializedPoints = PointInteretSerializer_All(
                data=points.values(), many=True
            )
            if serializedPoints.is_valid():
                return Response(serializedPoints.data)
            else:
                print(serializedPoints.errors)
                return Response("bad request!", status=status.HTTP_400_BAD_REQUEST)
        except PointInteret.DoesNotExist:
            return Response(
                "no intrest point in provided range!",
                status=status.HTTP_404_NOT_FOUND,
            )
        except Exception as e:
            print(e)
            Response("erreur!", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET", "POST"])
def point_interet(request, pk=None):
    if request.method == "GET":
        try:
            point_interet = PointInteret.objects.get(pk=pk)
            serializer = PointInteretSerializer(point_interet)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except PointInteret.DoesNotExist:
            return Response(
                {"error": "PointInteret not found."}, status=status.HTTP_404_NOT_FOUND
            )

    elif request.method == "POST":
        serializer = PointInteretSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
