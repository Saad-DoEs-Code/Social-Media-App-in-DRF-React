from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserProfileSerializer
from .models import UserModel
# Create your views here.

@api_view(["get"])
def get_user_profile(request, pk):
    try:
        try:
            user = UserModel.objects.get(pk=pk)
        except:
            return Response({"error": "User not found"}, status=404)
        
        serializer = UserProfileSerializer(user, many = False)
        return Response(serializer.data)
    except:
        return Response({"error": "Something went wrong"}, status=500)
