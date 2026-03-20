from django.db import models
from user.models import User

class OrganizationType(models.TextChoices):
    """ Enum to represent different types of organizations. This will be used to determine what features an organization has access to. """
    NON_PROFIT = "NON_PROFIT", "Non-Profit"
    COMMUNITY_GROUP = "COMMUNITY_GROUP", "Community Group"
    BUSINESS = "BUSINESS", "Farm"

# Create your models here.
class Organization(models.Model):
    """ Model to represent an organization. This will be used to group users together and allow for shared features. """
    name = models.CharField(max_length=350)
    zip_code = models.CharField("zip code", max_length=10, default='00000') 
    address = models.CharField(max_length=800, blank=True, null=True)
    city = models.CharField(max_length=200, blank=True, null=True) #Might want to rethink how we do geographic storage.
    state = models.CharField(max_length=200, blank=True, null=True) #Might want to rethink how we do geographic storage.
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    logo = models.ImageField(upload_to='logos/', blank=True, null=True) 
    cover_image = models.ImageField(upload_to='cover_images/', blank=True, null=True) 
    organization_type = models.CharField(max_length=20, choices=OrganizationType.choices, default=OrganizationType.BUSINESS)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="owned_organizations", default=1) # This is the user that owns the organization. They will have admin access to the organization and can manage it. We will set a default for now to avoid issues with creating organizations without an owner, but we will need to update this later to require an owner.
    members = models.ManyToManyField(User, related_name="organizations", blank=True, null=True) # These are the users that are part of the organization. This can include owners as well, but also other users that are not admins.

    def __str__(self):
        return self.name
