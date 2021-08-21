from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema


class Show(ListAPIView):
    permission_classes = (IsAuthenticated,)

    @extend_schema()
    def get(self, *args, **kwargs):
        return Response([
            {
              "id": 1,
              "name": "a",
            },
            {
              "id": 2,
              "name": "b",
            },
            {
              "id": 3,
              "name": "c",
            },
        ],
            status=status.HTTP_200_OK,
        )
