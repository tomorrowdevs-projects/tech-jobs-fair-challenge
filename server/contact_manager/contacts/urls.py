from django.urls import path
from .views import CompanyListCreateAPIView, CompanyRetrieveUpdateDestroyAPIView, \
                   ContactListAPIView, ContactRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('companies/', CompanyListCreateAPIView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyRetrieveUpdateDestroyAPIView.as_view(), name='company-detail'),
    path('contacts/', ContactListAPIView.as_view(), name='contact-list'),
    path('contacts/<int:pk>/', ContactRetrieveUpdateDestroyAPIView.as_view(), name='contact-detail'),
]
