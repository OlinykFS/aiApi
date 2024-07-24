# Generated by Django 5.0.7 on 2024-07-24 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewsLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(unique=True)),
                ('status', models.CharField(default='pending', max_length=20)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]