from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()

    def __str__(self):
        return  self.name


class Student (models.Model):
    id = models.AutoField(primary_key=True, null=False)
    username =  models.CharField(max_length=120)
    group = models.ForeignKey(Group,on_delete=models.SET_NULL,null=True, related_name='students')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

    # @property
    # def group_name(self):
    #     return self.group.name
