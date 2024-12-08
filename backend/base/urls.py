from django.urls import path
from django.conf.urls import static
from django.conf import settings

from .views import get_user_profile
urlpatterns = [
    path('user_data/<str:pk>/', get_user_profile)
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)