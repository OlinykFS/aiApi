# Generated by Django 5.0.7 on 2024-07-26 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parserapp', '0003_post'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='processed',
            field=models.BooleanField(default=False),
        ),
    ]
