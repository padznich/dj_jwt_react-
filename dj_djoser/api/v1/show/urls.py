from django.urls import path
from . import views


urlpatterns = [
    path('', views.Show.as_view(), name='show'),
]
