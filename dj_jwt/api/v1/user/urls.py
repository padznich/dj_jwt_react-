from django.urls import path
from . import views


urlpatterns = [
    path('login', views.DecoratedTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh-token', views.DecoratedTokenRefreshView.as_view(), name='token_refresh'),
    path('token-verify', views.DecoratedTokenVerifyView.as_view(), name='token_verify'),
]
