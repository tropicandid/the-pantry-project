from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager

class User(AbstractUser):
    """ User implementation to authenticate with email instead of username """
    email = models.EmailField(("email address"), unique=True) 
    username = models.CharField(max_length=200, blank=True, default='')

    REQUIRED_FIELDS = []
    USERNAME_FIELD = "email" 

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    
class AccountTier(models.TextChoices):
    """ Enum to represent different account tiers. This will be used to determine what features a user has access to. """
    FREE = "FREE", "Free"
    PREMIUM = "PREMIUM", "Premium"
    ENTERPRISE = "ORGANIZATION", "Organization"

class UserAccount(models.Model):
    """ Model to store user account information, such as subscription tier. We want to keep this decoupled from the User model to allow for more flexibility in the future. """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    account_tier = models.CharField(max_length=20, choices=AccountTier.choices, default=AccountTier.FREE)
    created_at = models.DateTimeField(auto_now_add=True)
    zip_code = models.CharField("zip code", max_length=10, default='00000') # This will be stored to curate what is best in people's areas.
    local_radius = models.IntegerField(default=50)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True) # Update this later to use a randomized graphicon.
  
    def __str__(self):
        return f"{self.user.email}'s Account"
        