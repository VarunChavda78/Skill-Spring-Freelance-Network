from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.ProjectAPIView.as_view(), name='project-create'),
    path('projects/<int:id>/', views.ProjectAPIView.as_view(), name='project-list'),
    path('login/',views.UserLogin.as_view(),  name='user-login'),
    path("sign-up/",views.UserRegister.as_view(),name="user-sign-up"),
    # path('projects/<int:pk>/', views.ProjectDetail.as_view(), name='project-detail'),
    path('proposals/', views.ProposalAPIView.as_view(), name='proposal-create'),
    path('proposals/<int:id>/', views.ProposalAPIView.as_view(), name='proposal-detail'),
    path('proposals/<int:id>/', views.ProposalAPIView.as_view(), name='proposal-updadte'),
    path('getuser/', views.UserViewSet.as_view(), name='get-user'),
    path('getuser/<int:id>/', views.UserViewSet.as_view(), name='get-user'),
]
