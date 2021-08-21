from django.urls import path, include

from .user import urls as user_urls


urlpatterns = [
    path('user/', include(user_urls)),
]
