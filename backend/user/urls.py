from django.urls import include, path
from rest_framework import routers
from . import views

app_name="user"
router = routers.DefaultRouter()
router.register(r'useraccount', views.UserAccountViewSet, basename='useraccount')
router.register(r'', views.UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]