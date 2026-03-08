from django.contrib import admin
from .models import User, UserAccount 

# Register models.
admin.site.register(User)
admin.site.register(UserAccount)

# Register admin dashboard customizations.
admin.site.site_header = "The Pantry Project Admin"
admin.site.site_title = "The Pantry Project Admin Portal"

