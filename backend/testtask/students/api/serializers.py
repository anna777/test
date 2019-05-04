from rest_framework import routers, serializers, viewsets
from ..models import Student,Group

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id', 'username', 'group', 'created_at')

    def to_representation(self, instance):
       #self.fields['group'] = GroupSerializer(read_only=True)
        self.fields['group'] = serializers.ReadOnlyField(source='group.name')
        return super().to_representation(instance)

class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ('id', 'name', 'description')

