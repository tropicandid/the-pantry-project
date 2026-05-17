from rest_framework import serializers
from user.models import User
from user.serializer import UserSerializer
from .models import Organization

class OrganizationSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all()) # This will allow us to set the owner of the organization when we create or update an organization.
    owner_details = UserSerializer(source='owner', read_only=True) # This will allow us to get the details of the owner when we retrieve an organization, without needing to make a separate API call to get the user details.
   
    class Meta:
        model = Organization
        fields = ['id', 
                  'name', 
                  'zip_code', 
                  'address', 
                  'city', 
                  'state', 
                  'description', 
                  'owner', 
                  'owner_details', 
                  'organization_type', 
                  'created_at', 
                  'logo', 
                  'cover_image', 
                  'email', 
                  'phone_number', 
                  'website']