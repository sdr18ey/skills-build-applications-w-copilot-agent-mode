from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        self.team = Team.objects.create(name='Test Team')
        self.user = User.objects.create(username='testuser', email='testuser@test.com', team=self.team)

    def test_user_creation(self):
        self.assertEqual(self.user.email, 'testuser@test.com')
        self.assertEqual(self.user.team.name, 'Test Team')

    def test_activity_creation(self):
        activity = Activity.objects.create(user=self.user, type='Running', duration=30)
        self.assertEqual(activity.type, 'Running')

    def test_workout_creation(self):
        workout = Workout.objects.create(user=self.user, description='Test Workout', difficulty='Easy')
        self.assertEqual(workout.difficulty, 'Easy')

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(user=self.user, points=50)
        self.assertEqual(leaderboard.points, 50)
