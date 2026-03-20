from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import User, UserAccount, AccountTier
from .serializer import UserSerializer, UserAccountSerializer    

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserAccountViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user accounts to be viewed or edited.
    """

    queryset = UserAccount.objects.all().order_by("-created_at")
    serializer_class = UserAccountSerializer
    permission_classes = [permissions.IsAuthenticated]
