from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Organization
from .serializer import OrganizationSerializer

# Create your views here.
class OrganizationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows organizations to be viewed or edited.
    """

    queryset = Organization.objects.all().order_by("name")
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]
