# Generated by Django 5.1 on 2024-09-14 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_proposal_client_alter_proposal_freelancer'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='department',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]