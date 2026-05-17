from django.shortcuts import render
#STARTING OUR AUTHENTICATION WORK
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

    # We only want admins to be able to interface with the actual user model objects
    permission_classes = [permissions.IsAdminUser]

class UserAccountViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user accounts to be viewed or edited.
    """

    queryset = UserAccount.objects.all().order_by("-created_at")
    serializer_class = UserAccountSerializer

    # For user accounts, eventually we only want logged in admins or the users themselves to be able to access.
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
