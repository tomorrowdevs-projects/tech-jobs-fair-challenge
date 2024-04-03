from rest_framework import generics
from .models import Company, Contact
from .serializers import CompanySerializer, ContactSerializer
from .filters import ContactFilterBackend


class CompanyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class ContactListAPIView(generics.ListAPIView):
    queryset = Contact.objects.all().select_related('company')
    serializer_class = ContactSerializer
    filter_backends = [ContactFilterBackend]

class ContactRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
