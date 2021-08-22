from rest_framework import status, serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema


class ShowSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class Show(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get_serializer_class(self):
        return ShowSerializer(many=True)

    @extend_schema()
    def get(self, *args, **kwargs):
        data = [
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
        ]
        s = ShowSerializer(data=data, many=True)
        s.is_valid()
        return Response(s.validated_data, status=status.HTTP_200_OK)
