from rest_framework import serializers
from organization.models import Organization
from .models import User, UserAccount, AccountTier

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']

class AccountTierSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountTier
        fields = ['id', 'name', 'description']

class OrganizationNestedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['id', 
                  'name', 
                  'zip_code', 
                  'address', 
                  'city', 
                  'state', 
                  'description', 
                  'organization_type', 
                  'created_at', 
                  'logo', 
                  'cover_image']
        
class UserAccountSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    # Nested organizations
    owned_organizations = OrganizationNestedSerializer(source='user.owned_organizations', many=True, read_only=True)
    member_organizations = OrganizationNestedSerializer(source='user.organizations', many=True, read_only=True)
    
    class Meta:
        model = UserAccount
        fields = ['id', 
                  'user', 
                  'account_tier', 
                  'created_at', 
                  'zip_code', 
                  'local_radius', 
                  'profile_image',
                  'owned_organizations',
                  'member_organizations',
            ]

