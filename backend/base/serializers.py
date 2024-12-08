from rest_framework import serializers
from models import UserModel

class UserProfileSerializer(serializers.ModelSerializer):

    follower_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    class Meta:
        model = UserModel
        fields = ['username', 'profile_image', 'bio', 'follower_count', 'following_count']

    def get_follower_count(self, obj):
        return obj.followers.count()
    def get_following_count(self, obj):
        return obj.following.count()