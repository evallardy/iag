from django.db import models
from django.contrib.auth.models import AbstractUser
from .contantes import *

# Create your models here.

class Usuario(AbstractUser):  
    celular = models.CharField("Celular", max_length=30, blank=True, null=True)
    created = models.DateTimeField("Creado", auto_now_add=True)
    modified = models.DateTimeField("Actualizado", auto_now=True)
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        ordering = ['first_name', 'last_name', ]
        db_table = 'Usuario'

    def __str__(self):
        return '%s' % (self.username)