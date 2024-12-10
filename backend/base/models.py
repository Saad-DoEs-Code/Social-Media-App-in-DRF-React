from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):

    username = models.CharField(max_length=50,unique=True, primary_key=True)
    profile_picture = models.ImageField(upload_to="profile_pictures/",blank=True, null=True)
    followers = models.ManyToManyField('self', symmetrical=False, related_name='following', blank=True)
    bio = models.CharField(max_length=250)

    def __str__(self):
        return self.username