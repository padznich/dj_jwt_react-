from django.urls import path, include

from .user import urls as user_urls
from .show import urls as shpw_urls


urlpatterns = [
    path('user/', include(user_urls)),
    path('show/', include(shpw_urls)),
]
