from django.contrib import admin
from .models import User, Project, Proposal

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id','username', 'email', 'is_freelancer', 'is_client']
    search_fields = ['username', 'email']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['id','title', 'client', 'budget','department']
    search_fields = ['title', 'client__username','department','approval']
    list_filter = ['budget','department']

@admin.register(Proposal)
class ProposalAdmin(admin.ModelAdmin):
    list_display = ['id','project', 'freelancer','client', 'bid_amount','approval']
    search_fields = ['project__title', 'freelancer__username','client__username']
    list_filter = ['bid_amount']
