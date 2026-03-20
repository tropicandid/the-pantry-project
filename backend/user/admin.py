from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, UserAccount
from organization.models import Organization

# Register models.
admin.site.register(User)
admin.site.register(UserAccount)

# Register admin dashboard label customizations.
admin.site.site_header = "The Pantry Project Admin"
admin.site.site_title = "The Pantry Project Admin Portal"

# # Customize the admin dashboard to show the organizations a user is an owner of. 
# class OrganizationOwnerInline(admin.TabularInline):
#     model = Organization.owner.through
#     extra = 1

# admin.site.unregister(User)

# @admin.register(User)
# class CustomUserAdmin(UserAdmin):
#     inlines = [OrganizationOwnerInline]
