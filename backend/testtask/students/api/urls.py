from django.urls import path

from .view import students_list, student_detail, groups_list, group_detail

urlpatterns = [
    path('students/', students_list),
    path('student/<pk>', student_detail),
    path('groups/', groups_list),
    path('group/<pk>', group_detail),

]