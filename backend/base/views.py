from rest_framework.response import Response
from .serializers import UserProfileSerializer
from rest_framework.decorators import api_view
from .models import User

# Create your views here.
@api_view(['GET'])
def get_user_profile(req, pk):
    
    try:
        try:
                user = User.objects.get(username=pk)
        except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=404)
            
        instance = UserProfileSerializer(user, many = False)
        return Response(instance.data) # JSON Format of User Model Data
    except:
        return Response({"error":"Something Went Wrong"})