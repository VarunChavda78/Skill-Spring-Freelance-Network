from api.models import User, Proposal, Project
from rest_framework import views
from api import serializers
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from api.serializers import *
from rest_framework.permissions import IsAuthenticated
from api.custom_permission import *
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    # Add custom claims to the access token
    refresh['is_freelancer'] = user.is_freelancer
    refresh['is_client'] = user.is_client
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserLogin(views.APIView):
    def post(self, request, format=None):
        serializer = UserloginSerializer(data=request.data)
        print("serializer", serializer)
        if serializer.is_valid(raise_exception=True):
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token':token,'data':'Login success'}, status=status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['username or password not a valid']}},
                status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# class Userprofile(views.APIView):
#     permission_classes = [IsAuthenticated]
#     authentication_classes = [JWTAuthentication]
#     def get(self, request, format=None):
#         ser = UserProfileSerializer(request.user)
#         return Response(ser.data, status=status.HTTP_200_OK)


class UserRegister(views.APIView):
    def post(self, request, format=None):
        serializer = UserregisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response({'Data':'User Registred'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class ProjectAPIView(views.APIView):

    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.validated_data['client'] = request.user
            instance = serializer.save()
            return Response({'data': f"'{instance.title}' project created successfully"}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None, format=None):
        if id is not None:
            query = Project.objects.filter(id=id)
            serializer = ProjectSerializer(query, many=True)
            return Response({'data':serializer.data}, status=status.HTTP_200_OK)
        query = Project.objects.all()
        serializer = ProjectSerializer(query, many=True)
        return Response({'data':serializer.data}, status=status.HTTP_200_OK)

from django.core.mail import send_mail

class ProposalAPIView(views.APIView):
    permission_classes = [IsAuthenticated]  
    authentication_classes = [JWTAuthentication]

    # def post(self, request):
    #     serializer = CreateProposalSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
    #         print("----",serializer,"----")
    #         serializer.validated_data['freelancer'] = request.user

    #         x = serializer.validated_data['project']
    #         serializer.validated_data['client']=x.client
    #         print("This Is X--->>>",x)
    #         serializer.save()
    #         return Response({'data': "Proposal sent successfully,"}, status=status.HTTP_201_CREATED)
    #     return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        serializer = CreateProposalSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print("----",serializer,"----")
            serializer.validated_data['freelancer'] = request.user
            project = serializer.validated_data['project']
            client = project.client
            client_email = client.email 
            proposal=serializer.save(client=client)

            subject = f'New Proposal for Your Project "{project.title}" on Skill Spring Freelance'
            message = f'''
            Hello {client.username},

            We hope you're doing well!

            We’re excited to inform you that a new freelancer has applied for your project, "{project.title}" on Skill Spring Freelance. Below are the details of the freelancer and their proposal:

            Proposal Overview:
            Message from Freelancer:
            "{proposal.description}"

            You can review the full proposal and decide how you would like to proceed by logging into your account. Visit the link below to view the proposal and communicate directly with the freelancer:

            If you have any questions or need assistance, feel free to reach out to our support team.

            Best regards,
            The Skill Spring Freelance Team
            '''

            email_from = settings.EMAIL_HOST_USER
            recipient_list = [client_email]

            try:
                send_mail(subject, message, email_from, recipient_list)
                print(f"Email sent successfully to {client_email}")
            except Exception as e:
                print(f"Error sending email: {e}")




            return Response({'data': "Proposal sent successfully,"}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None, format=None):
        if id is not None:
            query = Proposal.objects.filter(id=id)
            serializer = ProposalSerializer(query, many=True)
            return Response({'data':serializer.data}, status=status.HTTP_200_OK)
        # query = Proposal.objects.filter(freelancer=request.user)
        query = Proposal.objects.all()
        serializer = ProposalSerializer(query, many=True)
        return Response({'data':serializer.data}, status=status.HTTP_200_OK)

    def put(self, request, id=None):
        try:
            proposal = Proposal.objects.get(id=id)  # Get the specific proposal by ID
        except Proposal.DoesNotExist:
            return Response({"error": "Proposal not found."}, status=status.HTTP_404_NOT_FOUND)

        approval_status = request.data.get('approval')
        if approval_status is not None:
            proposal.approval = approval_status
            proposal.save()  # Save the updated proposal

            if proposal.approval:
                freelancer_email = proposal.freelancer.email
                project_title = proposal.project.title
                client_name = proposal.project.client.username
                freelancer_name = proposal.freelancer.username
                client_name = proposal.project.client.username


                subject = f'Your Proposal for Project "{project_title}" Has Been Approved on Skill Spring Freelance'
                message = f'''
                Hello {freelancer_name},

                Great news!

                Your proposal for the project "{project_title}" has been approved by the client. Congratulations! Below are the project details:

                Project Title: {project_title}
                Client: {client_name}

                You can now communicate directly with the client and start working on the project. Please ensure you keep track of the project milestones and deadlines.

                If you have any questions or need assistance, feel free to reach out to our support team.

                Best regards,
                The Skill Spring Freelance Team
                '''

                email_from = settings.EMAIL_HOST_USER
                recipient_list = [freelancer_email]

                try:
                    send_mail(subject, message, email_from, recipient_list)
                    print(f"Email sent successfully to {freelancer_email}")
                except Exception as e:
                    print(f"Error sending email: {e}")



                # send_mail(
                #     subject='Your Proposal has been Approved!',
                #     message=f'Hello {proposal.freelancer.username},\n\nYour proposal for the project "{project_title}" by {client_name} has been approved.\n\nBest regards,\nYour Freelance Platform',
                #     from_email=settings.DEFAULT_FROM_EMAIL,  # Default email in Django settings
                #     recipient_list=[freelancer_email],
                #     fail_silently=False,
                # )
            return Response({'message': 'Approval status updated successfully.'}, status=status.HTTP_200_OK)
        return Response({"error": "Approval status not provided."}, status=status.HTTP_400_BAD_REQUEST)



class UserChangePassword(views.APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    def post(self, request, format=None):
        ser = ChangePassword(data=request.data, context = {'user':request.user})
        if ser.is_valid(raise_exception=True):
            return Response({'data':'Password Changed Successfully'}, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UserViewSet(views.APIView):
    def get(self, request, id=None, format=None):
        if id is not None:
            queryset=User.objects.filter(id=id)
            serializer_class=UserSerializer(queryset,many=True)
            return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
        queryset = User.objects.all()
        serializer_class = UserSerializer(queryset,many=True)
        return Response({'data':serializer_class.data},status=status.HTTP_200_OK)