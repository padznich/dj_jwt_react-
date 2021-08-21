from django.urls import path
from . import views


urlpatterns = [
    path('obtain-token', views.DecoratedTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh-token', views.DecoratedTokenRefreshView.as_view(), name='token_refresh'),
    path('verify-token', views.DecoratedTokenVerifyView.as_view(), name='token_verify'),
]
