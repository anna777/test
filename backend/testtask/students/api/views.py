from rest_framework.generics import ListAPIView
from rest_framework import status
from .students.models import Students,Groups

from .serializers import StudentsSerializer

class StudentsListView(ListAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializer
