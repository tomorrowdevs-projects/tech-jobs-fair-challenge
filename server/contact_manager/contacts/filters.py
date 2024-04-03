from django.db.models import Q
from rest_framework import filters

class ContactFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        name_query = request.query_params.get('name')
        company_query = request.query_params.get('company')

        if name_query:
            queryset = queryset.filter(name__icontains=name_query)
        if company_query:
            queryset = queryset.filter(company__name=company_query)

        return queryset
