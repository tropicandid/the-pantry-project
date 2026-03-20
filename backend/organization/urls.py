from django.urls import include, path
from rest_framework import routers
from . import views

app_name="organization"
router = routers.DefaultRouter()
router.register(r'', views.OrganizationViewSet, basename='organization')

urlpatterns = [
    path('', include(router.urls)),
]