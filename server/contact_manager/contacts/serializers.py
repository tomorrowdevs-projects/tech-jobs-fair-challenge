from rest_framework import serializers
from .models import Company, Contact

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['name', 'email', 'website', 'phone', 'vat']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'surname', 'email', 'phone', 'company']
