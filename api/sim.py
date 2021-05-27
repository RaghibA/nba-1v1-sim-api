import random
import time
from player import player
    
class Simulation:
    def __init__(self, player1, player2, scoreLimit):
        self.player1 = player1
        self.player2 = player2
        self.scoreLimit = scoreLimit
        self.outcomeQueue = [] # allows us to either iterate over the outcomes of 
                                # each POS, or just jump to the final result

    #! Shoot for ball
    def __shootForBall(self):
        # players take turn shooting threes to see who gets the first possession
        ballFirst = -1
        shot = False
        ct = 0

        while shot != True:
            # Player 1 shoots for ball - Three point percentage
            if ct == 6: # if it takes more than 6 shots, we can just give player 1 the ball
                self.player1.ball = True
                ballFirst = 1
                break
            if self.player1.ball == False:
                c = random.randrange(101)
                if c < self.player1.threePointPercentage * 100:
                    print(self.player1.name + ' made the shot')
                    self.outcomeQueue.append(self.player1.name + ' made the shot')
                    shot = True
                    self.player1.ball = True
                    ballFirst = 1
                else:
                    print(self.player1.name + ' shot and missed')
                    self.outcomeQueue.append(self.player1.name + ' shot and missed')
            time.sleep(1)
            # Player 2 shoots for ball - 1 point percentage
            if self.player1.ball == False:
                c = random.randrange(101)
                if c < self.player2.threePointPercentage * 100:
                    print(self.player2.name + ' made the shot')
                    self.outcomeQueue.append(self.player2.name + ' made the shot')
                    shot = True
                    self.player2.ball = True
                    ballFirst = 2
                else:
                    print(self.player2.name + ' shot and missed')
                    self.outcomeQueue.append(self.player2.name + ' shot and missed')
                time.sleep(1)
            
        if ballFirst is 1:
            print(self.player1.name + ' gets ball first')
            self.outcomeQueue.append(self.player1.name + ' gets ball first')
            self.player1.ball = True
        else:
            print(self.player2.name + ' gets ball first')
            self.outcomeQueue.append(self.player2.name + ' gets ball first')
            self.player2.ball = True

        if self.player1.ball != True:
            self.player1, self.player2 = self.player2, self.player1
        
    #! Simulate game
    def sim(self):
        p1Score = 0
        p2Score = 0
        player1threeAttempt = self.player1.threePointsMade/self.player1.fieldGoalsTaken
        player2threeAttempt = self.player2.threePointsMade/self.player2.fieldGoalsTaken
        
        #! Simulate Game
        while p1Score <= self.scoreLimit or p2Score <= self.scoreLimit:
            time.sleep(1)
            if self.player1.ball == True:
                c = random.randrange(101)
                if c < player1threeAttempt * 100:
                    print(self.player1.name + ' shot a 2-pointer')
                    p1Score += 2
                else:
                    print(self.player1.name + ' shot a 1-pointer')
                    p1Score += 1

            if self.player2.ball == True:
                c = random.randrange(101)
                if c < player2threeAttempt * 100:
                    print(self.player2.name + ' shot a 2-pointer')
                    p2Score += 2
                else:
                    print(self.player2.name + ' shot a 1-pointer')
                    p2Score += 1

            print(f'{self.player1.name}: {p1Score}')
            print(f'{self.player2.name}: {p2Score}')
            print()
            self.player1.ball, self.player2.ball = self.player2.ball, self.player1.ball

            if p1Score >= 11 or p2Score >= 11:
                break

    #! Play game
    def play(self):
        self.__shootForBall()
        self.sim()
