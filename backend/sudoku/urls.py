from django.urls import path
from . import views

urlpatterns = [
    path('puzzle/', views.puzzle, name='puzzle'),
]
